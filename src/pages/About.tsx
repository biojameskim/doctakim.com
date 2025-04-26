// import { FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import {
  Stack,
  Box,
  Button,
  Text,
  VStack,
  Center,
  HStack,
  useColorModeValue,
  Flex,
  Image,
  Heading
} from "@chakra-ui/react";
// import Carousel from "../components/AboutCarousel";
import { Helmet } from "react-helmet";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Helmet>
        <title>biojameskim | About</title>
      </Helmet>

      <Center>
        <Heading textAlign='center' fontSize='4.4rem' fontWeight={'medium'} pt={'8vh'} pb={{ base: '2vh', md: '4vh' }} >
          About Me
        </Heading>
      </Center>

      <Flex
        w={{ base: "100%", md: "80%" }}
        direction={{ base: "column", md: "row" }}
        align="start"
        justify="center"
        px="4"
        pb="4"
      >
        <VStack align={"center"} maxW={"md"} w={"full"}>
          <Box
            className="connect-image"
            p="0.75rem"
            shadow="md"
            borderRadius="50%"
            bg={useColorModeValue("gray.100", "gray.700")}
          >
            <Image
              borderRadius="50%"
              objectFit="contain"
              width="190px"
              src={"images/pictures/connect_2.jpg"}
              alt="James Kim"
            />
          </Box>

          <HStack spacing={3} align={"center"} maxW={"md"} pt="6">
            <VStack spacing={"0.7rem"} align={"center"} maxW={"md"} pl="6">
              <Button
                size="sm"
                colorScheme="teal"
                as="a"
                href={"https://biojameskim.github.io/"}
                target={"_blank"}
              >
                <CgWebsite />
              </Button>
              <Button
                size="sm"
                colorScheme="telegram"
                as="a"
                href={"mailto:biojameskim2002@gmail.com"}
              >
                <FiMail />
              </Button>
              {/* <Button
                size="sm"
                colorScheme="linkedin"
                as="a"
                href={"https://www.linkedin.com/in/biojameskim/"}
                target={"_blank"}
              >
                <FaLinkedin />
              </Button> */}
            </VStack>

            <VStack spacing={"1.4rem"} align={"left"} maxW={"md"} w={"full"}>
              <Text fontSize="0.9rem">Portfolio</Text>
              <Text fontSize="0.9rem">Email</Text>
              {/* <Text fontSize="0.9rem">James Kim</Text> */}
            </VStack>
          </HStack>
        </VStack>

        <Box
          as={Stack}
          w={{ base: "90%", md: "100%" }}
          spacing="1.1rem"
          p={{ base: "3", md: "0" }}
          mt="10"
        >
          <Heading fontWeight="normal" fontSize="2.3rem" pb="">
            Hi, I'm James
          </Heading>
          <Text fontSize="1.1rem">
            I'm a student at Cornell studying Computer Science and Math.
          </Text>
          <Text fontSize="1.1rem">
            I listen to a lot of Korean rap & hiphop music and love to play tennis.
          </Text>
          <Text fontSize="1.1rem">Feel free to reach out to me! ☕️</Text>
        </Box>
      </Flex>
    </div>
  );
};

export default About;

// embed playlist?
