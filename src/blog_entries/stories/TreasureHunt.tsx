import { Text, Stack } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import BlogImage from "../../components/blog/BlogImage";
import { useEffect } from "react";

const TreasureHunt = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Helmet>
        <title>biojameskim | Treasure Hunt</title>
      </Helmet>

      <Text
        className="blog-title"
        fontSize="3rem"
        align={"center"}
        fontWeight={"medium"}
        pt={"12vh"}
      >
        Treasure Hunt
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
          October 2022
        </Text>

        <Stack
          spacing={7}
          width={{ base: "85%", md: "50%" }}
          fontSize={{ base: "17", md: "md" }}
          fontFamily="century"
        >
          <Text>I’m a Californian by heart.</Text>
          <Text>
            I’ve lived there since I was in third grade so most of my childhood
            memories take place next to palm trees and beautiful sunsets in dry,
            hot weather.
          </Text>
          <Text>
            {" "}
            But before my family moved to California, we used to live in
            Massachusetts while my Dad worked for a short time at MIT.
          </Text>
          <Text pb="5vh">
            {" "}
            So a lot of my childhood memories take place in Boston too—
          </Text>

          <Text>
            next to evergreen trees and snowstorms in wetter, colder weather.
          </Text>

          <BlogImage
            src="../images/blog_pictures/Treasure-Hunt/Pictures/1-harvard.jpeg"
            alt="John Harvard's foot"
            caption="Touching John Harvard's foot is good luck."
            orientation="h"
          />

          <Text pb="5vh">
            While we were in Boston, my mom, brother, and I would go visit my
            dad pretty often while he was working.
          </Text>

          <Text>And if you didn’t know, MIT has this big patch of grass.</Text>
          <Text>
            I think they call it “the Lawn” or something like that, but it looks
            like this:
          </Text>

          <BlogImage
            src="../images/blog_pictures/Treasure-Hunt/Pictures/2-mitlawn.jpeg"
            alt='"The Lawn" at MIT'
            caption='"The Lawn" at MIT'
            orientation="h"
          />

          <Text pb="5vh">
            A lot of my memories in Boston take place on this lawn.
          </Text>
          <Text>
            In the summer, my brother and I would race and wrestle on the lawn,
            and my family would picnic together under one of the big trees.
          </Text>
          <Text pb="5vh">
            And in the winter, my brother and I would have snowball fights on
            the lawn, and my family would make snowmen together under the hazy,
            white sky.
          </Text>

          <BlogImage
            src="../images/blog_pictures/Treasure-Hunt/Pictures/3-mitlawn-mom.jpeg"
            alt="Fun on the lawn"
            caption="Fun on the lawn"
            orientation="h"
          />

          <Text>
            Eventually, my dad found a new job in California and we were forced
            to leave the lawn behind us.
          </Text>
          <Text>But the night before we moved across the country,</Text>
          <Text pb="5vh">
            My dad told me and my brother that he left something behind at MIT.
          </Text>

          <Text>He said that somewhere on MIT’s campus,</Text>
          <Text>he had hidden a treasure.</Text>

          <Text fontWeight="bold" paddingY={"7vh"}>
            —
          </Text>

          <Text>
            Time to time, whenever we remembered, we would ask our dad what the
            contents of the treasure were.
          </Text>
          <Text pb="5vh">
            But every time we asked, he would simply say the same, repetitive
            thing—
          </Text>

          <Text pb="5vh">
            He reassured us that if we were ever to go back to Boston, he would
            tell us where to go to find it.
          </Text>

          <Text>
            But what kind of a treasure could you possibly hide on a college
            campus?
          </Text>
          <Text>
            I always thought he was joking and him telling us to go find that
            treasure was just his way of saying
          </Text>
          <Text>“go to MIT for college.”</Text>

          <BlogImage
            src="../images/blog_pictures/Treasure-Hunt/Pictures/4 plymouth.JPG"
            alt="Dad and sons in front of Plymouth"
            caption="Sorry Dad, none of us made it to MIT"
            orientation="h"
          />

          <Text pb="5vh">But still.</Text>

          <Text>A small part of me wasn’t sure.</Text>
          <Text pb="5vh">A small part of me was hopeful.</Text>

          <Text>What was this treasure that my Dad hid?</Text>

          <Text fontWeight="bold" paddingY={"7vh"}>
            —
          </Text>

          <Text pb="5vh">My dad emailed me today.</Text>

          <Text pb="5vh">
            Ever since I left home for college, my dad’s been emailing me a lot
            more.
          </Text>

          <Text>
            He doesn’t have a phone, so email’s our primary form of
            communication.
          </Text>
          <Text>
            I’ve always nagged him to get a phone but he’s never once budged.
          </Text>
          <Text>Seeing this, I always thought my dad was just stubborn.</Text>
          <Text pb="5vh">
            But recently, I’ve realized that my dad not wanting to buy a phone
            isn’t just because he’s stubborn.
          </Text>

          <Text>
            My dad quit smoking decades ago yet he still holds onto a box of
            cigarettes he bought 15 years ago.
          </Text>
          <Text>
            My dad made it an annual family tradition to go hiking on the same
            trail every Thanksgiving since we moved to California over 10 years
            ago.
          </Text>
          <Text pb="5vh">
            My dad knows all his friends no longer use email yet he still emails
            them to ask how they’re doing.
          </Text>

          <Text pb="5vh">My dad just doesn’t want things to change.</Text>

          <Text pb="5vh">
            There’s a part of him that grasps onto things the way he remembers
            them—
          </Text>

          <Text>And he doesn’t let go.</Text>

          <BlogImage
            src="../images/blog_pictures/Treasure-Hunt/Pictures/5 holding_on.jpg"
            alt="Dad holding on tight to his sons"
            caption="Holding on tight"
            orientation="h"
          />

          <Text pb="5vh">My dad reminisces about the past quite often.</Text>

          <Text>
            Throughout the day he’ll say things like “On this day 1 year ago we
            did <em>this</em>,” or “2 years ago we were <em>here</em>.”
          </Text>
          <Text>
            He keeps stacks of journals that record his life since elementary
            school and heaps of photo albums that narrate distinct parts of his
            story.
          </Text>
          <Text>
            He writes all of his friends' birthdays on his calendar and my dad
            never fails to email each one of them on their birthday.
          </Text>
          <Text pb="5vh">
            It may seem old-fashioned, but I respect my dad a lot for staying
            true to himself.
          </Text>

          <Text>
            I just hope it doesn’t hurt him too much every time he tells me
          </Text>
          <Text pb="5vh">one by one,</Text>

          <Text>that his friends no longer reply to his emails.</Text>

          <Text fontWeight="bold" paddingY={"7vh"}>
            —
          </Text>

          <Text>
            Ever since I was in elementary school, my dad took me and my brother
            out to the park to play tennis with him.
          </Text>
          <Text pb="5vh">
            As someone who’s emotionally reserved, tennis was an outlet for my
            dad to share his passion with his kids, and a way for him to bond
            with us.
          </Text>

          <Text>
            And ever since elementary school, whenever my dad came back home
            after work, he would always ask us the same question.
          </Text>
          <Text>
            A question that could be taken at face value, but a question with
            deeper, nuanced undertones.
          </Text>
          <Text pb="5vh">
            A question that revealed his desire to spend time with his two sons
            and his eagerness to be a father that’s always present for his
            children—
          </Text>

          <Text>“Are we playing tennis today?”</Text>

          <BlogImage
            src="../images/blog_pictures/Treasure-Hunt/Pictures/6 bro_time.jpg"
            alt="Bro time"
            caption="Bro time."
            orientation="h"
          />

          <Text>My dad emailed me again today.</Text>
          <Text>He said Mom and him went shopping for groceries.</Text>
          <Text pb="5vh">
            It was just another email, to let me know how he’s doing and to ask
            how I’m doing.
          </Text>

          <Text>But at the end of his email,</Text>
          <Text pb="5vh">He asked me a question.</Text>

          <Text>A question that made me choke up a little inside.</Text>
          <Text>A question that made me miss home a little bit more.</Text>
          <Text pb="10vh">A question so familiar to me.</Text>

          <Text>“Are we playing tennis today?”</Text>

          <BlogImage
            maxW="450px"
            src="../images/blog_pictures/Treasure-Hunt/Pictures/7 daddys_boy.jpg"
            alt="Dad lifting me up in his arms"
            caption="Daddy's boy"
            orientation="v"
          />

          <Text fontWeight="bold" paddingBottom={"7vh"}>
            —
          </Text>

          <Text>
            Recently, the night before I left home to go back to Cornell for my
            second year of college,
          </Text>
          <Text pb="10vh">
            I asked my dad again, expecting the same, repetitive response.
          </Text>

          <Text as="i" pb="10vh">
            “Dad, what’s the treasure you hid at MIT ?”
          </Text>

          <Text pb="3vh">And just like always, he gave a response.</Text>

          <Text pb="3vh">But this time, it was different.</Text>

          <Text pb="10vh">
            Through his breath, he finally revealed the treasure that he had
            kept hidden for the past 12 years—
          </Text>

          <Text as="i" pb="10vh">
            "It’s the memories.”
          </Text>

          <Text pb="8vh">It was just as simple as that.</Text>

          <Text>My dad’s treasure was his memories.</Text>

          <Text>
            His memories of me and my brother running around on the MIT lawn,
            the meals we ate together on our picnics, and the time we all lived
            together in Boston.
          </Text>
          <Text>
            My dad was holding onto his memories of Boston and had stored them
            away on the MIT lawn.
          </Text>

          <BlogImage
            src="../images/blog_pictures/Treasure-Hunt/Pictures/8 dad,mom,me.jpg"
            alt="Fall in Boston"
            caption="Fall in Boston"
            orientation="v"
          />

          <Text fontWeight="bold" paddingBottom={"7vh"}>
            —
          </Text>

          <Text>I’m someone who doesn’t think too much about the past.</Text>

          <Text>
            There’s definitely many things I regret doing, but even if I could
            go back in time, I wouldn’t change anything.
          </Text>
          <Text>
            I’d like to say that I’m someone who lives very much in the present.
          </Text>

          <Text pb="5vh">
            But my dad has taught me that once in a while, it’s good to sit down
            and reminisce about the memories that bring me back to the
            experiences and emotions of my past—
          </Text>

          <Text>The memories that make time stop for just a moment.</Text>

          <BlogImage
            src="../images/blog_pictures/Treasure-Hunt/Pictures/9 chubby_past.jpg"
            alt="Dad and his two chubby sons"
            caption="My chubby past"
            orientation="h"
          />

          <Text pb="5vh">
            Sometimes I wish certain chapters of my life never ended.
          </Text>

          <Text>
            I miss hearing my mom’s voice calling me to come eat dinner every
            night, and I wish I was still as close to the friends that shaped my
            life before college.
          </Text>
          <Text>
            But I’m happy that these chapters had a time and a place in my life.
          </Text>
          <Text pb="5vh">
            If they were to go on forever, what would’ve been a climax in the
            story of my life would’ve just been my new normal.
          </Text>

          <Text>I want the good and the bad to come and go.</Text>
          <Text pb="5vh">
            I want the climaxes of my life to stay as climaxes.
          </Text>

          <Text>
            I want to appreciate how much color the mundane adds to my life.
          </Text>

          <BlogImage
            src="../images/blog_pictures/Treasure-Hunt/Pictures/10 vibrant_color.JPG"
            alt="Me and bro"
            caption="Vibrant color"
            orientation="h"
          />

          <Text fontWeight="bold" paddingBottom={"7vh"}>
            —
          </Text>

          <Text>
            Now that I know what my dad’s treasure is, maybe I’ll go back
            someday to find it.
          </Text>
          <Text>And reminisce on my short but memorable time in Boston.</Text>
          <Text>But to be completely honest,</Text>
          <Text pb="5vh">I don’t really want to go find it.</Text>

          <Text pb="10vh">
            At least <em>not yet.</em>
          </Text>

          <Text>Before that,</Text>
          <Text>
            I want to collect the warmth of the sharp autumn breeze rustling
            through the discolored foliage,
          </Text>
          <Text>
            the memories of me and my friends losing sleep to hang out,
          </Text>
          <Text>the sorrow and grief of my mistakes and regrets,</Text>
          <Text pb="5vh">
            and the rewarding struggle of finding myself in the midst of all of
            this.
          </Text>

          <Text>And a couple years from now,</Text>
          <Text>right before I leave Cornell,</Text>
          <Text pb="5vh">I want to hide these memories somewhere safe.</Text>

          <Text>Somewhere that only I know of.</Text>

          <BlogImage
            src="../images/blog_pictures/Treasure-Hunt/Pictures/11 fall_in_ith.jpeg"
            alt="Fall in Ithaca"
            caption="Fall in Ithaca"
            orientation="h"
          />

          <Text>And if I ever come back to this campus in the future,</Text>
          <Text pb="5vh">I’ll go on a hunt.</Text>

          <Text pb="3vh">
            A hunt to restore the memories of the people and the experiences
            that shaped my life here at Cornell.
          </Text>

          <Text pb="10vh">
            A hunt to revisit this captured moment of time in a world that never
            seems to stop moving.
          </Text>

          <Text>A treasure hunt.</Text>

          <BlogImage
            src="../images/blog_pictures/Treasure-Hunt/Pictures/12 me+dad on lawn.JPG"
            alt="Me and Dad on the lawn"
            caption="Me and Dad. On the lawn."
            orientation="h"
          />

          <Text pb="10vh">- James Kim</Text>
        </Stack>
      </div>
    </div>
  );
};

export default TreasureHunt;
