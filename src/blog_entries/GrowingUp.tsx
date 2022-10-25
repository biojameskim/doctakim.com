import { Text, Stack } from "@chakra-ui/react"
import { Helmet } from 'react-helmet'
import BlogImage from "../components/BlogImage"
import { useEffect } from "react"


const GrowingUp = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <Helmet>
        <title>doctakim | Growing Up</title>
      </Helmet>
      <Text fontSize='3rem' align={'center'} fontWeight={'medium'} pt={'12vh'} >
        Growing Up
      </Text>
      <div className='blog-text'>
        <Text fontFamily='century' fontSize='2xl' align={'center'} fontWeight={'medium'} pt={'4vh'} pb={'10vh'} >
          June 2022
        </Text>
        <Stack spacing={7} width={{ base: '85%', md: '60%' }} fontSize={{ base: '17', md: 'lg' }} fontFamily='century'>

          <BlogImage
            src="../images/blog_pictures/Growing-Up/Pictures/aunt-before.jpg"
            alt="Aunt taking a nap"
            caption="A 5 minute power nap/prayer goes a long way"
          />

          <Text pb='5vh'>“Look at my new haircut.”</Text>

          <Text pb='5vh'>My aunt smiled as she pointed to her slightly frizzled and permed hair.</Text>

          <Text>From founding a nonprofit organization, to caring for her two daughters,
            and following nightly yoga tutorials, my aunt is young and vibrant—</Text>
          <Text pb='7vh'>a source of never-ending passion and energy.</Text>

          <Text>Since the earliest fragments of my memory, my aunt has always known
            how to keep herself active and busy.</Text>
          <Text>Admittedly, the biggest change in her appearance was her new hairdo.</Text>
          <Text pb='7vh'>Her hair wasn’t tied back in the usual ponytail, but it
            was set free: flowing down and laying loosely around her shoulders.</Text>

          <Text>Yet the biggest change I noticed wasn’t what she was drawing attention to.</Text>
          <Text>Around the outer corners of her eyes were imprints that I had never noticed before.</Text>
          <Text pb='5vh'>Time had left its footprint in the fine lines it painted around her eyes.</Text>

          <Text pb='10vh'>My aunt isn't completely the same young and vibrant person I knew.</Text>

          <Text>My aunt is getting older.</Text>

          <BlogImage
            src="../images/blog_pictures/Growing-Up/Pictures/aunt-after.jpeg"
            alt="Aunt holding hands and singing with Uncle"
            caption="Aunt is still young at heart"
          />

          <Text fontWeight='bold' paddingY={'7vh'}>—</Text>

          <BlogImage
            src="../images/blog_pictures/Growing-Up/Pictures/gpa-before.jpg"
            alt="Grandpa with two of his grandchildren"
            caption="Grandpa loves his grandchildren"
          />

          <Text>Almost every summer, my family tries to visit our grandparents in Korea.</Text>
          <Text>In the grand scheme of things, one year really isn’t that long of a time.</Text>
          <Text pb='7vh'>But the span of a year has fragmented my memory of my grandparents.</Text>

          <Text>I wish I could see them dancing under the snow of the cold winter
            months or sneezing because of the fuzzy pollen of the warm springtime.</Text>
          <Text>But my memory of them is limited only to the small glimpses of our
            time spent together in the summer.</Text>
          <Text pb='7vh'>Yet even in these small fragments of time, there’s a
            lot of change.</Text>

          <Text> Six summers ago, my grandpa took me and my brother out for a hike
            in the mountains.</Text>
          <Text>Four summers ago, he took us out to the movies.</Text>
          <Text>Two summers ago, he took us out for a walk in the neighborhood.</Text>
          <Text pb='10vh'>But this summer, my grandpa apologized for not being
            able to go out with us anymore.</Text>

          <Text> My grandpa is getting older.</Text>

          <BlogImage
            src="../images/blog_pictures/Growing-Up/Pictures/gpa-after.jpeg"
            alt="Grandpa laying down on sofa"
            caption="It's okay, grandpa."
          />

          <Text fontWeight='bold' paddingY={'7vh'}>—</Text>

          <BlogImage
            src="../images/blog_pictures/Growing-Up/Pictures/cousins-before.jpg"
            alt="My cousins in the past"
            caption="A swaggy and cool Instagram-worthy picture"
          />

          <Text>Until I was in about third grade, I hated my cousins.</Text>
          <Text>Christine and Eunice were just so annoying, but maybe that was
            because I saw them as more than just relatives you meet at family reunions.</Text>
          <Text>They were the younger sisters that I had always wanted. And what
            siblings don’t hate each other? (at least on the outside).</Text>
          <Text pb='7vh'>They even used to call me oppa (older brother in Korean)
            but now they just call me James :((</Text>

          <Text>Even though we only see each other once or twice per year, we’ve
            kept close with each other and I look forward to each life update they give me:</Text>
          <Text>The time Eunice won her school spelling bee, the first time a guy
            asked Christine out, the second time a guy asked Christine out, and
            most recently, baby Eunice getting ready for her freshman year of college.</Text>
          <Text pb='7vh'>Every time they share something new and exciting, I’m
            happy for them, but it also stings a little inside.</Text>

          <Text>I’m coming to terms with the fact that my baby cousins are no longer babies.</Text>
          <Text pb='10vh'>They’re not afraid to share their own thoughts and feelings, even
            when it conflicts with mine, and I admire the lengths they go to pursue
            their passions and vocations.</Text>

          <Text>My sisters are getting older.</Text>

          <BlogImage
            src="../images/blog_pictures/Growing-Up/Pictures/cousins-after.jpeg"
            alt="My cousins in the present."
            caption="A less swaggy and cool Instagram-worthy picture"
          />

          <Text fontWeight='bold' paddingY={'7vh'}>—</Text>

          <Text>Throughout elementary, middle, and high school, when people asked
            me what I wanted to be when I grew up, I only really had one thing in mind.</Text>
          <Text>I wanted to be someone other people could look up to. Someone that
            could provide for the people they care about.</Text>
          <Text pb='7vh'>But that was always for later. I’d work towards these things when
            I finally grew up.</Text>

          <Text>Yet as I see the changes in the people around me, I realize that
            each moment I spend in the present makes small progress towards the
            overall process of growing up.</Text>
          <Text>The things I choose to do now and the seeds I sow now are bound
            to contribute to the person I’ll be when I finally grow up.</Text>
          <Text pb='7vh'>I’m slowly realizing how much more intentional and diligent I
            can be with the time that I’m given in these fleeting moments of my
            day-to-day life.</Text>

          <Text> I need to start organizing my to-do list and start setting my priorities straight.</Text>

          <Text pb='5vh'> Because tomorrow, a month later, or even 5 years later, I want
            to be proud of the way I invested my time and efforts— </Text>

          <Text pb='10vh'>proud of the way I grew up.</Text>

          <Text pb='10vh'>And I’m glad I realized this sooner than later. Because after all,</Text>

          <Text>I’m getting older too.</Text>

          <BlogImage
            src="../images/blog_pictures/Growing-Up/Pictures/me-before-and-after.png"
            alt="Me before and after"
            caption="Puberty."
          />

          <Text pb='10vh'>- James Kim</Text>

        </Stack>
      </div>
    </div >
  )
}

export default GrowingUp