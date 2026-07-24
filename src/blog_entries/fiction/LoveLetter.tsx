import { Heading, Text, Stack, Box } from "@chakra-ui/react";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import { useBlogStyles } from "../blogStyles";

const LoveLetter = () => {
    const BLOG_STYLES = useBlogStyles();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Helmet>
                <title>Blog | Letter</title>
            </Helmet>

            <Box {...BLOG_STYLES.headerContainer}>
                <Heading {...BLOG_STYLES.title}>
                    A letter to a former lover
                </Heading>

                <Text {...BLOG_STYLES.date}>
                    April 2026
                </Text>
            </Box>

            <Box {...BLOG_STYLES.separatorLine} />

            <div className="blog-text">
                <Stack {...BLOG_STYLES.bodyContainer}>
                    <Text pb="40vh" >I still think of you.</Text>
                    <Text pb="15vh">I thought long about how to start this letter.</Text>
                    <Text pb="5vh">A <Text as="span" fontStyle="italic">"How are you?"</Text> is only rhetorical,</Text>
                    <Text pb="30vh">and an <Text as="span" fontStyle="italic">"I miss you"</Text> is no longer true.</Text>
                    <Text pb="30vh">But I do think about you still.</Text>
                    <Text pb="10vh">There’s times when you come into my mind,</Text>
                    <Text pb="30vh">and I let you stay.</Text>
                    <Text pb="5vh">It’s never too long,</Text>
                    <Text pb="10vh">but it’s enough to remind me that we were once in the world together–</Text>
                    <Text pb="30vh">in the same time and place.</Text>

                    <Text pb="15vh">And I know you’re no longer the same person I knew you to be.</Text>
                    <Text pb="30vh">Because I’m no longer the same either.</Text>
                    <Text pb="15vh">So I’ll think about how you might have changed.</Text>
                    <Text pb="5vh">If you’re still friends with Chloe (and Grace),</Text>
                    <Text pb="5vh">If you still critique your brother’s (already perfect) golf form,</Text>
                    <Text pb="15vh">If you still sacrifice your sleep for your (unreasonably early) morning runs,</Text>
                    <Text pb="40vh">And if you still sleep with that white bear I always nagged you to wash.</Text>
                    <Text pb="30vh">I saw you’re meeting someone new.</Text>
                    <Text pb="30vh">I scrolled down to the earliest picture of him in your feed, and saw it’s already been two years.</Text>
                    <Text pb="5vh">Sometimes, </Text>
                    <Text pb="15vh">only sometimes,</Text>
                    <Text pb="25vh">when I close my eyes and linger in that darkness,</Text>
                    <Text pb="5vh">I still see you crying under that flickering lamppost—</Text>
                    <Text pb="40vh">the night I walked you home for the last time.</Text>
                    <Text pb="5vh">So I was happy that in those pictures, </Text>
                    <Text pb="20vh">you were smiling.</Text>
                    <Text pb="40vh">Next to the person who knows you the best now.</Text>
                    <Text pb="20vh">And this letter isn’t to stir your heart.</Text>
                    <Text pb="5vh">Nor is it to plant a seed in your mind, </Text>
                    <Text pb="10vh">in hopes that it’ll sprout into something,</Text>
                    <Text pb="30vh"><Text as="span" fontStyle="italic">anything.</Text></Text>

                    <Text pb="50vh">I just wanted to say that I still think of you.</Text>
                    <Text pb="30vh">I’m meeting someone new too.</Text>
                    <Text pb="5vh">She makes me smile a lot, </Text>
                    <Text pb="40vh">and I think I’m finally ready to love.</Text>
                    <Text pb="10vh">So when I still think of you,</Text>
                    <Text pb="35vh">in those thoughts,</Text>
                    <Text pb="50vh">there’s no longer any desire for you.</Text>

                    <Text pb="15vh">But if you do find your way into my mind once more,</Text>
                    <Text pb="50vh">I'll let you stay.</Text>

                    <Text pb="10vh">Because the thought of you, </Text>
                    <Text pb="30vh">and the scent you left behind—</Text>
                    <Text pb="50vh">is but a melancholy for my youth.</Text>

                    <Text pb="50vh">Something that you have been so beautifully intertwined with.</Text>

                </Stack>
            </div>
        </div >
    );
};

export default LoveLetter;
