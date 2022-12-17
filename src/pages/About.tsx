import { Link } from "react-router-dom"
import { Stack, Box, Button, Text, VStack, useColorModeValue, Flex } from "@chakra-ui/react"
import Carousel from "../components/Carousel"
import { Helmet } from 'react-helmet';
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <Helmet>
        <title>doctakim | About</title>
      </Helmet>
      <VStack>
        <Text className="page-title" fontSize='4rem' fontWeight={'medium'} pt={'6vh'} pb={{ base: '2vh', md: '4vh' }} >
          About
        </Text>
        <Flex alignItems={'center'} w={{ base: '100%', md: '90%' }} direction={{ base: 'column', md: 'row' }}>
          <Box w={{ base: '90%', md: '45%' }} p='5' bg={useColorModeValue('gray.100', 'gray.900')} borderRadius={'3xl'}>
            <Carousel />
          </Box>

          <Box as={Stack} w={{ base: '90%', md: '46%' }} spacing='1.5rem' p={{ base: '3', md: '0' }} pt={{ base: '7' }}>
            <Text fontSize='1.65rem'>Hello! 👋 </Text>
            <Text fontSize='1.2rem'>
              I'm currently a student at Cornell University studying Computer Science with an intended minor in Digital Culture and Production.
            </Text>
            <Text fontSize='1.2rem'>
              Outside of CS, I am an avid listener of Korean rap and hiphop music and love to play tennis.
            </Text>
            <Text fontSize='1.2rem'>
              I'm open to any opportunities to learn more about software development and computer science in general!
            </Text>
            <VStack pt="1rem" spacing="1.5rem">
              <Text className="about-section" fontSize='1.2rem'>
                Please feel free to reach out!
              </Text>
              <Link to="/connect" className="about-section">
                <Button className="custom-font-button" fontSize='1.65rem' size='lg'>Connect</Button>
              </Link>
            </VStack>
          </Box>
        </Flex>
        <Box pb='6vh'></Box>
      </VStack>
    </div>
  )
}

export default About

// embed playlist?