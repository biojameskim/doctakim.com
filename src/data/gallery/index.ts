import type { PhotoFolder } from "./types";

export type { Photo, PhotoFolder, Subfolder, ResponsivePhotoSources } from "./types";

// Auto-load every month file (photos/<year>/<month>.ts) — no manual wiring.
// To add a month, drop in a new "photos/<year>/<month>.ts" that exports `folder`.
// (webpack's require.context; the CRA equivalent of Vite's import.meta.glob)
const ctx = (require as any).context("./photos", true, /^\.\/\d{4}\/\d{2}\.ts$/);

export const photoFolders: PhotoFolder[] = ctx
    .keys()
    .map((key: string) => ctx(key).folder as PhotoFolder)
    // newest first: year desc, then month desc
    .sort((a: PhotoFolder, b: PhotoFolder) =>
        b.year - a.year || b.month.localeCompare(a.month)
    );
