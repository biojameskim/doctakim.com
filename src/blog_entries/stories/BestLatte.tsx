import { Text, Stack, Heading } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import BlogImage from "../../components/blog/BlogImage";
import { useEffect } from "react";

const BestLatte = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Helmet>
        <title>biojameskim | Best Latte</title>
      </Helmet>

      <Heading
        fontSize={{ base: '3rem', md: "3.3rem"}} 
        textAlign={"center"}
        fontWeight={"medium"}
        pt={"12vh"}
        px="3"
      >
        The Best Latte of My Life
      </Heading>

      <div className="blog-text">
        <Text
          fontSize="2xl"
          align={"center"}
          pt={"4vh"}
          pb={"15vh"}
        >
          April 2025
        </Text>

        <Stack
          spacing={7}
          width={{ base: "85%", md: "50%" }}
          fontSize={{ base: "16", md: "md" }}
        >
            <Text pb="3vh">It’s a cold morning and I wake up earlier than Eric.</Text> 

            <Text pb='5vh'>I’m staying over at his place for a couple of days.</Text>

            <Text>When he wakes up, we’re going to an all-you-can-eat hotpot place that we’re both looking forward to.</Text>
            <Text pb='5vh'>While I wait, I decide to go downstairs and catch up on some emails.</Text>

            <Text>I find a spot on his couch but the sharp coldness of the leather stings the lower part of my thighs. </Text>
            <Text pb='5vh'>I pull my shorts down my thighs as far as they can go.</Text>

            <Text>Eric’s dad walks by and asks me if I’m cold.</Text>
            <Text pb='3vh'>I tell him I’m okay. </Text>
            <Text pb='5vh'>It’s probably rude to ask him to turn the heat up.</Text>

            <Text>Eric’s mom walks by and asks me if I’d like a coffee. </Text>
            <Text pb='3vh'>I tell her I’d love a cup. </Text>
            <Text pb='8vh'> It’s probably a more polite way to warm myself up.</Text>

            <Text pb='5vh'>After a couple minutes of tinkering with the espresso machine, Eric’s mom brings me a steaming latte.</Text>

            <Text pb='8vh'>The cup immediately warms my cold hands. </Text>

            <Text pb='8vh'>I take a sip.</Text>

            <Text pb='7vh'>The warmth of the latte, the warmth of Eric’s parents, and the warmth of a friendship that Eric and I have developed over the past 4 years—</Text>

            <Text>That was the best latte of my life.</Text>


            <BlogImage
                src="../images/blog_pictures/Best-Latte/Pictures/latte.jpeg"
                alt="Eric's mom's latte"
                orientation="v"
            />

            <Text fontWeight="bold" paddingBottom={"7vh"}>—</Text>

            <Text>Lately, I’ve been thinking a lot about friendships. </Text>
            <Text>Maybe it’s because I’m graduating soon and with something coming to a close, I’m forced to reflect.</Text>
            <Text pb='5vh'>But I’ve been trying to think about and categorize the different friendships I have in my life and what I value about each one of them.</Text>

            <Text>And there’s friends in my life that I treasure because of familiarity. </Text>
            <Text>Many of these friends are a product of time. We’ve spent a lot of time together and as a result, we have a lot of shared memories. </Text>
            <Text pb='5vh'>Perhaps we don’t invest in creating them anymore as much as we once did but the store of memories is more than enough to feel a special fondness for these friends. </Text>

            <Text>These friends are familiar.</Text>

            <BlogImage
                src="../images/blog_pictures/Best-Latte/Pictures/familiar.jpeg"
                alt="Angie and James"
                caption="Angie makes it clear that familiarity ≠ friendly"
                orientation="v"
            />

            <Text>There’s also friends in my life that I treasure because of comfortability. </Text>
            <Text>With these friends, I don’t really have to cater my actions or words in one way or another. These friends just feel very comfortable to be around. </Text>
            <Text pb='5vh'>I don’t feel any need to impress them and can perfectly be myself without fear of judgment. These friends are authentic and that makes me want to be more true to myself and open up.</Text>

            <Text>These friends are comfortable.</Text>

            <BlogImage
                src="../images/blog_pictures/Best-Latte/Pictures/comfortable.jpeg"
                alt="Eric hugging Derek"
                caption="Derek is comfortable. So is his bosom it seems."
                orientation="h"
            />


            <Text>And there’s friends that I cherish because they give me energy.</Text>
            <Text>They make the air lighthearted and bring me joy. Conversations feel refreshing and I find myself laughing and smiling a lot when I’m with them. </Text>
            <Text pb='5vh'>I’m excited to see them and time spent together is enough to sustain me for the day.</Text>

            <Text>These friends are energizing.</Text>

            <BlogImage
                src="../images/blog_pictures/Best-Latte/Pictures/hs_friends.jpeg"
                alt="High school friends"
                caption="The guys who got me through high school"
                orientation="v"
            />

            <Text>Now there’s some really, <Text as="span" fontStyle="italic">really</Text> rare people in this world that have varying magnitudes of all three of these traits.</Text>
            <Text pb='5vh'>And within these subset of people, there’s <Text as="span" fontStyle="italic">even rarer</Text> people that share your vision and purpose. </Text>

            <Text>The ones that aren’t just there to rescue you from your loneliness or people that you make plans with because you don’t want to go to that concert alone. </Text>
            <Text pb='5vh'>It’s the ones that you talk about your future with, because you hope they’ll be a part of it.</Text>

            <Text pb='7vh'>And as you spend more time with them, you realize you aren’t quite the same person you were when you first started the friendship because you’ve changed. </Text>

            <Text>Together.</Text>

            <BlogImage
                src="../images/blog_pictures/Best-Latte/Pictures/together.jpeg"
                alt="Melody, Derek, James, Elisabeth"
                orientation="v"
            />

            <Text fontWeight="bold" paddingBottom={"7vh"}>—</Text>


            <Text>This is Eric. </Text>

            <Text>The guy I mentioned at the start of the story.</Text>

            <BlogImage
                src="../images/blog_pictures/Best-Latte/Pictures/eric1.jpeg"
                alt="Eric and James"
                orientation="h"
            />


            <Text pb="3vh">I don’t think Eric and I would’ve been friends if we weren’t forced to live together. </Text>
            <Text>Our personalities are pretty different. </Text>
            <Text pb="5vh">He says I’m too people pleasing at times, and I tell him he’s too blunt and cold at times.</Text>

            <Text>Our hobbies are also pretty different. </Text>
            <Text>He likes volleyball, I don't like volleyball. </Text>
            <Text>I like doing my homework on time, he doesn’t like doing his homework on time.</Text>

            <BlogImage
                src="../images/blog_pictures/Best-Latte/Pictures/eric2.jpeg"
                alt="Eric sleeping"
                caption="Instagram reels is a nice bedtime lullaby"
                orientation="v"
            />


            <Text>But living together with someone for three years really gets you to see every side of them.</Text>
            <Text pb="5vh">We were forced to be roommates freshman year but we quickly bonded as friends, and we always walked around campus together. When people saw me alone, they’d usually ask me where Eric was.</Text>

            <Text>And it's not everyday you meet someone you can have rap battles insulting each other and the very next moment you’re sharing about the girl that just rejected you and why you choose to believe in God.</Text>

            <BlogImage
                src="../images/blog_pictures/Best-Latte/Pictures/eric3.jpeg"
                alt="Eric in our dorm room"
                caption="Our freshman year dorm room"
                orientation="h"
            />

            <Text>And if you know Eric personally, you might also know that this guy does not wake up to his alarms. </Text>
            <Text pb="5vh">He’s frequently late to anything in the morning because his alarm only wakes his roommates up. </Text>

            <Text>But as every semester came to an end, if I was the first one to leave in the early morning, Eric would always wake up extra early just to say bye.</Text>
            <Text pb="5vh">And sometimes, he’d even accompany me for breakfast.</Text>

            <Text>I don’t think I ever got around to telling him how much I appreciated that.</Text>

            <BlogImage
                src="../images/blog_pictures/Best-Latte/Pictures/eric4.jpeg"
                alt="Eric eating breakfast"
                caption="Breakfast before a long day of travel"
                orientation="v"
            />

            <Text>Eric’s very morally upright.</Text>
            <Text>I’ve never seen Eric swayed by anything he says he wouldn't do. We have high standards for each other, and hold each other accountable to what we think is right.</Text>
            <Text pb="5vh">I was definitely more people-pleasing when I came into college but Eric’s taught me how to have a tougher shell, and built me up to be a stronger and more resilient person.</Text>

            <Text>He’s someone who makes me wish I was able to impact him as much as he’s impacted me.</Text>

            <BlogImage
                src="../images/blog_pictures/Best-Latte/Pictures/eric5.jpeg"
                alt="Eric and James"
                orientation="v"
            />


            <Text fontWeight="bold" paddingBottom={"7vh"}>—</Text>

            <Text>This is Gary.</Text>

            <Text>We met in 4th grade. </Text>

            <BlogImage
                src="../images/blog_pictures/Best-Latte/Pictures/gary1.jpeg"
                alt="Gary and James"
                orientation="h"
            />

            <Text pb="3vh">I don’t remember too vividly how we became friends but we really kicked it off. </Text>

            <Text>We would play handball at recess together and we both learned Karate at the local community center together.</Text>
            <Text pb="5vh">We even had nicknames for each other. I called him gare bear every day and he told me to stop.</Text>

            <Text pb="5vh">When I think back to our hangouts in high school, I don’t really remember much besides talking for hours in the parking lot of random fast food restaurants or in the aisles of grocery stores.</Text>

            <Text pb="3vh">But damn were those conversations a lot of fun. </Text>

            <Text>They would frequently be cut short by my mom texting me to come home because it’s getting late.</Text>

            <BlogImage
                src="../images/blog_pictures/Best-Latte/Pictures/gary2.jpeg"
                alt="Gary and Jeff"
                caption="Parking lot of Baker's Burgers"
                orientation="h"
            />

            <Text pb="3vh">There’s something special about a hometown friend. </Text>

            <Text>We both know each other’s parents and siblings and they all know each other too. We’ve been to each other’s homes many times and gossiped about the same people since elementary school. </Text>
            <Text pb="5vh">It’s hard to hide things from someone that knows everything about you.</Text>

            <Text>Gary and I also went through the awkwardness of “growing up” together. </Text>
            <Text pb="5vh">We saw each other when we were both cute (elementary school) up until we let our mustaches grow too long before shaving for the first time (high school).</Text>

            <Text>We’ve shared so many experiences in our comfortable bubble and community.</Text>

            <BlogImage
                src="../images/blog_pictures/Best-Latte/Pictures/gary3.jpg"
                alt="Gary shoving papers in his backpack"
                caption="Gary was always a neat and organized guy"
                orientation="h"
            />

            <Text>Gary visited me recently at Cornell. </Text>
            <Text>It made me feel like I was back in our hometown—back in high school—as we were recollecting old memories.</Text>
            <Text>We talked about all our friends and what they’re up to now, and how we’re looking forward to what’s next after graduation.</Text>

            <BlogImage
                src="../images/blog_pictures/Best-Latte/Pictures/gary4.jpeg"
                alt="Gary in air mattress"
                caption="Gary claims the air mattress was comfortable"
                orientation="v"
            />


            <Text>Gary’s very genuine.</Text>
            <Text pb="5vh">In our conversations, I never have to think about what to say. I can be authentically myself, because he showed me first what that authenticity can look like.</Text>

            <Text>And Gary’s taught me that it doesn’t take much to have fun. </Text>
            <Text pb="5vh">We can just be talking in someone’s car and that’s more than enough. </Text>

            <Text>He’s someone that I’ll always think of fondly when I think of home.</Text>

            <BlogImage
                src="../images/blog_pictures/Best-Latte/Pictures/gary5.jpeg"
                alt="Gary and James"
                orientation="v"
            />


            <Text fontWeight="bold" paddingBottom={"7vh"}>—</Text>

            <Text>This is Jonah.</Text>

            <Text>One of my favorite people.</Text>

            <BlogImage
                src="../images/blog_pictures/Best-Latte/Pictures/jonah1.jpeg"
                alt="James and Jonah"
                orientation="v"
            />


            <Text>In the past three years, I’ve gotten to know Jonah quite well. </Text>
            <Text pb="5vh">And one thing I love about Jonah is that he’s naturally very curious. He wants to know why things are the way they are and he always wants to learn. </Text>

            <Text>He’s stretched me to break my thoughts and beliefs down to their bones, and by doing so, I’ve been able to rebuild them with greater clarity and confidence.</Text>
            <Text>Every time I see him, Jonah will always share something new he’s learned by talking to people, listening to a podcast, or reading a new book.</Text>

            <BlogImage
                src="../images/blog_pictures/Best-Latte/Pictures/jonah2.JPG"
                alt="Jonah reading a book"
                caption="New perspectives"
                orientation="v"
            />

            <Text pb="3vh">One of the first things Jonah and I bonded over was our main goal in life. </Text>

            <Text pb="3vh">We both talked about wanting to get married and raising children— being able to build and grow our own family. </Text>

            <Text>I told him I want three kids. </Text>

            <Text pb="5vh">He told me he wants eight. </Text>


            <Text>And at this moment of time, he has a girlfriend and I don't, so I think he’s making more progress in that area.</Text>

            <BlogImage
                src="../images/blog_pictures/Best-Latte/Pictures/jonah3.jpeg"
                alt="Jonah holding up a sweater and a bib"
                caption='"Should I start with the sweater or the bib?"'
                orientation="v"
            />

            <Text>Jonah is also one of the most disciplined people I know.</Text>
            <Text pb="5vh">We go to the gym together every day and stick to our strict routine. He also never eats anything sugary, and I try not to either, but his actions remind me I can always do better. </Text>

            <Text>I was traveling with him once and we stopped at a grocery store for a snack after dinner. </Text>
            <Text>I grabbed a pint of Haagen Dazs. </Text>
            <Text>He grabbed a pint of nonfat greek yogurt and a pack of organic pitted prunes.</Text>

            <BlogImage
                src="../images/blog_pictures/Best-Latte/Pictures/jonah4.jpeg"
                alt="James and Jonah enjoy a snack"
                caption="He didn’t even want a taste"
                orientation="v"
            />

            <Text>Jonah’s very driven and consistent.</Text>
            <Text>He’s pushed me to be more ambitious. To pursue the things I’m passionate about and work towards them. </Text>
            <Text pb="5vh">And he’s given me a new curiosity about the world that makes me want to break out of my shell and understand things I didn’t consider before. On top of all that, he’s also really funny and thoughtful. </Text>

            <Text>He’s someone I want my kids to know as “Uncle Jonah.”</Text>

            <BlogImage
                src="../images/blog_pictures/Best-Latte/Pictures/jonah5.jpeg"
                alt="James and Jonah"
                orientation="v"
            />

            <Text fontWeight="bold" paddingBottom={"7vh"}>—</Text>

            <Text pb="3vh">We all have varying levels of friendships and different ways of thinking about them. </Text>

            <Text>Maybe you think about your friendships in tiers. </Text>
            <Text>Or maybe you’re more of a visual thinker, and you imagine circles of decreasing area, with the smallest circle (Jonah calls this your “tribe”) being your closest bunch. </Text>
            <Text pb="5vh">Or maybe you don’t see a reason to think of relationships in such a categorical way. </Text>

            <Text>Perhaps you’re a freshman reading this and you’re idealizing finding that perfect friend group. I certainly did. </Text>
            <Text>But I’ve come to realize that friend groups are just one form of friendship— not some ideal or end goal that should be pursued. </Text>
            <Text>When you graduate and move on with your life, it’s not friend groups that you take with you, it’s the individual friendships you invested in. </Text>
            <Text pb="5vh">And perhaps these individual friendships were closely interconnected and it just so appears that you took a friend group out. That's good too.</Text>

            <Text pb="3vh">Maybe you don’t care about friend groups. You just want to find “your people,” even if it’s one.</Text>

            <Text>And everyone wants to be someone’s number one. </Text>
            <Text>It hurts to label someone as your “best” friend, knowing they have friends closer to them than you. </Text>
            <Text pb="5vh">It seems selfish, I know, but we all feel it. Sometimes you have to give a little more than you receive.</Text>

            <Text>Friendships just seem so difficult at times.</Text>

            <BlogImage
                src="../images/blog_pictures/Best-Latte/Pictures/college_friends.JPG"
                alt="James, Derek, Eric, Melody, Grace, Angie, Elisabeth"
                caption="The guys who got me through college"
                orientation="h"
            />

            <Text>I’m still getting older and if all goes well, I’ve only experienced about 25% of my life so far. </Text>
            <Text pb="5vh">So I realize my views will certainly change but what I find to be good now is investing a lot of time in my guy friendships. </Text>

            <Text pb="3vh">There's something really special about brotherhood.</Text>

            <Text pb="5vh">It’s a connection that’s not just built on shared values, but on shared experience, perspective, and unspoken understanding.</Text>

            <Text>There’s things unique to a guy’s experience that you can joke or vent about without worrying you’ll sound inconsiderate or misunderstood. </Text>
            <Text>You know the other person isn’t trying to flirt with you. On the flip side, you don’t have to cater your words in a certain way to try and impress them. There’s a comfortability and trust that’s unique. </Text>
            <Text pb="5vh">And if you’re a guy and you get a girlfriend, your guy friends (usually) don’t feel threatened by that. There’s no awkwardness, jealousy, or sense of emotional displacement. </Text>

            <Text>So I’m thankful for the guys that taught me this firsthand. </Text>
            <Text pb="3vh">Eric, Gary, and Jonah are three <Text as="span" fontStyle="italic">very</Text> different people but each one of them have undoubtedly changed who I am. </Text>

            <Text>They’ve given me more perspective of who I am and who I want to be.</Text>

            <BlogImage
                src="../images/blog_pictures/Best-Latte/Pictures/worlds_collide.jpeg"
                alt="Jonah and Gary"
                caption="My worlds collide"
                orientation="h"
            />

            <Text pb="3vh">I don’t know what the future will entail.</Text>

            <Text pb="5vh">In just a few years, we’ll all be in different places, and with that, the people around us will be vastly different.</Text>

            <Text pb="3vh">Maybe there’ll come a time where we aren’t as close anymore. </Text>

            <Text pb="8vh">Maybe time and distance will drift us apart and our new experiences without each other will change us so much that we’re unrecognizable to each other.</Text>

            <Text pb="3vh">But even if it comes to the point where I can’t recognize who they’ve become, I think I’ll always recognize a part of them when I look at myself in the mirror. </Text>

            <Text pb="10vh">And I’ll be thankful.</Text>

            <Text >Because who I am</Text>
            
            <Text>is a product of who they were to me.</Text>

            <BlogImage
                src="../images/blog_pictures/Best-Latte/Pictures/friends_hall.jpeg"
                alt="Eric, James, and Jonah"
                caption="Friends Hall"
                orientation="v"
            />



          <Text pb="10vh"> - James Kim</Text>
        </Stack>
      </div>
    </div>
  );
};

export default BestLatte;
