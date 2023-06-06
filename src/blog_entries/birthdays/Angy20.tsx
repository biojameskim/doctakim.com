import { Text, Stack } from "@chakra-ui/react"
import { Helmet } from 'react-helmet'
import BlogImage from "../../components/blog/BlogImage"
import { useEffect } from "react"

const Angy20 = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <Helmet>
        <title>doctakim | Angy's 20th</title>
      </Helmet>

      <Text className='blog-title' fontSize='3rem' align={'center'} fontWeight={'medium'} pt={'12vh'} px='3' >
        Dear Angy
      </Text>

      <div className='blog-text'>
        <Text
          fontFamily='century'
          fontSize='2xl'
          align={'center'}
          fontWeight={'medium'}
          pt={'4vh'}
          pb={'10vh'} >
          April 7, 2023
        </Text>

        <Stack
          spacing={7}
          width={{ base: '85%', md: '60%' }}
          fontSize={{ base: '17', md: 'lg' }}
          fontFamily='century'>

          <Text pb='5vh'>Angus Bangus Hocus Pocus,</Text>
          <Text pb='5vh'>HAPPY happy birthday, and welcome to the 2nd decade of
            your life.</Text>

          <Text>I think I told you this before but something about turning 20 was
            so different for me.</Text>
          <Text>17 was whatever, 18 was meh, 19 was aight, but 20.</Text>
          <Text pb='5vh'>Something about being 20 really hit me differently.</Text>

          <Text>I don’t remember much from my high school calc bc class, but one
            thing my teacher used to always tell us was something along the lines of:</Text>

          <Text as='i' paddingY={'5vh'} paddingX={{ base: '1.75rem', md: '3.5rem' }}>
            “Every decade of your life, you should look at yourself now relative
            to who you were 10 years ago. If you’re still the same person, you
            haven’t done anything with your life at all.”
          </Text>

          <Text>Unfortunately, I couldn’t really relate to that when I was 10
            because if I looked back 10 years, well, I was still in the womb.</Text>

          <BlogImage
            src="../images/birthdays/angy-20/ah_1.jpeg"
            alt="Angy and Lilian hanging on a bar."
            caption="Angy is prolly the same person she was 10 years ago."
            orientation='v'
          />

          <Text>20 was the first time I could finally look back on the past 10
            years and reflect on everything that’s happened since the last decade
            of my life.</Text>
          <Text pb='5vh'>And SHEE*** did a lot of things change.</Text>

          <Text>I graduated elementary, middle, high school, AND entered college
            in the past decade.</Text>
          <Text>I cried a lot (more towards the former half of the past decade),
            laughed a lot, made new friends, parted with old friends, and most
            importantly, I can confidently say that my relationship with God got
            much, much stronger.</Text>

          <BlogImage
            src="../images/birthdays/angy-20/ah_2.jpeg"
            alt="Angy and Grace twinning at the gym."
            caption="Angy prolly cried a lot in the past decade too."
            orientation='v'
          />

          <Text>So Angy.</Text>
          <Text>You’re 20 now.</Text>
          <Text>You can finally sit down and look back at the past 10 years.</Text>
          <Text pb='5vh'>You can finally look back at where you were when you
            were 10 compared to where you are now.</Text>

          <Text>Maybe you haven’t changed that much.</Text>
          <Text>Or maybe you changed even more than you thought.</Text>
          <Text pb='5vh'>Maybe you envisioned yourself to be somewhere completely
            different when you finally hit 20.</Text>

          <Text><s>Fortunately</s> Unfortunately, I haven’t known you since you
            were 10, so I can’t really speak for you on that matter.</Text>
          <Text>But lucky me, I’ve known you for the past 2.</Text>
          <Text>And wow am I glad that God has placed you where you are right now.</Text>

          <BlogImage
            src="../images/birthdays/angy-20/ah_3.jpeg"
            alt="Angy lost in a library."
            caption='“God! God… Where am I?”'
            orientation='v'
          />

          <Text>I don’t tell you this nearly as much as I probably could,</Text>
          <Text pb='5vh'>But I’m honestly really thankful for a friend like you.</Text>

          <Text>Without you, I would’ve been eating my hotpot with NO sauce that night.</Text>
          <Text pb='5vh'>But I’m thankful you showed me the savory, sweet, salty,
            and umami fusion of that 50 ingredient sauce concoction.</Text>

          <Text>I also enjoy your goofy moments and all the lighthearted fun we have.</Text>
          <Text pb='5vh'>During the Boston trip, I realized that you’re pretty
            good at nertz… and even better at eating animal crackers.</Text>

          <Text>You’re always the first to say we need to take a 0.5 and although
            I might be reluctant in the moment,</Text>
          <Text>these are the pictures I cherish the most as I look back at my semester.</Text>

          <BlogImage
            src="../images/birthdays/angy-20/ah_4.jpeg"
            alt="0.5 photo at Boston."
            caption="The time your hand was legit in the guy’s face"
            orientation='v'
          />

          <Text>And as goofy as you are, you also know when to be serious.</Text>

          <Text>I enjoy the intentional talks we have over our semesterly meals,
            and the long talks we had as the sole drivers of the Boston trip.</Text>


          <Text>And even though you always give me that dirty look, I know deep
            deep inside, you enjoy my presence too.</Text>

          <BlogImage
            src="../images/birthdays/angy-20/ah_5.jpeg"
            alt="Angy gives me a dirty look."
            caption="At least I think so…"
            orientation='v'
          />

          <Text pb='5vh'>And above all, I admire your heart to constantly grow
            in your relationship with God and serve those around you.</Text>

          <Text>Despite psets that aren’t gonna finish themselves, you’re always
            present in aaiv—</Text>
          <Text pb='5vh'>Whether it be serving on worship, getting meals with
            freshies, or coming to thurs sg (because of your promise to Megan).</Text>

          <Text>Your love was evident when you led worship on the slope, and I
            can see your care in your desire to lead a small group despite all
            your hesitations.</Text>

          <BlogImage
            src="../images/birthdays/angy-20/ah_6.jpeg"
            alt="Angy in an apron."
            caption="Next small group leader???"
            orientation='v'
          />

          <Text>Before we know it, we’ll be 30.</Text>
          <Text pb='5vh'>Maybe by then, we’ll have full-time jobs, be married to
            our lovers, have an abundance of kids, and enjoy things that we aren’t
            even thinking about as 20 year olds.</Text>

          <Text>But wherever we’re at in our 30s, I hope you can look back at
            your 20s and smile to yourself.</Text>
          <Text>You probably made a lot of mistakes (and a lot of great decisions
            too) but through it all, I hope you can see that you were able to put
            your trust in God every step of the way.</Text>
          <Text pb='5vh'>Because after all, “God said if you trust in me,
            everything else will fall into place.”</Text>

          <Text>Right?</Text>

          <BlogImage
            src="../images/birthdays/angy-20/ah_7.jpeg"
            alt="Angy and Melody smiling."
            caption="All smiles."
            orientation='v'
          />

          <Text>Love, </Text>
          <Text pb='10vh'>James</Text>

        </Stack>
      </div>
    </div>
  )
}

export default Angy20