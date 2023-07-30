import { Text, Box, Tabs, TabList, Tab, TabPanels, TabPanel, useColorModeValue } from "@chakra-ui/react"
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
        <Text className="page-title" align='center' fontSize='4rem' fontWeight={'medium'} pt={'6vh'} pb={{ base: '2vh', md: '4vh' }} >
          Blog
        </Text>
        <Tabs orientation='horizontal' variant='soft-rounded' colorScheme='green' align='center'>
          <TabList paddingBottom='5vh'>
            <Tab color={useColorModeValue('gray.600', 'white')} >Stories</Tab>
            <Tab color={useColorModeValue('gray.600', 'white')}>Thoughts</Tab>
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