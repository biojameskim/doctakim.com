import { Heading, Text, Stack, Box } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import BlogImage from "../../components/blog/BlogImage";
import { useEffect } from "react";

const Prayer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Helmet>
        <title>biojameskim | Prayer</title>
      </Helmet>

      <Heading
        fontSize={{ base: '3rem', md: "3.3rem"}} 
        textAlign={"center"}
        fontWeight={"medium"}
        pt={"12vh"}
        px="3"
      >
        Prayer
      </Heading>

      <div className="blog-text">
        <Text
          fontSize="2xl"
          align={"center"}
          pt={"4vh"}
          pb={"15vh"}
        >
          June 2023
        </Text>

        <Stack
          spacing={7}
          width={{ base: "85%", md: "50%" }}
          fontSize={{ base: "16", md: "md" }}
        >
          <Text>I’m a Christian.</Text>
          <Text>
            And one thing Christians believe is that prayer's really important.
          </Text>
          <Text pb="5vh">
            It’s a way we can talk with God, whether it be telling Him about our
            day or listening to what He might be saying to us.
          </Text>

          <Text>
            Though a lot of times, prayer can feel like I’m talking to a wall.
          </Text>
          <Text pb="5vh">
            Is God <i>really</i> listening on the other side? Or am I just
            talking to myself?
          </Text>

          <Text>
            But as a Christian, I eagerly want to believe that prayer really{" "}
            <i>does</i> have power.
          </Text>
          <Text>That God is really listening to me,</Text>
          <Text>And that He really does answer my prayers.</Text>

          <BlogImage
            src="../images/blog_pictures/Prayer/Pictures/pray_1.jpeg"
            alt="Bro and Me in Washington DC."
            caption="Hands together in prayer."
            orientation="v"
          />

          <Text pb="5vh">I’ve been praying pretty much my whole life.</Text>

          <Text>
            I grew up in a Christian family, so prayer's been a part of my life
            for as long as I can remember.
          </Text>
          <Text pb="5vh">
            My pastor encouraged me to pray every Sunday morning, my parents
            made me pray before we ate dinner together every evening, and I'd
            try my best to pray before I fell asleep every night.
          </Text>

          <Text>
            There’s been many times in my life where I doubted whether
            Christianity was even true and if God was even real, but for each of
            those moments, I always found myself coming back to prayer.
          </Text>
          <Text>
            I’d ask God to reveal Himself to me, eagerly hoping that God would
            listen to me.
          </Text>
          <Text pb="5vh">
            Even when going to church and talking to other Christians was the
            last thing I wanted to do, the one thing that kept me holding onto
            my faith was prayer.
          </Text>

          <Text>So if you ask me,</Text>
          <Text>
            I believe prayer is important and that God really does answer my
            prayers.
          </Text>

          <BlogImage
            src="../images/blog_pictures/Prayer/Pictures/pray_2.jpeg"
            alt="Bro and Me at my Chinese School."
            caption="“I don’t have to be tall. But God… Please."
            caption2="Just taller than my brother.”"
            orientation="h"
          />

          <Text pb="5vh">
            When I really want something that’s out of my control, I usually
            find myself praying to God.
          </Text>

          <Text>I prayed for a good community when I came to Cornell,</Text>
          <Text>I frequently pray for my family's health and safety,</Text>
          <Text>
            And lately, I’ve been praying for God to guide me in my vocation.
          </Text>

          <BlogImage
            src="../images/blog_pictures/Prayer/Pictures/pray_3.jpeg"
            alt="Bro and Me at a Karaoke place."
            caption="Probably not a singer"
            orientation="h"
          />

          <Text fontWeight="bold" paddingBottom={"7vh"}>
            —
          </Text>

          <Text>
            My brother recently graduated college and ever since February, he’s
            been looking for research positions for his gap year before med
            school.
          </Text>
          <Text pb="5vh">
            And everyone around my brother has been praying for him.
          </Text>

          <Text>
            My mom’s been praying for him, my dad’s been praying for him, and of
            course, my brother’s been praying for himself.
          </Text>

          <BlogImage
            src="../images/blog_pictures/Prayer/Pictures/pray_4.jpeg"
            alt="Mom and Bro hugging while Dad watches from the side."
            caption="Mom and Bro make Dad feel a little left out."
            orientation="v"
          />

          <Text pb="5vh">But there’s something I haven’t told my family.</Text>

          <Text pb="5vh">I haven’t been praying for my brother.</Text>

          <Text pb="10vh">Not even once.</Text>

          <Text>
            Don’t get me wrong, I want him to be employed and start making
            money.
          </Text>
          <Text pb="5vh">
            And I want him to do everything he can to start preparing himself
            for med school.
          </Text>

          <Text>
            But summer’s the only time I get to really spend with my brother,
            and now that he’s out of college, I wanted to finally spend some
            time with him again.
          </Text>
          <Text pb="5vh">
            I want him to get a great research position, but I wish I could
            delay it at least until I have to go back to college in August.
          </Text>

          <BlogImage
            src="../images/blog_pictures/Prayer/Pictures/pray_5.jpeg"
            alt="Brother and Me in middle school."
            caption="Same initials means PE clothes can be handed down."
            orientation="v"
          />

          <Text fontWeight="bold" paddingBottom={"7vh"}>
            —
          </Text>

          <Text>
            When I used to spend every day with my brother, I didn’t realize how
            precious those moments were.
          </Text>
          <Text>
            I’d walk into his room and start jumping on his bed just to annoy
            him, and then he’d tickle me until I cried.
          </Text>
          <Text>
            And there were days when we’d fight so much that I'd yell at him to
            leave and never come back.
          </Text>

          <BlogImage
            src="../images/blog_pictures/Prayer/Pictures/pray_6.jpeg"
            alt="Bro and me on a couch."
            caption="He came back."
            orientation="v"
          />

          <Text>
            I remember Covid first hit during my brother's freshman year of
            college.
          </Text>
          <Text>
            He was pretty bummed that his freshman year had to be cut so short,
            but when I saw him back home in his familiar room again,
          </Text>
          <Text pb="5vh">I'm not gonna lie,</Text>

          <Text>I was pretty happy.</Text>

          <BlogImage
            src="../images/blog_pictures/Prayer/Pictures/pray_7.jpeg"
            alt="Me and Bro in front of Sather Gate."
            caption="He came back. Again."
            orientation="h"
          />

          <Text fontWeight="bold" paddingBottom={"7vh"}>
            —
          </Text>

          <Text>Lately, I've been home alone.</Text>
          <Text pb="5vh">
            My entire family went to Korea for a month so I’ve been living by
            myself.
          </Text>

          <Text>
            At first, I was pretty excited at the thought of having some
            independence. There'd be no curfew and I could finally start
            learning how to cook for myself.
          </Text>
          <Text pb="5vh">But that excitement didn’t last very long.</Text>

          <Text>
            I've realized that home without family isn’t really <i>home</i>.
          </Text>

          <BlogImage
            src="../images/blog_pictures/Prayer/Pictures/pray_8.jpeg"
            alt="Homemade pb&j sandwich."
            caption="No Mom means pb&j sandwich for dinner. Again."
            orientation="h"
          />

          <Text>
            Every time I walk out of my room, whether it be to use the bathroom
            or go to the kitchen, my brother’s room catches the corner of my
            eye.
          </Text>
          <Text pb="5vh">The lights are off and his chair is empty.</Text>

          <Text>Sometimes, I'll walk in and just lay on his bed.</Text>
          <Text pb="5vh">I jump,</Text>

          <Text>but no one's there to tickle me.</Text>

          <BlogImage
            src="../images/blog_pictures/Prayer/Pictures/pray_9.jpeg"
            alt="Brother and Me on a subway."
            caption="Me and the Tickle Monster"
            orientation="v"
          />

          <Text fontWeight="bold" paddingBottom={"7vh"}>
            —
          </Text>

          <Text>My brother got a call from a hospital the other day.</Text>
          <Text pb="5vh">They told him he starts next month.</Text>

          <Text>I’m happy for him.</Text>
          <Text>
            He’ll be spending the next two years preparing himself for the next
            big step of his life,
          </Text>
          <Text pb="5vh">
            and meeting brilliant people and gaining opportunities he wouldn’t
            be able to experience if he stayed home.
          </Text>

          <Text>I’m happy for him,</Text>
          <Text>
            But I think there’ll always be a part of me that wants to walk into
            his room just to bother him.
          </Text>

          <Text>
            A part of me that wants to yell at him to leave because I know that
            he won’t.
          </Text>
          <Text pb="5vh">And a part of me that’s too afraid to pray—</Text>

          <Text>
            Especially if that prayer means less time with the people I love.
          </Text>

          <Box
            paddingY="5vh"
            maxWidth={"400px"}
            alignSelf="center"
            borderRadius="xl"
            overflow="hidden"
          >
            <video controls>
              <source src="../images/blog_pictures/Prayer/Pictures/pray_10.mov" />
            </video>
            <Box height="0.5rem"></Box>
            <Text as="i" paddingLeft="1.2rem">
              "I don't wanna lose you now..."
            </Text>
          </Box>

          <Text pb="10vh"> - James Kim</Text>
        </Stack>
      </div>
    </div>
  );
};

export default Prayer;
