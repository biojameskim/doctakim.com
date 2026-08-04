#!/usr/bin/env node

import { createHash } from "node:crypto";
import { createReadStream } from "node:fs";
import {
  access,
  copyFile,
  mkdir,
  mkdtemp,
  readFile,
  readdir,
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
import sharp from "sharp";
import ts from "typescript";

import {
  countFilenameEntries,
  formatBytes,
  orientationOf,
  planVariants,
  renderGalleryData,
  replaceExistingFilenames,
  slugify,
  encodeVariant,
  variantQuality,
} from "./gallery-data.mjs";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const repositoryRoot = path.resolve(scriptDirectory, "../..");
const environmentPath = path.join(repositoryRoot, ".env.media.local");
const supportedExtensions = new Set([".jpg", ".jpeg", ".png"]);
const maxImageDimension = 4096;
const webReadyFileSize = 5 * 1024 * 1024;
const naturalSort = new Intl.Collator(undefined, {
  numeric: true,
  sensitivity: "base",
});

function printUsage() {
  console.log(`Usage:
  npm run media:gallery -- --year YYYY --month MM --input "/path/to/photos"
  npm run media:gallery -- --year YYYY --month MM \\
    --subfolder "/path/to/first-subfolder" \\
    --subfolder "/path/to/second-subfolder"

Options:
  --input     Flat folder for the month's main photos (optional with subfolders)
  --subfolder Flat subfolder path; repeat in the desired display order
  --dry-run   Process and preview without uploading or writing data
  --yes       Skip the confirmation prompt
  --force     Migrate an existing month while preserving its metadata
  --help      Show this help`);
}

function parseArguments(argumentsList) {
  const options = {
    dryRun: false,
    force: false,
    subfolders: [],
    yes: false,
  };

  for (let index = 0; index < argumentsList.length; index += 1) {
    const argument = argumentsList[index];

    if (argument === "--dry-run") {
      options.dryRun = true;
    } else if (argument === "--force") {
      options.force = true;
    } else if (argument === "--yes") {
      options.yes = true;
    } else if (argument === "--help" || argument === "-h") {
      options.help = true;
    } else if (
      ["--year", "--month", "--input", "--subfolder"].includes(argument)
    ) {
      const value = argumentsList[index + 1];
      if (!value || value.startsWith("--")) {
        throw new Error(`${argument} requires a value.`);
      }
      if (argument === "--subfolder") {
        options.subfolders.push(value);
      } else {
        options[argument.slice(2)] = value;
      }
      index += 1;
    } else {
      throw new Error(`Unknown option: ${argument}`);
    }
  }

  return options;
}

function normalizeAndValidateOptions(options) {
  if (options.help) {
    return options;
  }

  if (!options.year || !/^\d{4}$/.test(options.year)) {
    throw new Error("--year must be a four-digit year.");
  }

  const numericMonth = Number(options.month);
  if (!Number.isInteger(numericMonth) || numericMonth < 1 || numericMonth > 12) {
    throw new Error("--month must be between 1 and 12.");
  }

  if (!options.input && options.subfolders.length === 0) {
    throw new Error("Provide --input, at least one --subfolder, or both.");
  }

  const subfolders = options.subfolders.map((subfolderPath) => {
    if (!path.isAbsolute(subfolderPath)) {
      throw new Error(`--subfolder must use an absolute path: ${subfolderPath}`);
    }
    return path.normalize(subfolderPath);
  });

  const duplicateSubfolder = subfolders.find(
    (subfolderPath, index) => subfolders.indexOf(subfolderPath) !== index,
  );
  if (duplicateSubfolder) {
    throw new Error(`Duplicate --subfolder path: ${duplicateSubfolder}`);
  }

  return {
    ...options,
    year: Number(options.year),
    month: String(numericMonth).padStart(2, "0"),
    input: options.input ? path.resolve(options.input) : null,
    subfolders,
  };
}

async function pathExists(targetPath) {
  try {
    await access(targetPath);
    return true;
  } catch {
    return false;
  }
}

function loadConfiguration({ requireCredentials }) {
  const dotenvResult = dotenv.config({ path: environmentPath, quiet: true });
  if (dotenvResult.error) {
    throw new Error(`Could not read ${environmentPath}.`);
  }

  const names = [
    "R2_ACCOUNT_ID",
    "R2_ACCESS_KEY_ID",
    "R2_SECRET_ACCESS_KEY",
    "R2_BUCKET",
    "R2_PUBLIC_BASE_URL",
  ];
  const requiredNames = requireCredentials
    ? names
    : ["R2_PUBLIC_BASE_URL"];
  const missing = requiredNames.filter((name) => !process.env[name]?.trim());

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

async function findInputImages(inputDirectory) {
  const inputStats = await stat(inputDirectory).catch(() => null);
  if (!inputStats?.isDirectory()) {
    throw new Error(`Input directory does not exist: ${inputDirectory}`);
  }

  const entries = await readdir(inputDirectory, { withFileTypes: true });
  const nestedDirectories = entries.filter((entry) => entry.isDirectory());
  if (nestedDirectories.length > 0) {
    throw new Error(
      `Input must be flat; found nested directory: ${nestedDirectories[0].name}`,
    );
  }

  const images = entries
    .filter(
      (entry) =>
        entry.isFile() &&
        supportedExtensions.has(path.extname(entry.name).toLowerCase()),
    )
    .map((entry) => entry.name)
    .sort((left, right) => naturalSort.compare(left, right));

  if (images.length === 0) {
    throw new Error("No JPG, JPEG, or PNG files were found.");
  }

  return images;
}

async function processImage({
  filename,
  index,
  inputDirectory,
  temporaryDirectory,
  year,
  month,
  publicBaseUrl,
  prefixWidth,
  keyPrefix,
  temporaryIndex,
}) {
  const inputPath = path.join(inputDirectory, filename);
  const originalStats = await stat(inputPath);
  const inputExtension = path.extname(filename).toLowerCase();
  const inputMetadata = await sharp(inputPath).metadata();
  const isJpegInput = [".jpg", ".jpeg"].includes(inputExtension);
  const needsRotation =
    inputMetadata.orientation && inputMetadata.orientation !== 1;
  const fitsDimensionLimit =
    (inputMetadata.width || 0) <= maxImageDimension &&
    (inputMetadata.height || 0) <= maxImageDimension;
  const canUseOriginalImmediately =
    isJpegInput &&
    originalStats.size <= webReadyFileSize &&
    fitsDimensionLimit &&
    !inputMetadata.exif &&
    !needsRotation;
  // Opaque PNG photos are dramatically smaller as high-quality JPEGs. Preserve
  // PNG only when its alpha channel is actually needed.
  let outputExtension =
    inputExtension === ".png" && inputMetadata.hasAlpha ? "png" : "jpg";
  let temporaryPath = path.join(
    temporaryDirectory,
    `${String(temporaryIndex + 1).padStart(5, "0")}.${outputExtension}`,
  );

  function createPipeline(jpegQuality = 90) {
    let pipeline = sharp(inputPath, { failOn: "warning" })
      .rotate()
      .resize({
        width: maxImageDimension,
        height: maxImageDimension,
        fit: "inside",
        withoutEnlargement: true,
      });

    if (outputExtension === "png") {
      return pipeline.png({
        compressionLevel: 9,
        effort: 10,
        palette: true,
        quality: 90,
      });
    }

    return pipeline.jpeg({
      quality: jpegQuality,
      progressive: true,
      mozjpeg: true,
    });
  }

  let info;
  if (canUseOriginalImmediately) {
    await copyFile(inputPath, temporaryPath);
    info = {
      size: originalStats.size,
      width: inputMetadata.width,
      height: inputMetadata.height,
    };
  } else {
    info = await createPipeline(90).toFile(temporaryPath);
  }

  if (
    !canUseOriginalImmediately &&
    isJpegInput &&
    info.size >= originalStats.size
  ) {
    info = await createPipeline(85).toFile(temporaryPath);
  }

  // Never enlarge an already optimized file. Retain it only when doing so
  // cannot preserve EXIF metadata or skip a required orientation correction.
  if (
    info.size >= originalStats.size &&
    !inputMetadata.exif &&
    !needsRotation
  ) {
    if (inputExtension === ".png" && outputExtension === "jpg") {
      const originalTemporaryPath = path.join(
        temporaryDirectory,
        `${String(temporaryIndex + 1).padStart(5, "0")}.png`,
      );
      await copyFile(inputPath, originalTemporaryPath);
      await rm(temporaryPath, { force: true });
      temporaryPath = originalTemporaryPath;
      outputExtension = "png";
    } else {
      await copyFile(inputPath, temporaryPath);
    }
    info = {
      ...info,
      size: originalStats.size,
      width: inputMetadata.width,
      height: inputMetadata.height,
    };
  }
  const processedBytes = await readFile(temporaryPath);
  const digest = createHash("sha256").update(processedBytes).digest("hex");
  const hash = digest.slice(0, 10);
  const position = String(index + 1).padStart(prefixWidth, "0");
  const slug = slugify(filename);
  const objectFilename = `${position}-${slug}-${hash}.${outputExtension}`;
  const key = `${keyPrefix}/${objectFilename}`;

  const orientation = orientationOf(info.width, info.height);

  // The archival object: the full-resolution image, kept as the recoverable source
  // and as the <picture> fallback for browsers without WebP support.
  const original = {
    role: "original",
    processedSize: info.size,
    contentType: outputExtension === "png" ? "image/png" : "image/jpeg",
    sha256: digest,
    temporaryPath,
    key,
    publicUrl: `${publicBaseUrl}/${key}`,
  };

  // The display variants. Widths clamp to the source so a small original is never
  // upscaled — a 768px-wide photo yields 350/700/768 rather than a fake 1050.
  const plan = planVariants(orientation, info.width);
  const clamped = plan.some((entry) => entry.clamped);
  const variants = [];
  for (const { density, width } of plan) {
    const variantPath = path.join(
      temporaryDirectory,
      `${String(temporaryIndex + 1).padStart(5, "0")}-${density}x.webp`,
    );
    // Re-derived from the source rather than the archival copy so a variant never
    // inherits the archival JPEG's generation loss.
    const variantInfo = await encodeVariant(
      sharp(inputPath, { failOn: "warning" })
        .rotate()
        .resize({ width, withoutEnlargement: true }),
    ).toFile(variantPath);

    const variantDigest = createHash("sha256")
      .update(await readFile(variantPath))
      .digest("hex");
    const variantKey =
      `${keyPrefix}/${position}-${slug}-${variantDigest.slice(0, 10)}-${variantInfo.width}w.webp`;

    variants.push({
      role: `${density}x`,
      density,
      width: variantInfo.width,
      height: variantInfo.height,
      processedSize: variantInfo.size,
      contentType: "image/webp",
      sha256: variantDigest,
      temporaryPath: variantPath,
      key: variantKey,
      publicUrl: `${publicBaseUrl}/${variantKey}`,
    });
  }

  return {
    filename,
    originalSize: originalStats.size,
    processedSize: info.size,
    width: info.width,
    height: info.height,
    orientation,
    original,
    variants,
    clamped,
    // Every object this photo contributes to R2, in upload order.
    objects: [original, ...variants],
    // Kept for the migration path, which rewrites `filename` values in place.
    contentType: original.contentType,
    temporaryPath,
    key,
    publicUrl: original.publicUrl,
  };
}

function printPreview(groups, options, outputPath) {
  console.log(`\nGallery ${options.year}/${options.month}`);
  console.log(`Output: ${outputPath}`);
  console.log("\nDisplay order:");

  groups.forEach((group) => {
    console.log(
      `\n${group.kind === "root" ? "Main photos" : `Subfolder: ${group.name}`}`,
    );
    console.log(`Input: ${group.inputDirectory}`);
    group.images.forEach((image, index) => {
      const variants = image.variants
        .map(
          (variant) =>
            `${variant.density}x ${variant.width}w ${formatBytes(variant.processedSize)}`,
        )
        .join(", ");
      console.log(
        `${String(index + 1).padStart(3, " ")}. ${image.filename} -> ` +
          `${image.width}x${image.height}, ${image.orientation}, ` +
          `archive ${formatBytes(image.processedSize)}` +
          `${image.clamped ? " [clamped]" : ""}\n     ${variants}`,
      );
    });
  });

  const images = groups.flatMap((group) => group.images);
  const originalTotal = images.reduce(
    (total, image) => total + image.originalSize,
    0,
  );
  const archiveTotal = images.reduce(
    (total, image) => total + image.processedSize,
    0,
  );
  const variantTotal = images.reduce(
    (total, image) =>
      total +
      image.variants.reduce((sum, variant) => sum + variant.processedSize, 0),
    0,
  );
  const clampedCount = images.filter((image) => image.clamped).length;

  console.log(
    `\n${images.length} photos, ${images.length * 4} objects` +
      `\n  originals: ${formatBytes(originalTotal)} -> ${formatBytes(archiveTotal)} (archived)` +
      `\n  variants:  ${formatBytes(variantTotal)} at q${variantQuality}`,
  );

  if (clampedCount > 0) {
    console.log(
      `\nNote: ${clampedCount} photo(s) are narrower than their 3x target, so their ` +
        "top variant is the source width. Nothing was upscaled.",
    );
  }
}

async function confirmUpload(options) {
  if (options.yes) {
    return;
  }

  if (!process.stdin.isTTY) {
    throw new Error("Confirmation requires a terminal. Re-run with --yes.");
  }

  const prompt = createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  const answer = await prompt.question("\nUpload these photos? [y/N] ");
  prompt.close();

  if (!["y", "yes"].includes(answer.trim().toLowerCase())) {
    throw new Error("Upload cancelled.");
  }
}

function createS3Client(configuration) {
  return new S3Client({
    region: "auto",
    endpoint: `https://${configuration.accountId}.r2.cloudflarestorage.com`,
    credentials: {
      accessKeyId: configuration.accessKeyId,
      secretAccessKey: configuration.secretAccessKey,
    },
  });
}

async function uploadObject(client, configuration, object) {
  try {
    const existing = await client.send(
      new HeadObjectCommand({
        Bucket: configuration.bucket,
        Key: object.key,
      }),
    );

    if (existing.ContentLength !== object.processedSize) {
      throw new Error(
        `Existing object has an unexpected size: ${object.key}`,
      );
    }

    return "skipped";
  } catch (error) {
    const status = error?.$metadata?.httpStatusCode;
    const notFound =
      status === 404 ||
      error?.name === "NotFound" ||
      error?.name === "NoSuchKey";

    if (!notFound) {
      throw error;
    }
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

// Downloads the object and compares its SHA-256 against the bytes we generated. A
// HEAD with the right length proves an object exists at the right size; only hashing
// the body proves the right bytes are actually being served.
async function verifyPublicObject(object) {
  const response = await fetch(object.publicUrl, { redirect: "follow" });

  if (!response.ok) {
    throw new Error(
      `Public verification failed (${response.status}): ${object.publicUrl}`,
    );
  }

  const contentType = response.headers.get("content-type") || "";
  if (contentType !== object.contentType) {
    throw new Error(
      `Public URL returned ${contentType || "no content type"}, expected ` +
        `${object.contentType}: ${object.publicUrl}`,
    );
  }

  const body = Buffer.from(await response.arrayBuffer());
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

function parseExistingGalleryStructure(source) {
  const sourceFile = ts.createSourceFile(
    "gallery.ts",
    source,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TS,
  );
  let folderObject;

  function visit(node) {
    if (
      ts.isVariableDeclaration(node) &&
      ts.isIdentifier(node.name) &&
      node.name.text === "folder" &&
      node.initializer &&
      ts.isObjectLiteralExpression(node.initializer)
    ) {
      folderObject = node.initializer;
      return;
    }
    ts.forEachChild(node, visit);
  }
  visit(sourceFile);

  if (!folderObject) {
    throw new Error("Could not parse the existing gallery folder data.");
  }

  function getProperty(object, propertyName) {
    return object.properties.find(
      (property) =>
        ts.isPropertyAssignment(property) &&
        ((ts.isIdentifier(property.name) &&
          property.name.text === propertyName) ||
          (ts.isStringLiteral(property.name) &&
            property.name.text === propertyName)),
    );
  }

  function getPhotosCount(object) {
    const photosProperty = getProperty(object, "photos");
    if (
      !photosProperty ||
      !ts.isPropertyAssignment(photosProperty) ||
      !ts.isArrayLiteralExpression(photosProperty.initializer)
    ) {
      return 0;
    }
    return photosProperty.initializer.elements.length;
  }

  const subfoldersProperty = getProperty(folderObject, "subfolders");
  const subfolders = [];
  if (
    subfoldersProperty &&
    ts.isPropertyAssignment(subfoldersProperty) &&
    ts.isArrayLiteralExpression(subfoldersProperty.initializer)
  ) {
    for (const element of subfoldersProperty.initializer.elements) {
      if (!ts.isObjectLiteralExpression(element)) {
        throw new Error("Could not parse an existing gallery subfolder.");
      }
      const nameProperty = getProperty(element, "name");
      if (
        !nameProperty ||
        !ts.isPropertyAssignment(nameProperty) ||
        !ts.isStringLiteral(nameProperty.initializer)
      ) {
        throw new Error("Could not parse an existing subfolder name.");
      }
      subfolders.push({
        name: nameProperty.initializer.text,
        photoCount: getPhotosCount(element),
      });
    }
  }

  return {
    rootPhotoCount: getPhotosCount(folderObject),
    subfolders,
  };
}

async function main() {
  let temporaryDirectory;

  try {
    const options = normalizeAndValidateOptions(
      parseArguments(process.argv.slice(2)),
    );

    if (options.help) {
      printUsage();
      return;
    }

    const outputPath = path.join(
      repositoryRoot,
      "src",
      "data",
      "gallery",
      "photos",
      String(options.year),
      `${options.month}.ts`,
    );
    const outputExists = await pathExists(outputPath);
    if (outputExists && !options.force) {
      throw new Error(
        `Gallery data already exists: ${outputPath}\n` +
          "Use --force to migrate it while preserving its metadata.",
      );
    }
    const existingData = outputExists
      ? await readFile(outputPath, "utf8")
      : null;

    const configuration = loadConfiguration({
      requireCredentials: !options.dryRun,
    });
    const inputGroups = [];
    if (options.input) {
      inputGroups.push({
        kind: "root",
        name: null,
        inputDirectory: options.input,
        keyPrefix: `gallery/${options.year}/${options.month}`,
      });
    }
    options.subfolders.forEach((subfolderPath) => {
      const name = path.basename(subfolderPath);
      inputGroups.push({
        kind: "subfolder",
        name,
        inputDirectory: subfolderPath,
        keyPrefix: `gallery/${options.year}/${options.month}/${slugify(name)}`,
      });
    });

    for (const group of inputGroups) {
      group.filenames = await findInputImages(group.inputDirectory);
    }
    const filenames = inputGroups.flatMap((group) => group.filenames);
    if (existingData) {
      const existingStructure = parseExistingGalleryStructure(existingData);
      const rootGroup = inputGroups.find((group) => group.kind === "root");
      const subfolderGroups = inputGroups.filter(
        (group) => group.kind === "subfolder",
      );
      const rootInputCount = rootGroup?.filenames.length || 0;

      if (rootInputCount !== existingStructure.rootPhotoCount) {
        throw new Error(
          `Existing main photos: ${existingStructure.rootPhotoCount}; main input photos: ${rootInputCount}.\n` +
            "The counts must match so metadata can be preserved safely.",
        );
      }
      if (subfolderGroups.length !== existingStructure.subfolders.length) {
        throw new Error(
          `Existing subfolders: ${existingStructure.subfolders.length}; --subfolder flags: ${subfolderGroups.length}.\n` +
            "Provide every subfolder path in the existing display order.",
        );
      }
      subfolderGroups.forEach((group, index) => {
        const existingSubfolder = existingStructure.subfolders[index];
        if (group.filenames.length !== existingSubfolder.photoCount) {
          throw new Error(
            `Subfolder ${index + 1} (${existingSubfolder.name}) contains ` +
              `${existingSubfolder.photoCount} existing photos, but its input path contains ` +
              `${group.filenames.length}.\nThe counts must match so metadata can be preserved safely.`,
          );
        }
        group.name = existingSubfolder.name;
        group.keyPrefix =
          `gallery/${options.year}/${options.month}/${slugify(existingSubfolder.name)}`;
      });

      const existingPhotoCount = countFilenameEntries(existingData);
      if (existingPhotoCount !== filenames.length) {
        throw new Error(
          `Existing data contains ${existingPhotoCount} photos, but the input folder contains ${filenames.length}.\n` +
            "The counts must match so metadata can be preserved safely.",
        );
      }
    }
    temporaryDirectory = await mkdtemp(
      path.join(tmpdir(), "doctakim-gallery-"),
    );
    const processedGroups = [];
    let temporaryIndex = 0;

    console.log(`Processing ${filenames.length} photos...`);
    for (const group of inputGroups) {
      const images = [];
      const prefixWidth = Math.max(
        3,
        String(group.filenames.length).length,
      );
      for (let index = 0; index < group.filenames.length; index += 1) {
        images.push(
          await processImage({
            filename: group.filenames[index],
            index,
            inputDirectory: group.inputDirectory,
            temporaryDirectory,
            year: options.year,
            month: options.month,
            publicBaseUrl: configuration.publicBaseUrl,
            prefixWidth,
            keyPrefix: group.keyPrefix,
            temporaryIndex,
          }),
        );
        temporaryIndex += 1;
      }
      processedGroups.push({ ...group, images });
    }
    const processedImages = processedGroups.flatMap((group) => group.images);

    printPreview(processedGroups, options, outputPath);
    const renderedData = existingData
      ? replaceExistingFilenames(existingData, processedImages)
      : renderGalleryData(processedGroups, options.year, options.month);

    if (options.dryRun) {
      const previewLineCount = 24;
      const lines = renderedData.split("\n");
      console.log(`\n${outputPath} would contain:\n`);
      console.log(lines.slice(0, previewLineCount).join("\n"));
      if (lines.length > previewLineCount) {
        console.log(`... ${lines.length - previewLineCount} more lines`);
      }
      console.log("\nDry run complete. Nothing was uploaded or written.");
      return;
    }

    if (outputExists) {
      console.log(
        "\nMigration mode: only filename values will change; existing captions, " +
          "orientation, links, maxW, and subfolder structure will be preserved.",
      );
    }
    await confirmUpload(options);

    const client = createS3Client(configuration);
    // Originals and all three variants, uploaded and verified as one unit before the
    // month's data file is touched.
    const uploadTargets = processedImages.flatMap((image) => image.objects);
    console.log(`\nUploading ${uploadTargets.length} objects to R2...`);
    const uploadResults = await mapWithConcurrency(
      uploadTargets,
      4,
      async (object, index) => {
        const result = await uploadObject(client, configuration, object);
        console.log(
          `[${index + 1}/${uploadTargets.length}] ${result}: ${object.key}`,
        );
        return result;
      },
    );

    console.log("\nVerifying public URLs (sha256)...");
    await mapWithConcurrency(uploadTargets, 4, verifyPublicObject);

    // Only now, with every object confirmed present and byte-correct, is the month's
    // data rewritten.
    await mkdir(path.dirname(outputPath), { recursive: true });
    await writeFile(outputPath, renderedData, "utf8");

    const uploaded = uploadResults.filter(
      (result) => result === "uploaded",
    ).length;
    const skipped = uploadResults.length - uploaded;
    console.log(
      `\nDone: ${uploaded} uploaded, ${skipped} already present.\nGenerated ${outputPath}`,
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
