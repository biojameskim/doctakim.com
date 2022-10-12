import { VStack, Text, Box, Wrap, WrapItem } from "@chakra-ui/react"
import BlogCard from "./BlogCard"
import FreshmanStory from "../images/blog/freshman-story.jpeg"
import GrowingUp from "../images/blog/growing-up.jpeg"
import MySister from "../images/blog/my-sister.jpeg"
import TreasureHunt from "../images/blog/treasure-hunt.jpeg"
import { Helmet } from 'react-helmet';

const Blog = () => {
  return (
    <div>
      <Helmet>
        <title>doctakim | Blog</title>
      </Helmet>

      <VStack>

        <Box>
          <Text align='center' fontSize='4rem' fontWeight={'medium'} pt={'6vh'} pb='3vh'>
            Blog
          </Text>
        </Box>

        <Wrap
          paddingTop='5'
          paddingBottom='14'
          paddingLeft='5'
          spacingX='12'
          spacingY='16'
          justify='left'
          w='95%'>
          {/* <WrapItem>
            <BlogCard
              website='https://bit.ly/'
              update='NEW'
              title='Treasure Hunt'
              description="I'm on a hunt."
              image={TreasureHunt}
              alt='A picture of Dad and me'
            />
          </WrapItem> */}
          <WrapItem>
            <BlogCard
              website='https://bit.ly/3buvKw4'
              update='August 2022'
              title='My Sister'
              description="I don't tell very many people about my sister."
              image={MySister}
              alt='A picture of me, my brother, and my sister'
            />
          </WrapItem>
          <WrapItem>
            <BlogCard
              website='https://bit.ly/39TohFR'
              update='June 2022'
              title='Growing Up'
              description="Youth is fleeting."
              image={GrowingUp}
              alt='A baby picture of James'
            />
          </WrapItem>
          <WrapItem>
            <BlogCard
              website='https://bit.ly/3LRmzBX'
              update='May 2022'
              title='My Freshman College Story'
              description="It's been a hell of a year."
              image={FreshmanStory}
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