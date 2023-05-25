import { Text, Stack, Box } from "@chakra-ui/react"
import { Helmet } from 'react-helmet'
import BlogImage from "../components/BlogImage"
import { useEffect } from "react"

const FreshmanStory = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <Helmet>
        <title>doctakim | Freshman Story</title>
      </Helmet>

      <Text className='blog-title' fontSize='3rem' align={'center'} fontWeight={'medium'} pt={'12vh'} >
        My Freshman College Story
      </Text>

      <div className='blog-text'>
        <Text
          fontFamily='century'
          fontSize='2xl'
          align={'center'}
          fontWeight={'medium'}
          pt={'4vh'}
          pb={'10vh'} >
          May 2022
        </Text>

        <Stack
          spacing={7}
          width={{ base: '85%', md: '60%' }}
          fontSize={{ base: '17', md: 'lg' }}
          fontFamily='century'>

          <Text>My freshman college story begins in Syracuse, NY.</Text>
          <Text pb='5vh'>Syracuse International Airport that is.</Text>

          <Text>After leaving our home in California early in the morning, my
            family and I arrived at Syracuse a little after 2 am.</Text>
          <Text>Much to our dismay, there were 0 Ubers available at that time.</Text>
          <Text pb='5vh'>At a freakin’ international airport.</Text>

          <Text> Mumbling and grumbling under our breaths, we soon became the
            only family at the airport.</Text>

          <BlogImage
            src="../images/blog_pictures/My-Freshman-College-Story/Pictures/1airport.jpeg"
            alt="Sleeping at the airport"
            caption={`Mom: "James, you should've just gone to Berkeley`}
            caption2='Dad: "zzzz"'
            orientation='h'
          />

          <Text pb='5vh'>When we finally arrived at my assigned dorm the next morning,
            the Holland International Living Center (HILC), I was happy.</Text>

          <Text>Until I looked over at Ganędagǫ.</Text>

          <BlogImage
            src="../images/blog_pictures/My-Freshman-College-Story/Pictures/2hilcvsganedago.png"
            alt="HILC next to Ganedago"
            caption="I pay the same housing as the people who live in Ganedago"
            orientation='h'
          />

          <Text>Apparently, HILC was made to help international students find
            community at Cornell.</Text>
          <Text>So I was confused why I was assigned to HILC for mainly one
            reason:</Text>
          <Text>I was born in the US.</Text>
          <Text pb='5vh'>I was also raised in the US.</Text>

          <Text>Nevertheless, with a grateful heart, my family helped me unpack
            all my belongings,</Text>
          <Text>and before I knew it, I was waving goodbye to my crying parents.</Text>

          <BlogImage
            maxW="450px"
            src="../images/blog_pictures/My-Freshman-College-Story/Pictures/3mom cry.jpeg"
            alt="Mom crying"
            caption="Mom said the food was just TOO good"
            orientation='v'
          />

          <Text>As I was sitting in my uncomfortable dorm chair, I realized that
            I was by myself.</Text>
          <Text>By myself in a community where I knew no one and no one knew me.</Text >
          <Text pb='5vh'>By myself in a place where everything familiar to me
            was across the country.</Text >

          <Text>A part of me wanted to stay in California.</Text >
          <Text pb='5vh'>But another part of me wanted to prove to myself that
            I could find my own identity and belonging in a foreign place— even if
            I was all alone.</Text >

          <Text>But ever so quickly, I learned that I wasn’t alone.</Text >
          <Text>Quite literally, there was someone always close by.</Text >
          <Text pb='5vh'>In the small confines of my forced - triple dorm room
            was my random roommate, Eric.</Text >

          <Text>Eric and I discovered that we share <em>a lot</em> of similarities:</Text >
          <Text>We both liked playing ping pong.</Text >
          <Text>And we both... liked watching ping pong.</Text >

          <BlogImage
            src="../images/blog_pictures/My-Freshman-College-Story/Pictures/4me and eric.jpeg"
            alt="Me and Eric"
            caption="Ecstatic Eric"
            orientation='h'
          />

          <Text>Interestingly, one of the first things Eric told me was,
            “I’m Christian, too” after noticing the Bible on my desk.</Text >
          <Text>Coming into college, I knew I wanted to be involved in a Christian
            campus fellowship, and now,</Text >
          <Text>I had a friend I could explore these fellowships with.</Text >

          <BlogImage
            maxW="500px"
            src="../images/blog_pictures/My-Freshman-College-Story/Pictures/5eric and i worm.jpeg"
            alt="Me and Eric almost kiss"
            caption="Eric and I learn there's more to explore than just Christian fellowships"
            orientation='v'
          />

          <Text>Together, we stumbled upon a fellowship we enjoyed and soon,
            I found myself surrounded by more and more people.</Text >
          <Text>The two of us became three…</Text >

          <BlogImage
            src="../images/blog_pictures/My-Freshman-College-Story/Pictures/6derek .jpeg"
            alt="My friend, Derek"
            caption="Insert: Derpy Derek"
            caption2="Derek has the broadest shoulders I've ever seen"
            orientation='h'
          />

          <Text>And the three of us became six…</Text >

          <BlogImage
            src="../images/blog_pictures/My-Freshman-College-Story/Pictures/7abnormal.jpeg"
            alt="The six members of dum moment"
            caption="Insert: Abnormal Angie, Goofy Grace, Exotic Elisabeth"
            orientation='h'
          />

          <Text>Throughout our busy weeks, we made time to have fun, and some
            of these memories, I don’t think I’ll ever forget.</Text >
          <Text>We munched together…</Text >

          <BlogImage
            src="../images/blog_pictures/My-Freshman-College-Story/Pictures/8cooking.jpeg"
            alt="Cooking together"
            caption="Cooking means stealing and reheating the already cooked dining hall chicken"
            orientation='h'
          />
          <BlogImage
            src="../images/blog_pictures/My-Freshman-College-Story/Pictures/8dp dough updated.png"
            alt="Angie and Elisabeth at DP Dough"
            caption="I don't think Elisabeth likes when I take pictures of her eating"
            orientation='h'
          />

          <Text>We played games together…</Text >

          <BlogImage
            src="../images/blog_pictures/My-Freshman-College-Story/Pictures/9show and tell2.jpeg"
            alt="Eric and Elisabeth dance for us"
            caption="Unamusing dance battles"
            orientation='h'
          />
          <BlogImage
            src="../images/blog_pictures/My-Freshman-College-Story/Pictures/10skribble.jpeg"
            alt="dum moment plays skribbl.io together"
            caption="Angie doesn't know how to draw a spoon"
            orientation='h'
          />

          <Text>And we explored the outdoors together…</Text >

          <BlogImage
            src="../images/blog_pictures/My-Freshman-College-Story/Pictures/11snow angels.jpeg"
            alt="Making snow angels together"
            caption="REAL snow angels"
            orientation='h'
          />
          <BlogImage
            src="../images/blog_pictures/My-Freshman-College-Story/Pictures/12concrete angel.jpeg"
            alt="Angie makes a concrete angel"
            caption="Angie shows us what a concrete angel is"
            orientation='h'
          />

          <Text>And when you live in Ithaca and the only place to go off campus
            is DP Dough, you have to start getting real creative with how you have fun.</Text >

          <BlogImage
            src="../images/blog_pictures/My-Freshman-College-Story/Pictures/13leg wrestling.jpeg"
            alt="Grace and Elisabeth wrestle with their legs"
            caption="Grace and Elisabeth like being touchy"
            orientation='h'
          />
          <BlogImage
            src="../images/blog_pictures/My-Freshman-College-Story/Pictures/14balance.jpeg"
            alt="Grace and Elisabeth try to balance on each other"
            caption="A little too touchy"
            orientation='h'
          />

          <Text>But we also did the things the average Cornell student does with
            their friends for fun too.</Text >

          <BlogImage
            src="../images/blog_pictures/My-Freshman-College-Story/Pictures/15studying for fun.jpeg"
            alt="dum moment studies together"
            caption="Studying together"
            orientation='h'
          />

          <Text>As the weather started to get colder, these were the people that
            made me feel warm and toasty inside.</Text >
          <Text>We could be sharing deeply one moment and the very next,
            completely make a fool of ourselves.</Text >

          <BlogImage
            src="../images/blog_pictures/My-Freshman-College-Story/Pictures/16sheesh faces.png"
            alt="dum moment shows off their sheesh faces"
            caption="The girls made us do this"
            orientation='h'
          />

          <Text>But don’t get me wrong.</Text >
          <Text>We didn’t just come to college to have fun.</Text>
          <Text>All of us had psets due each week and many of us had biweekly
            life crises figuring out what we wanted to do with our majors, vocations,
            and lives.</Text >
          <Text>Many times, we had to “isolate” from each other (as Grace likes
            to say) to focus and get our work done on time.</Text >

          <BlogImage
            src="../images/blog_pictures/My-Freshman-College-Story/Pictures/17eric sleeping.jpeg"
            alt="Eric sleeping"
            caption="Eric said he concentrates better with his eyes closed"
            orientation='h'
          />
          <BlogImage
            maxW="450px"
            src="../images/blog_pictures/My-Freshman-College-Story/Pictures/18angie sleeping.jpeg"
            alt="Angie sleeping in Cocktail"
            caption="I think Angie said the same thing"
            orientation='v'
          />
          <BlogImage
            maxW="450px"
            src="../images/blog_pictures/My-Freshman-College-Story/Pictures/19derek_coc.jpeg"
            alt="Derek plays games in Cocktail"
            caption='Derek: "Just one more round"'
            orientation='v'
          />

          <Text>Despite my busy schedule, I’m proud to say I got all my work done
            on time because I’d usually pace it out throughout the week.</Text >
          <Text>This way, I’d never have to cram an assignment 2 hours before the
            deadline.</Text >

          <BlogImage
            src="../images/blog_pictures/My-Freshman-College-Story/Pictures/20cherrie_starin.jpeg"
            alt="Cherrie, Karen, and Elisabeth do work at felly dessert"
            caption="Don't mess with Cherrie when her essay is due in 2 hours"
            orientation='h'
          />

          <Text fontWeight='bold' paddingBottom={'7vh'}>—</Text>

          <Text>Coming into college, I definitely wanted to figure out what I
            wanted to study but I also wanted to be intentional with the people
            around me, forming friendships that went beyond just the surface
            level small talk.</Text >
          <Text>Some people reminded me of family.</Text >

          <BlogImage
            src="../images/blog_pictures/My-Freshman-College-Story/Pictures/21sabrina.jpeg"
            alt="Me and Sabrina"
            caption="Me and my brother, Sabrina"
            orientation='h'
          />

          <Text>Some people I met were super wise…</Text >

          <BlogImage
            maxW="450px"
            src="../images/blog_pictures/My-Freshman-College-Story/Pictures/22wise_gras.jpeg"
            alt="Me and Grace at felly dessert"
            caption="Wise Grace is always ready to impart her knowledge to me"
            orientation='v'
          />

          <Text>While others, not so much.</Text >

          <BlogImage
            maxW="450px"
            src="../images/blog_pictures/My-Freshman-College-Story/Pictures/23unwise_gras.jpeg"
            alt="Grace and I grab lunch together"
            caption="This is the same person"
            orientation='h'
          />

          <Text>A couple friends and I became regulars at 7-Eleven and the
            name “7/11” began to symbolize that we would hang out from 11 pm to 7 am.</Text >

          <BlogImage
            maxW="450px"
            src="../images/blog_pictures/My-Freshman-College-Story/Pictures/24_711.jpeg"
            alt="The 7/11 gang enjoys snacks at unholy hours"
            caption={`"Look guys, it's only 3am!"`}
            orientation='v'
          />

          <Text>And of course, I can’t not mention the leader of our 7-Eleven crew: Amy.</Text >

          <BlogImage
            maxW="450px"
            src="../images/blog_pictures/My-Freshman-College-Story/Pictures/25tired amy.jpeg"
            alt="Tired Amy"
            caption="Amy is tired."
            caption2="Tired of us saying no to trips to 7-Eleven"
            orientation='v'
          />

          <Text>While I was meeting all these new people, I realized that everyone
            has their own unique quirk and charisma that you would have never
            guessed by just looking at them.</Text >

          <BlogImage
            maxW="450px"
            src="../images/blog_pictures/My-Freshman-College-Story/Pictures/26aleena design.jpeg"
            alt="Aleena makes a gingerbread house"
            caption="Aleena has a bright future as a design major"
            orientation='v'
          />
          <BlogImage
            maxW="450px"
            src="../images/blog_pictures/My-Freshman-College-Story/Pictures/27simon teeth.jpeg"
            alt="Simon brushes his teeth very well"
            caption="Simon (pre-dent) shows us the proper way to brush our teeth"
            orientation='v'
          />
          <BlogImage
            maxW="450px"
            src="../images/blog_pictures/My-Freshman-College-Story/Pictures/28studious micah.jpeg"
            alt="Micah studies during dance practice"
            caption="Micah seizes every opportunity to study."
            caption2="Even the 3 minute break during dance practice"
            orientation='v'
          />

          <Text>Even whilst surrounded by so many people every day, it would be
            a lie to say that there weren’t moments when I felt lonely.</Text >
          <Text>There were times I wanted to call it quits, feeling overwhelmed
            with trying to balance between studying for prelims (midterms), grinding
            through cs assignments, and spending time with friends.</Text >
          <Text>But because of those moments, I realized how grateful I was for
            the people that remained consistent and never failed to reach their
            hand out to me first.</Text >

          <BlogImage
            src="../images/blog_pictures/My-Freshman-College-Story/Pictures/29betterwedsg.jpeg"
            alt="Wednesday small group group photo"
            caption="The best Wednesday small group"
            orientation='h'
          />
          <BlogImage
            maxW="450px"
            src="../images/blog_pictures/My-Freshman-College-Story/Pictures/30sophia.jpeg"
            alt="Me and Sophia"
            caption="My small group leader, Sophia"
            caption2="W is for the best Wednesday small group"
            orientation='v'
          />

          <Text fontWeight='bold' paddingBottom={'7vh'}>—</Text>

          <Text>As someone from California, I’ve only ever known of two seasons:
            a hot summer and an even hotter summer.</Text >
          <Text>So coming to Ithaca, I realized how beautiful it was to see leaves
            changing colors and snow falling from the sky.</Text >

          <BlogImage
            maxW="450px"
            src="../images/blog_pictures/My-Freshman-College-Story/Pictures/31nature.jpeg"
            alt="A waterfall on Cornell's campus"
            caption="My view on the walk to class"
            orientation='v'
          />

          <Text>I learned what “flurries” are, what it means for snow to “stick,”
            and that “brick” is slang for “it’s freakin’ cold.”</Text >

          <BlogImage
            maxW="450px"
            src="../images/blog_pictures/My-Freshman-College-Story/Pictures/32brrrr.jpeg"
            alt="Cassy, me, and Jackie in our winter jackets"
            caption="Three Southern Californians brace for the fierce winter"
            orientation='h'
          />

          <Text>And as the weather started to get warmer and the cherry blossoms
            started to bloom, so did love.</Text >

          <BlogImage
            src="../images/blog_pictures/My-Freshman-College-Story/Pictures/33sleeping beauties.jpeg"
            alt="Sarah and Simon sleep on the couches in HILC"
            caption="So close... yet so far... Simon wishes he was Sarah's green jacket"
            orientation='h'
          />
          <BlogImage
            src="../images/blog_pictures/My-Freshman-College-Story/Pictures/34cherrie:melody.jpeg"
            alt="Cherrie and Melody rest on each other"
            caption="Cherrie and Melody make me feel lonely (and block my view of the front)"
            orientation='h'
          />

          <Text fontWeight='bold' paddingBottom={'7vh'}>—</Text>

          <Text>At first, I didn’t want to be seen as a freshman.</Text >
          <Text>I made sure to never wear a lanyard around my neck while walking
            around campus.</Text >
          <Text>But as the semester went on, I realized that being a freshman
            meant being spoiled by the upperclassmen, and I’m not gonna lie, it
            felt good to be babied.</Text >

          <BlogImage
            src="../images/blog_pictures/My-Freshman-College-Story/Pictures/35cherrie cookies.jpeg"
            alt="Cherrie and her cookies"
            caption="Caring Cherrie baked cookies and delivered it to all the freshmen"
            orientation='h'
          />

          <Text>Whenever I needed advice, whether it be about academics, relationships,
            or my faith, upperclassmen were always willing to reach out a hand—</Text >
          <Text>Usually in the form of grabbing a meal with me.</Text >

          <BlogImage
            src="../images/blog_pictures/My-Freshman-College-Story/Pictures/36simon:david:dwoo food.png"
            alt="Upperclassmen boys grab meals with me"
            caption="Great food, greater company"
            orientation='h'
          />

          <Text>Others showed their love in different ways.</Text >

          <BlogImage
            maxW="450px"
            src="../images/blog_pictures/My-Freshman-College-Story/Pictures/37andrew hand.jpeg"
            alt="Andrew goes on a run with me"
            caption="Affectionate Andrew holds his hand out for me to grab so I don't lag too far behind"
            orientation='v'
          />
          <BlogImage
            maxW="450px"
            src="../images/blog_pictures/My-Freshman-College-Story/Pictures/38laz haircut.jpeg"
            alt="Laz gives me a haircut"
            caption="Luscious Laz gives me a complimentary haircut"
            orientation='v'
          />
          <BlogImage
            src="../images/blog_pictures/My-Freshman-College-Story/Pictures/39Alan ride.jpeg"
            alt="Alan gives freshmen a ride back to North"
            caption="Adorable Alan risks a ticket so the freshies can go home safely"
            orientation='h'
          />

          <Text>These people made me look forward to being a sophomore.</Text >
          <Text>Not because I didn’t want to be seen as a freshman or wanted to
            stop being pampered,</Text >
          <Text>but because they made me want to pass down this same love and
            kindness to the freshmen below me.</Text >

          <BlogImage
            src="../images/blog_pictures/My-Freshman-College-Story/Pictures/40daniel and barry.png"
            alt="The three boys with Daniel and Barry"
            caption="Dashing Daniel and Beefy Barry can't escape our skinship"
            orientation='h'
          />

          <Text fontWeight='bold' paddingBottom={'7vh'}>—</Text>

          <Text>College life became so busy that I barely had time to think of
            the people back home.</Text >
          <Text>Yet the people back home reminded me that there were still people
            across the country thinking about me.</Text >

          <BlogImage
            src="../images/blog_pictures/My-Freshman-College-Story/Pictures/41care_package.jpeg"
            alt="Care package from my parents"
            caption="Care package from Mama and Papa Kim"
            caption2="Note says: We love you so much. Eat healthy and study hard."
            orientation='h'
          />

          <Text fontWeight='bold' paddingBottom={'7vh'}>—</Text>

          <Text pb='5vh'>As cliché as it is, college really is a time of learning
            and I learned a lot this year.</Text >

          <Text>I learned how freakin’ hard it is to get a good haircut in Ithaca.</Text >
          <Text>I’ve traveled close and far in search of a satisfactory barber
            but no one comes even close to the skillful and caring hands of Mama Kim.</Text >

          <BlogImage
            maxW="450px"
            src="../images/blog_pictures/My-Freshman-College-Story/Pictures/42failed haircut.jpeg"
            alt="Eating a sandwich after a bad haircut"
            caption="One of many failed haircuts"
            caption2="I was so sad I bought myself a consolation sandwich"
            orientation='v'
          />

          <Text>On a more positive note,</Text >
          <Text>I learned how clean armpits could be when you wax them,</Text >

          <BlogImage
            maxW="450px"
            src="../images/blog_pictures/My-Freshman-College-Story/Pictures/43armpits.jpeg"
            alt="Derek and Simon get their armpits waxed during Large Group"
            caption="Fresh 'pits x2"
            orientation='v'
          />

          <Text>I learned that dancing is actually kinda fun</Text >
          <Text>(only if Grace and Ro-Ann are the teachers),</Text >

          <BlogImage
            src="../images/blog_pictures/My-Freshman-College-Story/Pictures/44boys_gen.jpeg"
            alt="Boyz Re-Generation's performance"
            caption="Emerging kpop group"
            caption2='"Boyz Re-Generation"'
            orientation='h'
          />

          <Text>And above all,</Text >
          <Text pb='5vh'>I learned that change isn’t so bad.</Text >

          <Text>The period of adjustment to something new and unfamiliar has
            always been hard on me.</Text >
          <Text>But before I knew it, the overwhelmingly big Cornell campus
            became my playground, and at some point during the year, my perception
            of HILC began to change.</Text >
          <Text>HILC was where I went after a long day on campus to recharge and rest.</Text >
          <Text>But HILC was also where we played, where we celebrated birthdays,
            where we would stay up talking until unholy hours of the night.</Text >

          <BlogImage
            src="../images/blog_pictures/My-Freshman-College-Story/Pictures/46-hilcmems-1.png"
            alt="Memories at HILC"
            orientation='h'
          />

          <Text>HILC was <Text as='i'> home.</Text></Text >

          <BlogImage
            src="../images/blog_pictures/My-Freshman-College-Story/Pictures/45hilc zzz.jpeg"
            alt="Dum Moment sleeping at HILC"
            caption="Breakfast anyone?"
            orientation='h'
          />

          <Text fontWeight='bold' paddingBottom={'7vh'}>—</Text>

          <Text>Ironically enough, I’ll be living in Ganędagǫ next year.</Text >
          <Text>It’s the place I’ve wanted to be since the beginning.</Text >
          <Text>Yet the small, shoddy dorm known as HILC embodies my freshman experience.</Text >
          <Text>It’s where everything started and where it ends as I move out.</Text >

          <BlogImage
            src="../images/blog_pictures/My-Freshman-College-Story/Pictures/46hilc memoreis.png"
            alt="Memories at HILC"
            caption="Sleepless nights"
            orientation='h'
          />

          <Text>Elisabeth said freshman year was so great because she came in
            with no expectations.</Text >
          <Text pb='5vh'>She’s right.</Text >

          <Text>In the beginning, we were just a bunch of clueless freshmen
            trying to absorb everything around us and find where we belonged in
            this foreign place.</Text >
          <Text>Maybe that’s why every experience was so fresh and exciting.</Text >

          <BlogImage
            src="../images/blog_pictures/My-Freshman-College-Story/Pictures/47perfect match.jpeg"
            alt="Grace's perfect match"
            caption='Our first "Perfect Match" experience'
            orientation='h'
          />

          <Text fontWeight='bold' paddingBottom={'7vh'}>—</Text>

          <Text>Next year, I’ll be back.</Text >
          <Text>Back to the busy college grind, and back with my friends.</Text >
          <Text pb='5vh'>And this time around, a lot more things will be familiar.</Text >

          <Text>But whatever sophomore year may bring, I’m thankful.</Text >
          <Text>I’m thankful for the people I’ve met, how I’ve changed, and who
            I’ve become.</Text >
          <Text pb='5vh'>I’m thankful for the memories—</Text >

          <Text>and I can’t wait to go back.</Text >

          <Box paddingY='5vh' maxWidth={'400px'} alignSelf='center'>
            <video controls>
              <source src="../images/blog_pictures/My-Freshman-College-Story/Pictures/48bye hilc.mov" />
            </video>
          </Box>

          < Text pb='10vh' > - James Kim</Text >
        </Stack >
      </div >
    </div >
  )
}

export default FreshmanStory