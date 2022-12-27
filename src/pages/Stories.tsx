import { Flex, Stack } from "@chakra-ui/react"
import BlogCard from "../components/BlogCard"
import { Helmet } from 'react-helmet';
import { useEffect } from "react";

const Stories = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <Helmet>
        <title>doctakim | Stories</title>
      </Helmet>

      <Stack textAlign={'left'}>
        <Flex wrap="wrap">

          <BlogCard
            route='/blog/treasure-hunt'
            update='NEW'
            title='Treasure Hunt'
            description="I'm on a hunt."
            image="../images/blog_pictures/Treasure-Hunt/treasure-hunt.jpeg"
            alt='A picture of Dad and me'
          />
          <BlogCard
            route='/blog/my-sister'
            update='August 2022'
            title='My Sister'
            description="I don't tell very many people about my sister."
            image={"images/blog_pictures/My-Sister/my-sister.jpeg"}
            alt='A picture of me, my brother, and my sister'
          />
          <BlogCard
            route='/blog/growing-up'
            update='June 2022'
            title='Growing Up'
            description="Youth is fleeting."
            image={"images/blog_pictures/Growing-Up/growing-up.jpeg"}
            alt='A baby picture of James'
          />
          <BlogCard
            route='/blog/my-freshman-college-story'
            update='May 2022'
            title='My Freshman College Story'
            description="It's been a hell of a year."
            image={"images/blog_pictures/My-Freshman-College-Story/freshman-story.jpeg"}
            alt='A picture of dum moment'
          />
        </Flex>
      </Stack>
    </div>
  )
}

export default Stories