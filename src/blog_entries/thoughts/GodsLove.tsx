import { Heading, Text, Stack, Box, Link } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
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
                <title>biojameskim | God's Love</title>
            </Helmet>

            <Box {...BLOG_STYLES.headerContainer}>
                <Heading {...BLOG_STYLES.title}>
                    Thoughts about God's Love<FootnoteRef index={1} id="title" />
                </Heading>

                <Text {...BLOG_STYLES.date}>
                    April 2026
                </Text>
            </Box>

            <Box {...BLOG_STYLES.separatorLine} />

            <div className="blog-text">
                <Stack {...BLOG_STYLES.bodyContainer}>

                    <Text pb={"10vh"}>Last summer, I read Tim Keller’s <Text as="span" fontStyle="italic">“The Meaning of Marriage.”</Text></Text>
                    <Text pb={"5vh"}>Not that I’m thinking of getting married soon, </Text>
                    <Text pb={"10vh"}>but it’s always good to plan ahead<FootnoteRef index={2} id="plan-ahead" />.</Text>
                    <Text pb={"10vh"}>One thing I’m not particularly happy about is that even after reading something really good, I’m quick to forget it.</Text>
                    <Text pb={"5vh"}>Yet one thing that's stuck with me from that book is Keller’s definition of <Text as="span" fontStyle="italic">love.</Text></Text>
                    <Text pb={"10vh"}>He says that love isn’t a feeling, but rather a commitment. </Text>
                    <Text pb={"5vh"}>When you <Text as="span" fontStyle="italic">feel</Text> that you really love someone, of course it’s easy to show them affection and take them out to a nice dinner.</Text>
                    <Text pb={"10vh"}>So Keller says that our actions should also back our "commitment" even when we don’t "feel" it.</Text>
                    <Text>That second case is the harder one for sure.</Text>

                    <BlogImage
                        src="https://res.cloudinary.com/doypjterz/image/upload/v1774995413/IMG_9113_1_a0gl1w.jpg"
                        alt="Derek and Melody hugging"
                        caption="love?"
                        orientation="h"
                        pt="10vh"
                        pb="20vh"
                    />

                    <Text fontWeight="bold" paddingBottom={"7vh"}>—</Text>

                    <Text pb={"10vh"}>It’s been a couple of years since I’ve added the Google Photos widget to my phone’s home screen.</Text>
                    <Text pb={"5vh"}>So every day, I see a new photo collection that Google has made for me.</Text>
                    <Text>And at first, it was just a pleasant surprise.</Text>
                    <Text pb={"10vh"}>To see a photo from two, four, fifteen years ago today.</Text>
                    <Text pb={"10vh"}>But now, there’s an element of excitement as I think about what the widget is going to show me today.</Text>
                    <Text pb={"5vh"}>Many times, Google will show me a picture from when my brother and I were just babies.</Text>
                    <Text pb={"10vh"}>And when I see these photos, I see my young parents.</Text>
                    <Text pb={"5vh"}>How much love and affection they have in their eyes when they look at my brother and I.</Text>
                    <Text pb={"10vh"}>It all makes sense why Mom still sees us as her little babies.</Text>
                    <Text pb={"5vh"}>And it’s hard to describe this feeling I get when I look at the love in my young parents’ eyes.</Text>
                    <Text pb={"15vh"}>It’s a bit of melancholy, mixed with gratitude.</Text>
                    <Text pb={"5vh"}>But when I see them in these photos, </Text>
                    <Text pb={"10vh"}>and think about their love for me, </Text>
                    <Text pb={"15vh"}>It spurs me to love them even more <Text as="span" fontStyle="italic">now.</Text></Text>
                    <Text>To understand how much my parents have selflessly loved me moves me to have a deeper love and appreciation for them.</Text>

                    <BlogImage
                        src="https://res.cloudinary.com/doypjterz/image/upload/v1774995601/triple_emcqkj.png"
                        alt=""
                        caption=""
                        orientation="v"
                        pt="10vh"
                        pb="20vh"
                    />

                    <Text pb={"10vh"}>I had a sudden thought as I was laying in bed the other night that this must be a reflection of God’s love for us.</Text>
                    <Text pb={"5vh"}>My parents loved me before I was even conscious.</Text>
                    <Text pb={"10vh"}>In those pictures that I see, I recognize the baby in the photos as myself, but I have no recollection of those times.</Text>
                    <Text pb={"10vh"}>Yet, I can visibly see how much my parents adored and loved me.</Text>
                    <Text pb={"5vh"}>Similarly, I was always taught growing up in church that God has loved us before we were even conceived.</Text>
                    <Text pb={"5vh"}>As it goes,</Text>
                    <Text as="i" paddingLeft="2rem">“Before I formed you in the womb I knew you, before you were born I set you apart…”</Text>
                    <Text paddingLeft="2rem" pb={"15vh"}>Jeremiah 1:5 NIV</Text>
                    <Text pb={"10vh"}>My parents have wonderfully upheld Keller’s definition of love.</Text>
                    <Text pb={"5vh"}>I’m sure there were so many moments where they didn’t "feel" much love for me.</Text>
                    <Text pb={"10vh"}>I was a goofy kid who needed a lot of discipline.</Text>
                    <Text pb={"10vh"}>Yet my Mom always prepared a warm dinner for my brother and I, and my Dad never failed to miss a day of family tennis.</Text>
                    <Text pb={"5vh"}>Even when their emotions didn’t “feel” it, when they said they loved us,</Text>
                    <Text>they committed to it with their actions.</Text>

                    <BlogImage
                        src="https://res.cloudinary.com/doypjterz/image/upload/v1774995956/DSC00409_wtrpsd.jpg"
                        alt="Mom and Bro kiss me"
                        caption="Double kisses"
                        orientation="h"
                        pt="10vh"
                        pb="20vh"
                    />

                    <Text pb={"5vh"}>So when I think about God’s love through the lens of my parents’ love for me, </Text>
                    <Text pb={"10vh"}>loving me even before I knew myself,</Text>
                    <Text pb={"15vh"}>it spurs me to love him more <Text as="span" fontStyle="italic">now.</Text></Text>
                    <Text pb={"10vh"}>And it seems kinda selfish that I’m moved towards deeper love just because I’ve confirmed that someone has deeply loved me <Text as="span" fontStyle="italic">first.</Text></Text>
                    <Text pb={"5vh"}>But I think that’s just what parental love is.</Text>
                    <Text pb={"10vh"}>It’s a fact that they knew me for so much longer.</Text>
                    <Text pb={"5vh"}>And it’s a different type of love than the love I have with my friends or the love I'll have with my spouse,</Text>
                    <Text pb={"10vh"}>because the context in which this love is derived is fundamentally different.</Text>
                    <Text pb={"5vh"}>I knew my friends (and probably my future wife) at relatively similar times that they knew me.</Text>
                    <Text pb={"5vh"}>So this love that I have with my parents, and with God, must be a love of a different nature.</Text>
                    <Text pb={"15vh"}>A love that was never (and cannot be) equal to begin with.</Text>
                    <Text pb={"15vh"}>I believe God has given us parental love as a shadow<FootnoteRef index={3} id="shadow" /> of what His love is for us.</Text>
                    <Text pb={"10vh"}>And it’s hard to describe this feeling.</Text>
                    <Text pb={"5vh"}>It's definitely humbling. </Text>
                    <Text pb={"10vh"}>With a mix of gratitude and reverence.</Text>

                    <Text pb={"5vh"}>To know that God has loved us so deeply since before we knew ourselves, and that</Text>

                    <Text as="i" paddingLeft="2rem">"neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord."</Text>
                    <Text paddingLeft="2rem" pb={"15vh"}>Romans 8:39 NIV</Text>

                    {/* Footnotes Section */}
                    <FootnotesSection>
                        <FootnoteItem index={1} id="title">
                            <Text as="span">
                                The title of this entry is an homage to a blog I like called <Link href="https://pablos.live/writings/#" color="green.500">pablos</Link>
                            </Text>
                        </FootnoteItem>
                        <FootnoteItem index={2} id="plan-ahead">
                            <Text as="span">
                                I don’t read as many books as I would like anymore, but this is one book I strongly recommend. If not for marriage, it’s a good read nonetheless to understand love from a biblical perspective.
                            </Text>
                        </FootnoteItem>
                        <FootnoteItem index={3} id="shadow">
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
