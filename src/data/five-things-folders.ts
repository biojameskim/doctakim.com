export interface Photo {
    filename: string;
    caption?: string;
    orientation: "v" | "h" | "override";
    maxW?: string;
}

export interface PhotoFolder {
    year: number;
    month: string;
    photos: Photo[];
}

export const photoFolders: PhotoFolder[] = [
    {
        year: 2025,
        month: "11",
        photos: [
        ]
    }
];
