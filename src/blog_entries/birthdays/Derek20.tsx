import { Text, Stack, Heading } from "@chakra-ui/react"
import { Helmet } from 'react-helmet'
import BlogImage from "../../components/blog/BlogImage"
import { useEffect } from "react"

const Derek20 = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <Helmet>
        <title>biojameskim | Derek's 20th</title>
      </Helmet>

      <Heading fontSize='3.3rem' textAlign={'center'} fontWeight={'medium'} pt={'12vh'} px='3' >
        Dear Derek
      </Heading>

      <div className='blog-text'>
        <Text
          fontSize='2xl'
          align={'center'}
          pt={'4vh'}
          pb={'10vh'} >
          June 2, 2023
        </Text>

        <Stack
          spacing={7}
          width={{ base: '85%', md: '60%' }}
          fontSize={{ base: '17', md: 'lg' }}
        >

          <Text pb='5vh'>Dear Derek,</Text>

          <Text pb='5vh'>Happy birthday brotha.</Text>

          <Text>Recently, as I was prepping for my new blog post, I was looking
            back at all my photos since the start of sophomore year.</Text>
          <Text pb='5vh'>Those photos really captured a lot of great memories and
            experiences, and unfortunately, there were quite a lot of pictures
            of the chalkboard from algo office hours.</Text>

          <Text>But in each of those photos, I wasn’t alone.</Text>
          <Text>In each of my core sophomore year memories, you were there too.</Text>
          <Text>It was you and me. Together.</Text>

          <BlogImage
            src="../images/birthdays/derek-20/dl_1.jpeg"
            alt="Derek and I go swimming"
            caption="Swimming this friday?"
            orientation='v'
          />

          <Text pb='5vh'>This year, we did a lot together.</Text>

          <Text>We played a lot of tennis together, and I forgot our coach’s name,
            but he was pretty dang bad at predicting the weather.</Text>

          <BlogImage
            src="../images/birthdays/derek-20/dl_2.jpeg"
            alt="Derek and I get rained on during tennis"
            caption="Not again."
            orientation='v'
          />

          <Text>I’m really glad that I have a tennis buddy.</Text>
          <Text>Tennis has been such a big part of my life since I was in
            elementary school, and it was how I got closer to my Dad and to my
            high school friends.</Text>
          <Text>Every time we play together, you help me relive some of my
            happiest memories, and I’m really glad I get to continue that timeline
            with you.</Text>

          <BlogImage
            src="../images/birthdays/derek-20/dl_3.jpeg"
            alt="Derek and I play tennis in the cold"
            caption="Freakin' cold"
            orientation='v'
          />

          <Text>We also did a lot of freakin’ algo together.</Text>
          <Text>Algo consumed most of our weeks, and we spent a lot of time
            discussing ideas and insights from OH,</Text>
          <Text>which meant we spent <i>a lot</i> of time together.</Text>

          <BlogImage
            src="../images/birthdays/derek-20/dl_4.jpeg"
            alt="Derek doodles during algo review session"
            caption={`"Derek. You're paying attention right?"`}
            orientation='v'
          />

          <Text pb='5vh'>We were pretty busy, but that doesn’t mean we didn’t
            make time to have fun.</Text>

          <Text>We swam together at heinously early hours despite our struggle to
            get up in the morning,</Text>
          <Text>We both danced with passion even though we both have trouble
            coordinating our bodies,</Text>
          <Text>And we ranted to each other about all the people that were
            chronically late, not to mention all the people that just have no
            basic noonchi.</Text>

          <BlogImage
            src="../images/birthdays/derek-20/dl_5.jpeg"
            alt="Derek and I lay on a pole"
            caption="What in the world were we thinking"
            orientation='h'
          />

          <Text>Looking back, some of the best memories I have is when I would
            walk down the hall and pop into your room to say hi.</Text>
          <Text pb='5vh'>We’d talk about our days, the things we were struggling with,
            the highlights of our week, and the slightly heinous things that
            only us boys would understand.</Text>

          <Text pb='5vh'>And it’s these moments that made me appreciate you the most.</Text>

          <Text>It wasn’t the extravagant things that came to define our friendship.</Text>
          <Text pb='5vh'>We didn’t always have to be doing some amazing activity together.</Text>

          <Text pb='5vh'>We were just doing life together.</Text>

          <Text>Through both the exciting and the mundane, we were relying on and
            supporting each other.</Text>

          <BlogImage
            src="../images/birthdays/derek-20/dl_6.jpeg"
            alt="Derek and Me."
            caption="<3"
            orientation='v'
          />

          <Text>I’m really thankful that God’s placed someone like you not only
            in my life, but in the community around you.</Text>
          <Text>I’ve definitely felt and been encouraged by your patience,
            kindness, compassion, and love for others,</Text>
          <Text>And I’m confident that you’ve made so many others have that
            same warm, bubbly feeling inside.</Text>

          <BlogImage
            src="../images/birthdays/derek-20/dl_7.jpeg"
            alt="Derek and worship team."
            caption="Sexiest man on worship team (by far)"
            orientation='v'
          />

          <Text>It’s been a great year, and I can’t wait to see what this next
            year holds for you.</Text>
          <Text>Happy 20th bro, and although I can’t be there to celebrate with
            you, I hope you have the best birthday with Sam and Christine.</Text>
          <Text pb='5vh'>You deserve it.</Text>

          <Text>Love, </Text>
          <Text pb='10vh'>James</Text>

        </Stack>
      </div>
    </div>
  )
}

export default Derek20