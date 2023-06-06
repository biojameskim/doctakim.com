import { Text, Stack } from "@chakra-ui/react"
import { Helmet } from 'react-helmet'
import BlogImage from "../../components/blog/BlogImage"
import { useEffect } from "react"

const GraceLi21 = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <Helmet>
        <title>doctakim | Grace Li's 21st</title>
      </Helmet>

      <Text className='blog-title' fontSize='3rem' align={'center'} fontWeight={'medium'} pt={'12vh'} px='3' >
        Dear Grace Li
      </Text>

      <div className='blog-text'>
        <Text
          fontFamily='century'
          fontSize='2xl'
          align={'center'}
          fontWeight={'medium'}
          pt={'4vh'}
          pb={'10vh'} >
          April 12, 2023
        </Text>

        <Stack
          spacing={7}
          width={{ base: '85%', md: '60%' }}
          fontSize={{ base: '17', md: 'lg' }}
          fontFamily='century'>

          <Text><s>Grasli,</s></Text>
          <Text><s>LiLi,</s></Text>
          <Text pb='5vh'>Grace Li,</Text>


          <Text pb='5vh'>Happy 21st Birthday.</Text>
          <Text>You’re finally at the age where the law cannot hold you back from doing
            anything no longer.</Text>
          <Text>It’s hard to believe, but you’re an adult. A big girl. A post-pubescent
            adolescent.</Text>

          <Text pb='5vh'>It’s been such a blessing to get to know you over these past almost 2
            years now, and I’m thankful that God has placed someone like you in my life
            here at Cornell.</Text>
          <Text>Over these past 2 years, I’ve really gotten to know a lot of different
            sides of you, and it definitely took some time, but I’ve come to appreciate
            all these different sides of who you are to me.</Text>

          <BlogImage
            src="../images/birthdays/grace-li-21/gli_1.jpeg"
            alt="Grace Li"
            caption="Who… Who is this girl?"
            orientation='v'
          />

          <Text>To me, Grasli is a goofy, friendly, funny friend.</Text>
          <Text>Grasli knows how to have fun, brightens the atmosphere, and brings so
            much joy to the table.</Text>
          <Text>At times she can be loopy and sometimes, just sometimes,</Text>
          <Text pb='5vh'>I question whether she’s a junior… or a freshman.</Text>

          <Text>Tree poses and 0.5’s define her love for the Bible, her community, and
            the lighthearted, joyous moments of life.</Text>
          <Text>And if you know Grasli at all, you better know your mbti.</Text>
          <Text>Or you’re gonna have to take the test on the spot.</Text>

          <BlogImage
            src="../images/birthdays/grace-li-21/gli_2.jpeg"
            alt="Grace falls asleep at Church"
            caption='"Grace! Grace! Are you… ok?"'
            orientation='v'
          />

          <Text>To me, LiLi is a caring, loving, wise wog.</Text>
          <Text>Last year, when LiLi and I were members of the same small group, I
            learned a lot from her.</Text>
          <Text pb='5vh'>Her analogies solidified a lot of difficult ideas in my head and I was
            thankful that there was someone I could freely talk about the Bible with.</Text>

          <Text>Now, I serve as core in LiLi’s own small group.</Text>
          <Text>But not much has changed.</Text>
          <Text>I still learn a lot from her. And her analogies still help me understand
            things a lot clearer.</Text>
          <Text>And it turns out, LiLi is also a great leader.</Text>
          <Text>From her efforts to build friendships rather than checking people off
            a list of follow ups, to her efforts to make sg best suited to our uniquely
            big group, I can see how much LiLi cares about each person in our small group.</Text>
          <Text>I’m encouraged by the faces that show up each week and I take great pride
            that LiLi is our leader (after Jesus of course).</Text>

          <BlogImage
            src="../images/birthdays/grace-li-21/gli_3.jpeg"
            alt="Christmas party at the Highlands"
            caption="Even leaders have their flaws.  :)"
            orientation='v'
          />

          <Text>To me, Grace Li is a thoughtful, intentional, present friend.</Text>
          <Text>She has a lot on her plate, but she’s willing to sit down, talk, and be
            there for the people she cares about.</Text>
          <Text>She loves Jesus and isn’t afraid to share that and passion. Her blog is
            a little inactive but maybe it’ll get a comeback?</Text>

          <Text pb='5vh'>Whether it’s serving on worship or small group, she stewards others in
            what it means to be a part of the body of Christ.</Text>
          <Text>I’m always encouraged by the ways she pushes herself and the ways she
            pushes me to continue walking towards Jesus.</Text>
          <Text>I appreciated all the conversations we had over the biweekly lunches
            last year, and I’m thankful that we could share about both the light and
            the serious.</Text>

          <BlogImage
            src="../images/birthdays/grace-li-21/gli_4.jpeg"
            alt="Grace cooks for James"
            caption="Yummy yummy in my tummy"
            orientation='v'
          />

          <Text pb='5vh'>Thanks Grace.</Text>
          <Text>You reveal glimpses of Jesus’s character to me in the way you live
            out your life, and it motivates me to strive to be a better mog myself.</Text>
          <Text>I hope that through the highs and lows of this next year, God reveals
            more and more of who He wants you to be.</Text>
          <Text>Just like God is the Father, the Son, and the Holy Spirit, I hope you’ll
            never stop being Grasli, LiLi, and Grace Li.</Text>

          <BlogImage
            src="../images/birthdays/grace-li-21/gli_5.jpeg"
            alt="Grace doesn't share umbrella with James"
            caption="Grace Leech: the evil side of Grace"
            orientation='v'
          />

          <Text pb='10vh'>- James</Text>

        </Stack>
      </div>
    </div>
  )
}

export default GraceLi21