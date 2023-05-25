import { Text, Stack } from "@chakra-ui/react"
import { Helmet } from 'react-helmet'
import BlogImage from "../components/BlogImage"
import { useEffect } from "react"

const SophomoreSlump = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <Helmet>
        <title>doctakim | Sophomore Slump</title>
      </Helmet>

      <Text className='blog-title' fontSize='3rem' align={'center'} fontWeight={'medium'} pt={'12vh'}>
        The Sophomore Slump
      </Text>

      <div className='blog-text'>
        <Text
          fontFamily='century'
          fontSize='2xl'
          align={'center'}
          fontWeight={'medium'}
          pt={'4vh'}
          pb={'10vh'}>
          May 2023
        </Text>

        <Stack
          spacing={7}
          width={{ base: '85%', md: '60%' }}
          fontSize={{ base: '17', md: 'lg' }}
          fontFamily='century'>

          <Text>Summer passed by in a breeze and before I knew it, I was on the road back to Ithaca.</Text>
          <Text>My family didn’t come with me this time, </Text>
          <Text>but that doesn’t mean I was alone.</Text>

          <BlogImage
            src="../images/blog_pictures/The-Sophomore-Slump/Pictures/ss1.jpeg"
            alt="Road trip with Grace and Angie"
            caption="Road trip with Grace and Angie"
            orientation='v'
          />

          <Text>One year ago, I was nervous whether I’d be able to find people I could call my friends.</Text>
          <Text>Fast forward one year and there were people that made me excited to go back to Ithaca again.</Text>

          <BlogImage
            src="../images/blog_pictures/The-Sophomore-Slump/Pictures/ss2.jpeg"
            alt="AAIV reunion in NYC"
            caption="Reunited."
            orientation='v'
          />

          <Text>Some of my friends changed a lot…</Text>

          <BlogImage
            src="../images/blog_pictures/The-Sophomore-Slump/Pictures/ss3.jpeg"
            alt="Eric's new haircut"
            caption="Eric gets a dashing new haircut"
            orientation='v'
          />

          <Text>While others, more or less, stayed the same.</Text>

          <BlogImage
            src="../images/blog_pictures/The-Sophomore-Slump/Pictures/ss4.jpeg"
            alt="Derek is soaking wet"
            caption="Derek always forgets his umbrella"
            orientation='v'
          />

          <Text>Now that I was a sophomore, things needed to change.</Text>
          <Text>I wasn’t a small, little freshman anymore.</Text>
          <Text pb='5vh'>I decided it was time for some discipline in my life.</Text>

          <Text>I started waking up earlier every day to get breakfast before going to class.</Text>
          <Text>Elisabeth always said she’d join me but she usually didn’t wake up in time,</Text>
          <Text>which meant she had to take her breakfast to go.</Text>

          <BlogImage
            src="../images/blog_pictures/The-Sophomore-Slump/Pictures/ss5.jpeg"
            alt="Elisabeth holds a pancake"
            caption='“Elisabeth… Do you… want a fork?”'
            orientation='v'
          />

          <Text>I made sure to sleep before 2 every night, went vegetarian for
            a month, and I even started exercising pretty consistently too.</Text>

          <BlogImage
            src="../images/blog_pictures/The-Sophomore-Slump/Pictures/ss6.jpeg"
            alt="Shara on a run"
            caption="Shara and I go on our first (and last) run of the year"
            orientation='v'
          />

          <Text>But if there was one thing I was most excited for about sophomore year, it was meeting the new freshmen.</Text>
          <Text>My Christian fellowship did a lot of events to reach out to new students and for one of them, we gave out free ice pops.</Text>

          <BlogImage
            src="../images/blog_pictures/The-Sophomore-Slump/Pictures/ss7.jpeg"
            alt="Melody eats the ice pops"
            caption='“Melody! The ice pops are for the freshmen…”'
            orientation='v'
          />

          <Text>We also gave out boba, had a barbecue event, and did our best to welcome all the new freshmen.</Text>

          <BlogImage
            src="../images/blog_pictures/The-Sophomore-Slump/Pictures/ss8.jpeg"
            alt="Melody kissing Jesus"
            caption="Melody is forgiven."
            orientation='v'
          />

          <Text>As I met a lot of different freshmen, I couldn’t help but wonder who’d be the ones that’d stay.</Text>
          <Text>Would they be cool? Friendly? Frightening?</Text>
          <Text>Soon enough, a lot of freshmen started to roll in and some of them were super caring.</Text>

          <BlogImage
            src="../images/blog_pictures/The-Sophomore-Slump/Pictures/ss9.jpeg"
            alt="Ben holding a slice of pie"
            caption="Ben and other freshmen bake more than enough pie to share"
            orientation='v'
          />

          <BlogImage
            src="../images/blog_pictures/The-Sophomore-Slump/Pictures/ss10.jpeg"
            alt="Elaine and Ben under an umbrella"
            caption="Elaine makes sure Ben doesn’t get wet"
            orientation='v'
          />

          <Text>While others, not so much.</Text>

          <BlogImage
            src="../images/blog_pictures/The-Sophomore-Slump/Pictures/ss11.jpeg"
            alt="Jonah doesn't share his umbrella"
            caption="Joanna and Bella need an Elaine, not a Jonah"
            orientation='v'
          />

          <Text pb='5vh'>And a lot of them were really affectionate.</Text>

          <Text>Both emotionally…</Text>

          <BlogImage
            src="../images/blog_pictures/The-Sophomore-Slump/Pictures/ss12.jpeg"
            alt="Amy and Aleena"
            caption="Amy offers Aleena a helping hand"
            orientation='v'
          />

          <Text>and physically.</Text>

          <BlogImage
            src="../images/blog_pictures/The-Sophomore-Slump/Pictures/ss13.jpeg"
            alt="Jaden and I hugging"
            caption='“Jaden, my arm is falling asleep.”'
            orientation='v'
          />

          <BlogImage
            src="../images/blog_pictures/The-Sophomore-Slump/Pictures/ss14.jpeg"
            alt="Jaden hugging Jonah"
            caption="Jaden just wants a hug"
            orientation='v'
          />

          <Text>Some were just… interesting.</Text>

          <BlogImage
            src="../images/blog_pictures/The-Sophomore-Slump/Pictures/ss15.jpeg"
            alt="Max licking cake off his hand"
            caption="I think Max really likes this cake"
            orientation='v'
          />

          <Text>Sometime early on, I got really close to this freshman named Jonah. </Text>

          <BlogImage
            src="../images/blog_pictures/The-Sophomore-Slump/Pictures/ss16.jpeg"
            alt="Jonah and Me"
            caption="Jonah and Me."
            orientation='h'
          />

          <Text>Every time we had dinner together, we’d sit there for hours talking about life, relationships, our futures, and all our hidden secrets.</Text>
          <Text>Our conversations were usually cut short because the dining hall was closing.</Text>
          <Text>I don’t really remember how we got close, but I think it was our shared intellectual curiosity that drew us closer.</Text>

          <BlogImage
            src="../images/blog_pictures/The-Sophomore-Slump/Pictures/ss17.jpeg"
            alt="Jonah reads an interesting novel"
            caption="A book for intellects"
            orientation='v'
          />

          <Text pb='5vh'>If you ever talk to Jonah, you’ll quickly find out he’s a bit peculiar.</Text>


          <Text>He doesn’t really eat sugar and his body’s a little… stiff.</Text>
          <Text>So I made sure he had some sugar here and there.</Text>

          <BlogImage
            src="../images/blog_pictures/The-Sophomore-Slump/Pictures/ss18.jpeg"
            alt="Jonah eating a chocolate bar"
            caption="Jonah doesn’t want to admit the chocolate bar is good"
            orientation='v'
          />

          <Text>And I forced him to wiggle his body around from time to time.</Text>

          <BlogImage
            src="../images/blog_pictures/The-Sophomore-Slump/Pictures/ss19.jpeg"
            alt="Jonah and Me at the Getty"
            caption='“Does your body… move?”'
            orientation='v'
          />

          <Text fontWeight='bold' paddingBottom={'7vh'}>—</Text>

          <Text pb='5vh'>As I was forming all these new friendships, I realized that I
            really wanted to deepen the old relationships I made last year too.</Text>
          <Text>So I tried my best to find that balance.</Text>

          <BlogImage
            src="../images/blog_pictures/The-Sophomore-Slump/Pictures/ss20.jpeg"
            alt="Playing Nerts with friends"
            caption="16 consecutive rounds of Nerts really deepens friendships"
            orientation='v'
          />

          <Text>I was thankful for the friends that remained consistent.</Text>

          <BlogImage
            src="../images/blog_pictures/The-Sophomore-Slump/Pictures/ss21.jpeg"
            alt="Simon trying to kiss me."
            caption="Simon is persistent. I mean consistent."
            orientation='override'
            maxW='700px'
          />

          <Text>The friends that showed their care.</Text>

          <BlogImage
            src="../images/blog_pictures/The-Sophomore-Slump/Pictures/ss22.jpeg"
            alt="Angie and Grace hem my pants"
            caption="Angie and Grace help me hem my pants"
            orientation='v'
          />

          <Text>And the friends that just made everything comfortable and fun.</Text>

          <BlogImage
            src="../images/blog_pictures/The-Sophomore-Slump/Pictures/ss23.jpeg"
            alt="Friends in Boston"
            caption="Touching John Harvard’s foot is good luck (÷ 6)"
            orientation='v'
          />

          <Text fontWeight='bold' paddingBottom={'7vh'}>—</Text>

          <Text pb='5vh'>I learned a lot freshman year and sophomore year was no different.</Text>

          <Text>I learned some useful life skills…</Text>

          <BlogImage
            src="../images/blog_pictures/The-Sophomore-Slump/Pictures/ss24.jpeg"
            alt="Crafting the perfect lighting for Daniel and Cherrie"
            caption="Crafting the perfect lighting for Daniel and Cherrie"
            orientation='h'
          />

          <Text>And also just useful things about life.</Text>

          <BlogImage
            src="../images/blog_pictures/The-Sophomore-Slump/Pictures/ss25.jpeg"
            alt="Derek and I holding a tampon"
            caption='“Derek. Derek. What… is this?”'
            orientation='v'
          />

          <Text>And I learned that college is so freakin’ spontaneous.</Text>
          <Text>Whenever I was busy and needed to study, there was always some hangout or event that popped up out of nowhere.</Text>
          <Text>Of course I still studied when I really had to, but it didn’t help when Elisabeth kept telling me,</Text>

          <Text as='i' paddingY={'5vh'} paddingX={'3.5rem'}>“10 years down the road, are you gonna remember the times you studied or the spontaneous memories you chose to make instead?”</Text>

          <Text>This mentality didn’t always justify the best decisions, but
            it’s only been a couple months down the road, and the happy memories are all I remember.</Text>

          <BlogImage
            src="../images/blog_pictures/The-Sophomore-Slump/Pictures/ss26.jpeg"
            alt="Playing at Second Dam"
            caption="The water was ICY cold"
            orientation='v'
          />

          <Text>It was the spontaneous decisions that led to the most memorable trips,</Text>

          <BlogImage
            src="../images/blog_pictures/The-Sophomore-Slump/Pictures/ss27.jpeg"
            alt="Stargazing on a cloudy night"
            caption="Stargazing on a cloudy night"
            orientation='v'
          />

          <Text>To the most intimate moments,</Text>

          <BlogImage
            src="../images/blog_pictures/The-Sophomore-Slump/Pictures/ss28.jpeg"
            alt="Eric and Jonah wrestle"
            caption="Eric and Jonah engage in a passionate struggle"
            orientation='v'
          />

          <Text>And to some of the best meals I’ve had in Ithaca.</Text>

          <BlogImage
            src="../images/blog_pictures/The-Sophomore-Slump/Pictures/ss29.jpeg"
            alt="Aleena orders chicken at a steak restaurant"
            caption="I don’t think Aleena likes what she ordered"
            orientation='v'
          />

          <Text fontWeight='bold' paddingBottom={'7vh'}>—</Text>

          <Text pb='5vh'>Sophomore year was also a time of a lot of change.</Text>

          <Text>It was a time where enemies became lovers,</Text>

          <BlogImage
            src="../images/blog_pictures/The-Sophomore-Slump/Pictures/ss30.jpeg"
            alt="Jonah and Bella"
            caption="Jonah and Bella reassure me that they’re just friends"
            orientation='h'
          />

          <Text>A time where coincidence led to new relationships,</Text>

          <BlogImage
            src="../images/blog_pictures/The-Sophomore-Slump/Pictures/ss31.jpeg"
            alt="Gloria makes hot pot"
            caption="Next door neighbor Gloria invites us over for hot pot"
            orientation='v'
          />

          <Text>And also a time where unexpected friendships led to some really great conversations.</Text>

          <BlogImage
            src="../images/blog_pictures/The-Sophomore-Slump/Pictures/ss32.jpeg"
            alt="Lydia, Kate/Shungo, and Katie"
            caption="Good food, better people."
            orientation='override'
            maxW='700px'
          />

          <Text pb='5vh'>But even with all these changes, a lot of things also stayed the same.</Text>

          <Text>Ithaca was still just as beautiful.</Text>

          <BlogImage
            src="../images/blog_pictures/The-Sophomore-Slump/Pictures/ss33.jpeg"
            alt="Fall in Ithaca"
            caption="My view on the walk back home from class"
            orientation='v'
          />

          <Text>Dancing together with the guys of my fellowship was just as fun.</Text>

          <BlogImage
            src="../images/blog_pictures/The-Sophomore-Slump/Pictures/ss34.jpeg"
            alt="Boys Gen group photo"
            caption="Boys Generation is b-b-back"
            orientation='h'
          />

          <Text>And I guess some people don’t really change.</Text>

          <BlogImage
            src="../images/blog_pictures/The-Sophomore-Slump/Pictures/ss35.jpeg"
            alt="Grace Chen wearing birkenstocks"
            caption="Rain or Shine, Winter or Summer, Grace Chen loves her birks"
            orientation='v'
          />

          <Text>I also thought that being a sophomore meant that the upperclassmen would stop spoiling me.</Text>

          <Text>But the care stayed the same too.</Text>

          <BlogImage
            src="../images/blog_pictures/The-Sophomore-Slump/Pictures/ss36.jpeg"
            alt="Highlands girls"
            caption="The Highlands girls are great at cooking (in no particular order)"
            orientation='override'
            maxW='700px'
          />

          <Text fontWeight='bold' paddingBottom={'7vh'}>—</Text>

          <Text>Over winter break, a bunch of people in my fellowship traveled to a conference together and I was in a hotel room with a bunch of senior guys.</Text>
          <Text>That’s when it really hit me that they’d be leaving me in a couple months.</Text>
          <Text>So I made sure to cherish every moment I had with them.</Text>

          <BlogImage
            src="../images/blog_pictures/The-Sophomore-Slump/Pictures/ss37.jpeg"
            alt="Five guys on a bed"
            caption="Bed for five?"
            orientation='v'
          />

          <Text>We laughed and giggled and talked all night,</Text>
          <Text>But I guess some people weren’t having as much fun as us.</Text>

          <BlogImage
            src="../images/blog_pictures/The-Sophomore-Slump/Pictures/ss38.jpeg"
            alt="Tiffany's text messages to us"
            caption="We're sorry, Tiffany."
            orientation='override'
            maxW='360px'
          />

          <BlogImage
            src="../images/blog_pictures/The-Sophomore-Slump/Pictures/ss39.jpeg"
            alt="Tiffany and Simon"
            caption="Tiffany and Simon the next morning"
            orientation='v'
          />

          <Text>Time flew by a little quicker than I wanted, and it was already time to say goodbye.</Text>
          <Text pb='5vh'>There were some tears, and a lot of hugs.</Text>

          <Text>A lot of these seniors were the first to welcome me when I first got to Cornell, and now for the first time,</Text>
          <Text>I had to imagine a Cornell without them.</Text>

          <BlogImage
            src="../images/blog_pictures/The-Sophomore-Slump/Pictures/ss40.jpeg"
            alt="David and Me"
            caption="Dazzling David"
            orientation='h'
          />

          <Text pb='5vh'>I think what saddens me the most is the fact that I’ll
            never be able to see them as consistently and conveniently as I did for the past two years.</Text>

          <Text>A good conversation was always just a meal away,</Text>
          <Text>But the meals we once had together seem just a little further away now.</Text>

          <BlogImage
            src="../images/blog_pictures/The-Sophomore-Slump/Pictures/ss41.jpeg"
            alt="Simon, Mark, and Kent"
            caption="Lunch tomorrow?"
            orientation='override'
            maxW='700px'
          />

          <Text>I wish I spent more time with each one of them.</Text>
          <Text pb='5vh'>And I wish they could stay a little longer.</Text>

          <Text>But it gives me comfort knowing that a new group of people will get to experience the same love and care they showed me.</Text>

          <BlogImage
            src="../images/blog_pictures/The-Sophomore-Slump/Pictures/ss42.jpeg"
            alt="Sophia, Mark, and Me"
            caption="Mark Pon Fan Club"
            orientation='v'
          />

          <Text fontWeight='bold' paddingBottom={'7vh'}>—</Text>

          <Text>Just a couple of weeks ago, my brother graduated from college.</Text>
          <Text pb='5vh'>I still remember when my family dropped him off at Berkeley for his freshman year and how I cried on the drive back home.</Text>

          <Text>In the busyness of my day to day, each moment feels so slow.</Text>
          <Text pb='5vh'>But looking back, every one of those moments have come together to define exactly half of my college experience.</Text>

          <Text>And it’s all going by too fast.</Text>

          <BlogImage
            src="../images/blog_pictures/The-Sophomore-Slump/Pictures/ss43.jpeg"
            alt="Dum Moment"
            caption="Rising Juniors"
            orientation='h'
          />

          <Text>My Dad always told me that there’s nothing you really have to do in life.</Text>
          <Text>He said as long as I work hard while enjoying every moment, I’ll find myself closer to the things I want to do and the direction I want to go.</Text>
          <Text pb='5vh'>And I think I’m slowly understanding what he means.</Text>

          <Text>Academically, sophomore year was my toughest.</Text>
          <Text>But sophomore year was also a time where I found more direction in my life.</Text>
          <Text>In the midst of developing and deepening friendships, grinding out psets and projects, and trying new and uncomfortable things, I’ve been working hard.</Text>
          <Text pb='5vh'>But I’ve also been enjoying every moment.</Text>

          <Text>And through my failures and successes, I’m slowly realizing what I want to do in my life.</Text>
          <Text>I’m getting closer to the things I want to do.</Text>

          <BlogImage
            src="../images/blog_pictures/The-Sophomore-Slump/Pictures/ss44.jpeg"
            alt="2023 AAIV merch"
            caption="A good reminder"
            orientation='v'
          />

          <Text>Sophomore year definitely wasn’t easy.</Text>
          <Text pb='5vh'>There were times where I felt overwhelmed by the pace
            of everything around me, and there were friends that I lost in the midst of that pace.</Text>

          <Text>But through it all, I’ve learned a lot.</Text>
          <Text>I’ve learned a lot about the people around me, and most importantly,</Text>
          <Text pb='5vh'>I’ve learned a lot about myself.</Text>

          <Text>I’m realizing more and more that I’m still so far from the person I want to be.</Text>

          <BlogImage
            src="../images/blog_pictures/The-Sophomore-Slump/Pictures/ss45.jpeg"
            alt="Derek, Grace, and Me"
            caption=""
            orientation='h'
          />

          <Text>In just a few months, I’ll be back to start my junior year of college.</Text>
          <Text>The past two years really changed me a lot, and I’m curious to see how my thoughts and emotions will continue to change.</Text>
          <Text pb='5vh'>I’m curious to know what experiences and memories will come to define the highs and lows of my junior year.</Text>

          <Text pb='7vh'>And as I reflect on the past year and look ahead to what’s coming,</Text>

          <Text>I just can’t wait to go back.</Text>

          <BlogImage
            src="../images/blog_pictures/The-Sophomore-Slump/Pictures/ss46.jpeg"
            alt="AAIV on the slope"
            caption="Spring in Ithaca"
            orientation='v'
          />

          < Text pb='10vh' > - James Kim</Text >

        </Stack>
      </div>

    </div>
  )
}

export default SophomoreSlump