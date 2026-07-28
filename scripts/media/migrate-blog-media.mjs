#!/usr/bin/env node

import { createHash } from "node:crypto";
import { spawn } from "node:child_process";
import {
  access,
  copyFile,
  mkdir,
  mkdtemp,
  readFile,
  readdir,
  rename,
  rmdir,
  rm,
  stat,
  writeFile,
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
import ffmpegPath from "ffmpeg-static";
import sharp from "sharp";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const repositoryRoot = path.resolve(scriptDirectory, "../..");
const environmentPath = path.join(repositoryRoot, ".env.media.local");
const defaultMappingPath = path.join(tmpdir(), "doctakim-blog-media-map.json");
const maxImageDimension = 1600;
const supportedImageExtensions = new Set([".jpg", ".jpeg", ".png"]);
const naturalSort = new Intl.Collator(undefined, {
  numeric: true,
  sensitivity: "base",
});

const groups = [
  ["public/images/blog_pictures/Best-Latte", "blogs/stories/best-latte"],
  [
    "public/images/blog_pictures/My-Freshman-College-Story",
    "blogs/stories/freshman-story",
  ],
  ["public/images/blog_pictures/Growing-Up", "blogs/stories/growing-up"],
  ["public/images/blog_pictures/My-Sister", "blogs/stories/my-sister"],
  [
    "public/images/blog_pictures/out-of-context",
    "blogs/stories/out-of-context",
  ],
  [
    "public/images/blog_pictures/The-Sophomore-Slump",
    "blogs/stories/sophomore-slump",
  ],
  ["public/images/blog_pictures/Treasure-Hunt", "blogs/stories/treasure-hunt"],
  [
    "public/images/blog_pictures/Wistful-Memories",
    "blogs/stories/wistful-memories",
  ],
  [
    "public/images/blog_pictures/Dear-Mrs-Lupsaiu",
    "blogs/thoughts/dear-mrs-lupsaiu",
  ],
  ["public/images/blog_pictures/FaceTime", "blogs/thoughts/facetime"],
  ["public/images/blog_pictures/gods-love", "blogs/thoughts/gods-love"],
  ["public/images/blog_pictures/Prayer", "blogs/thoughts/prayer"],
  ["public/images/blog_pictures/why-cornell", "blogs/thoughts/why-cornell"],
  [
    "public/images/fiction_covers/chasing-the-sun.png",
    "blogs/fiction/chasing-the-sun",
  ],
  ["public/images/fiction_covers/her-face.png", "blogs/fiction/her-face"],
  [
    "public/images/fiction_covers/letter-to-former-lover.png",
    "blogs/fiction/letter-to-former-lover",
  ],
  ["public/images/birthdays/angy-20", "blogs/birthdays/angy-20"],
  ["public/images/birthdays/derek-20", "blogs/birthdays/derek-20"],
  ["public/images/birthdays/grace-li-21", "blogs/birthdays/grace-li-21"],
  ["public/images/birthdays/grace-lo-20", "blogs/birthdays/grace-lo-20"],
].map(([source, prefix]) => ({
  source: path.join(repositoryRoot, source),
  prefix,
}));

const excludedRelativePaths = new Set(
  [
    "public/images/blog_pictures/My-Freshman-College-Story/Pictures/48Thanks HILC.jpeg",
    "public/images/blog_pictures/Growing-Up/Pictures/me-before-and-after.png",
    "public/images/blog_pictures/Treasure-Hunt/Pictures/0 cover photo.JPG",
    "public/images/blog_pictures/why-cornell/reddit2_hsma4b.png",
    "public/images/blog_pictures/why-cornell/reddit4.1_xezxxr.png",
    "public/images/blog_pictures/why-cornell/reddit4.2_l0secu.png",
    "public/images/blog_pictures/why-cornell/reddit4.3_gwkr6u.png",
    "public/images/blog_pictures/why-cornell/reddit5_crq8va.png",
  ].map((filename) => filename.toLowerCase()),
);

const remoteAliases = new Map([
  [
    "chasing-the-sun_agoobm.png",
    "public/images/fiction_covers/chasing-the-sun.png",
  ],
  ["her-face_aol44b.png", "public/images/fiction_covers/her-face.png"],
  [
    "gemini_1_lp9oi2.png",
    "public/images/fiction_covers/letter-to-former-lover.png",
  ],
]);

function printUsage() {
  console.log(`Usage:
  npm run media:blogs -- --dry-run
  npm run media:blogs -- --yes [--mapping-output /tmp/blog-map.json]
  npm run media:blogs -- --apply-links /tmp/blog-map.json
  npm run media:blogs -- --cleanup /tmp/blog-map.json

Modes:
  --dry-run       Optimize to temporary storage and print the complete plan only
  --yes           Upload and publicly verify every optimized object
  --apply-links   Replace matching local and Cloudinary literals with R2 URLs
  --cleanup       Re-verify R2 bytes, then move migrated sources to a /tmp backup

Options:
  --mapping-output  Upload mapping path (default: ${defaultMappingPath})
  --help            Show this help`);
}

function parseArguments(argumentsList) {
  const options = {
    dryRun: false,
    yes: false,
    mappingOutput: defaultMappingPath,
  };

  for (let index = 0; index < argumentsList.length; index += 1) {
    const argument = argumentsList[index];
    if (argument === "--dry-run") {
      options.dryRun = true;
    } else if (argument === "--yes") {
      options.yes = true;
    } else if (argument === "--help" || argument === "-h") {
      options.help = true;
    } else if (
      ["--mapping-output", "--apply-links", "--cleanup"].includes(argument)
    ) {
      const value = argumentsList[index + 1];
      if (!value || value.startsWith("--")) {
        throw new Error(`${argument} requires a path.`);
      }
      const property = {
        "--mapping-output": "mappingOutput",
        "--apply-links": "applyLinks",
        "--cleanup": "cleanup",
      }[argument];
      options[property] = path.resolve(value);
      index += 1;
    } else {
      throw new Error(`Unknown option: ${argument}`);
    }
  }

  const modes = [options.dryRun, options.applyLinks, options.cleanup].filter(
    Boolean,
  );
  if (modes.length > 1) {
    throw new Error("Choose only one of --dry-run, --apply-links, or --cleanup.");
  }
  return options;
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
  return {
    accountId: process.env.R2_ACCOUNT_ID,
    accessKeyId: process.env.R2_ACCESS_KEY_ID,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
    bucket: process.env.R2_BUCKET,
    publicBaseUrl: process.env.R2_PUBLIC_BASE_URL.replace(/\/+$/, ""),
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

function relativeToRepository(filename) {
  const relative = path.relative(repositoryRoot, filename);
  if (relative.startsWith("..") || path.isAbsolute(relative)) {
    throw new Error(`Path is outside the repository: ${filename}`);
  }
  return relative.split(path.sep).join("/");
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
      .slice(0, 90) || "media"
  );
}

async function walkFiles(targetPath) {
  const targetStats = await stat(targetPath);
  if (targetStats.isFile()) {
    return [targetPath];
  }
  const entries = await readdir(targetPath, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const child = path.join(targetPath, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walkFiles(child)));
    } else if (entry.isFile()) {
      files.push(child);
    }
  }
  return files;
}

