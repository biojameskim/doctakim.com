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

Review the displayed order, then enter `y`. The script optimizes copies, uploads
them to `gallery/YYYY/MM/`, verifies them, and creates the matching gallery data
file. Your original photos are unchanged.

Images are capped at 4096 pixels. JPEGs are tried at quality 90, then 85; when
the result is still larger, the original is kept if it has no EXIF metadata.
Web-ready JPEGs already under 5 MB skip re-encoding.

After it finishes, open the generated `src/data/gallery/photos/YYYY/MM.ts` file:

- Add each photo's caption manually.
- Review each auto-detected `orientation` and change it if needed.

Useful options:

```bash
# Preview only
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
