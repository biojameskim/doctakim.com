import { VStack, Text, Box, Wrap, WrapItem } from "@chakra-ui/react"
import BlogCard from "../components/BlogCard"
import { Helmet } from 'react-helmet';
import { useEffect } from "react";

// Cover Photos
// Keep each photo at 1280x960 --> (2048x1536, 1024x768, etc) using fotor.com

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <Helmet>
        <title>doctakim | Blog</title>
      </Helmet>

      <VStack>

        <Box>
          <Text className="page-title" align='center' fontSize='4rem' fontWeight={'medium'} pt={'6vh'} pb={{ base: '2vh', md: '4vh' }}>
            Blog
          </Text>
        </Box>

        <Wrap
          paddingTop='5'
          paddingBottom='14'
          paddingLeft={{ base: 0, md: 5 }}
          spacingX='12'
          spacingY='16'
          justify='left'
          w='95%'>
          <WrapItem>
            <BlogCard
              route='/blog/treasure-hunt'
              update='NEW'
              title='Treasure Hunt'
              description="I'm on a hunt."
              image="../images/blog_pictures/Treasure-Hunt/treasure-hunt.jpeg"
              alt='A picture of Dad and me'
            />
          </WrapItem>
          <WrapItem>
            <BlogCard
              route='/blog/my-sister'
              update='August 2022'
              title='My Sister'
              description="I don't tell very many people about my sister."
              image={"images/blog_pictures/My-Sister/my-sister.jpeg"}
              alt='A picture of me, my brother, and my sister'
            />
          </WrapItem>
          <WrapItem>
            <BlogCard
              route='/blog/growing-up'
              update='June 2022'
              title='Growing Up'
              description="Youth is fleeting."
              image={"images/blog_pictures/Growing-Up/growing-up.jpeg"}
              alt='A baby picture of James'
            />
          </WrapItem>
          <WrapItem>
            <BlogCard
              route='/blog/my-freshman-college-story'
              update='May 2022'
              title='My Freshman College Story'
              description="It's been a hell of a year."
              image={"images/blog_pictures/My-Freshman-College-Story/freshman-story.jpeg"}
              alt='A picture of dum moment'
            />
          </WrapItem>
          <WrapItem></WrapItem>

        </Wrap>
      </VStack>

    </div>
  )
}

export default Blog

// some sort of sorting feature