#!/usr/bin/env node

import { createHash } from "node:crypto";
import {
  copyFile,
  mkdtemp,
  readFile,
  readdir,
  rm,
  stat,
} from "node:fs/promises";
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

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const repositoryRoot = path.resolve(scriptDirectory, "../..");
const environmentPath = path.join(repositoryRoot, ".env.media.local");
const supportedExtensions = new Set([".jpg", ".jpeg", ".png"]);
const maxImageDimension = 1600;
const naturalSort = new Intl.Collator(undefined, {
  numeric: true,
  sensitivity: "base",
});

function printUsage() {
  console.log(`Usage:
  npm run media:blog -- \\
    --cover "/path/to/cover.jpg" \\
    --images "/path/to/blog-images" \\
    --r2-path "blogs/stories/my-post"

Required:
  --cover    Cover image file (JPG, JPEG, or PNG)
  --images   Flat directory containing the blog's inline images
  --r2-path  Destination prefix inside R2; must start with blogs/

Options:
  --dry-run  Optimize and preview links without uploading
  --yes      Skip the upload confirmation prompt
  --help     Show this help`);
}

function parseArguments(argumentsList) {
  const options = { dryRun: false, yes: false };

  for (let index = 0; index < argumentsList.length; index += 1) {
    const argument = argumentsList[index];
    if (argument === "--dry-run") {
      options.dryRun = true;
    } else if (argument === "--yes") {
      options.yes = true;
    } else if (argument === "--help" || argument === "-h") {
      options.help = true;
    } else if (["--cover", "--images", "--r2-path"].includes(argument)) {
      const value = argumentsList[index + 1];
      if (!value || value.startsWith("--")) {
        throw new Error(`${argument} requires a value.`);
      }
      const property = {
        "--cover": "cover",
        "--images": "images",
        "--r2-path": "r2Path",
      }[argument];
      options[property] = value;
      index += 1;
    } else {
      throw new Error(`Unknown option: ${argument}`);
    }
  }
  return options;
}

async function normalizeAndValidateOptions(options) {
  if (options.help) {
    return options;
  }
  const missing = ["cover", "images", "r2Path"].filter(
    (property) => !options[property]?.trim(),
  );
  if (missing.length > 0) {
    throw new Error(
      `Missing required ${missing.map((name) => `--${name === "r2Path" ? "r2-path" : name}`).join(", ")}.`,
    );
  }

  const cover = path.resolve(options.cover);
  const images = path.resolve(options.images);
  const coverStats = await stat(cover).catch(() => null);
  const imageDirectoryStats = await stat(images).catch(() => null);
  if (!coverStats?.isFile()) {
    throw new Error(`Cover image does not exist: ${cover}`);
  }
  if (!supportedExtensions.has(path.extname(cover).toLowerCase())) {
    throw new Error("Cover must be a JPG, JPEG, or PNG file.");
  }
  if (!imageDirectoryStats?.isDirectory()) {
    throw new Error(`Inline image directory does not exist: ${images}`);
  }

  const r2Path = options.r2Path
    .trim()
    .replace(/^\/+|\/+$/g, "")
    .replace(/\/{2,}/g, "/");
  if (
    !r2Path.startsWith("blogs/") ||
    r2Path.split("/").some((segment) => !segment || segment === "." || segment === "..")
  ) {
    throw new Error(
      '--r2-path must be a safe prefix beneath "blogs/", such as "blogs/stories/my-post".',
    );
  }

  return { ...options, cover, images, r2Path };
}