async function collectSources() {
  const assets = [];
  for (const group of groups) {
    const filenames = (await walkFiles(group.source)).sort((left, right) =>
      naturalSort.compare(
        relativeToRepository(left),
        relativeToRepository(right),
      ),
    );
    for (const filename of filenames) {
      const relative = relativeToRepository(filename);
      if (excludedRelativePaths.has(relative.toLowerCase())) {
        continue;
      }
      const extension = path.extname(filename).toLowerCase();
      const kind = supportedImageExtensions.has(extension)
        ? "image"
        : extension === ".mov"
          ? "video"
          : null;
      if (!kind) {
        throw new Error(`Unsupported media file: ${relative}`);
      }
      assets.push({ sourcePath: filename, sourceRelative: relative, ...group, kind });
    }
  }
  const images = assets.filter((asset) => asset.kind === "image");
  const videos = assets.filter((asset) => asset.kind === "video");
  if (images.length !== 239 || videos.length !== 2 || groups.length !== 20) {
    throw new Error(
      `Expected 239 images, 2 videos, and 20 groups; found ${images.length}, ${videos.length}, and ${groups.length}.`,
    );
  }
  return assets;
}

async function processImage(asset, temporaryDirectory, index) {
  const originalStats = await stat(asset.sourcePath);
  const metadata = await sharp(asset.sourcePath).metadata();
  const preservePng =
    path.extname(asset.sourcePath).toLowerCase() === ".png" &&
    !asset.sourceRelative.startsWith("public/images/fiction_covers/");
  const outputExtension = preservePng ? "png" : "jpg";
  const temporaryPath = path.join(
    temporaryDirectory,
    `${String(index + 1).padStart(4, "0")}.${outputExtension}`,
  );
  function createPipeline(jpegQuality = 85) {
    let pipeline = sharp(asset.sourcePath, { failOn: "warning" })
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
    (outputExtension === "png" &&
      path.extname(asset.sourcePath).toLowerCase() === ".png") ||
    (outputExtension === "jpg" &&
      [".jpg", ".jpeg"].includes(path.extname(asset.sourcePath).toLowerCase()));
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
    await copyFile(asset.sourcePath, temporaryPath);
    info = {
      ...info,
      size: originalStats.size,
      width: metadata.width,
      height: metadata.height,
    };
  }
  return {
    ...asset,
    temporaryPath,
    originalSize: originalStats.size,
    processedSize: info.size,
    width: info.width,
    height: info.height,
    contentType: outputExtension === "png" ? "image/png" : "image/jpeg",
    outputExtension,
  };
}

