import { Helmet } from "react-helmet-async";

const SITE_URL = "https://doctakim.com";
const SITE_NAME = "biojameskim";
const DEFAULT_DESCRIPTION = "Hi, I'm James. Welcome to my website.";
const DEFAULT_IMAGE = `${SITE_URL}/images/profile/profile.jpg`;

interface SEOProps {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
    type?: "website" | "article";
}

// Supplies Open Graph / Twitter Card meta tags (description, image, url) for a page.
// Deliberately does not render <title> so it can be dropped into any page alongside
// that page's existing <Helmet><title>...</title></Helmet> without conflicting.
const SEO = ({ title, description, image, url, type = "website" }: SEOProps) => {
    const resolvedTitle = title || SITE_NAME;
    const resolvedDescription = description || DEFAULT_DESCRIPTION;
    const resolvedImage = image
        ? (image.startsWith("http") ? image : `${SITE_URL}${image}`)
        : DEFAULT_IMAGE;
    const resolvedUrl = url ? `${SITE_URL}${url}` : SITE_URL;

    return (
        <Helmet>
            <meta name="description" content={resolvedDescription} />

            <meta property="og:type" content={type} />
            <meta property="og:site_name" content={SITE_NAME} />
            <meta property="og:title" content={resolvedTitle} />
            <meta property="og:description" content={resolvedDescription} />
            <meta property="og:image" content={resolvedImage} />
            <meta property="og:url" content={resolvedUrl} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={resolvedTitle} />
            <meta name="twitter:description" content={resolvedDescription} />
            <meta name="twitter:image" content={resolvedImage} />
        </Helmet>
    );
};

export default SEO;
