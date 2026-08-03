// Set by the gallery uploader once a photo has been migrated to WebP variants.
// Grouped so a migrated photo can never be half-described (a 2x source with no 3x,
// an intrinsic width with no height). Absent until the photo's month is backfilled,
// which is what lets the library migrate one month at a time.
export interface ResponsivePhotoSources {
    src2x: string;
    src3x: string;
    // The pre-migration original. Kept so variants can be regenerated later without
    // reconstructing URLs from naming conventions, and used as the <picture> fallback
    // for browsers without WebP support.
    originalSrc: string;
    intrinsicWidth: number;
    intrinsicHeight: number;
}

export interface Photo {
    // The original URL before migration; the 1x WebP after.
    filename: string;
    responsive?: ResponsivePhotoSources;
    caption?: string;
    captionLink?: string;
    orientation: "v" | "h" | "override";
    maxW?: string;
}

export interface PhotoFolder {
    year: number;
    month: string;
    photos: Photo[];
    subfolders?: Subfolder[];
}

export interface Subfolder {
    name: string;
    url?: string;
    photos?: Photo[];
}
