import { Heading, Text, Stack, Box, Link } from "@chakra-ui/react";
import { Helmet } from "react-helmet-async";
import BlogImage from "../../components/blog/BlogImage";
import { useEffect } from "react";
import { useBlogStyles } from "../blogStyles";
import { FootnoteRef, FootnotesSection, FootnoteItem } from "../../components/blog/Footnotes";

const GodsLove = () => {
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

                    <Text pb={"10vh"}>Last summer, I read Tim Keller’s <Text as="span" fontStyle="italic">“The Meaning of Marriage.”</Text></Text>

                    <BlogImage
                        src="https://res.cloudinary.com/doypjterz/image/upload/v1774995413/IMG_9113_1_a0gl1w.jpg"
                        alt="Derek and Melody hugging"
                        caption="love?"
                        orientation="h"
                        pt="10vh"
                        pb="20vh"
                    />

                    <Text fontWeight="bold" paddingBottom={"7vh"}>—</Text>

                    <Text pb={"15vh"}>I believe God has given us parental love as a shadow<FootnoteRef index={1} id="shadow" /> of what His love is for us.</Text>


                    {/* Footnotes Section */}
                    <FootnotesSection>
                        <FootnoteItem index={1} id="shadow">
                            <Text as="span">
                                A shadow is something that hints at the form or figure of the real thing, without revealing what that thing is.
                            </Text>
                        </FootnoteItem>
                    </FootnotesSection>


                    <Text pb="10vh"></Text>
                </Stack>
            </div>
        </div >
    );
};

export default GodsLove;
