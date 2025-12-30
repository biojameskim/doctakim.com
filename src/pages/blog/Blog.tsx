import { Box, Tabs, TabList, Tab, TabPanels, TabPanel, useColorModeValue, Heading } from "@chakra-ui/react"
import { Helmet } from 'react-helmet';
import { useEffect } from "react";
import Stories from "./Stories";
import Thoughts from "./Thoughts";

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <Helmet>
        <title>biojameskim | Blog</title>
      </Helmet>

      <Box>
        <Heading textAlign='center' fontSize={{ base: '2.2rem', md: '2.6rem' }} fontWeight={'medium'} pt={'8vh'} pb={{ base: '2vh', md: '4vh' }} >
          Blog
        </Heading>
        <Tabs orientation='horizontal' variant='soft-rounded' colorScheme='green' align='center'>
          <TabList paddingBottom='5vh' gap={{ base: '0.2rem', md: '0.5rem' }}>
            <Tab fontWeight={'normal'} fontSize={{ base: '0.9rem', md: '1rem' }} color={useColorModeValue('gray.600', 'white')} >Stories</Tab>
            <Tab fontWeight={'normal'} fontSize={{ base: '0.9rem', md: '1rem' }} color={useColorModeValue('gray.600', 'white')}>Thoughts</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Stories />
            </TabPanel>
            <TabPanel>
              <Thoughts />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>

    </div>
  )
}

export default Blog

// some sort of sorting feature