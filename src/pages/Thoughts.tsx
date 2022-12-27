import { Flex, Stack } from "@chakra-ui/react"
import BlogCard from "../components/BlogCard"
import { useEffect } from "react";

const Thoughts = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <Stack textAlign={'left'}>
        <Flex wrap="wrap">
          <BlogCard
            route='/blog/dear-mrs-lupsaiu'
            update='December 2022'
            title='Dear Mrs. Lupsaiu'
            description="I wish there was more time."
            image="../images/blog_pictures/Dear-Mrs-Lupsaiu/lupsaiu cover.jpg"
            alt='A picture of Mrs.Lupsaiu and me'
          />

        </Flex>
      </Stack>
    </div>
  )
}

export default Thoughts