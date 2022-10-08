import { Link } from "react-router-dom"
import { Stack, Box, Button, Text, VStack, useColorModeValue, Flex } from "@chakra-ui/react"
import Carousel from "./Carousel"
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <div>
      <Helmet>
        <title>doctakim | About</title>
      </Helmet>
      <VStack>
        <Text fontSize='4rem' fontWeight={'medium'} pt={'6vh'} pb={'1vh'} >
          About
        </Text>
        <Flex alignItems={'center'} w={{ base: '100%', md: '90%' }} direction={{ base: 'column', md: 'row' }}>
          <Box w={{ base: '90%', md: '45%' }} p='5' bg={useColorModeValue('gray.100', 'gray.900')} borderRadius={'3xl'}>
            <Carousel />
          </Box>

          <Box as={Stack} w={{ base: '90%', md: '52%' }} spacing='1.5rem' p={{ base: '0', md: '5' }} pt={{ base: '7' }}>
            <Text fontSize='2.3rem'>Hello! 👋 </Text>
            <Text fontSize='1.65rem'>
              I'm currently a student at Cornell University studying Computer Science with an intended minor in Digital Culture and Production.
            </Text>
            <Text fontSize='1.65rem'>
              Outside of CS, I am an avid listener of Korean rap and hiphop music and love to play tennis.
            </Text>
            <Text fontSize='1.65rem'>
              I'm open to any opportunities to learn more about software development and computer science in general!
            </Text>
            <Text className="about-section" fontSize='1.65rem'>
              Please feel free to reach out!
            </Text>
            <Link to="/connect" className="about-section">
              <Button fontSize='1.65rem' size='lg'>Connect</Button>
            </Link>
          </Box>
        </Flex>
        <Box pb='6vh'></Box>
      </VStack>
    </div>
  )
}

export default About

// embed playlist?