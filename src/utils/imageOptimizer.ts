/**
 * Optimizes Cloudinary image URLs by injecting transformation parameters.
 * 
 * @param url The original image URL
 * @returns The optimized URL
 */
export const getOptimizedImageUrl = (url: string): string => {
    if (!url || !url.includes('cloudinary.com')) {
        return url;
    }

    // Check if the URL already has transformations
    // Cloudinary URLs usually look like: https://res.cloudinary.com/<cloud_name>/image/upload/<transformations>/v<version>/<public_id>
    // or https://res.cloudinary.com/<cloud_name>/image/upload/v<version>/<public_id>

    // We want to inject f_auto,q_auto:best,fl_progressive into the upload path

    const uploadIndex = url.indexOf('/upload/');
    if (uploadIndex === -1) {
        return url;
    }

    const prefix = url.substring(0, uploadIndex + 8); // include '/upload/'
    const suffix = url.substring(uploadIndex + 8);

    // Construct the transformation string
    // f_auto: Best format (WebP/AVIF)
    // q_auto:best: Highest quality optimization (visually lossless)
    // fl_progressive: Progressive loading (blurry to sharp)
    const transformations = `f_auto,q_auto:best,fl_progressive`;

    return `${prefix}${transformations}/${suffix}`;
};
