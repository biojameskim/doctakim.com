/**
 * Centralized styling configuration for blog entries (stories and thoughts)
 * Modify these values to update font sizes across all blog entries
 */

export const BLOG_STYLES = {
    // Header container: Contains title and date
    headerContainer: {
        maxW: { base: "90%", md: "850px" }, // Controls width of Title + Date
        mx: "auto",
        mt: "10vh",
        px: "1rem",
        pb: "14vh", // Spacing ABOVE the separator line
    },

    // Separator line: Independently adjustable width
    separatorLine: {
        maxW: { base: "90%", md: "750px" }, // Controls width of JUST the separator line
        mx: "auto",
        borderBottom: "2px solid",   // Line thickness and style
        borderColor: "gray.300",     // Line color
        mb: "18vh",                  // Spacing BELOW the line (between line and body)
    },

    // Title styling
    title: {
        fontSize: { base: '3rem', md: "2.7rem" },
        textAlign: "center" as const,
        fontWeight: "bold" as const,
        mb: "2vh",
    },

    // Date styling
    date: {
        fontSize: "2xl",
        align: "center" as const,
        color: "gray.500",
        fontWeight: "regular",
        fontStyle: "italic",
    },

    // Body text container styling
    bodyContainer: {
        spacing: 7,
        width: { base: "85%", md: "50%" },
        fontSize: { base: "16", md: "lg" },
        lineHeight: 1.8,
        fontWeight: "medium"
    },
} as const;
