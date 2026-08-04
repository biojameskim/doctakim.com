// Pure helpers for the gallery uploader: variant planning and data-file rendering,
// kept free of sharp, the S3 client and any filesystem access.

import path from "node:path";

// Display widths for the WebP variants the gallery actually renders, indexed by
// density. The gallery lays photos out at a fixed 350px (vertical) / 450px
// (horizontal), so these are just that width times 1x/2x/3x — there is no fluid
// range to cover, only screen density.
const variantWidthsByOrientation = {
  v: [350, 700, 1050],
  h: [450, 900, 1350],
};

// Encoding settings for the display variants.
//
// A photo shown at 350 CSS px used to be a 3024px JPEG that the browser downscaled,
// which supersampled it for free — averaging ~4x4 pixel blocks. A purpose-encoded
// 700px file gets none of that, so it needs a light unsharp mask to match. Sigma is
// kept low deliberately: heavier sharpening measurably worsens colour fidelity
// against a lossless reference (RMSE 0.043 at sigma 0.6 versus 0.012 at 0.4).
//
// smartSubsample keeps full chroma resolution instead of WebP's default 4:2:0. It
// costs a few percent in size and is the single biggest lever on colour accuracy —
// with it, these settings are truer to the original than the old q85 output was.
export const variantQuality = 92;
const variantSharpenSigma = 0.4;
const variantSmartSubsample = true;

// Applies the shared encode settings to a sharp pipeline that has already been
// resized. Kept here so both scripts encode identically.
export function encodeVariant(pipeline) {
  return pipeline
    .sharpen({ sigma: variantSharpenSigma })
    .webp({ quality: variantQuality, smartSubsample: variantSmartSubsample });
}

export function orientationOf(width, height) {
  return width >= height ? "h" : "v";
}

// Widths clamp to the source so a small original is never upscaled: a 768px-wide
// photo yields 350/700/768 rather than a fake 1050.
export function planVariants(orientation, sourceWidth) {
  return variantWidthsByOrientation[orientation].map((target, index) => ({
    density: index + 1,
    width: Math.min(target, sourceWidth),
    clamped: sourceWidth < target,
  }));
}

export function slugify(filename) {
  const stem = path.basename(filename, path.extname(filename));
  const slug = stem
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);

  return slug || "photo";
}

export function formatBytes(bytes) {
  const units = ["B", "KB", "MB", "GB"];
  let value = bytes;
  let unitIndex = 0;

  while (value >= 1024 && unitIndex < units.length - 1) {
    value /= 1024;
    unitIndex += 1;
  }

  return `${value.toFixed(unitIndex === 0 ? 0 : 1)} ${units[unitIndex]}`;
}

// The `responsive` block for one photo. `filename` carries the 1x variant, so only
// 2x and 3x appear here alongside the archival original and intrinsic dimensions.
function renderResponsiveBlock(image, indentation) {
  const [, twoX, threeX] = image.variants;
  return `${indentation}responsive: {
${indentation}    src2x: ${JSON.stringify(twoX.publicUrl)},
${indentation}    src3x: ${JSON.stringify(threeX.publicUrl)},
${indentation}    originalSrc: ${JSON.stringify(image.original.publicUrl)},
${indentation}    intrinsicWidth: ${image.width},
${indentation}    intrinsicHeight: ${image.height}
${indentation}}`;
}

function renderPhotoEntries(images, indentation) {
  return images
    .map(
      (image) => `${indentation}{
${indentation}    filename: ${JSON.stringify(image.variants[0].publicUrl)},
${renderResponsiveBlock(image, `${indentation}    `)},
${indentation}    caption: "",
${indentation}    orientation: "${image.orientation}"
${indentation}}`,
    )
    .join(",\n");
}

export function renderGalleryData(groups, year, month) {
  const rootImages =
    groups.find((group) => group.kind === "root")?.images || [];
  const subfolderGroups = groups.filter(
    (group) => group.kind === "subfolder",
  );
  const subfolders =
    subfolderGroups.length > 0
      ? `,
    subfolders: [
${subfolderGroups
  .map(
    (group) => `        {
            name: ${JSON.stringify(group.name)},
            photos: [
${renderPhotoEntries(group.images, "                ")}
            ]
        }`,
  )
  .join(",\n")}
    ]`
      : "";

  return `import type { PhotoFolder } from "../../types";

export const folder: PhotoFolder = {
    year: ${year},
    month: "${month}",
    photos: [
${renderPhotoEntries(rootImages, "        ")}
    ]${subfolders}
};
`;
}

export function countFilenameEntries(source) {
  return Array.from(
    source.matchAll(/\bfilename:\s*"(?:\\.|[^"\\])*"/g),
  ).length;
}

export function replaceExistingFilenames(source, images) {
  // Drop any responsive block from an earlier run so re-running is idempotent. The
  // blocks we generate contain no nested braces, so [^{}] cannot escape one.
  const withoutResponsive = source.replace(
    /,?\n[ \t]*responsive:\s*\{[^{}]*\}/g,
    "",
  );

  // Check the count before rewriting anything, so a mismatch fails with a clear
  // message rather than a TypeError partway through the substitution.
  const existingCount = countFilenameEntries(withoutResponsive);
  if (existingCount !== images.length) {
    throw new Error(
      `Expected to replace ${images.length} filenames, found ${existingCount}.`,
    );
  }

  let imageIndex = 0;
  const updated = withoutResponsive.replace(
    /([ \t]*)(\bfilename:\s*)"(?:\\.|[^"\\])*"/g,
    (_match, indentation, prefix) => {
      const image = images[imageIndex];
      imageIndex += 1;
      // The comma that followed the old filename value stays in the source and ends
      // up after the responsive block, which is where it belongs.
      return (
        `${indentation}${prefix}${JSON.stringify(image.variants[0].publicUrl)},\n` +
        renderResponsiveBlock(image, indentation)
      );
    },
  );

  if (imageIndex !== images.length) {
    throw new Error(
      `Expected to replace ${images.length} filenames, replaced ${imageIndex}.`,
    );
  }

  return updated;
}
