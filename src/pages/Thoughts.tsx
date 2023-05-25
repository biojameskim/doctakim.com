import { Flex, Stack } from "@chakra-ui/react"
import BlogCard from "../components/BlogCard"
import { useEffect } from "react";

import thoughts_data from "../data/thoughts_data";

const Thoughts = () => {
  // Makes an array from [0, ..., N-1] where N is how many thoughts data we have
  const numbers = Array.from(Array(thoughts_data.length).keys());

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <Stack textAlign={'left'}>
        <Flex wrap="wrap">
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
        </Flex>
      </Stack>
    </div>
  )
}

export default Thoughts