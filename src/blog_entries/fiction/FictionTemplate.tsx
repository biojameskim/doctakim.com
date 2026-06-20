import { Heading, Text, Stack, Box } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { useBlogStyles } from "../blogStyles";

const FictionStory = () => {
    const BLOG_STYLES = useBlogStyles();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Helmet>
                <title>biojameskim | TITLE</title>
            </Helmet>

            <Box {...BLOG_STYLES.headerContainer}>
                <Heading {...BLOG_STYLES.title}>
                    TITLE
                </Heading>

                <Text {...BLOG_STYLES.date}>
                    DATE
                </Text>
            </Box>

            <Box {...BLOG_STYLES.separatorLine} />

            <div className="blog-text">
                <Stack {...BLOG_STYLES.bodyContainer}>

                    <Text pb={"10vh"}></Text>

                    <Text fontWeight="bold" paddingBottom={"7vh"}>—</Text>

                    <Text pb="10vh"></Text>
                </Stack>
            </div>
        </div >
    );
};

export default FictionStory;
