import { useColorModeValue } from "@chakra-ui/react";

/**
 * Centralized styling configuration for blog entries (stories and thoughts)
 * Use this hook to get the styling values across all blog entries
 */

export const useBlogStyles = () => {
    const dateColor = useColorModeValue("gray.500", "gray.400");

    const BLOG_STYLES = {
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
            maxW: { base: "80%", md: "750px" }, // Controls width of JUST the separator line
            mx: "auto",
            borderBottom: "2px solid",   // Line thickness and style
            borderColor: "gray.300",     // Line color
            mb: "18vh",                  // Spacing BELOW the line (between line and body)
        },

        // Title styling
        title: {
            fontSize: { base: '1.8rem', md: "2rem" },
            textAlign: "center" as const,
            fontWeight: "medium" as const,
            mb: "2vh",
        },

        // Date styling
        date: {
            fontSize: { base: '1.3rem', md: "1.4rem" },
            align: "center" as const,
            color: dateColor,
            fontWeight: "normal",
            // fontStyle: "italic"
        },

        // Body text container styling
        bodyContainer: {
            spacing: 7,
            width: { base: "88%", md: "50%" },
            fontSize: { base: "0.9rem", md: "0.9rem" },
            lineHeight: 1.8,
            fontWeight: "normal"
        },
    } as const;

    return BLOG_STYLES;
};
