import { Heading, Text, Stack, Box } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { useBlogStyles } from "../blogStyles";

const HerFace = () => {
    const BLOG_STYLES = useBlogStyles();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Helmet>
                <title>biojameskim | Her face</title>
            </Helmet>

            <Box {...BLOG_STYLES.headerContainer}>
                <Heading {...BLOG_STYLES.title}>
                    Her face
                </Heading>

                <Text {...BLOG_STYLES.date}>
                    June 2026
                </Text>
            </Box>

            <Box {...BLOG_STYLES.separatorLine} />

            <div className="blog-text">
                <Stack {...BLOG_STYLES.bodyContainer}>

                    <Text pb="10vh">There’s too much to think about throughout my day. </Text> 
                    <Text pb="25vh">They often slip through the cracks of my memory.</Text> 
                    <Text pb="5vh">My wife will get upset at another forgotten chore.</Text> 
                    <Text pb="25vh">I told her I would take out the trash last night.</Text>
                    <Text pb="5vh">And Emily, my daughter, will get upset at another forgotten promise. </Text>
                    <Text pb="30vh">I told her I would take her to Frosty Cow after she showed me her report card last week.</Text>
                    <Text pb="15vh">But one thought that never escapes my mind is that of my mother.</Text>
                    <Text pb="30vh">I think about her daily.</Text> 
                    <Text pb="10vh">If she has my same deep hazel eyes,</Text>
                    <Text pb="20vh">If she has my same dimples that complement her smile, </Text>
                    <Text pb="30vh">And if she also can’t handle spice very well.</Text> 
                    <Text pb="10vh">And with these thoughts, I try to suppress it, but the same question clouds my mind— </Text> 
                    <Text pb="15vh" fontStyle="italic">Why?</Text> 
                    <Text pb="30vh"><Text as="span" fontStyle="italic">Why</Text> did we have to be separated?</Text> 
                    <Text pb="10vh">Did someone force her to?</Text> 
                    <Text pb="25vh">Was it voluntary?</Text> 
                    <Text pb="25vh">Are you looking for me too?</Text> 
                    <Text pb="10vh">And do you also... think about me every day?</Text> 
                    <Text fontWeight="bold" paddingBottom={"30vh"}>—</Text>

                    <Text pb="10vh">I’ve been searching for her since Emily was born.</Text> 
                    <Text pb="30vh">And it’s ironic because I’ve resented her most of my life.</Text> 
                    <Text pb="10vh">At the time I couldn’t admit it, but I was afraid.</Text> 
                    <Text pb="5vh">Afraid that there wouldn't be a profound reason we were separated. </Text>
                    <Text pb="20vh">That she just didn’t want me. </Text> 
                    <Text pb="10vh">And that even if we were to meet, it would feel cold and distant—</Text> 
                    <Text pb="40vh">lacking the warmth and intimacy I’ve only dreamt of.</Text> 
                    <Text pb="10vh">But the first time I held Emily in my arms, I cried. </Text> 
                    <Text pb="20vh">And the tears gave breath to understanding. </Text> 
                    <Text pb="10vh">Emily was already so attached to my wife even a couple weeks after birth.</Text> 
                    <Text pb="10vh">Whatever the reason, there's a gravity of pain that follows from a mother's separation with her child.</Text> 
                    <Text fontWeight="bold" paddingBottom={"30vh"}>—</Text>

                    <Text pb="20vh">Emily’s nine next week.</Text> 
                    <Text pb="10vh">I don’t want to give up, but with each day that passes, hope slowly evades me.</Text> 
                    <Text pb="5vh">Every day is another day my mother ages.</Text> 
                    <Text pb="20vh">Another day where <Text as="span" fontStyle="italic">today</Text> might be her last. </Text> 
                    <Text pb="40vh">Then how could I possibly find her?</Text> 
                    <Text pb="5vh">But now—</Text> 
                    <Text pb="25vh">I’m no longer afraid.</Text> 
                    <Text pb="20vh">It doesn’t matter to me who she is, and whether the reasons for our separation were far from ideal. </Text> 
                    <Text pb="5vh">All I want is to see whom my face resembles.</Text> 
                    <Text pb="10vh">Every child should have a right to fill that hole in their heart.</Text> 
                    <Text fontWeight="bold" paddingBottom={"30vh"}>—</Text>
                    
                    <Text pb="10vh">I buckle Emily up.</Text> 
                    <Text pb="15vh">We’re finally going to Frosty Cow. </Text> 
                    <Text pb="5vh">Her giggles in the backseat reveal her long-suppressed excitement.</Text> 
                    <Text pb="20vh">She’s singing the song she made about their Triple Raspberry Sorbet.</Text> 
                    <Text pb="15vh">I glance at her through the rear-view mirror.</Text> 
                    <Text pb="5vh">She pokes her head out the window, and the wind flows through her long, black hair.</Text> 
                    <Text pb="20vh">The sun illuminates her face, and her eyes light up a brilliant hazel hue.</Text> 
                    <Text pb="30vh">A soft shadow reveals itself around her dimples.</Text> 
                    <Text pb="10vh">One by one, the flood of thoughts that plague my mind rush out into the wells of my eyes.</Text> 
                    <Text pb="30vh">For the first time in nine years, my mind is clear.</Text> 
                    <Text pb="30vh">And as I’m looking at Emily, only one thought remains.</Text> 
                    <Text pb="20vh">Perhaps in Emily’s face, there are reflections of my mother’s.</Text> 
                    <Text pb="5vh">The way her nose curls at the tip, or even the faint freckles that paint her cheeks.</Text> 
                    <Text pb="40vh">The features absent from my wife’s face and mine.</Text> 
                    <Text pb="20vh">Every night for the past nine years, I’ve been dreaming about an image I do not know how to imagine.</Text> 
                    <Text pb="10vh">But perhaps a reflection of her face has been in front of me the entire time.</Text>


                    <Text pb="20vh"></Text>
                </Stack>
            </div>
        </div >
    );
};

export default HerFace;
