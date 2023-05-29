import { Grid } from "@chakra-ui/react"
import BlogCard from "../../components/blog/BlogCard"
import { useEffect } from "react";

import { thoughts_data } from "../../data/blog_data";

const Thoughts = () => {
  // Makes an array from [0, ..., N-1] where N is how many thoughts data we have
  const numbers = Array.from(Array(thoughts_data.length).keys());

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
            route={thoughts_data[n].route}
            release={thoughts_data[n].release}
            title={thoughts_data[n].title}
            description={thoughts_data[n].description}
            image={thoughts_data[n].image}
            alt={thoughts_data[n].alt}
          />
        )}
      </Grid>
    </div>
  )
}

export default Thoughts