# Gallery uploader

Put JPG, JPEG, or PNG photos in one flat folder. Filenames determine display
order, so use names such as `001-beach.jpg`, `002-family.jpg`.

Run:

```bash
npm run media:gallery -- \
  --year 2026 \
  --month 7 \
  --input "/absolute/path/to/photos"
```

Review the displayed order, then enter `y`. The script processes copies, uploads
them to `gallery/YYYY/MM/`, verifies them, and creates the matching gallery data
file. Your original photos are unchanged.

## What gets uploaded

Each photo produces **four objects**: one archival original plus three WebP
variants, which are what the gallery actually renders.

| Object | Vertical | Horizontal | Purpose |
| --- | --- | --- | --- |
| archive | up to 4096px | up to 4096px | recoverable source; `<picture>` fallback |
| 1x | 350px | 450px | `filename` in the data file |
| 2x | 700px | 900px | `responsive.src2x` |
| 3x | 1050px | 1350px | `responsive.src3x` |

The variant widths are the gallery's fixed layout width (350px vertical, 450px
horizontal) times screen density. Because the layout never goes full-bleed, only
density varies — which is why these are density descriptors (`1x/2x/3x`) rather
than a `sizes`-based srcset.

Variants are WebP at quality 85, derived from your input file rather than from
the archival copy so they never inherit its generation loss. Widths clamp to the
source: a photo narrower than its 3x target yields the source width instead of
an upscale, and the run reports how many were clamped.

The archive itself is capped at 4096 pixels. JPEGs are tried at quality 90, then
85; when the result is still larger, the original is kept if it has no EXIF
metadata. Web-ready JPEGs already under 5 MB skip re-encoding.

Every uploaded object is re-downloaded and compared against the SHA-256 of the
bytes that were generated, and a month's data file is written only after all of
its objects verify. A failed run can leave unreferenced objects in the bucket;
re-running reuses them rather than duplicating them.

After it finishes, open the generated `src/data/gallery/photos/YYYY/MM.ts` file:

- Add each photo's caption manually.
- Review each auto-detected `orientation` and change it if needed.

Useful options:

```bash
# Preview only. Prints the variant sizes and the data file it would write,
# without uploading or writing anything.
npm run media:gallery -- --year 2026 --month 7 --input "/path" --dry-run

# Migrate an existing month while preserving its captions and other metadata.
# The input photo count and order must match the existing data file.
npm run media:gallery -- --year 2026 --month 7 --input "/path" --force
```

Credentials belong in the repository-root `.env.media.local` file.

## Uploading media for a new blog

Keep the cover image separate from a flat folder containing every inline image.
Then run:

```bash
npm run media:blog -- \
  --cover "/absolute/path/to/cover.jpg" \
  --images "/absolute/path/to/blog-images" \
  --r2-path "blogs/stories/my-new-post"
```

Use the matching category in the destination prefix, such as
`blogs/thoughts/my-post` or `blogs/fiction/my-story`. R2 prefixes do not need to
be created in advance; uploading the first object creates the path.

The command:

- processes temporary copies without modifying the originals;
- caps images at 1600 pixels and strips metadata;
- encodes photos as progressive JPEG while preserving inline PNG screenshots;
- uploads readable, content-hashed filenames;
- downloads and byte-verifies every public object; and
- prints JSON containing the cover URL and each inline source-to-URL mapping.

Preview the optimization and final URLs without uploading:

```bash
npm run media:blog -- \
  --cover "/absolute/path/to/cover.jpg" \
  --images "/absolute/path/to/blog-images" \
  --r2-path "blogs/stories/my-new-post" \
  --dry-run
```

Add `--yes` to skip the interactive upload confirmation.

## Blog media migration

The blog migration command has an explicit manifest for the current stories,
thoughts, fiction covers, and birthday entries. It resizes live images to at
most 1600 pixels, preserves PNG for screenshots and collages, encodes photos as
progressive JPEG, converts the two MOV files to browser-ready MP4, and uploads
immutable hash-named objects beneath `blogs/`.

Always audit first:

```bash
npm run media:blogs -- --dry-run
```

Upload and save the verified source-to-R2 mapping:

```bash
npm run media:blogs -- --yes \
  --mapping-output /tmp/doctakim-blog-media-map.json
```

After every public object has been verified, apply the mapping to source links:

```bash
npm run media:blogs -- \
  --apply-links /tmp/doctakim-blog-media-map.json
```

Only after the site builds and the migrated pages have been checked, re-verify
all public bytes and move the migrated local originals out of the repository
into a timestamped recovery directory under `/tmp`:

```bash
npm run media:blogs -- \
  --cleanup /tmp/doctakim-blog-media-map.json
```

The command intentionally excludes known unused alternates. Those files remain
local and are neither uploaded nor deleted.

## Subfolders

Add each flat subfolder with a repeated absolute-path flag. Flag order becomes
display order:

```bash
npm run media:gallery -- \
  --year 2025 \
  --month 1 \
  --input "/absolute/path/to/main-photos" \
  --subfolder "/absolute/path/to/hawaii.zip" \
  --force
```

Use more `--subfolder` flags for more subfolders. Omit `--input` when the month
has no main photos. During migration, existing subfolder names and metadata are
preserved; the photo counts and order must match. For a new month, the local
subfolder directory name becomes its display name.

# Backfilling existing months

`backfill-gallery.mjs` adds WebP variants to photos already in R2. It pulls each
photo's archival original from its public URL, so the local import folders are
never needed.

```bash
# Inspect the whole library without touching anything
node scripts/media/backfill-gallery.mjs --all --dry-run \
  --mapping /tmp/mapping.json --emit-data /tmp/emitted

# Migrate the smallest month first
node scripts/media/backfill-gallery.mjs --smallest

# Then the rest
node scripts/media/backfill-gallery.mjs --all
```

Each photo produces three new objects; the original is left exactly as it is and
becomes `responsive.originalSrc`.

A month's data file is rewritten only after every one of its objects has
uploaded and verified by SHA-256. A failure leaves earlier months finished and
the failing month's data untouched. Re-running skips objects already in the
bucket at the expected size, so an interrupted run resumes cheaply, and running
it twice over an already-migrated month is a no-op.

`--dry-run` downloads and generates but uploads nothing. Pair it with
`--emit-data DIR` to write the rewritten month files somewhere harmless, and
`--mapping PATH` for a JSON record of every object, its size and its hash.
