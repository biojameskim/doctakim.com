import { Heading, Text, Stack, Box, Link, useColorModeValue } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import BlogImage from "../../components/blog/BlogImage";
import { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useBlogStyles } from "../blogStyles";
import { FootnoteRef, FootnotesSection, FootnoteItem } from "../../components/blog/Footnotes";

const WhyCornell = () => {
    const BLOG_STYLES = useBlogStyles();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Helmet>
                <title>biojameskim | Why Cornell</title>
            </Helmet>

            <Box {...BLOG_STYLES.headerContainer}>
                <Heading {...BLOG_STYLES.title}>
                    Why I chose Cornell
                </Heading>

                <Text {...BLOG_STYLES.date}>
                    December 2025
                </Text>
            </Box>

            <Box {...BLOG_STYLES.separatorLine} />

            <div className="blog-text">
                <Stack {...BLOG_STYLES.bodyContainer}>

                    <Text as="i" mb={"30vh"} color={useColorModeValue("gray.500", "gray.400")}>
                        With college admissions starting to roll out, I was reminded of when I first found out about my own college decisions with eager anticipation.
                    </Text>

                    <Text pb={"15vh"}>So I really wanted to go to Yale.</Text>

                    <Text>I’m not sure what it was, but Yale just sounded really cool and mysterious. </Text>
                    <Text pb={"20vh"}>So I applied Early Action without giving it much thought.</Text>

                    <Text pb={"5vh"}>I was counting down the days until finally,</Text>
                    <Text pb={"25vh"}>My application status had an update.</Text>

                    <Text pb={"20vh"}>My hands were shaking as I typed my password into the portal.</Text>

                    <Text pb={"15vh"}>My heart was pounding.</Text>

                    <Text pb={"15vh"}>My feet were sweating.</Text>

                    <Text pb={"20vh"}>And with my eyes half closed, </Text>
                    <Text>I opened my status portal and…</Text>

                    <BlogImage
                        src="https://res.cloudinary.com/doypjterz/image/upload/v1767205633/yale_elq99x.jpg"
                        alt="Eunice and me at Yale"
                        orientation="h"
                        caption="When my cousin got into Yale"
                        pt={"20vh"}
                        pb={"10vh"}
                    />

                    <Text fontWeight="bold" paddingBottom={"7vh"}>—</Text>

                    <Text>So Yale didn't go my way, and I didn’t really have a preference for other colleges.</Text>

                    <Text pb={"20vh"}>So as many ambitious high schoolers do, I applied to most of the T15 schools, including a few closer to me in California.</Text>

                    <Text>After submitting your applications, there’s only so much you can do but wait.</Text>

                    <Text pb={"20vh"}>And man, was the wait long.</Text>

                    <Text>But soon enough, I started hearing back.</Text>

                    <Text pb={"15vh"}> One by one, acceptances and (a lot more) rejections started rolling in.</Text>

                    <Text>And I don’t mean to brag, but I even almost got recruited.</Text>

                    <BlogImage
                        src="https://res.cloudinary.com/doypjterz/image/upload/v1767205630/navy_orf2m7.jpg"
                        alt="Navy SEALs"
                        orientation="override"
                        maxW={{ base: "80%", md: "40%" }}
                        caption="A different career path"
                        pt={"10vh"}
                        pb={"10vh"}
                    />

                    <Text>Now after all my decisions came out, I narrowed my choices down to 4 schools: UCLA, UC Berkeley, Vanderbilt, and Cornell.</Text>

                    <Text pb={"10vh"}>But UCLA seemed too close to home, and my brother was going to Berkeley so I wanted to try something new.</Text>

                    <Text pb={"15vh"}>That narrowed it down to two.</Text>

                    <Text pb={"30vh"}>But shoot.</Text>

                    <Text pb={"30vh"}>How do I choose between the last two?</Text>

                    <Text pb={"5vh"}>Well to start,</Text>

                    <Text pb={"20vh"}>Vanderbilt sent me some merch.</Text>

                    <Text>Now it wasn’t really my “style”, but it was a nice gesture.</Text>

                    <BlogImage
                        src="https://res.cloudinary.com/doypjterz/image/upload/v1767206276/mosaic_mblxv1.jpg"
                        alt="Me with Vandy merch"
                        orientation="v"
                        pt={"10vh"}
                        pb={"10vh"}
                    />

                    <Text pb={'15vh'}>After some more intense thought and deliberation, and <i>a lot</i> of talking with my parents, </Text>
                    <Text pb={'25vh'}>I still couldn’t make a decision.</Text>

                    <Text pb={'20vh'}>So I listed out all the pros and cons I could think of, and as any trendy 18 year old would,</Text>

                    <Text>I took it to the internet.</Text>

                    <BlogImage
                        src={{
                            base: "https://res.cloudinary.com/doypjterz/image/upload/v1767228305/reddit1_mobile_wl6usp.png",
                            md: "https://res.cloudinary.com/doypjterz/image/upload/v1767205630/reddit1_ox2ys1.png"
                        }}
                        alt="Reddit post about Cornell"
                        orientation="override"
                        maxW={{ base: "100%", md: "90%" }}
                        pt={"10vh"}
                        pb={"10vh"}
                    />

                    <Text pb={'5vh'}>I read online that Cornell can get pretty cold and depressing in the winter.</Text>
                    <Text pb={'20vh'}>Not to mention the “seasonal depression” that supposedly made its way around the students there.</Text>

                    <Text>And I was already spooked by it all,</Text>

                    <Text>but some people just added unnecessary chills.</Text>

                    <BlogImage
                        src="https://res.cloudinary.com/doypjterz/image/upload/v1767228305/IMG_0211_km4d3h.png"
                        alt="Reddit post about Cornell"
                        orientation="override"
                        maxW={{ base: "100%", md: "60%" }}
                        pt={"10vh"}
                        pb={"10vh"}
                    />

                    <Text pb={'5vh'}>Now some people made reasonable points, </Text>
                    <Text>But they weren’t exactly what I was looking for when trying to choose a place to study at for the next four years.</Text>

                    <BlogImage
                        src="https://res.cloudinary.com/doypjterz/image/upload/v1767205631/reddit3_dyndfx.jpg"
                        alt="Reddit post about Cornell"
                        orientation="override"
                        maxW={{ base: "100%", md: "60%" }}
                        pt={"10vh"}
                        pb={"10vh"}
                    />

                    <Text pb={'5vh'}>And I swear I read online somewhere that Vandy had really low diversity.</Text>

                    <Text pb={'15vh'}>Growing up around a lot of Asian Americans like myself, I wanted to find a similar community in college.</Text>

                    <Text>So I appreciated how some Redditors didn’t beat around the bush and got straight to the point.</Text>

                    <BlogImage
                        src="https://res.cloudinary.com/doypjterz/image/upload/v1767228305/IMG_0210_llyphh.png"
                        alt="Reddit post about Cornell"
                        orientation="override"
                        maxW={{ base: "100%", md: "60%" }}
                        pt={"20vh"}
                        pb={"20vh"}
                    />

                    <Text pb={'15vh'}>But I guess I was still pretty dubious.</Text>

                    <Text pb={'10vh'}>Because I followed up with another question.</Text>

                    <BlogImage
                        src="https://res.cloudinary.com/doypjterz/image/upload/v1767228304/IMG_0210_1_nyk966.png"
                        alt="Reddit post about Cornell"
                        orientation="override"
                        maxW={{ base: "100%", md: "60%" }}
                        pt={"20vh"}
                        pb={"20vh"}
                    />

                    <Text>Again,</Text>

                    <Text pb={'15vh'}>Very straight to the point.</Text>

                    <BlogImage
                        src="https://res.cloudinary.com/doypjterz/image/upload/v1767228305/IMG_0210_2_ptnfwq.png"
                        alt="Reddit post about Cornell"
                        orientation="override"
                        maxW={{ base: "100%", md: "60%" }}
                        caption="The last of my follow-up questions"
                        pt={"10vh"}
                        pb={"10vh"}
                    />

                    <Text fontWeight="bold" paddingBottom={"7vh"}>—</Text>

                    <Text>So with all my new knowledge,</Text>

                    <Text pb={'10vh'}>Now all that was left was to make a decision.</Text>

                    <Text pb={'15vh'}>And I wish I could say there was some magic answer that came to me one morning when I woke up.</Text>

                    <Text>But like most decisions in life, it’s not so clear what’s “right.”</Text>

                    <Text pb={'25vh'}>And no one knows what’s right because no one knows the future.</Text>


                    <Text pb={'5vh'}>Both Cornell and Vandy presented really good opportunities for me.</Text>

                    <Text>I’d have the chance to move across the country, meet new people, study hard,</Text>

                    <Text pb={'30vh'}>And I’d genuinely be happy to call myself a student at both places.</Text>


                    <Text pb={'10vh'}>I remember I had a call with a “Big Red” Ambassador from Cornell during my decision-making process and he very matter-of-factly told me that he didn’t understand why I was being so indecisive because Cornell was <i>obviously</i> the better choice.</Text>

                    <Text pb={'5vh'}>Which confused me,</Text>
                    <Text>Because the day before, </Text>
                    <Text pb={'25vh'}>I had a call with a Vandy alumni who told me that Vandy was <i>obviously</i> the better choice.</Text>


                    <Text pb={'5vh'}>The decisions we make can never be ideal.</Text>

                    <Text>Because the contexts we live in don’t give every decision an equal playing field.</Text>

                    <Text pb={'10vh'}>Some have to weigh the cost of attendance more than others, while proximity to family might make the difference for others. </Text>

                    <Text pb={'25vh'}>An uncountable set of factors (many outside our control) come together to define a unique environment in which we must take an action, without knowing what the reward will be.</Text>


                    <Text pb={'5vh'}>For me, I boiled it down to the fundamentals.</Text>

                    <Text pb={'15vh'}>What was worse to me than the fear that the other school might be “better” was being locked in a constant state of indecision, eating up my time and headspace.</Text>

                    <Text>At the time, I wanted to study math-adjacent things, and Cornell had a stronger curriculum in math and engineering. </Text>
                    <Text pb={'10vh'}>Weather, location, familiarity mattered to me less. </Text>

                    <Text pb={'10vh'}>And it’s hard to avoid the costs that you inevitably incur with the choices you make, but accepting that is part of the responsibility you take for the things you choose.</Text>

                    <Text pb={'15vh'}>At a certain point, you just have to trust in your decision and move forward.</Text>

                    <Text pb={'30vh'}>And in my experience, working through ambiguity always seems to open more doors than I could have ever anticipated.</Text>

                    <Text pb={'5vh'}>So one morning in May, with only a little bit more confidence that this was the "better" decision,</Text>

                    <Text pb={'25vh'}>I paid the deposit and accepted my spot at Cornell.</Text>


                    <Text>Summer passed by with a mixture of excitement and worry,</Text>

                    <Text pb={'10vh'}>and before I knew it,</Text>

                    <Text>I was standing in the room I would call “home” for my very first year at an unfamiliar place called Cornell.<FootnoteRef index={1} id="freshman-blog" /></Text>

                    <BlogImage
                        src="https://res.cloudinary.com/doypjterz/image/upload/v1767205631/8411_rmybe1.jpg"
                        alt="Freshman year dorm room door"
                        orientation="v"
                        pt={"10vh"}
                        pb={"10vh"}
                    />

                    <Text fontWeight="bold" paddingBottom={"7vh"}>—</Text>

                    <Text pb={'5vh'}>A year or two after I made the original Reddit post, someone commented on it to ask me where I ended up.</Text>

                    <Text pb={'15vh'}>They asked me if I was happy with the choice that I had made.</Text>

                    <Text pb={'50vh'}>So I thought about it for a few, brief seconds.</Text>

                    <Text pb={'20vh'}>And this time,</Text>
                    <Text pb={'50vh'}>With a lot more confidence, </Text>

                    <Text>I drafted up a response.</Text>


                    <BlogImage
                        src="https://res.cloudinary.com/doypjterz/image/upload/v1767228304/IMG_0209_luf5zq.png"
                        alt="Reddit post about Cornell"
                        orientation="override"
                        maxW={{ base: "100%", md: "60%" }}
                        pt={"20vh"}
                        pb={"10vh"}
                    />

                    {/* Footnotes Section */}
                    <FootnotesSection>
                        <FootnoteItem index={1} id="freshman-blog">
                            <Text as="span">
                                Related blog: <Link as={RouterLink} to="/blog/my-freshman-college-story" color="green.500">My Freshman College Story</Link>
                            </Text>
                        </FootnoteItem>
                    </FootnotesSection>


                    <Text pb="10vh"></Text>
                </Stack>
            </div>
        </div >
    );
};

export default WhyCornell;
