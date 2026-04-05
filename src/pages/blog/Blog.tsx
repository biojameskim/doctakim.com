import { Box, Tabs, TabList, Tab, TabPanels, TabPanel, useColorModeValue, Heading } from "@chakra-ui/react"
import { Helmet } from 'react-helmet';
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Stories from "./Stories";
import Thoughts from "./Thoughts";
import Fiction from "./Fiction";

const Blog = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const tabIndex = location.pathname.includes('/blog/thoughts') ? 1 : location.pathname.includes('/blog/fiction') ? 2 : 0;

  const handleTabsChange = (index: number) => {
    if (index === 0) {
      navigate('/blog/stories');
    } else if (index === 1) {
      navigate('/blog/thoughts');
    } else {
      navigate('/blog/fiction');
    }
  };

  return (
    <div>
      <Helmet>
        <title>biojameskim | Blog</title>
      </Helmet>

      <Box maxW={{ base: '100%', md: '90%', lg: '85%' }} mx='auto'>
        <Heading textAlign='center' fontSize={{ base: '2.2rem', md: '2.6rem' }} fontWeight={'medium'} pt={'8vh'} pb={{ base: '2vh', md: '4vh' }} >
          Blog
        </Heading>
        <Tabs index={tabIndex} onChange={handleTabsChange} orientation='horizontal' variant='soft-rounded' colorScheme='green' align='center'>
          <TabList paddingBottom='5vh' gap={{ base: '0.2rem', md: '0.5rem' }}>
            <Tab fontWeight={'normal'} fontSize={{ base: '0.9rem', md: '1rem' }} color={useColorModeValue('gray.600', 'white')} _active={{ bg: 'transparent' }} css={{ WebkitTapHighlightColor: "transparent", touchAction: "manipulation" }}>Stories</Tab>
            <Tab fontWeight={'normal'} fontSize={{ base: '0.9rem', md: '1rem' }} color={useColorModeValue('gray.600', 'white')} _active={{ bg: 'transparent' }} css={{ WebkitTapHighlightColor: "transparent", touchAction: "manipulation" }}>Thoughts</Tab>
            <Tab fontWeight={'normal'} fontSize={{ base: '0.9rem', md: '1rem' }} color={useColorModeValue('gray.600', 'white')} _active={{ bg: 'transparent' }} css={{ WebkitTapHighlightColor: "transparent", touchAction: "manipulation" }}>Fiction</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Stories />
            </TabPanel>
            <TabPanel>
              <Thoughts />
            </TabPanel>
            <TabPanel>
              <Fiction />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>

    </div>
  )
}

export default Blog

// some sort of sorting feature