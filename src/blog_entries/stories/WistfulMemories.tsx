import { Text, Stack } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import BlogImage from "../../components/blog/BlogImage";
import { useEffect } from "react";

const WistfulMemories = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Helmet>
        <title>biojameskim | Wistful Memories</title>
      </Helmet>

      <Text
        className="blog-title"
        fontSize="3rem"
        align={"center"}
        fontWeight={"medium"}
        pt={"12vh"}
      >
        Wistful Memories
      </Text>

      <div className="blog-text">
        <Text
          fontFamily="century"
          fontSize="2xl"
          align={"center"}
          fontWeight={"medium"}
          pt={"4vh"}
          pb={"10vh"}
        >
          April 2024
        </Text>

        <Stack
          spacing={7}
          width={{ base: "85%", md: "50%" }}
          fontSize={{ base: "17", md: "md" }}
          fontFamily="century"
        >
          <Text>Today I got pasta at the dining hall.</Text>
          <Text>
            As I poured the alfredo sauce over my pasta, a memory from my past
            suddenly resurfaced into my mind—{" "}
          </Text>
          <Text pb="5vh">a memory I didn't know I still had.</Text>

          <Text>
            One Saturday afternoon many years ago, I remember crying over the
            lunch my mom had prepared because I didn't want to eat her alfredo
            pasta.
          </Text>
          <Text pb="5vh">
            I don’t quite remember if it was the alfredo I didn’t want or if I
            was just releasing my frustration from something else.
          </Text>

          <Text>
            I stood in the pasta line for a couple seconds too long as I
            finished recollecting this old memory.
          </Text>

          <BlogImage
            src="../images/blog_pictures/Wistful-Memories/Pictures/0_pasta.jpeg"
            alt="Alfredo Pasta in dining hall"
            caption="Didn't cry this time"
            orientation="v"
          />
          <Text fontWeight="bold" paddingBottom={"7vh"}>
            —
          </Text>

          <Text>I’ve never had a birthday party before.</Text>
          <Text pb="5vh">
            Ever since my brother and I were born, it’s been our family
            tradition to celebrate birthdays with a family dinner. Just the four
            of us.
          </Text>

          <Text>
            We never ate out because my mom always wanted to cook for us.{" "}
          </Text>

          <Text>
            And we never bought a cake because my mom always wanted to bake one
            for us.
          </Text>

          <Text>
            And when we were younger, my mom would spend hours learning how to
            make different balloon creations herself just so she could make our
            family party feel a little more festive.
          </Text>

          <Text>And a little more alive.</Text>

          <BlogImage
            src="../images/blog_pictures/Wistful-Memories/Pictures/1_mybday.jpeg"
            alt="Family photo in 2010"
            caption="My birthday (2010)"
            orientation="h"
          />

          <Text>
            Many years ago, while we were shopping for new pants for me, I
            remember asking my mom why she never buys any new clothes for
            herself.
          </Text>

          <Text>
            Most of the clothes in her wardrobe were outfits she had bought
            years ago and anything new was gifts from others.
          </Text>

          <Text pb="5vh">
            She thought about it for some time, but she couldn’t give me an
            answer.
          </Text>

          <Text>And maybe she’s never really thought about it.</Text>

          <BlogImage
            src="../images/blog_pictures/Wistful-Memories/Pictures/2_momyouth.jpeg"
            alt="Mom and brother in her youth"
            caption="Mom's youth"
            orientation="h"
          />

          <Text>
            I’m sure that whenever she’s shopped for us in the past, countless
            pretty dresses have caught her eye.
          </Text>

          <Text pb="5vh">
            And I’m sure the fancy jewelry and handbags that decorated the other
            moms at church made her wonder from time to time how they might look
            on her.
          </Text>

          <Text>
            Now that both my brother and I do all of our shopping on our own, I
            finally see my mom buying new things here and there for herself.
          </Text>

          <Text pb="5vh">It’s not much. Nor is it that often.</Text>

          <Text>But when she does, I’m thankful. </Text>

          <Text>Thankful for her.</Text>

          <BlogImage
            src="../images/blog_pictures/Wistful-Memories/Pictures/3_momdad.jpeg"
            alt="Family photo in 2004"
            caption="My mom still shops for my dad"
            orientation="h"
          />

          <Text>
            My mom’s always tried her best to care for our family before
            anything else, and I’ve never heard her complain about having to
            cook us a meal.
          </Text>

          <Text>
            So when I think of the sacrifices she’s made for me, the memory of
            me crying and complaining over my mom’s alfredo pasta paralyzes me
            with so much shame and regret.
          </Text>

          <Text fontWeight="bold" paddingBottom={"7vh"}>
            —
          </Text>

          <Text>
            While I was traveling in Toronto with some friends recently, we came
            across a small gift shop.
          </Text>

          <Text pb="5vh">
            We looked around, and in the corner of the shop, I found a small
            music box on display.
          </Text>

          <Text>
            Not being able to fight my curiosity, I slowly spun it around and
            let the tune unwind.
          </Text>

          <Text>
            And as the first note of the lullaby filled the room, a memory from
            my past suddenly resurfaced into my mind—{" "}
          </Text>

          <Text pb="5vh">a memory I didn't know I still had.</Text>

          <Text>
            When my family lived in Boston over 14 years ago, my dad brought
            home a small music box from the MIT gift shop one night.
          </Text>

          <Text pb="5vh">
            I remember I would spin it around and around in fascination, hoping
            the beautiful tune would last forever.
          </Text>

          <Text>
            The tune didn’t last quite as long as I had hoped, but unknowingly
            to me, the memory of it had lasted with me until now.
          </Text>

          <BlogImage
            src="../images/blog_pictures/Wistful-Memories/Pictures/4_furelise.jpeg"
            alt="Music box playing Fur Elise"
            caption="Fur Elise"
            orientation="v"
          />

          <Text fontWeight="bold" paddingBottom={"7vh"}>
            —
          </Text>

          <Text>My dad apologized to me recently.</Text>

          <Text pb="5vh">
            As he was reminiscing about my childhood, he told me he felt so
            sorry that he could only afford to buy a small Bakugan toy for my
            8th birthday.
          </Text>

          <Text>But my memory of that day is so different.</Text>

          <Text pb="5vh">
            I remember eagerly picking out what I wanted at Target and not being
            able to wait to play with it.{" "}
          </Text>

          <Text>
            Yet it pains me to think about that day from his perspective.
          </Text>

          <Text>
            How he must have felt, watching his little boy’s joy over a single
            toy, knowing that it was just a small fraction of what he wanted to
            give.
          </Text>

          <BlogImage
            src="../images/blog_pictures/Wistful-Memories/Pictures/5_dadboys.jpeg"
            alt="Dad and his boys"
            caption="Dad's boys"
            orientation="h"
          />

          <Text pb="5vh">
            I’ve never looked back on that day with remorse or sadness of how
            many more Bakugans my dad could have bought me.
          </Text>

          <Text>
            But when I do look back, I think of how much time my dad always
            tried to spend with me and my brother.
          </Text>

          <Text pb="5vh">
            He was always the first to ask us to play tennis, the first to take
            us to the park, the first to buy us a delicious meal.
          </Text>

          <Text>
            Growing up, there was never a void in my heart that I needed to fill
            with more Bakugans and toys.
          </Text>

          <Text pb="5vh">My dad was always there to fill that void.</Text>

          <Text>
            A toy was just something that kept me occupied while my dad was
            working, and the real fun started when he came home from work.
          </Text>

          <BlogImage
            src="../images/blog_pictures/Wistful-Memories/Pictures/6_ds.jpeg"
            alt="Selfie with dad and me"
            caption="Taken on my Nintendo 3DS"
            orientation="h"
          />

          <Text fontWeight="bold" paddingBottom={"7vh"}>
            —
          </Text>

          <Text>
            My mom sent a photo to our family group chat the other day.
          </Text>

          <Text>
            She said we wrote these notes for our dad right before he left for a
            job interview in California 13 years ago.
          </Text>

          <Text>
            In our slightly broken Korean, we gave him some encouragement. Along
            with some money.
          </Text>

          <BlogImage
            src="../images/blog_pictures/Wistful-Memories/Pictures/7_notes.jpeg"
            alt="Notes we wrote to dad"
            caption={`Left [My brother's note]: " Money to buy something delicious... to Dad" `}
            caption2='Right [My note]: "Dad, use this money to buy coffee. I love you. Fighting!"'
            orientation="h"
          />

          <Text>
            I’m sure the money I gave him couldn’t even cover half a cup of
            coffee.
          </Text>

          <Text pb="5vh">
            But for my dad, it seems like there was something in these notes
            that was more valuable to him.
          </Text>

          <Text>
            Out of all the memories that come and go, perhaps this was a memory
            he didn't want to forget.
          </Text>

          <Text>A memory he refused to let go.</Text>

          <Text fontWeight="bold" paddingBottom={"7vh"}>
            —
          </Text>

          <Text pb="5vh">
            I always tell people that I’m someone who lives in the present.{" "}
          </Text>

          <Text>
            But when these forgotten memories unexpectedly revisit me, they make
            me relive the experiences of my past.
          </Text>

          <Text pb="5vh">
            And most of these memories are tied with the people I love the most.
          </Text>

          <Text pb="5vh">
            And I think that’s why the memories that remind me of my regrets and
            mistakes hurt the most.
          </Text>

          <Text>
            I wish I could’ve been a little more patient and a little more
            loving.
          </Text>

          <Text>
            I wish I could've been better to the friends and family that tried
            their best for me.
          </Text>

          <BlogImage
            src="../images/blog_pictures/Wistful-Memories/Pictures/8_dadyouth.jpeg"
            alt="Dad and songs"
            caption="Dad's youth"
            orientation="h"
          />

          <Text fontWeight="bold" paddingBottom={"7vh"}>
            —
          </Text>

          <Text>
            I know it won’t take long before I forget these memories again.
          </Text>

          <Text>
            And I know there’s so many more that I can’t think of right now, but
            are stored somewhere deep inside my past.
          </Text>

          <Text pb="5vh">
            But I know these memories will always come back to revisit me.
          </Text>

          <Text>
            In one part of my heart, I don’t want to be reminded of my past.{" "}
          </Text>

          <Text pb="3vh">
            Some of these memories hurt and remind me of who I wish I wasn’t.
          </Text>

          <Text>
            Yet in a bigger part of my heart, I welcome these memories.{" "}
          </Text>

          <Text pb="5vh">
            I yearn for these pieces of my past because they remind me of who I
            am.
          </Text>

          <Text>
            And all of these memories— these fragments of my past— come together
            to paint a mosaic of my life.
          </Text>

          <BlogImage
            src="../images/blog_pictures/Wistful-Memories/Pictures/9_mosaic.jpeg"
            alt="Mosaic of a flower"
            caption="My life"
            orientation="v"
          />

          <Text pb="5vh">
            The best I can do now is to keep painting the fragment that defines
            my present.
          </Text>

          <Text>I’ll keep painting and painting until one day, </Text>

          <Text>
            The experiences that surround me now become yet another wistful
            memory I can look back on.
          </Text>

          <Text pb="5vh">
            And even though some of these pieces aren’t beautiful, I hope the
            final mosaic is something beautiful.
          </Text>

          <Text>Something I can be proud of, </Text>

          <Text>and something I can come to love.</Text>

          <Text pb="10vh">- James Kim</Text>
        </Stack>
      </div>
    </div>
  );
};

export default WistfulMemories;