function loadConfiguration({ requireCredentials }) {
  const result = dotenv.config({ path: environmentPath, quiet: true });
  if (result.error) {
    throw new Error(`Could not read ${environmentPath}.`);
  }
  const names = requireCredentials
    ? [
        "R2_ACCOUNT_ID",
        "R2_ACCESS_KEY_ID",
        "R2_SECRET_ACCESS_KEY",
        "R2_BUCKET",
        "R2_PUBLIC_BASE_URL",
      ]
    : ["R2_PUBLIC_BASE_URL"];
  const missing = names.filter((name) => !process.env[name]?.trim());
  if (missing.length > 0) {
    throw new Error(`Missing ${missing.join(", ")} in .env.media.local.`);
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

function createClient(configuration) {
  return new S3Client({
    region: "auto",
    endpoint: `https://${configuration.accountId}.r2.cloudflarestorage.com`,
    credentials: {
      accessKeyId: configuration.accessKeyId,
      secretAccessKey: configuration.secretAccessKey,
    },
  });
}

async function findInlineImages(inputDirectory) {
  const entries = await readdir(inputDirectory, { withFileTypes: true });
  const nestedDirectory = entries.find((entry) => entry.isDirectory());
  if (nestedDirectory) {
    throw new Error(
      `--images must be flat; found nested directory: ${nestedDirectory.name}`,
    );
  }
  const unsupportedFiles = entries.filter(
    (entry) =>
      entry.isFile() &&
      !entry.name.startsWith(".") &&
      !supportedExtensions.has(path.extname(entry.name).toLowerCase()),
  );
  if (unsupportedFiles.length > 0) {
    throw new Error(
      `Unsupported file in --images: ${unsupportedFiles[0].name}. Use only JPG, JPEG, or PNG.`,
    );
  }
  const filenames = entries
    .filter(
      (entry) =>
        entry.isFile() &&
        supportedExtensions.has(path.extname(entry.name).toLowerCase()),
    )
    .map((entry) => entry.name)
    .sort((left, right) => naturalSort.compare(left, right));
  if (filenames.length === 0) {
    throw new Error("--images does not contain any JPG, JPEG, or PNG files.");
  }
  return filenames.map((filename) => path.join(inputDirectory, filename));
}

function slugify(filename) {
  return (
    path
      .basename(filename, path.extname(filename))
      .normalize("NFKD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 90) || "image"
  );
}

function formatBytes(bytes) {
  const units = ["B", "KB", "MB", "GB"];
  let value = bytes;
  let unit = 0;
  while (value >= 1024 && unit < units.length - 1) {
    value /= 1024;
    unit += 1;
  }
  return `${value.toFixed(unit === 0 ? 0 : 1)} ${units[unit]}`;
}

async function processImage({
  sourcePath,
  kind,
  index,
  positionWidth,
  r2Path,
  publicBaseUrl,
  temporaryDirectory,
}) {
  const originalStats = await stat(sourcePath);
  const metadata = await sharp(sourcePath).metadata();
  const inputExtension = path.extname(sourcePath).toLowerCase();
  const preservePng =
    inputExtension === ".png" && (kind === "inline" || metadata.hasAlpha);
  const outputExtension = preservePng ? "png" : "jpg";
  const temporaryPath = path.join(
    temporaryDirectory,
    `${kind}-${String(index + 1).padStart(positionWidth, "0")}.${outputExtension}`,
  );

  function createPipeline(jpegQuality = 85) {
    let pipeline = sharp(sourcePath, { failOn: "warning" })
      .rotate()
      .resize({
        width: maxImageDimension,
        height: maxImageDimension,
        fit: "inside",
        withoutEnlargement: true,
      });
    return preservePng
      ? pipeline.png({ compressionLevel: 9, effort: 10 })
      : pipeline.jpeg({
          quality: jpegQuality,
          progressive: true,
          mozjpeg: true,
        });
  }

  let info = await createPipeline().toFile(temporaryPath);
  if (!preservePng && info.size > originalStats.size) {
    info = await createPipeline(80).toFile(temporaryPath);
  }
  if (!preservePng && info.size > originalStats.size) {
    info = await createPipeline(75).toFile(temporaryPath);
  }

  const sameFormat =
    (outputExtension === "png" && inputExtension === ".png") ||
    (outputExtension === "jpg" && [".jpg", ".jpeg"].includes(inputExtension));
  const alreadyFits =
    (metadata.width || 0) <= maxImageDimension &&
    (metadata.height || 0) <= maxImageDimension;
  if (
    info.size >= originalStats.size &&
    sameFormat &&
    alreadyFits &&
    !metadata.exif &&
    (!metadata.orientation || metadata.orientation === 1)
  ) {
    await copyFile(sourcePath, temporaryPath);
    info = {
      ...info,
      size: originalStats.size,
      width: metadata.width,
      height: metadata.height,
    };
  }

  const bytes = await readFile(temporaryPath);
  const sha256 = createHash("sha256").update(bytes).digest("hex");
  const position =
    kind === "cover"
      ? "cover"
      : String(index + 1).padStart(positionWidth, "0");
  const objectFilename =
    `${position}-${slugify(sourcePath)}-${sha256.slice(0, 10)}.${outputExtension}`;
  const key = `${r2Path}/${objectFilename}`;

  return {
    kind,
    index,
    sourcePath,
    sourceName: path.basename(sourcePath),
    originalSize: originalStats.size,
    processedSize: info.size,
    width: info.width,
    height: info.height,
    bytes,
    sha256,
    key,
    publicUrl: `${publicBaseUrl}/${key}`,
    contentType: outputExtension === "png" ? "image/png" : "image/jpeg",
  };
}

function printPreview(cover, images) {
  console.log("\nCover");
  console.log(
    `  ${cover.sourceName} -> ${path.basename(cover.key)} ` +
      `(${cover.width}x${cover.height}, ${formatBytes(cover.originalSize)} -> ${formatBytes(cover.processedSize)})`,
  );
  console.log("\nInline images");
  for (const image of images) {
    console.log(
      `  ${String(image.index + 1).padStart(3, " ")}. ${image.sourceName} -> ` +
        `${path.basename(image.key)} (${image.width}x${image.height}, ` +
        `${formatBytes(image.originalSize)} -> ${formatBytes(image.processedSize)})`,
    );
  }
  const allAssets = [cover, ...images];
  console.log(
    `\n${allAssets.length} images: ` +
      `${formatBytes(allAssets.reduce((sum, image) => sum + image.originalSize, 0))} -> ` +
      `${formatBytes(allAssets.reduce((sum, image) => sum + image.processedSize, 0))}`,
  );
}

function printLinks(cover, images) {
  const result = {
    cover: cover.publicUrl,
    images: images.map((image) => ({
      source: image.sourceName,
      url: image.publicUrl,
    })),
  };
  console.log("\nR2 links");
  console.log(JSON.stringify(result, null, 2));
}

async function confirmUpload(options) {
  if (options.yes) {
    return;
  }
  if (!process.stdin.isTTY) {
    throw new Error("Upload confirmation requires a terminal or --yes.");
  }
  const prompt = createInterface({ input: process.stdin, output: process.stdout });
  const answer = await prompt.question("\nUpload these images? [y/N] ");
  prompt.close();
  if (!["y", "yes"].includes(answer.trim().toLowerCase())) {
    throw new Error("Upload cancelled.");
  }
}

async function uploadAsset(client, configuration, asset) {
  let existing = null;
  try {
    existing = await client.send(
      new HeadObjectCommand({ Bucket: configuration.bucket, Key: asset.key }),
    );
  } catch (error) {
    if (error?.$metadata?.httpStatusCode !== 404 && error?.name !== "NotFound") {
      throw error;
    }
  }
  if (
    existing &&
    existing.ContentLength === asset.processedSize &&
    existing.Metadata?.sha256 === asset.sha256
  ) {
    return "skipped";
  }
  if (existing) {
    throw new Error(`Existing R2 object differs: ${asset.key}`);
  }
  await client.send(
    new PutObjectCommand({
      Bucket: configuration.bucket,
      Key: asset.key,
      Body: asset.bytes,
      ContentLength: asset.processedSize,
      ContentType: asset.contentType,
      CacheControl: "public, max-age=31536000, immutable",
      Metadata: { sha256: asset.sha256 },
    }),
  );
  return "uploaded";
}

async function verifyPublicAsset(asset) {
  const response = await fetch(
    `${asset.publicUrl}?verify=${asset.sha256.slice(0, 12)}`,
    { redirect: "error", cache: "no-store" },
  );
  if (!response.ok) {
    throw new Error(
      `Public verification returned ${response.status}: ${asset.publicUrl}`,
    );
  }
  const contentType = response.headers.get("content-type")?.split(";")[0];
  if (contentType !== asset.contentType) {
    throw new Error(
      `Expected ${asset.contentType}, received ${contentType}: ${asset.publicUrl}`,
    );
  }
  const bytes = Buffer.from(await response.arrayBuffer());
  const sha256 = createHash("sha256").update(bytes).digest("hex");
  if (sha256 !== asset.sha256) {
    throw new Error(`Public byte hash mismatch: ${asset.publicUrl}`);
  }
}

async function main() {
  const parsedOptions = parseArguments(process.argv.slice(2));
  if (parsedOptions.help) {
    printUsage();
    return;
  }
  const options = await normalizeAndValidateOptions(parsedOptions);
  const configuration = loadConfiguration({
    requireCredentials: !options.dryRun,
  });
  const inlineSources = await findInlineImages(options.images);
  if (
    inlineSources.some(
      (sourcePath) => path.resolve(sourcePath) === path.resolve(options.cover),
    )
  ) {
    throw new Error(
      "The cover is also present in --images. Keep the cover separate to avoid uploading it twice.",
    );
  }

  const temporaryDirectory = await mkdtemp(
    path.join(tmpdir(), "doctakim-blog-upload-"),
  );
  try {
    const positionWidth = Math.max(3, String(inlineSources.length).length);
    const cover = await processImage({
      sourcePath: options.cover,
      kind: "cover",
      index: 0,
      positionWidth,
      r2Path: options.r2Path,
      publicBaseUrl: configuration.publicBaseUrl,
      temporaryDirectory,
    });
    const images = [];
    for (let index = 0; index < inlineSources.length; index += 1) {
      images.push(
        await processImage({
          sourcePath: inlineSources[index],
          kind: "inline",
          index,
          positionWidth,
          r2Path: options.r2Path,
          publicBaseUrl: configuration.publicBaseUrl,
          temporaryDirectory,
        }),
      );
    }

    printPreview(cover, images);
    if (options.dryRun) {
      printLinks(cover, images);
      return;
    }
    await confirmUpload(options);
    const client = createClient(configuration);
    const allAssets = [cover, ...images];
    for (let index = 0; index < allAssets.length; index += 1) {
      const result = await uploadAsset(client, configuration, allAssets[index]);
      await verifyPublicAsset(allAssets[index]);
      console.log(
        `[${index + 1}/${allAssets.length}] ${result} and verified: ${allAssets[index].key}`,
      );
    }
    printLinks(cover, images);
  } finally {
    await rm(temporaryDirectory, { recursive: true, force: true });
  }
}

main().catch((error) => {
  console.error(`\n${error.message}`);
  process.exitCode = 1;
});
