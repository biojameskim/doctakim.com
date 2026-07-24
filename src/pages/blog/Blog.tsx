import { Box, Button, Tabs, TabList, Tab, TabPanels, TabPanel, useColorModeValue, Heading } from "@chakra-ui/react"
import { Helmet } from 'react-helmet-async';
import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Stories from "./Stories";
import Thoughts from "./Thoughts";
import Fiction from "./Fiction";
import SEO from "../../components/SEO";

const Blog = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [compact, setCompact] = useState(false);

  // The compact toggle rides the scroll: it shows while you're moving and slips away
  // once you've settled on something to read. TOGGLE_LINGER_MS is how long it waits.
  const TOGGLE_LINGER_MS = 2000;
  const [toggleVisible, setToggleVisible] = useState(true);
  const hideTimer = useRef<ReturnType<typeof setTimeout>>();

  const revealToggle = useCallback(() => {
    setToggleVisible(true);
    if (hideTimer.current) clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => setToggleVisible(false), TOGGLE_LINGER_MS);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    // Visible on arrival so it's discoverable, then it fades on its own.
    revealToggle();
    window.addEventListener('scroll', revealToggle, { passive: true });
    return () => {
      window.removeEventListener('scroll', revealToggle);
      if (hideTimer.current) clearTimeout(hideTimer.current);
    };
  }, [revealToggle])

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
      <SEO title="biojameskim | Blog" description="Stories, thoughts, and fiction from James Kim." url="/blog" />

      {/* pb is the breathing room between the last card and the footer. Only needed on
          mobile — from md up the cards carry their own 3rem bottom margin. */}
      <Box maxW={{ base: '100%', md: '90%', lg: '85%' }} mx='auto' pb={{ base: '6vh', md: 0 }}>
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
              <Stories compact={compact} />
            </TabPanel>
            <TabPanel>
              <Thoughts compact={compact} />
            </TabPanel>
            <TabPanel>
              <Fiction compact={compact} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>

      {/* Compact toggle — mobile only. Fixed rather than inline so it stays reachable
          once you've scrolled into the list, which is the point of the compact view. */}
      <Box
        display={{ base: 'block', md: 'none' }}
        position='fixed'
        right='4'
        bottom='calc(1rem + env(safe-area-inset-bottom))'
        zIndex='docked'
        opacity={toggleVisible ? 1 : 0}
        transform={toggleVisible ? 'translateY(0)' : 'translateY(0.5rem)'}
        pointerEvents={toggleVisible ? 'auto' : 'none'}
        transition='opacity 200ms ease, transform 200ms ease'
      >
        <Button
          size='xs'
          h='7'
          px='3'
          rounded='full'
          fontWeight='normal'
          fontSize='0.72rem'
          letterSpacing='0.05em'
          color={useColorModeValue('teal.600', 'teal.300')}
          bg={useColorModeValue('rgba(255, 255, 255, 0.92)', 'rgba(26, 32, 44, 0.92)')}
          _hover={{ bg: useColorModeValue('white', 'gray.800') }}
          _active={{ bg: useColorModeValue('white', 'gray.800') }}
          backdropFilter='blur(8px)'
          borderWidth='1px'
          borderColor={useColorModeValue('gray.200', 'gray.600')}
          shadow='md'
          onClick={() => {
            setCompact((current) => !current);
            revealToggle();
          }}
          aria-pressed={compact}
          css={{ WebkitTapHighlightColor: 'transparent', touchAction: 'manipulation' }}
        >
          {compact ? 'Photo' : 'Compact'}
        </Button>
      </Box>

    </div>
  )
}

export default Blog

// some sort of sorting feature
