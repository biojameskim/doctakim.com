import { Heading, Text, Stack } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import BlogImage from "../../components/blog/BlogImage";
import { useEffect } from "react";

const MySister = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Helmet>
        <title>biojameskim | My Sister</title>
      </Helmet>

      <Heading
        fontSize="3.3rem"
        textAlign={"center"}
        fontWeight={"medium"}
        pt={"12vh"}
      >
        My Sister
      </Heading>

      <div className="blog-text">
        <Text
          fontSize="2xl"
          align={"center"}
          pt={"4vh"}
          pb={"15vh"}
        >
          August 2022
        </Text>

        <Stack
          spacing={7}
          width={{ base: "85%", md: "50%" }}
          fontSize={{ base: "17", md: "md" }}
        >
          <Text>I’m really not that mysterious of a guy.</Text>
          <Text>
            {" "}
            I don’t mind sharing about the highs and lows of my week, and
            depending on how you ask,
          </Text>
          <Text pb="5vh">I'm an open book.</Text>

          <Text> But there’s one thing I usually don’t tell people.</Text>
          <Text pb="5vh"> It’s something a little more personal—</Text>

          <Text>I have a younger sister.</Text>

          <BlogImage
            src="../images/blog_pictures/My-Sister/Pictures/1sis.jpeg"
            alt="A picture of me, bro, and sis"
            caption="Left to right: me, bro, and sis"
            orientation="h"
          />

          <Text pb="5vh">Just kidding.</Text>

          <Text pb="5vh">That’s just my cousin.</Text>

          <Text>
            But lately, I’ve been thinking more about what it'd be like to have
            a younger sister.
          </Text>

          <Text fontWeight="bold" paddingY={"7vh"}>
            —
          </Text>

          <Text>
            Growing up, my brother and I wanted to be world-class youtubers.
          </Text>
          <Text>
            A lot of our time after school was consumed by brainstorming new
            video ideas and recording new scenes.
          </Text>
          <Text pb="5vh">
            Since both of us were the screenwriters, directors, and actors for
            our videos,
          </Text>

          <Text pb="5vh">
            We <em>really</em> could’ve used a cameraman.
          </Text>

          <Text>
            Though I guess if our sister really wanted, we could’ve let her have
            a cameo in one of our films too.
          </Text>

          <BlogImage
            src="../images/blog_pictures/My-Sister/Pictures/2the notebook.png"
            alt="A picture of me and bro in a movie"
            caption='"The Notebook" (2012)'
            orientation="h"
          />

          <Text>
            Eventually, we realized we had no talent for screenwriting,
            directing, or acting.
          </Text>
          <Text pb="5vh">
            So we turned to other outlets to express ourselves—
          </Text>

          <Text pb="5vh">We went into a phase where we wanted to be cool.</Text>

          <Text>
            There was this new app called Instagram and we posted pictures of
            the coolest poses we could think of.
          </Text>

          <Text>Our poses were ahead of their time…</Text>

          <BlogImage
            src="../images/blog_pictures/My-Sister/Pictures/3cool brothers.png"
            alt="A picture of me and bro trying to be cool"
            caption="These posts are long deleted"
            orientation="h"
          />

          <Text pb="5vh">Or so we thought.</Text>

          <Text>
            Not that our poses weren’t cool, but our sister would’ve definitely
            helped us pose so much better.
          </Text>
          <Text>
            And back in the past, me and my brother used to be pretty darn
            crusty.
          </Text>
          <Text>But it wasn’t our fault.</Text>
          <Text> We just didn’t have a sister telling us what to wear.</Text>

          <BlogImage
            src="../images/blog_pictures/My-Sister/Pictures/4jamestown.png"
            alt="Me in a very cringy outfit"
            caption="Even the 17th century pilgrims of Jamestown would cringe at this outfit"
            orientation="h"
          />

          <Text>But all this aside,</Text>
          <Text pb="5vh">
            {" "}
            I think what I really want is another person I can do life with.
          </Text>

          <Text> One more person to jam to khiphop with.</Text>
          <Text>
            One more person to nag me about putting the toilet seat back down.
          </Text>
          <Text>One more person to cry over kdramas with.</Text>

          <BlogImage
            maxW="450px"
            src="../images/blog_pictures/My-Sister/Pictures/5sad crash landing.png"
            alt='Me crying after watching "Crash Landing on You"'
            caption='"Crash Landing on You" was sad'
            orientation="v"
          />

          <Text>
            And trust me, it’s not just me who wants a younger sister.
          </Text>
          <Text>My dad wanted ME to be the younger sister for my brother.</Text>
          <Text>
            When the ultrasound technician told my parents that I was a boy back
            in ‘02,
          </Text>
          <Text>my dad asked if they could check one more time.</Text>

          <BlogImage
            src="../images/blog_pictures/My-Sister/Pictures/6dadlovesme.jpg"
            alt="A picture of me and Dad"
            caption="Dad promises me he loves me for who I am"
            orientation="h"
          />

          <Text fontWeight="bold" paddingBottom={"7vh"}>
            —
          </Text>

          <Text>I’ve always looked up to my brother.</Text>
          <Text> I started playing tennis because he played tennis,</Text>
          <Text>
            and I worked hard in high school because I saw him working hard
            first.
          </Text>
          <Text>
            I’ve relied on my brother before I even knew he was my brother.
          </Text>
          <Text>
            {" "}
            Even now, I ask for his opinion on things even as small as which
            color t-shirt I should wear today.
          </Text>

          <BlogImage
            src="../images/blog_pictures/My-Sister/Pictures/7story time.png"
            alt="Me and Bro in early years"
            caption="Story time or potty time?"
            orientation="h"
          />

          <Text pb="5vh">
            I wish I could be that same loving role model for my younger sister.
          </Text>

          <Text>Someone that listens without interruption.</Text>
          <Text>
            Someone that compliments and encourages but also disciplines when
            needed.
          </Text>
          <Text>
            Someone that reminds her constantly that she’s loved and cared for.
          </Text>

          <BlogImage
            src="../images/blog_pictures/My-Sister/Pictures/8my safe space.PNG"
            alt="Bro protecting me"
            caption="My safe space"
            orientation="h"
          />

          <Text>
            And most importantly, I think I could’ve given my sister some
            <em>
              <Text as="b"> great</Text>
            </em>{" "}
            advice.
          </Text>
          <Text>
            From questions about academics, faith, friendships, and even
            questions about dating,
          </Text>
          <Text pb="5vh">
            I definitely could’ve pointed her in the right direction.
          </Text>

          <Text>Yeah I know,</Text>
          <Text>I know.</Text>
          <Text>I’ve never dated anyone before.</Text>
          <Text pb="5vh">But the coach doesn't play the game, does he?</Text>

          <Text as="i" fontSize="xl" paddingLeft={"2rem"}>
            “So there’s this guy…”
          </Text>
          <Text pb="4vh">
            What’s his full name, what’s his age, where does he go to school,
            and what do his parents do?
          </Text>

          <Text as="i" fontSize="xl" paddingLeft={"2rem"}>
            “I think about him all the time and I get butterflies in my stomach
            every time I see him. I just want to be with him. Does this mean I
            like him?”
          </Text>
          <Text pb="4vh">I don’t think so.</Text>

          <Text as="i" fontSize="xl" paddingLeft={"2rem"}>
            “I’m sure I like him. I think I’m gonna go for it.”
          </Text>
          <Text pb="4vh">
            Give me a list of the top 10 reasons why you like him.
          </Text>

          <BlogImage
            maxW="450px"
            src="../images/blog_pictures/My-Sister/Pictures/9 i know love.jpeg"
            alt="A picture of me with sunglasses. Swag."
            caption="Love... Dating... Heartbreak..."
            caption2="What's that?"
            orientation="h"
          />

          <Text fontWeight="bold" paddingBottom={"7vh"}>
            —
          </Text>

          <Text>
            I read in a book somewhere that said kids are a breath of fresh air
            because they live in the present.
          </Text>
          <Text pb="5vh">
            They don’t care about yesterday’s mistakes or worry about what
            tomorrow will bring—
          </Text>
          <Text pb="5vh">
            They’re already onto finding the next fun thing that’ll bring them
            joy in the present.
          </Text>

          <BlogImage
            src="../images/blog_pictures/My-Sister/Pictures/9charlles.JPG"
            alt="Charles on a swing."
            caption="This brings Charles joy in the present"
            orientation="h"
          />

          <Text>
            Every Sunday, I hang out with the little kids at my church and I’ve
            seen them grow up over a couple years now.
          </Text>
          <Text pb="5vh">
            And most of them lose the bright, contagious energy they once had.
          </Text>

          <Text>
            They start to be self-conscious about yesterday’s mistakes and worry
            about how their peers will view them tomorrow.
          </Text>
          <Text>
            They begin to package themselves in a way they think is presentable.
          </Text>
          <Text pb="5vh">
            And in this packaging, they lose the boldness they once had.
          </Text>

          <Text>They’re no longer confident in themselves.</Text>

          <BlogImage
            src="../images/blog_pictures/My-Sister/Pictures/10 no boys allowed.jpeg"
            alt="church girls playing together."
            caption="They said boys aren't allowed to join"
            orientation="h"
          />

          <Text>
            As I witness the kids go through this process, I can’t help but see
            parts of my younger self in them.
          </Text>

          <Text>
            And there’s so many things I wish I could tell my younger self:
          </Text>
          <Text>To have more confidence,</Text>
          <Text pb="5vh">
            And that a lot of things aren’t as big of a deal as I made them to
            be.
          </Text>

          <Text>
            I wish I could affirm my sister in these things so she wouldn’t lose
            sight of her boldness like I once did.
          </Text>

          <Text fontWeight="bold" paddingY={"7vh"}>
            —
          </Text>

          <Text>
            I also can’t help but think what it would be like if one of these
            little girls was my younger sister.
          </Text>
          <Text pb="5vh">
            Judging by how they interact with me, I think they would’ve liked me
            as an older brother too.
          </Text>

          <BlogImage
            maxW="450px"
            src="../images/blog_pictures/My-Sister/Pictures/leah screw off.jpg"
            alt=""
            caption={`Leah: "I'm gonna cut your finger off and stab you"`}
            orientation="v"
          />

          <Text fontWeight="bold" paddingBottom={"7vh"}>
            —
          </Text>

          <Text>
            The three guys in my family really like to play tennis together.
          </Text>
          <Text>
            Since my mom doesn’t play, she usually sits on the benches to the
            side and watches us.
          </Text>
          <Text>I don’t know when, but at some point,</Text>
          <Text>my mom stopped following us out to the park.</Text>

          <BlogImage
            src="../images/blog_pictures/My-Sister/Pictures/mom bench.png"
            alt="Mom sitting and watching us play tennis"
            orientation="h"
          />

          <Text pb="5vh">
            There’s only a limit to the way us three guys can comfort Mom.
          </Text>

          <Text>
            I wish someone could try on outfits with her and pick out jewelry
            for her.
          </Text>
          <Text>
            I wish someone could put on makeup with her and paint her nails for
            her.
          </Text>
          <Text>And even if it’s just for a moment,</Text>
          <Text pb="5vh">
            I wish someone could make my mom feel like she’s back in college,
            hanging out with her girl friends.
          </Text>

          <Text>Back in her youth again.</Text>

          <BlogImage
            src="../images/blog_pictures/My-Sister/Pictures/mom pic.png"
            alt="Mom and dad walking together"
            orientation="h"
          />

          <Text fontWeight="bold" paddingBottom={"7vh"}>
            —
          </Text>

          <Text>
            Up until now and probably for the rest of my life, it’ll just be me
            and my bro.
          </Text>
          <Text>
            {" "}
            But I’m happy with that and I’m thankful for the family dynamic that
            we have.
          </Text>
          <Text>
            And even though I couldn’t be that daughter for my parents,
          </Text>
          <Text pb="5vh">
            Not having a sister has taught me to be more in tune with my mom’s
            emotions.
          </Text>

          <Text>
            It’s taught me that sometimes, my mom’s worries aren’t pleas for
            help or advice,
          </Text>
          <Text>But instead pleas for a hug and someone that can listen.</Text>

          <BlogImage
            src="../images/blog_pictures/My-Sister/Pictures/familial love.png"
            alt="Me and bro have a kiss"
            caption="The Kim brothers know the responsibilities/consequences of familial love"
            orientation="h"
          />

          <Text>But still—</Text>
          <Text> If you’re a girl</Text>
          <Text>
            And you’ve ever wanted to have two cool, overprotective older
            brothers,
          </Text>
          <Text>Come give the Kim brothers a chance.</Text>

          <BlogImage
            maxW="450px"
            src="../images/blog_pictures/My-Sister/Pictures/cool and cooler.jpeg"
            alt="Me and bro being very cool"
            caption="Cool and cooler"
            orientation="v"
          />

          <Text pb="10vh">- James Kim</Text>
        </Stack>
      </div>
    </div>
  );
};

export default MySister;
