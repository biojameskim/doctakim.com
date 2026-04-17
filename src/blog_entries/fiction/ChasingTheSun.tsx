import { Heading, Text, Stack, Box } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { useBlogStyles } from "../blogStyles";

const GodsLove = () => {
    const BLOG_STYLES = useBlogStyles();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Helmet>
                <title>biojameskim | Chasing the sun</title>
            </Helmet>

            <Box {...BLOG_STYLES.headerContainer}>
                <Heading {...BLOG_STYLES.title}>
                    Chasing the sun
                </Heading>

                <Text {...BLOG_STYLES.date}>
                    April 2026
                </Text>
            </Box>

            <Box {...BLOG_STYLES.separatorLine} />

            <div className="blog-text">
                <Stack {...BLOG_STYLES.bodyContainer}>

                    <Text pb="20vh">The drive to work is always rushed.</Text>
                    <Text pb="5vh">I calculated how long it takes to make breakfast, shower, and get dressed—</Text>
                    <Text pb="20vh">working backwards to set my alarm.</Text>
                    <Text pb="5vh">And I swear I left myself plenty of time,</Text>
                    <Text pb="20vh">but I’m always racing the clock.</Text>
                    <Text pb="10vh">And the later I am, the worse my luck is. </Text>
                    <Text pb="5vh">The lights taunt me today, flashing red just as I approach.</Text>
                    <Text pb="10vh">And to hell with that damned slow minivan in front of me. </Text>
                    <Text pb="20vh">I race past to the left.</Text>
                    <Text pb="5vh">When I look towards the driver to give a dirty look, </Text>
                    <Text pb="20vh">a sweet old lady smiles at me. </Text>
                    <Text pb="35vh">It’s forced, but I smile back.</Text>

                    <Text pb="20vh">I pull in to my favorite spot in the corner of the parking lot.</Text>
                    <Text pb="5vh">I scurry into the office, one hand holding my bag, the other grappling with the last two buttons under my collar. </Text>
                    <Text pb="20vh">I wave at Jerome, who’s manning the front desk today.</Text>
                    <Text pb="45vh">In the back of the office, I put my bag down and finally get a chance to breathe.</Text>
                    <Text pb="30vh">Today marks year seven at the post office.</Text>
                    <Text pb="20vh">I don’t like talking with customers so I very much enjoy being in the back, sorting through all the mail.</Text>
                    <Text pb="10vh">It gets repetitive, but I know it’s important work. </Text>
                    <Text pb="30vh">Jerome tells me we run America.</Text>
                    <Text pb="20vh">It’s busier around this time of year, and I only last 3 hours before my neck needs a break. </Text>
                    <Text pb="10vh">I step outside for a cigarette.</Text>
                    <Text pb="20vh">In the artificial garden they planted around the parking lot, the hydrangeas are blooming again.</Text>
                    <Text pb="5vh">But the slight drizzle extinguishes my flame, </Text>
                    <Text pb="5vh">and cuts my break short.</Text>

                    <Text fontWeight="bold" paddingBottom={"40vh"}>—</Text>

                    <Text pb="30vh">I always enjoy the drive back home. </Text>
                    <Text pb="20vh">There’s no rush, no racing the clock,</Text>
                    <Text pb="30vh">no one waiting for me at home.</Text>
                    <Text pb="5vh">I roll down my window. </Text>
                    <Text pb="20vh">It always smells the best after it rains.</Text>
                    <Text pb="10vh">It’s not a long drive back. </Text>
                    <Text pb="5vh">Just straight down Westin and then a <Text as="span" fontStyle="italic">right</Text> at the big Safeway. </Text>
                    <Text pb="30vh">A little further down and you’ll see the gate to my community, <Text as="span" fontStyle="italic">Foxborough Estates.</Text></Text>
                    <Text pb="20vh">I light a cigarette.</Text>
                    <Text pb="10vh">Winter must be ending because the sun is getting longer. </Text>
                    <Text pb="5vh">As I’m racing down Westin, the sun is to my left—</Text>
                    <Text pb="25vh">peeking at me through every crack between the trees.</Text>
                    <Text pb="15vh">I press the gas a little harder.</Text>
                    <Text pb="25vh">The sun emerges from behind the trees.</Text>
                    <Text pb="5vh">And it’s always in that same place— </Text>
                    <Text pb="30vh">slightly ahead of me.</Text>
                    <Text pb="5vh">The traffic light brings me to a stop, granting it an unfair advantage to race ahead.</Text>
                    <Text pb="20vh">I'm at the end of Westin.</Text>
                    <Text pb="5vh">I look forward and see the Safeway.</Text>
                    <Text pb="20vh">I look up to my left and see the sun.</Text>
                    <Text pb="25vh">The light turns green.</Text>
                    <Text pb="20vh">My cigarette burns a little brighter.</Text>
                    <Text pb="5vh">I grip the steering wheel a little harder,</Text>
                    <Text pb="15vh">And I turn.</Text>
                    <Text pb="45vh" as="span" fontStyle="italic">Left.</Text>

                    <Text pb="20vh">I don’t know how.</Text>
                    <Text pb="40vh">Nor do I know where.</Text>
                    <Text pb="40vh">But I want to escape. </Text>
                    <Text pb="5vh">As I race down the road in front of me, </Text>
                    <Text pb="25vh">I’m ashamed.</Text>
                    <Text pb="5vh">Ashamed to admit that by midnight, I’ll be back at Foxborough.</Text>
                    <Text pb="30vh">Laying in bed, getting ready for tomorrow.</Text>
                    <Text pb="15vh">But just for this moment, </Text>
                    <Text pb="5vh">while I feel the pressure of the gas under my foot, </Text>
                    <Text pb="10vh">while my cigarette glows its fiery red,</Text>
                    <Text pb="40vh">and while the sun’s still up—</Text>
                    <Text pb="30vh">I’ll be chasing the sun.</Text>


                    <Text pb="10vh"></Text>
                </Stack>
            </div>
        </div >
    );
};

export default GodsLove;
