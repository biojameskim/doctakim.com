export interface Photo {
    filename: string;
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
