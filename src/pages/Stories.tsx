import { Grid } from "@chakra-ui/react"
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
      <Grid
        templateColumns={{ md: 'repeat(3, 1fr)' }}
        w={{ base: 'full', md: '90%' }}
        gap={{ base: '4', md: '12' }}
        textAlign={'left'}
      >
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
      </Grid>
    </div >
  )
}

export default Stories