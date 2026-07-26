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