async function runFfmpeg(argumentsList) {
  if (!ffmpegPath) {
    throw new Error("ffmpeg-static did not provide an executable.");
  }
  await new Promise((resolve, reject) => {
    const child = spawn(ffmpegPath, argumentsList, {
      stdio: ["ignore", "ignore", "pipe"],
    });
    let stderr = "";
    child.stderr.on("data", (chunk) => {
      stderr += chunk;
    });
    child.on("error", reject);
    child.on("close", (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`ffmpeg exited ${code}: ${stderr.slice(-2000)}`));
      }
    });
  });
}

async function processVideo(asset, temporaryDirectory, index) {
  const originalStats = await stat(asset.sourcePath);
  const temporaryPath = path.join(
    temporaryDirectory,
    `${String(index + 1).padStart(4, "0")}.mp4`,
  );
  await runFfmpeg([
    "-y",
    "-i",
    asset.sourcePath,
    "-vf",
    "scale=min(1280\\,iw):min(720\\,ih):force_original_aspect_ratio=decrease,scale=trunc(iw/2)*2:trunc(ih/2)*2",
    "-c:v",
    "libx264",
    "-preset",
    "medium",
    "-crf",
    "23",
    "-pix_fmt",
    "yuv420p",
    "-c:a",
    "aac",
    "-b:a",
    "128k",
    "-movflags",
    "+faststart",
    temporaryPath,
  ]);
  const processedStats = await stat(temporaryPath);
  return {
    ...asset,
    temporaryPath,
    originalSize: originalStats.size,
    processedSize: processedStats.size,
    contentType: "video/mp4",
    outputExtension: "mp4",
  };
}

async function finalizeProcessedAsset(asset, publicBaseUrl) {
  const bytes = await readFile(asset.temporaryPath);
  const sha256 = createHash("sha256").update(bytes).digest("hex");
  const key = `${asset.prefix}/${slugify(asset.sourcePath)}-${sha256.slice(0, 10)}.${asset.outputExtension}`;
  return {
    ...asset,
    bytes,
    sha256,
    key,
    publicUrl: `${publicBaseUrl}/${key}`,
  };
}

async function processAssets(assets, temporaryDirectory, publicBaseUrl) {
  const processed = [];
  for (let index = 0; index < assets.length; index += 1) {
    const asset = assets[index];
    const result =
      asset.kind === "image"
        ? await processImage(asset, temporaryDirectory, index)
        : await processVideo(asset, temporaryDirectory, index);
    processed.push(await finalizeProcessedAsset(result, publicBaseUrl));
    process.stdout.write(
      `\rProcessed ${String(index + 1).padStart(3, " ")}/${assets.length}`,
    );
  }
  process.stdout.write("\n");
  return processed;
}

function printPreview(assets) {
  const byPrefix = new Map();
  for (const asset of assets) {
    const items = byPrefix.get(asset.prefix) || [];
    items.push(asset);
    byPrefix.set(asset.prefix, items);
  }
  for (const [prefix, items] of byPrefix) {
    console.log(`\n${prefix}/`);
    for (const item of items) {
      console.log(
        `  ${item.sourceRelative} -> ${path.basename(item.key)} ` +
          `(${formatBytes(item.originalSize)} -> ${formatBytes(item.processedSize)})`,
      );
    }
  }
  const originalTotal = assets.reduce((sum, asset) => sum + asset.originalSize, 0);
  const processedTotal = assets.reduce(
    (sum, asset) => sum + asset.processedSize,
    0,
  );
  console.log(
    `\n${assets.filter((asset) => asset.kind === "image").length} images and ` +
      `${assets.filter((asset) => asset.kind === "video").length} videos: ` +
      `${formatBytes(originalTotal)} -> ${formatBytes(processedTotal)}`,
  );
}

