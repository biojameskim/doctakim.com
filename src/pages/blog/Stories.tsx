import { useEffect } from "react";
import { Grid } from "@chakra-ui/react"
import BlogCard from "../../components/blog/BlogCard"

import { story_data } from "../../data/blog_data";

const Stories = () => {

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
        {story_data.map((item, index) =>
          <BlogCard
            key={index}
            route={item.route}
            release={item.release}
            title={item.title}
            description={item.description}
            image={item.image}
            alt={item.alt}
          />
        )}
      </Grid>
    </div >
  )
}

export default Stories