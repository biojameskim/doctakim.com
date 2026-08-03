/**
 * Tests for the gallery uploader's pure data helpers, which live in
 * scripts/media/gallery-data.mjs. The test sits under src/ because Create React App
 * pins Jest's `roots` to <rootDir>/src and does not allow overriding it, so a test
 * placed beside the module it covers would never run.
 *
 * @jest-environment node
 */
import {
  countFilenameEntries,
  orientationOf,
  planVariants,
  renderGalleryData,
  replaceExistingFilenames,
  slugify,
} from "../../scripts/media/gallery-data.mjs";

// Minimal stand-in for a processed image, matching the shape processImage returns.
const makeImage = ({ name, width, height, orientation }) => {
  const url = (suffix) => `https://images.example.com/${name}-${suffix}`;
  return {
    width,
    height,
    orientation,
    original: { publicUrl: url("aaaaaaaaaa.jpg") },
    variants: [
      { density: 1, publicUrl: url("bbbbbbbbbb-350w.webp") },
      { density: 2, publicUrl: url("cccccccccc-700w.webp") },
      { density: 3, publicUrl: url("dddddddddd-1050w.webp") },
    ],
  };
};

const portrait = makeImage({
  name: "one",
  width: 3024,
  height: 4032,
  orientation: "v",
});
const landscape = makeImage({
  name: "two",
  width: 4032,
  height: 3024,
  orientation: "h",
});

describe("orientation", () => {
  it("treats squares as horizontal", () => {
    expect(orientationOf(1000, 1000)).toBe("h");
    expect(orientationOf(1001, 1000)).toBe("h");
    expect(orientationOf(1000, 1001)).toBe("v");
  });
});

describe("variant planning", () => {
  it("uses the vertical ladder for portrait sources", () => {
    expect(planVariants("v", 3024).map((v) => v.width)).toEqual([350, 700, 1050]);
  });

  it("uses the horizontal ladder for landscape sources", () => {
    expect(planVariants("h", 4032).map((v) => v.width)).toEqual([450, 900, 1350]);
  });

  it("never upscales a source narrower than its top rung", () => {
    // The one real case in the library: a 768x1024 photo whose 3x target is 1050.
    const plan = planVariants("v", 768);

    expect(plan.map((v) => v.width)).toEqual([350, 700, 768]);
    expect(plan.map((v) => v.clamped)).toEqual([false, false, true]);
  });

  it("clamps every rung above the source width", () => {
    const plan = planVariants("h", 300);

    expect(plan.map((v) => v.width)).toEqual([300, 300, 300]);
    expect(plan.every((v) => v.clamped)).toBe(true);
  });

  it("reports no clamping when the source clears every rung", () => {
    expect(planVariants("v", 4032).some((v) => v.clamped)).toBe(false);
  });
});

describe("slugify", () => {
  it("falls back when a name has no usable characters", () => {
    expect(slugify("___.jpg")).toBe("photo");
  });

  it("normalises accents and separators", () => {
    expect(slugify("Café Photo (2).JPG")).toBe("cafe-photo-2");
  });
});

describe("rendering a new month", () => {
  const rendered = renderGalleryData(
    [
      { kind: "root", images: [portrait] },
      { kind: "subfolder", name: "korea", images: [landscape] },
    ],
    2026,
    "07",
  );

  it("puts the 1x variant in filename and the rest in responsive", () => {
    expect(rendered).toContain(
      'filename: "https://images.example.com/one-bbbbbbbbbb-350w.webp"',
    );
    expect(rendered).toContain(
      'src2x: "https://images.example.com/one-cccccccccc-700w.webp"',
    );
    expect(rendered).toContain(
      'src3x: "https://images.example.com/one-dddddddddd-1050w.webp"',
    );
  });

  it("records the archival original and intrinsic dimensions", () => {
    expect(rendered).toContain(
      'originalSrc: "https://images.example.com/one-aaaaaaaaaa.jpg"',
    );
    expect(rendered).toContain("intrinsicWidth: 3024");
    expect(rendered).toContain("intrinsicHeight: 4032");
  });

  it("keeps root and subfolder photos in their own sections", () => {
    const subfolderIndex = rendered.indexOf("subfolders:");

    expect(rendered.indexOf("one-bbbbbbbbbb")).toBeLessThan(subfolderIndex);
    expect(rendered.indexOf("two-bbbbbbbbbb")).toBeGreaterThan(subfolderIndex);
    expect(rendered).toContain('name: "korea"');
  });

  it("emits one responsive block per photo", () => {
    expect(rendered.match(/responsive: \{/g)).toHaveLength(2);
    expect(countFilenameEntries(rendered)).toBe(2);
  });
});

describe("migrating an existing month", () => {
  const existing = `import type { PhotoFolder } from "../../types";

export const folder: PhotoFolder = {
    year: 2026,
    month: "07",
    photos: [
            {
                filename: "https://images.example.com/old-one.jpg",
                caption: "a caption with \\"quotes\\" in it",
                orientation: "v"
            },
            {
                filename: "https://images.example.com/old-two.jpg",
                caption: "linked",
                captionLink: "/blog/post",
                orientation: "h",
                maxW: "500px"
            }
    ]
};
`;

  const migrated = replaceExistingFilenames(existing, [portrait, landscape]);

  it("rewrites filenames to the 1x variants", () => {
    expect(migrated).toContain(
      'filename: "https://images.example.com/one-bbbbbbbbbb-350w.webp"',
    );
    expect(migrated).not.toContain("old-one.jpg");
    expect(migrated).not.toContain("old-two.jpg");
  });

  it("preserves captions, escaped quotes, links and maxW", () => {
    expect(migrated).toContain('caption: "a caption with \\"quotes\\" in it"');
    expect(migrated).toContain('captionLink: "/blog/post"');
    expect(migrated).toContain('maxW: "500px"');
    expect(migrated).toContain('orientation: "h"');
  });

  it("keeps the archival original reachable after migration", () => {
    expect(migrated).toContain(
      'originalSrc: "https://images.example.com/one-aaaaaaaaaa.jpg"',
    );
  });

  it("is idempotent across repeated runs", () => {
    const again = replaceExistingFilenames(migrated, [portrait, landscape]);

    expect(again).toBe(migrated);
    expect(again.match(/responsive: \{/g)).toHaveLength(2);
  });

  it("refuses to rewrite when the photo count does not match", () => {
    // Fails before touching the source rather than throwing partway through.
    expect(() => replaceExistingFilenames(existing, [portrait])).toThrow(
      /Expected to replace 1 filenames, found 2/,
    );
  });
});