async function confirmUpload(options) {
  if (options.yes) {
    return;
  }
  if (!process.stdin.isTTY) {
    throw new Error("Upload confirmation requires a terminal or --yes.");
  }
  const prompt = createInterface({ input: process.stdin, output: process.stdout });
  const answer = await prompt.question("\nUpload these media files? [y/N] ");
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
  const separator = asset.publicUrl.includes("?") ? "&" : "?";
  const response = await fetch(
    `${asset.publicUrl}${separator}verify=${asset.sha256.slice(0, 12)}`,
    { redirect: "error", cache: "no-store" },
  );
  if (!response.ok) {
    throw new Error(`Public verification returned ${response.status}: ${asset.publicUrl}`);
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

function serializableAsset(asset) {
  const {
    bytes,
    source,
    temporaryPath,
    ...serializable
  } = asset;
  return serializable;
}

async function readMapping(mappingPath) {
  const parsed = JSON.parse(await readFile(mappingPath, "utf8"));
  if (
    parsed.version !== 1 ||
    !Array.isArray(parsed.assets) ||
    parsed.assets.length !== 241
  ) {
    throw new Error(`Invalid migration mapping: ${mappingPath}`);
  }
  return parsed;
}

async function collectSourceCodeFiles() {
  const blogEntries = await walkFiles(path.join(repositoryRoot, "src/blog_entries"));
  return [
    path.join(repositoryRoot, "src/data/blog_data.ts"),
    ...blogEntries.filter((filename) => /\.(ts|tsx)$/.test(filename)),
  ];
}

function localReferenceToSource(value) {
  if (value.startsWith("../images/")) {
    return `public/${value.slice(3)}`;
  }
  if (value.startsWith("/images/")) {
    return `public${value}`;
  }
  if (value.startsWith("images/")) {
    return `public/${value}`;
  }
  return null;
}

function buildLinkLookups(assets) {
  const sourceLookup = new Map(
    assets.map((asset) => [
      asset.sourceRelative.toLowerCase(),
      asset.publicUrl,
    ]),
  );
  const basenameLookup = new Map();
  for (const asset of assets) {
    const basename = path.basename(asset.sourceRelative).toLowerCase();
    if (basenameLookup.has(basename)) {
      basenameLookup.set(basename, null);
    } else {
      basenameLookup.set(basename, asset.publicUrl);
    }
  }
  for (const [remoteBasename, sourceRelative] of remoteAliases) {
    basenameLookup.set(
      remoteBasename.toLowerCase(),
      sourceLookup.get(sourceRelative.toLowerCase()),
    );
  }
  return { sourceLookup, basenameLookup };
}

function resolveLink(value, lookups) {
  const localSource = localReferenceToSource(value);
  if (localSource) {
    return lookups.sourceLookup.get(localSource.toLowerCase());
  }
  if (value.startsWith("https://res.cloudinary.com/")) {
    const url = new URL(value);
    return lookups.basenameLookup.get(
      decodeURIComponent(path.basename(url.pathname)).toLowerCase(),
    );
  }
  return null;
}

async function auditLinkMappings(assets) {
  const lookups = buildLinkLookups(assets);
  let matches = 0;
  const matchedUrls = new Set();
  for (const filename of await collectSourceCodeFiles()) {
    const source = await readFile(filename, "utf8");
    for (const match of source.matchAll(
      /(["'])([^"'\n]+\.(?:jpe?g|png|mov)(?:\?[^"']*)?)\1/gi,
    )) {
      const replacement = resolveLink(match[2], lookups);
      if (replacement) {
        matches += 1;
        matchedUrls.add(replacement);
      }
    }
  }
  if (matches !== 242 || matchedUrls.size !== assets.length) {
    throw new Error(
      `Expected 242 source references covering ${assets.length} assets; mapped ${matches} references covering ${matchedUrls.size} assets.`,
    );
  }
  console.log(
    `Audited ${matches} source references with one exact mapping for all ${assets.length} assets.`,
  );
}

async function applyLinks(mappingPath) {
  const mapping = await readMapping(mappingPath);
  const lookups = buildLinkLookups(mapping.assets);

  let replacements = 0;
  const modifiedFiles = [];
  for (const filename of await collectSourceCodeFiles()) {
    const source = await readFile(filename, "utf8");
    const updated = source.replace(
      /(["'])([^"'\n]+\.(?:jpe?g|png|mov)(?:\?[^"']*)?)\1/gi,
      (literal, quote, value) => {
        const replacement = resolveLink(value, lookups);
        if (!replacement) {
          return literal;
        }
        replacements += 1;
        return `${quote}${replacement}${quote}`;
      },
    );
    if (updated !== source) {
      await writeFile(filename, updated);
      modifiedFiles.push(relativeToRepository(filename));
    }
  }
  if (replacements !== 242) {
    throw new Error(
      `Expected exactly 242 link replacements, completed ${replacements}.`,
    );
  }
  console.log(
    `Updated ${replacements} media references across ${modifiedFiles.length} files.`,
  );
}

