import { Heading, Text, Stack, Box } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import BlogImage from "../../components/blog/BlogImage";
import { useEffect } from "react";
import { useBlogStyles } from "../blogStyles";

const OutofContext = () => {
    const BLOG_STYLES = useBlogStyles();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Helmet>
                <title>biojameskim | Out of Context </title>
            </Helmet>

            <Box {...BLOG_STYLES.headerContainer}>
                <Heading {...BLOG_STYLES.title}>
                    Out of Context
                </Heading>

                <Text {...BLOG_STYLES.date} pb="5vh">
                    February 2026
                </Text>
            </Box>

            <Box {...BLOG_STYLES.separatorLine} />

            <div className="blog-text">
                <Stack {...BLOG_STYLES.bodyContainer}>

                    <Text pb={"15vh"}>I’m at the gym.</Text>
                    <Text pb={"30vh"}>Resting after mildly pushing myself.</Text>
                    <Text pb={"30vh"}>I know it’s not the best excuse, but I’m feeling a bit sluggish today.</Text>
                    <Text pb={"7vh"}>I look down at my phone,</Text>
                    <Text pb={"30vh"}>skipping over songs until I find something I like.</Text>
                    <Text pb={"7vh"}>When I look back up,</Text>
                    <Text pb={"25vh"}>I spot a familiar face.</Text>
                    <Text pb={"20vh"}>She’s a PhD student I’ve been collaborating with.</Text>
                    <Text pb={"10vh"}>We’ve been working together for a couple of weeks now,</Text>
                    <Text pb={"30vh"}>but I know nothing about her.</Text>
                    <Text pb={"15vh"}>We skip over any small talk in our meetings.</Text>
                    <Text pb={"7vh"}>The atmosphere is always tense,</Text>
                    <Text pb={"20vh"}>And it’s not one of those meetings you can just passively listen to while scrolling on your phone.</Text>
                    <Text pb={"10vh"}>She dominates most of the conversation,</Text>
                    <Text pb={"15vh"}>And it’s great because she gets everything done,</Text>
                    <Text pb={"30vh"}>but there’s absolutely no room to crack any jokes.</Text>
                    <Text pb={"15vh"}>Come to think of it,</Text>
                    <Text pb={"50vh"}>I’m not even sure if I’ve seen her smile before.</Text>
                    <Text pb={"20vh"}>I look away where I’m just outside the danger-zone of eye contact.</Text>
                    <Text pb={"25vh"}>But my eyes keep glancing back.</Text>
                    <Text pb={"35vh"}>Something is pulling them in her direction.</Text>
                    <Text pb={"10vh"}>Her clothes aren’t particularly colorful,</Text>
                    <Text pb={"40vh"}>but something’s vibrant.</Text>
                    <Text pb={"10vh"}>Her headphones are snug around her frizzy hair,</Text>
                    <Text pb={"20vh"}>Her arms are in the air,</Text>
                    <Text pb={"40vh"}>And she’s swaying side to side in coordinated synchrony.</Text>
                    <Text pb={"60vh"}>She’s dancing.</Text>
                    <Text pb={"10vh"}>And it’s not the dancing I do at the gym where I discreetly rock my head back and forth—</Text>
                    <Text pb={"7vh"}>enough to enjoy my music,</Text>
                    <Text pb={"35vh"}>but not enough to be noticed.</Text>
                    <Text pb={"10vh"}>No one can hear the music that’s possessed her movement,</Text>
                    <Text pb={"15vh"}>but everyone in the gym can see it.</Text>
                    <Text pb={"45vh"}>Her movements are frictionless.</Text>
                    <Text pb={"10vh"}>And for the few seconds she’s dancing in her small corner of the gym,</Text>
                    <Text pb={"45vh"}>the whole world revolves around her.</Text>
                    <Text pb={"15vh"}>When my eyes slowly refocus on her face,</Text>
                    <Text pb={"50vh"}>I’m taken aback.</Text>
                    <Text pb={"35vh"}>This isn’t the same colleague I see in meetings.</Text>
                    <Text pb={"55vh"}>Everything about her is outside the context of how I know her—</Text>
                    <Text pb={"15vh"}>She’s smiling.</Text>


                    <BlogImage
                        src="https://res.cloudinary.com/doypjterz/image/upload/v1771474974/IMG_0677_iiwc08.jpg"
                        alt="cornell gym"
                        caption=""
                        orientation="v"
                        pt="20vh"
                        pb="20vh"
                    />

                    <Text fontWeight="bold" paddingBottom={"7vh"}>—</Text>


                    <Text pb={"25vh"}>My dad’s always been the leader of our family.</Text>
                    <Text pb={"10vh"}>He’s always enforced the Korean hierarchy of respect since my brother and I were younger,</Text>
                    <Text pb={"25vh"}>which means my brother and I would always greet him at the door when he came back from work.</Text>
                    <Text pb={"10vh"}>We’d wait to eat until he took the first bite,</Text>
                    <Text pb={"40vh"}>and talking back would bring the stick out.</Text>
                    <Text pb={"15vh"}>But he also did everything a dad should do.</Text>
                    <Text pb={"10vh"}>He’d give us really good advice about anything we’d ask him,</Text>
                    <Text pb={"25vh"}>and to all the questions that elementary school me would throw at him,</Text>
                    <Text pb={"40vh"}>He knew all the answers.</Text>
                    <Text pb={"10vh"}>So growing up, I believed no one was smarter and stronger than my dad.</Text>
                    <Text pb={"40vh"}>No one dared disrespect or talk back to him.</Text>
                    <Text pb={"25vh"}>But one of the first times we visited his family in Korea,</Text>
                    <Text pb={"20vh"}>I watched in horror as his older brother pinched my dad’s cheek with one hand,</Text>
                    <Text pb={"30vh"}>Squeezed his butt with the other,</Text>
                    <Text pb={"50vh"}>And started calling him a “fat piggy.”</Text>
                    <Text pb={"20vh"}>Sure, there was a time my dad was overweight.</Text>
                    <Text pb={"40vh"}>But that was over 40 years ago when he was in elementary school.</Text>
                    <Text pb={"15vh"}>His brother is about twice his size now.</Text>

                    <BlogImage
                        src="https://res.cloudinary.com/doypjterz/image/upload/v1771474973/IMG_0110_mimzy5.jpg"
                        alt="Grandpa, dad, his older brother"
                        caption="The three little pigs"
                        orientation="h"
                        pt="10vh"
                        pb="20vh"
                    />

                    <Text pb={"15vh"}>I didn’t recognize this part of my dad.</Text>
                    <Text pb={"35vh"}>It was outside the context of how I knew him.</Text>
                    <Text pb={"30vh"}>I smiled as I watched my dad have no choice but to let it happen.</Text>

                    <Text fontWeight="bold" paddingBottom={"7vh"}>—</Text>

                    <Text pb={"10vh"}>Once you get to know Eric deeply,</Text>
                    <Text pb={"25vh"}>you’ll notice some of his sweet sides.</Text>
                    <Text pb={"25vh"}>But I admit it’s hard to spot by just looking at him.</Text>
                    <Text pb={"15vh"}>He’s 6’2” (rounded up) and has a pretty scary resting face.</Text>
                    <Text pb={"10vh"}>Even after living with him for three years, whenever I look over at him,</Text>
                    <Text pb={"40vh"}>I’m still often stuck between the <Text as="span" fontStyle="italic">"is he mad at me?"</Text> and the <Text as="span" fontStyle="italic">"wow, he looks really relaxed."</Text></Text>
                    <Text pb={"15vh"}>About a year ago, I had the chance to stay with his family in their home for a couple of days.</Text>
                    <Text pb={"10vh"}>At school, Eric’s known to be pretty blunt and cold at times.</Text>
                    <Text pb={"25vh"}>But at home, I noticed his resting face was a couple tones brighter.</Text>
                    <Text pb={"15vh"}>He’d smile and laugh a lot more in his interactions with his mom.</Text>
                    <Text pb={"10vh"}>And to his sister,</Text>
                    <Text pb={"25vh"}>who’s a couple years younger,</Text>
                    <Text pb={"45vh"}>His words were sweet and affirming.</Text>
                    <Text pb={"10vh"}>And maybe it had to do with being back in his hometown.</Text>
                    <Text pb={"15vh"}>There’s something uniquely relaxing and comfortable about being in the place where you spent the most formative and vulnerable years of your life.</Text>
                    <Text pb={"10vh"}>One afternoon, he was driving me around his neighborhood when we took a sudden detour.</Text>
                    <Text pb={"15vh"}>He spotted his favorite ice cream place,</Text>
                    <Text pb={"45vh"}>And told me I <Text as="span" fontStyle="italic">had</Text> to try it.</Text>
                    <Text pb={"15vh"}>With spoon-in-mouth,</Text>
                    <Text pb={"15vh"}>I was able to get a glimpse of the Eric that existed before I ever met him.</Text>

                    <BlogImage
                        src="https://res.cloudinary.com/doypjterz/image/upload/v1771474979/IMG_4186_ocacax.jpg"
                        alt="Eric eats a banana split"
                        caption="banana split"
                        orientation="v"
                        pt="10vh"
                        pb="20vh"
                    />


                    <Text pb={"15vh"}>I didn’t recognize this part of Eric.</Text>
                    <Text pb={"35vh"}>It was outside the context of how I knew him.</Text>
                    <Text pb={"30vh"}>I smiled as I reached in for a bite before he could get to the rest of it.</Text>

                    <Text fontWeight="bold" paddingBottom={"7vh"}>—</Text>



                    <Text pb={"15vh"}>Jonah is not a very physically affectionate guy.</Text>
                    <Text pb={"10vh"}>He’s thoughtful and sweet in many different ways,</Text>
                    <Text pb={"15vh"}>but I’m lucky to even get a handshake from him.</Text>
                    <Text pb={"35vh"}>Sometimes, I’m a little scared he might lash out whenever I go for a pat on the back.</Text>
                    <Text pb={"10vh"}>And it makes sense—</Text>
                    <Text pb={"30vh"}>Some families are less "touchy" than others.</Text>
                    <Text pb={"15vh"}>But the first time I met his parents,</Text>
                    <Text pb={"10vh"}>his dad shouted <Text as="span" fontStyle="italic">"bring it in for a big one, boy"</Text> as he engulfed Jonah in a big bear hug.</Text>
                    <Text pb={"30vh"}>His mom quickly joined in, referring to him as <Text as="span" fontStyle="italic">"my Jonah."</Text></Text>
                    <Text pb={"15vh"}>Now of course Jonah didn’t reciprocate the hug,</Text>
                    <Text pb={"15vh"}>standing there motionless,</Text>
                    <Text pb={"35vh"}>but I realized there definitely was no shortage of physical affection in his family.</Text>
                    <Text pb={"25vh"}>I was also wrong to think that Jonah’s hatred for junk food stemmed deep in his family.</Text>
                    <Text pb={"15vh"}>Turns out it’s just him.</Text>

                    <BlogImage
                        src="https://res.cloudinary.com/doypjterz/image/upload/v1771474969/IMG_9879_u4xe40.jpg"
                        alt="Jonah's dad finding a snack"
                        caption="Jonah’s dad reaches for another peanut butter cup"
                        orientation="v"
                        pt="20vh"
                        pb="20vh"
                    />

                    <Text pb={"15vh"}>As I stood there watching Jonah’s family wrapped around him tightly,</Text>
                    <Text pb={"15vh"}>I didn’t recognize this part of Jonah.</Text>
                    <Text pb={"35vh"}>It was outside the context of how I knew him.</Text>
                    <Text pb={"30vh"}>But I smiled as I (more confidently) reached in for a pat on the back.</Text>                    

                    <Text fontWeight="bold" paddingBottom={"7vh"}>—</Text>

                    <Text pb={"10vh"}>Whether it’s intended or just the nature of being in the context itself,</Text>
                    <Text pb={"35vh"}>Each context reveals something new about someone.</Text>

                    <Text pb={"10vh"}>In lab meetings, my PI is a fierce academic.</Text>
                    <Text pb={"30vh"}>But at the grocery store, I see her as an affectionate wife, with her arm casually hooked around her husband’s.</Text>

                    <Text pb={"15vh"}>And the shy guy in his fifties at my tennis club.</Text>
                    <Text pb={"10vh"}>The only sound I’ve ever heard him make was when I accidentally hit him with the ball during practice.</Text>
                    <Text pb={"30vh"}>But during the week, he’s a professor who stands in front of hundreds of students every week.</Text>
                    <Text pb={"10vh"}>And the same hand that my brother used to “discipline” me in the past,</Text>
                    <Text pb={"30vh"}>also lovingly wraps around his girlfriend in a display of “affection.”</Text>
                    <Text pb={"10vh"}>And my cousin—</Text>
                    <Text pb={"10vh"}>who in my head is still stuck in the context of the little girl who loves her stuffed panda called “Cutie”—</Text>
                    <Text pb={"15vh"}>travels around the world now leading and directing music for her a capella group.</Text>

                    <BlogImage
                        src="https://res.cloudinary.com/doypjterz/image/upload/v1771474978/IMG_1064_ktx4c3.jpg"
                        alt="Eunice"
                        caption="whiffenpoofs"
                        orientation="v"
                        pt="10vh"
                        pb="20vh"
                    />

                    <Text pb={"30vh"}>Some of the people I know exist in just one context.</Text>
                    <Text pb={"20vh"}>There’s friends I’ll only see during class and we’ll always say hi, sometimes talk about hanging out, but never follow up.</Text>
                    <Text pb={"10vh"}>There’s also a lot of people at church who I really enjoy talking with,</Text>
                    <Text pb={"20vh"}>But it’s limited to just the two hour block we have together on Sundays.</Text>
                    <Text pb={"10vh"}>And some friends I’ll always see at the gym no matter what time of day I go,</Text>
                    <Text pb={"35vh"}>But never anywhere else.</Text>

                    <Text pb={"10vh"}>But the trend I’ve noticed is that with all of my closer friends,</Text>
                    <Text pb={"35vh"}>I’ve seen them moving through many different contexts.</Text>

                    <Text pb={"10vh"}>Derek and I used to live together, and whenever his door was slightly ajar,</Text>
                    <Text pb={"20vh"}>I couldn’t help myself but to take a quick peek into his room.</Text>
                    <Text pb={"10vh"}>Sure enough,</Text>
                    <Text pb={"20vh"}>he was either reclining in his chair playing poker or taking a nap in his bed.</Text>
                    <Text pb={"10vh"}>But every Friday night,</Text>
                    <Text pb={"15vh"}>he’d switch into the talented leader of our church’s worship team—</Text>
                    <Text pb={"40vh"}>At the front of the stage with a guitar and mic, serenading us with his perfect pitch.</Text>

                    <Text pb={"15vh"}>And if you ever meet Grace, you’ll know she’s always lighthearted and cheerful.</Text>
                    <Text pb={"15vh"}>She loves talking about the triple cream brie cheese from Wegmans and the new discount at Kung Fu Tea.</Text>
                    <Text pb={"10vh"}>But I’ve also run into her many mornings in Philip’s Hall,</Text>
                    <Text pb={"15vh"}>where I’m reminded that she’s one of the most hardworking engineering students I know.</Text>
                    <Text pb={"10vh"}>She’s usually holding her bright pink coffee mug—</Text>
                    <Text pb={"15vh"}>a sign that she got minimal sleep the previous night.</Text>
                    <Text pb={"10vh"}>She’ll probably take a nap on the second floor sofa later, energizing herself to design just one more circuit,</Text>
                    <Text pb={"40vh"}>Before heading back home to indulge in her egg tart.</Text>

                    <Text pb={"15vh"}>And I occasionally spot Matthew at the dining hall in his bright red, plaid pajama pants.</Text>
                    <Text pb={"7vh"}>You probably don't want to stand behind him in line,</Text>
                    <Text pb={"30vh"}>Because he never leaves any bacon for the rest of us.</Text>   
                    <Text pb={"15vh"}>But sometimes he’ll put his nice dress pants on,</Text>
                    <Text pb={"40vh"}>where he switches into an intelligent, charismatic law school student who often inspires me with his writing.</Text>

                    <Text pb={"15vh"}>And Caleb.</Text>
                    <Text pb={"15vh"}>He <Text as="span" fontStyle="italic">loves</Text> to give brain teasers over lunch (when Jonah and I just want to eat).</Text>
                    <Text pb={"10vh"}>But when we got lunch with his parents, we finally saw him on the other side—</Text>
                    <Text pb={"15vh"}>stumped by a brain teaser given to him by his parents (how to be nice to his girlfriend).</Text>

                    <BlogImage
                            src="https://res.cloudinary.com/doypjterz/image/upload/v1771474969/IMG_7491_slkycl.jpg"
                            alt="Lunch with Caleb and Jonah"
                            caption='“So if you have 3 red balls and 2 blue in a bag...”'
                            orientation="v"
                            pt="10vh"
                            pb="20vh"
                        />

                    <Text pb={"35vh"}>And some people are really special because they can bring out aspects of others that I can’t bring out myself.</Text>
                    <Text pb={"15vh"}>No matter how hard I try, I can’t seem to bring out that same lighthearted side of Elisabeth that only Melody can bring out.</Text>
                    <Text pb={"25vh"}>Nor can I elicit the same laughter from Grace that comes from a uniquely Derek-coded joke.</Text>
                    <Text pb={"15vh"}>So when these people are there,</Text>
                    <Text pb={"15vh"}>their presence itself becomes a context in which our interactions are mutually enriched.</Text>

                    <BlogImage
                        src="https://res.cloudinary.com/doypjterz/image/upload/v1771474971/IMG_2451_iul9xw.jpg"
                        alt="Grace and Melody laughing at Derek"
                        caption="Derek cracks another joke"
                        orientation="v"
                        pt="10vh"
                        pb="20vh"
                    />

                    <Text fontWeight="bold" paddingBottom={"7vh"}>—</Text>

                    <Text pb={"15vh"}>Every time I see someone in a new setting or doing something I wouldn’t expect,</Text>
                    <Text pb={"30vh"}>It gives me an opportunity to see them in a new light.</Text>
                    <Text pb={"35vh"}>And some of these contexts are shinier than others.</Text>
                    <Text pb={"15vh"}>I find myself a lot more boisterous in some contexts,</Text>
                    <Text pb={"30vh"}>And noticeably quieter in others.</Text>
                    <Text pb={"15vh"}>There’s contexts where I don’t quite feel like I belong,</Text>
                    <Text pb={"35vh"}>Where I just want to switch back to what’s comfortable.</Text>
                    <Text pb={"25vh"}>But recently, I’ve been more intentional about trying to merge some of my contexts together.</Text>
                    <Text pb={"15vh"}>I’ve started cracking some more jokes during lab meetings.</Text>
                    <Text pb={"15vh"}>I’ve been trying to explain new CS research papers I read to my dad.</Text>
                    <Text pb={"35vh"}>I’ve started getting dinner with people from church throughout the week.</Text>
                    <Text pb={"15vh"}>And the more I switch between these different contexts,</Text>
                    <Text pb={"35vh"}>The more the lines between each of them starts to blur.</Text>
                    <Text pb={"25vh"}>It’s no longer as clear where my role in one context begins and where it ends.</Text>
                    <Text pb={"45vh"}>But I realize that’s where I can understand myself the best.</Text>
                    <Text pb={"15vh"}>I start to find the parts of myself that don't change <Text as="span" fontStyle="italic">between</Text> each context,</Text>
                    <Text pb={"35vh"}>but the parts that remain constant <Text as="span" fontStyle="italic">despite</Text> them.</Text>
                    <Text pb={"35vh"}>And I think that’s why I like seeing other people this way too.</Text>
                    <Text pb={"15vh"}>From the contexts where they shine the most,</Text>
                    <Text pb={"25vh"}>to the ones that glow a little less—</Text>
                    <Text pb={"45vh"}>Each part comes together to help me better understand the whole.</Text>
                    <Text pb={"10vh"}>Because after all,</Text>
                    <Text pb={"50vh"}>It’s all the same person.</Text>
                    <Text pb={"30vh"}>Just from another view,</Text>
                    <Text pb={"40vh"}>A little unexpected,</Text>
                    <Text pb={"55vh"}>And a little <Text as="span" fontStyle="italic">out of context.</Text></Text>        


                </Stack>
            </div>
        </div>
    );
};

export default OutofContext;
