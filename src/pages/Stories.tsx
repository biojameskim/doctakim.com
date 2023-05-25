import { Flex, Stack } from "@chakra-ui/react"
import BlogCard from "../components/BlogCard"
import { useEffect } from "react";

import { story_data } from "../data/blog_data";

const Stories = () => {
  // Makes an array from [0, ..., N-1] where N is how many story data we have
  const numbers = Array.from(Array(story_data.length).keys());

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <Stack textAlign={'left'}>
        <Flex wrap="wrap" gap={{ '2xl': '3rem' }}>
          {numbers.map(n =>
            <BlogCard
              key={n}
              route={story_data[n].route}
              release={story_data[n].release}
              title={story_data[n].title}
              description={story_data[n].description}
              image={story_data[n].image}
              alt={story_data[n].alt}
            />
          )}
        </Flex>
      </Stack>
    </div >
  )
}

export default Stories