async function pruneEmptyDirectories(directory, stopDirectory) {
  if (directory === stopDirectory) {
    return;
  }
  const entries = await readdir(directory);
  if (entries.length === 0) {
    await rmdir(directory);
    await pruneEmptyDirectories(path.dirname(directory), stopDirectory);
  }
}

async function cleanupSources(mappingPath) {
  const mapping = await readMapping(mappingPath);
  console.log("Re-verifying public media before local cleanup...");
  for (let index = 0; index < mapping.assets.length; index += 1) {
    await verifyPublicAsset(mapping.assets[index]);
    process.stdout.write(
      `\rVerified ${String(index + 1).padStart(3, " ")}/${mapping.assets.length}`,
    );
  }
  process.stdout.write("\n");

  const allowedRoots = [
    path.join(repositoryRoot, "public/images/blog_pictures"),
    path.join(repositoryRoot, "public/images/birthdays"),
    path.join(repositoryRoot, "public/images/fiction_covers"),
  ];
  for (const asset of mapping.assets) {
    const sourcePath = path.join(repositoryRoot, asset.sourceRelative);
    const allowedRoot = allowedRoots.find(
      (root) => sourcePath === root || sourcePath.startsWith(`${root}${path.sep}`),
    );
    if (!allowedRoot) {
      throw new Error(`Refusing to delete outside media roots: ${sourcePath}`);
    }
    await access(sourcePath);
  }
  const backupRoot = path.join(
    tmpdir(),
    `doctakim-blog-media-originals-${new Date()
      .toISOString()
      .replace(/[:.]/g, "-")}`,
  );
  for (const asset of mapping.assets) {
    const sourcePath = path.join(repositoryRoot, asset.sourceRelative);
    const backupPath = path.join(backupRoot, asset.sourceRelative);
    await mkdir(path.dirname(backupPath), { recursive: true });
    await rename(sourcePath, backupPath);
    const root = allowedRoots.find((candidate) =>
      sourcePath.startsWith(`${candidate}${path.sep}`),
    );
    await pruneEmptyDirectories(path.dirname(sourcePath), root);
  }
  console.log(
    `Moved ${mapping.assets.length} verified migrated source files to ${backupRoot}`,
  );
}

async function main() {
  const options = parseArguments(process.argv.slice(2));
  if (options.help) {
    printUsage();
    return;
  }
  if (options.applyLinks) {
    await applyLinks(options.applyLinks);
    return;
  }
  if (options.cleanup) {
    loadConfiguration({ requireCredentials: false });
    await cleanupSources(options.cleanup);
    return;
  }

  const configuration = loadConfiguration({
    requireCredentials: !options.dryRun,
  });
  const temporaryDirectory = await mkdtemp(
    path.join(tmpdir(), "doctakim-blog-media-"),
  );
  try {
    const sources = await collectSources();
    const assets = await processAssets(
      sources,
      temporaryDirectory,
      configuration.publicBaseUrl,
    );
    await auditLinkMappings(assets);
    printPreview(assets);
    if (options.dryRun) {
      return;
    }
    await confirmUpload(options);
    const client = createClient(configuration);
    for (let index = 0; index < assets.length; index += 1) {
      const result = await uploadAsset(client, configuration, assets[index]);
      await verifyPublicAsset(assets[index]);
      console.log(
        `[${index + 1}/${assets.length}] ${result} and verified: ${assets[index].key}`,
      );
    }
    const mapping = {
      version: 1,
      createdAt: new Date().toISOString(),
      publicBaseUrl: configuration.publicBaseUrl,
      assets: assets.map(serializableAsset),
    };
    await mkdir(path.dirname(options.mappingOutput), { recursive: true });
    await writeFile(options.mappingOutput, `${JSON.stringify(mapping, null, 2)}\n`);
    console.log(`\nMigration mapping: ${options.mappingOutput}`);
  } finally {
    await rm(temporaryDirectory, { recursive: true, force: true });
  }
}

main().catch((error) => {
  console.error(`\n${error.message}`);
  process.exitCode = 1;
});
