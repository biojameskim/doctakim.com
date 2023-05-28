import { Text, Stack } from "@chakra-ui/react"
import { Helmet } from 'react-helmet'
import BlogImage from "../components/BlogImage"
import { useEffect } from "react"

const FaceTime = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <Helmet>
        <title>doctakim | FaceTime</title>
      </Helmet>

      <Text className='blog-title' fontSize='3rem' align={'center'} fontWeight={'medium'} pt={'12vh'} >
        FaceTime
      </Text>

      <div className='blog-text'>
        <Text
          fontFamily='century'
          fontSize='2xl'
          align={'center'}
          fontWeight={'medium'}
          pt={'4vh'}
          pb={'10vh'} >
          May 2023
        </Text>

        <Stack
          spacing={7}
          width={{ base: '85%', md: '60%' }}
          fontSize={{ base: '17', md: 'lg' }}
          fontFamily='century'>

          <Text pb='5vh'>I <i>hate</i> facetime.</Text>

          <Text>At best, the small screen in front of me gives an unsatisfying
            tease of what it feels like to talk in person.</Text>
          <Text>It’s a layer of inconvenience that I just can’t seem to get past.</Text>

          <BlogImage
            maxW="280px"
            src="../images/blog_pictures/FaceTime/Pictures/ft_1.jpeg"
            alt="Facetime with Mom and Dad."
            orientation='override'
          />

          <Text pb='5vh'>I’ve realized that what makes conversations fun for me
            isn’t just being able to talk with someone as I look at their face.</Text>

          <Text>I also want to see their body language.</Text>
          <Text pb='5vh'>Their posture and stance reveals how comfortable they are, their
            eye contact reveals how engaged they are, and their hand movements
            reveal so much more emotion.</Text>

          <Text>I want to see the ways they’re reacting to the things I say and
            show them the ways I’m reacting to the things they say.</Text>
          <Text>Whether it be a flirtatious tap on the shoulder, a harder tap of
            laughter, and an even harder tap of disapproval, I think we were
            made to express ourselves with more than just a face and a voice.</Text>

          <BlogImage
            maxW="280px"
            src="../images/blog_pictures/FaceTime/Pictures/ft_2.jpeg"
            alt="Facetime with Brother."
            orientation='override'
          />

          <Text>And I hate having to worry about the inconveniences of failed wifi connections.</Text>
          <Text as='i' paddingY={'5vh'} paddingX={{ base: '1.75rem', md: '3.5rem' }}>
            Did they hear me the first time? Should I repeat myself?
          </Text>

          <Text>Not to mention all the horrible distractions that come with virtual communication.</Text>
          <Text as='i' paddingY={'5vh'} paddingX={{ base: '1.75rem', md: '3.5rem' }}>
            Are they even paying attention? Or just scrolling through their phone?
          </Text>

          <Text>And worst of all, sometimes they don’t even pick up.</Text>

          <BlogImage
            maxW="280px"
            src="../images/blog_pictures/FaceTime/Pictures/ft_3.jpeg"
            alt="Mom not available for FaceTime."
            orientation='override'
          />

          <Text>But facetime keeps me waiting.</Text>
          <Text pb='5vh'>Little by little, as I see someone through that small
            digital window, it keeps me waiting for the next time I’ll get to see
            them in person.</Text>

          <Text>After all, facetime isn’t a replacement for interacting with someone
            in real life but rather a means to stay connected in between the gaps of
            being with someone in person.</Text>
          <Text pb='5vh'>If facetime was so great, maybe we wouldn’t feel the desire
            to see each other in person as strongly.</Text>

          <Text>So maybe facetime isn’t <i>that</i> bad.</Text>
          <Text pb='5vh'>Maybe it’s a <i>good</i> thing that facetime is ridden with so many problems.</Text>

          <Text>And maybe— just maybe— </Text>
          <Text>it's the frustrations and inconveniences of virtual
            communication that make the wait that much more worth it.</Text>

          <BlogImage
            maxW="280px"
            src="../images/blog_pictures/FaceTime/Pictures/ft_4.jpeg"
            alt="My brother and Me."
            orientation='override'
          />

          < Text pb='10vh' > - James Kim</Text >

        </Stack >
      </div >
    </div >
  )
}

export default FaceTime