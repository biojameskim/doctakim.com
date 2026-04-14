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

                    <Text pb="15vh">The drive to work is always rushed.</Text>
                    <Text pb="5vh">I calculated how long it takes to make breakfast, shower, and get dressed—</Text>
                    <Text pb="15vh">working backwards to set my alarm.</Text>
                    <Text pb="5vh">And I swear I left myself plenty of time,</Text>
                    <Text pb="15vh">But I’m still racing the clock.</Text>
                    <Text pb="10vh">And the later I am, the worse my luck is. </Text>
                    <Text pb="5vh">The lights taunt me today, flashing red just as I approach.</Text>
                    <Text pb="5vh">And that damned minivan in front of me is unreasonably slow. </Text>
                    <Text pb="15vh">I race past to the left.</Text>
                    <Text pb="5vh">When I look towards the driver to give a dirty look, </Text>
                    <Text pb="15vh">A sweet old lady smiles at me. </Text>
                    <Text pb="30vh">It’s forced, but I smile back.</Text>

                    <Text pb="15vh">I pull in to my favorite spot in the corner of the parking lot.</Text>
                    <Text pb="5vh">I scurry into the office, one hand holding my bag, the other fastening the last two buttons below my collar. </Text>
                    <Text pb="30vh">I wave at Jerome, who’s manning the front desk today.</Text>
                    <Text pb="40vh">In the back of the office, I sit down and finally get a chance to breathe.</Text>
                    <Text pb="30vh">Today marks year seven at the post office.</Text>
                    <Text pb="15vh">I don’t like talking with customers so I enjoy being in the back, sorting through all the mail.</Text>
                    <Text pb="10vh">It gets repetitive, but I know it’s important work. </Text>
                    <Text pb="20vh">Jerome tells me we run America.</Text>
                    <Text pb="15vh">It’s busier around this time of year, and I only last 3 hours before my neck needs a break. </Text>
                    <Text pb="10vh">I step outside for a cigarette.</Text>
                    <Text pb="15vh">In the artificial garden they planted around the parking lot, the hydrangeas are blooming again.</Text>
                    <Text pb="5vh">But the slight drizzle extinguishes my flame, </Text>
                    <Text pb="5vh">cutting my break short.</Text>

                    <Text fontWeight="bold" paddingBottom={"15vh"}>—</Text>

                    <Text pb="30vh">I always enjoy the drive back home. </Text>
                    <Text pb="15vh">There’s no rush, no racing the clock.</Text>
                    <Text pb="30vh">No one waiting for me at home.</Text>
                    <Text pb="5vh">I roll down my window. </Text>
                    <Text pb="15vh">It always smells the best after it rains.</Text>
                    <Text pb="15vh">It’s not a long drive back. </Text>
                    <Text pb="5vh">Just straight down Westin and then a right at the big Safeway. </Text>
                    <Text pb="25vh">A little further down and you’ll see the gate that says <Text as="span" fontStyle="italic">Foxborough Estates.</Text></Text>
                    <Text pb="15vh">I light a cigarette.</Text>
                    <Text pb="5vh">Winter must be over because the sun is getting longer. </Text>
                    <Text pb="10vh">As I’m racing down Westin, it peeks at me through every crack between the trees.</Text>
                    <Text pb="5vh">I press the gas a little harder.</Text>
                    <Text pb="5vh">The sun emerges from behind the trees.</Text>
                    <Text pb="5vh">And it’s always in that same place— </Text>
                    <Text pb="15vh">slightly ahead of me.</Text>
                    <Text pb="5vh">And the traffic light brings me to a stop, granting it an unfair advantage to race ahead.</Text>
                    <Text pb="5vh">I look forward and see the Safeway.</Text>
                    <Text pb="15vh">I look up to my left and see the sun.</Text>
                    <Text pb="15vh">The light turns green.</Text>
                    <Text pb="5vh">I grip the steering wheel a little harder.</Text>
                    <Text pb="15vh">My cigarette burns a little brighter.</Text>
                    <Text pb="30vh">I turn <Text as="span" fontStyle="italic">left.</Text></Text>

                    <Text pb="15vh">I don’t know how.</Text>
                    <Text pb="30vh">Nor do I know where.</Text>
                    <Text pb="30vh">But I want to escape. </Text>
                    <Text pb="5vh">As I race down the road in front of me, </Text>
                    <Text pb="10vh">I’m ashamed.</Text>
                    <Text pb="5vh">Ashamed to admit that by midnight, I’ll be back at Foxborough.</Text>
                    <Text pb="25vh">Laying in bed, getting ready for tomorrow.</Text>
                    <Text pb="10vh">But for now, </Text>
                    <Text pb="5vh">while I feel the pressure of the gas under my foot, </Text>
                    <Text pb="5vh">while my cigarette glows a fiery red,</Text>
                    <Text pb="20vh">and while the sun’s still up—</Text>
                    <Text pb="30vh">I’ll be chasing the sun.</Text>


                    <Text pb="10vh"></Text>
                </Stack>
            </div>
        </div >
    );
};

export default GodsLove;
