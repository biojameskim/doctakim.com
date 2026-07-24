import { Fragment, useEffect } from "react";
import { Divider, Grid } from "@chakra-ui/react"
import BlogCard from "../../components/blog/BlogCard"

import { fiction_data } from "../../data/blog_data";

const Fiction = ({ compact = false }: { compact?: boolean }) => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <Grid
        templateColumns={{ md: 'repeat(3, 1fr)' }}
        w='100%'
        gap={{ base: compact ? '3' : '4', md: '12' }}
        textAlign={'left'}
        alignItems={'stretch'}
      >
        {fiction_data.map((item, index) => {
          // A rule closes off the pinned entry from the rest. Compact mobile view only —
          // the desktop grid puts the cards in columns, where a full-width rule makes no sense.
          const next = fiction_data[index + 1];
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
                <Divider display={{ base: 'block', md: 'none' }} my='1' />
              )}
            </Fragment>
          );
        })}
      </Grid>
    </div >
  )
}

export default Fiction
