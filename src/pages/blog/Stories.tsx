import { Fragment, useEffect } from "react";
import { Divider, Grid } from "@chakra-ui/react"
import BlogCard from "../../components/blog/BlogCard"

import { story_data } from "../../data/blog_data";

const Stories = ({ compact = false }: { compact?: boolean }) => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <Grid
        templateColumns={compact ? '1fr' : { md: 'repeat(3, 1fr)' }}
        w='100%'
        maxW={compact ? { base: '100%', md: '700px' } : '100%'}
        mx='auto'
        gap={compact ? '3' : { base: '4', md: '12' }}
        textAlign={'left'}
        alignItems={'stretch'}
      >
        {story_data.map((item, index) => {
          // A rule closes off the pinned entry from the rest in the compact list.
          const next = story_data[index + 1];
          const endsPinnedRun = item.pin && next && !next.pin;

          return (
            <Fragment key={index}>
              <BlogCard
                route={item.route}
                release={item.release}
                title={item.title}
                description={item.description}
                image={item.image}
                alt={item.alt}
                pin={item.pin}
                compact={compact}
              />
              {compact && endsPinnedRun && (
                <Divider my='1' />
              )}
            </Fragment>
          );
        })}
      </Grid>
    </div >
  )
}

export default Stories
