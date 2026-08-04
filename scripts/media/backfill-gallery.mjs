#!/usr/bin/env node

// Backfills responsive WebP variants for gallery photos that already live in R2.
//
// Reads each month's data file, pulls every photo's archival original from its public
// URL, generates the 1x/2x/3x WebP variants, uploads and SHA-256 verifies them, then
// rewrites the month file. The local import folders are never needed.
//
// Transactional per month: a month's data file is rewritten only after every one of
// its objects has been uploaded and verified. A failure in one month leaves earlier
// months finished and does not touch the failing month's data. Re-running skips
// objects already present in the bucket at the right size, so an interrupted run
// resumes cheaply.

import { createHash } from "node:crypto";
import { createReadStream } from "node:fs";
import { mkdtemp, mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createInterface } from "node:readline/promises";
import process from "node:process";
import {
  HeadObjectCommand,
  PutObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";
import dotenv from "dotenv";
import sharp from "sharp";

import {
  formatBytes,
  orientationOf,
  planVariants,
  replaceExistingFilenames,
  encodeVariant,
} from "./gallery-data.mjs";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const repositoryRoot = path.resolve(scriptDirectory, "../..");
const environmentPath = path.join(repositoryRoot, ".env.media.local");
const photosRoot = path.join(
  repositoryRoot,
  "src",
  "data",
  "gallery",
  "photos",
);

function printUsage() {
  console.log(`Usage:
  node scripts/media/backfill-gallery.mjs --all --dry-run
  node scripts/media/backfill-gallery.mjs --year 2026 --month 01

Options:
  --all          Process every month found under src/data/gallery/photos
  --year YYYY    Restrict to one year
  --month MM     Restrict to one month (requires --year)
  --dry-run      Download and generate, but upload nothing and write nothing
  --smallest     Process only the month with the fewest photos
  --concurrency  Photos processed at once (default 4)
  --mapping PATH Write a JSON mapping of every object produced
  --emit-data D  Write the rewritten month files under D instead of in place,
                 so a dry run's output can be inspected and typechecked
  --yes          Skip the confirmation prompt
  --help         Show this help`);
}

function parseArguments(argumentsList) {
  const options = { concurrency: 4, dryRun: false, yes: false };

  for (let index = 0; index < argumentsList.length; index += 1) {
    const argument = argumentsList[index];

    if (argument === "--all") {
      options.all = true;
    } else if (argument === "--dry-run") {
      options.dryRun = true;
    } else if (argument === "--smallest") {
      options.smallest = true;
    } else if (argument === "--yes") {
      options.yes = true;
    } else if (argument === "--help" || argument === "-h") {
      options.help = true;
    } else if (
      ["--year", "--month", "--concurrency", "--mapping", "--emit-data"].includes(
        argument,
      )
    ) {
      const value = argumentsList[index + 1];
      if (!value || value.startsWith("--")) {
        throw new Error(`${argument} requires a value.`);
      }
      const name = argument === "--emit-data" ? "emitData" : argument.slice(2);
      options[name] = argument === "--concurrency" ? Number(value) : value;
      index += 1;
    } else {
      throw new Error(`Unknown option: ${argument}`);
    }
  }

  if (!options.help && !options.all && !options.year && !options.smallest) {
    throw new Error("Provide --all, --smallest, or --year (with optional --month).");
  }
  if (options.month && !options.year) {
    throw new Error("--month requires --year.");
  }
  if (!Number.isInteger(options.concurrency) || options.concurrency < 1) {
    throw new Error("--concurrency must be a positive integer.");
  }

  return options;
}

function loadConfiguration({ requireCredentials }) {
  const result = dotenv.config({ path: environmentPath, quiet: true });
  if (result.error) {
    throw new Error(`Could not read ${environmentPath}.`);
  }

  const names = [
    "R2_ACCOUNT_ID",
    "R2_ACCESS_KEY_ID",
    "R2_SECRET_ACCESS_KEY",
    "R2_BUCKET",
    "R2_PUBLIC_BASE_URL",
  ];
  const required = requireCredentials ? names : ["R2_PUBLIC_BASE_URL"];
  const missing = required.filter((name) => !process.env[name]?.trim());

  if (missing.length > 0) {
    throw new Error(
      `Missing ${missing.join(", ")} in ${path.basename(environmentPath)}.`,
    );
  }

  const publicBaseUrl = process.env.R2_PUBLIC_BASE_URL.replace(/\/+$/, "");
  if (!publicBaseUrl.startsWith("https://")) {
    throw new Error("R2_PUBLIC_BASE_URL must use https://.");
  }

  return {
    accountId: process.env.R2_ACCOUNT_ID,
    accessKeyId: process.env.R2_ACCESS_KEY_ID,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
    bucket: process.env.R2_BUCKET,
    publicBaseUrl,
  };
}

async function findMonthFiles(options) {
  const years = (await readdir(photosRoot, { withFileTypes: true }))
    .filter((entry) => entry.isDirectory() && /^\d{4}$/.test(entry.name))
    .map((entry) => entry.name)
    .sort();

  const months = [];
  for (const year of years) {
    if (options.year && year !== options.year) continue;
    const files = (await readdir(path.join(photosRoot, year)))
      .filter((name) => /^\d{2}\.ts$/.test(name))
      .sort();
    for (const file of files) {
      const month = file.slice(0, 2);
      if (options.month && month !== options.month) continue;
      months.push({ year, month, filePath: path.join(photosRoot, year, file) });
    }
  }

  if (months.length === 0) {
    throw new Error("No matching month data files were found.");
  }

  return months;
}

// Each photo entry, in source-text order — the same order replaceExistingFilenames
// rewrites them. `originalSrc` is present only for months migrated by an earlier run,
// in which case `filename` already points at a 1x variant and must not be used as the
// source image.
const entryPattern =
  /filename:\s*"((?:\\.|[^"\\])*)"(?:\s*,\s*responsive:\s*\{[^{}]*originalSrc:\s*"((?:\\.|[^"\\])*)"[^{}]*\})?/g;

function readPhotoEntries(source) {
  return Array.from(source.matchAll(entryPattern)).map((match) => ({
    filename: match[1],
    originalSrc: match[2],
    sourceUrl: match[2] || match[1],
  }));
}

// Derives a variant key from the original's key, keeping the ordering prefix and slug
// while dropping the original's content hash and extension.
function variantKeyFor(originalUrl, publicBaseUrl, hash, width) {
  if (!originalUrl.startsWith(`${publicBaseUrl}/`)) {
    throw new Error(`Photo URL is not on the configured host: ${originalUrl}`);
  }
  const key = originalUrl.slice(publicBaseUrl.length + 1);
  const directory = path.posix.dirname(key);
  const stem = path.posix
    .basename(key, path.posix.extname(key))
    .replace(/-[0-9a-f]{10}$/, "");

  return `${directory}/${stem}-${hash.slice(0, 10)}-${width}w.webp`;
}

// Network hiccups are expected across ~1,800 objects, so every fetch gets a few
// attempts with backoff. Only the last failure surfaces.
async function withRetry(description, attempt, attempts = 4) {
  let lastError;
  for (let tryIndex = 1; tryIndex <= attempts; tryIndex += 1) {
    try {
      return await attempt();
    } catch (error) {
      lastError = error;
      if (tryIndex < attempts) {
        await new Promise((resolve) => setTimeout(resolve, 500 * 2 ** (tryIndex - 1)));
      }
    }
  }
  throw new Error(`${description} failed after ${attempts} attempts: ${lastError.message}`);
}

async function downloadOriginal(url) {
  return withRetry(`Download ${url}`, async () => {
    const response = await fetch(url, { redirect: "follow" });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    return Buffer.from(await response.arrayBuffer());
  });
}

async function buildPhoto(entry, configuration, temporaryDirectory, index) {
  const originalBytes = await downloadOriginal(entry.sourceUrl);
  const metadata = await sharp(originalBytes).metadata();
  // Post-rotation dimensions, so orientation and aspect ratio match what renders.
  const rotated = (metadata.orientation || 1) >= 5;
  const width = rotated ? metadata.height : metadata.width;
  const height = rotated ? metadata.width : metadata.height;
  const orientation = orientationOf(width, height);

  const plan = planVariants(orientation, width);
  const variants = [];

  for (const { density, width: targetWidth } of plan) {
    const buffer = await encodeVariant(
      sharp(originalBytes, { failOn: "warning" })
        .rotate()
        .resize({ width: targetWidth, withoutEnlargement: true }),
    ).toBuffer();

    const sha256 = createHash("sha256").update(buffer).digest("hex");
    const key = variantKeyFor(
      entry.sourceUrl,
      configuration.publicBaseUrl,
      sha256,
      targetWidth,
    );
    const temporaryPath = path.join(
      temporaryDirectory,
      `${String(index).padStart(5, "0")}-${density}x.webp`,
    );
    await writeFile(temporaryPath, buffer);

    variants.push({
      density,
      width: targetWidth,
      processedSize: buffer.length,
      contentType: "image/webp",
      sha256,
      temporaryPath,
      key,
      publicUrl: `${configuration.publicBaseUrl}/${key}`,
    });
  }

  return {
    sourceUrl: entry.sourceUrl,
    originalSize: originalBytes.length,
    width,
    height,
    orientation,
    clamped: plan.some((variant) => variant.clamped),
    // The archival original is already in R2; the backfill never re-uploads it.
    original: { publicUrl: entry.sourceUrl },
    variants,
  };
}

async function mapWithConcurrency(items, concurrency, operation) {
  const results = new Array(items.length);
  let nextIndex = 0;

  async function worker() {
    while (nextIndex < items.length) {
      const currentIndex = nextIndex;
      nextIndex += 1;
      results[currentIndex] = await operation(items[currentIndex], currentIndex);
    }
  }

  await Promise.all(
    Array.from({ length: Math.min(concurrency, items.length) }, () => worker()),
  );
  return results;
}

async function uploadObject(client, configuration, object) {
  try {
    const existing = await client.send(
      new HeadObjectCommand({ Bucket: configuration.bucket, Key: object.key }),
    );
    if (existing.ContentLength !== object.processedSize) {
      throw new Error(`Existing object has an unexpected size: ${object.key}`);
    }
    return "skipped";
  } catch (error) {
    const status = error?.$metadata?.httpStatusCode;
    const notFound =
      status === 404 || error?.name === "NotFound" || error?.name === "NoSuchKey";
    if (!notFound) throw error;
  }

  await client.send(
    new PutObjectCommand({
      Bucket: configuration.bucket,
      Key: object.key,
      Body: createReadStream(object.temporaryPath),
      ContentLength: object.processedSize,
      ContentType: object.contentType,
      CacheControl: "public, max-age=31536000, immutable",
    }),
  );

  return "uploaded";
}

async function verifyPublicObject(object) {
  const { response, body } = await withRetry(
    `Verify ${object.publicUrl}`,
    async () => {
      const result = await fetch(object.publicUrl, { redirect: "follow" });
      if (!result.ok) {
        throw new Error(`HTTP ${result.status}`);
      }
      return { response: result, body: Buffer.from(await result.arrayBuffer()) };
    },
  );

  const contentType = response.headers.get("content-type") || "";
  if (contentType !== object.contentType) {
    throw new Error(
      `Public URL returned ${contentType || "no content type"}, expected ` +
        `${object.contentType}: ${object.publicUrl}`,
    );
  }

  if (body.length !== object.processedSize) {
    throw new Error(
      `Public URL served ${body.length} bytes, expected ${object.processedSize}: ` +
        object.publicUrl,
    );
  }

  const served = createHash("sha256").update(body).digest("hex");
  if (served !== object.sha256) {
    throw new Error(
      `Public URL served unexpected bytes (sha256 mismatch): ${object.publicUrl}`,
    );
  }
}

async function confirm(options, summary) {
  if (options.yes) return;
  if (!process.stdin.isTTY) {
    throw new Error("Confirmation requires a terminal. Re-run with --yes.");
  }
  const prompt = createInterface({ input: process.stdin, output: process.stdout });
  const answer = await prompt.question(`\n${summary} Continue? [y/N] `);
  prompt.close();
  if (!["y", "yes"].includes(answer.trim().toLowerCase())) {
    throw new Error("Backfill cancelled.");
  }
}

async function main() {
  let temporaryDirectory;

  try {
    const options = parseArguments(process.argv.slice(2));
    if (options.help) {
      printUsage();
      return;
    }

    const configuration = loadConfiguration({
      requireCredentials: !options.dryRun,
    });
    let months = await findMonthFiles(options);

    // Load and count first so --smallest can pick, and so the totals are known before
    // anything is downloaded.
    for (const month of months) {
      month.source = await readFile(month.filePath, "utf8");
      month.entries = readPhotoEntries(month.source);
      month.migrated = month.entries.filter((entry) => entry.originalSrc).length;
    }

    if (options.smallest) {
      months = [
        months.reduce((smallest, month) =>
          month.entries.length < smallest.entries.length ? month : smallest,
        ),
      ];
    }

    const totalPhotos = months.reduce(
      (total, month) => total + month.entries.length,
      0,
    );
    console.log(
      `${months.length} month(s), ${totalPhotos} photos, ` +
        `${totalPhotos * 3} variant objects to produce.`,
    );
    for (const month of months) {
      console.log(
        `  ${month.year}/${month.month}: ${month.entries.length} photos` +
          (month.migrated > 0 ? ` (${month.migrated} already migrated)` : ""),
      );
    }

    if (!options.dryRun) {
      await confirm(
        options,
        `Will upload up to ${totalPhotos * 3} objects and rewrite ${months.length} data file(s).`,
      );
    }

    temporaryDirectory = await mkdtemp(path.join(tmpdir(), "doctakim-backfill-"));
    const client = options.dryRun
      ? null
      : new S3Client({
          region: "auto",
          endpoint: `https://${configuration.accountId}.r2.cloudflarestorage.com`,
          credentials: {
            accessKeyId: configuration.accessKeyId,
            secretAccessKey: configuration.secretAccessKey,
          },
        });

    const mapping = [];
    let grandOriginal = 0;
    let grandVariant = 0;
    let grandClamped = 0;

    for (const month of months) {
      const label = `${month.year}/${month.month}`;
      console.log(`\n${label}: processing ${month.entries.length} photos...`);

      const photos = await mapWithConcurrency(
        month.entries,
        options.concurrency,
        (entry, index) =>
          buildPhoto(entry, configuration, temporaryDirectory, index),
      );

      const objects = photos.flatMap((photo) => photo.variants);
      const originalBytes = photos.reduce((t, p) => t + p.originalSize, 0);
      const variantBytes = objects.reduce((t, o) => t + o.processedSize, 0);
      const clamped = photos.filter((photo) => photo.clamped).length;
      grandOriginal += originalBytes;
      grandVariant += variantBytes;
      grandClamped += clamped;

      console.log(
        `${label}: originals ${formatBytes(originalBytes)} -> variants ` +
          `${formatBytes(variantBytes)}` +
          (clamped > 0 ? `, ${clamped} clamped` : ""),
      );

      mapping.push({
        month: label,
        photos: photos.map((photo) => ({
          originalSrc: photo.original.publicUrl,
          width: photo.width,
          height: photo.height,
          orientation: photo.orientation,
          clamped: photo.clamped,
          variants: photo.variants.map((variant) => ({
            density: variant.density,
            width: variant.width,
            bytes: variant.processedSize,
            sha256: variant.sha256,
            publicUrl: variant.publicUrl,
          })),
        })),
      });

      // The rewritten data file is computed before any upload, so a rendering failure
      // cannot leave the month half-uploaded.
      const rendered = replaceExistingFilenames(month.source, photos);

      if (options.emitData) {
        const emitPath = path.resolve(options.emitData, month.year, `${month.month}.ts`);
        await mkdir(path.dirname(emitPath), { recursive: true });
        await writeFile(emitPath, rendered, "utf8");
        console.log(`${label}: rewritten data written to ${emitPath}`);
      }

      if (options.dryRun) {
        console.log(`${label}: dry run, nothing uploaded or written.`);
        continue;
      }

      const results = await mapWithConcurrency(objects, options.concurrency, (object) =>
        uploadObject(client, configuration, object),
      );
      const uploaded = results.filter((result) => result === "uploaded").length;
      console.log(
        `${label}: ${uploaded} uploaded, ${results.length - uploaded} already present.`,
      );

      await mapWithConcurrency(objects, options.concurrency, verifyPublicObject);
      console.log(`${label}: all ${objects.length} objects verified (sha256).`);

      // Every object for this month is confirmed byte-correct; only now is the data
      // file replaced.
      await writeFile(month.filePath, rendered, "utf8");
      console.log(`${label}: wrote ${path.relative(repositoryRoot, month.filePath)}`);
    }

    if (options.mapping) {
      const mappingPath = path.resolve(options.mapping);
      await mkdir(path.dirname(mappingPath), { recursive: true });
      await writeFile(mappingPath, JSON.stringify(mapping, null, 2), "utf8");
      console.log(`\nMapping written to ${mappingPath}`);
    }

    console.log(
      `\nTotals: ${formatBytes(grandOriginal)} of originals -> ` +
        `${formatBytes(grandVariant)} of variants` +
        (grandClamped > 0 ? `, ${grandClamped} photo(s) clamped` : ""),
    );
  } finally {
    if (temporaryDirectory) {
      await rm(temporaryDirectory, { recursive: true, force: true });
    }
  }
}

main().catch((error) => {
  console.error(`\nError: ${error.message}`);
  process.exitCode = 1;
});
