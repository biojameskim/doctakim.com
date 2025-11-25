import { FaLinkedin, FaSpotify } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import {
  Box,
  Button,
  Text,
  VStack,
  HStack,
  useColorModeValue,
  Flex,
  Image,
  Heading,
  SimpleGrid,
  Icon,
  Divider,
  Stack,
  Link
} from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { topSongs, topArtists } from "../data/top_songs_artists";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Get previous month name
  const getPreviousMonth = () => {
    const now = new Date();
    const previousMonth = new Date(now.getFullYear(), now.getMonth() - 1);
    return previousMonth.toLocaleString('en-US', { month: 'long', year: 'numeric' });
  };

  const cardBg = useColorModeValue("gray.50", "gray.700");
  const hoverBg = useColorModeValue("gray.100", "gray.600");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div>
      <Helmet>
        <title>biojameskim | Home</title>
      </Helmet>

      <Flex
        w={{ base: "100%", md: "80%" }}
        minH="80vh"
        direction={{ base: "column", md: "row" }}
        align={{ base: "center", md: "flex-start" }}
        justify="center"
        px="4"
        pt={{ base: "8", md: "36" }}
        pb="4"
        ml={{ base: 0, md: 10 }}
      >
        {/* Fixed Profile Section */}
        <Flex
          direction="column"
          align="center"
          maxW={"md"}
          w={"full"}
          position={{ base: "relative", md: "sticky" }}
          top={{ base: "0", md: "20" }}
          alignSelf="flex-start"
          gap={4}
        >
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
              width={{ base: "180px", md: "190px" }}
              src={"images/pictures/connect_2.jpg"}
              alt="James Kim"
            />
          </Box>

          <HStack spacing={3} align={"center"} maxW={"md"} pt={{ base: 4, md: 6 }}>
            <Stack direction={{ base: "row", md: "column" }} spacing={"0.7rem"} align={"center"} maxW={"md"} pl={{ base: 0, md: 6 }}>
              <Button
                size="sm"
                colorScheme="teal"
                as="a"
                href={"https://biojameskim.me/"}
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
              <Button
                size="sm"
                colorScheme="linkedin"
                as="a"
                href={"https://www.linkedin.com/in/biojameskim/"}
                target={"_blank"}
              >
                <FaLinkedin />
              </Button>
            </Stack>

            <VStack spacing={"1.4rem"} align={"left"} maxW={"md"} w={"full"} display={{ base: "none", md: "flex" }}>
              <Text fontSize="0.9rem">Portfolio</Text>
              <Text fontSize="0.9rem">Email</Text>
              <Text fontSize="0.9rem">LinkedIn</Text>
            </VStack>
          </HStack>
        </Flex>

        {/* Scrollable Content Section */}
        <Box
          w={{ base: "90%", md: "calc(100% - 2rem)" }}
          pl={{ base: 0, md: 8 }}
          pt={{ base: 8, md: 0 }}
          maxH={{ base: "none", md: "calc(100vh - 200px)" }}
          overflowY={{ base: "visible", md: "auto" }}
          overflowX="hidden"
          pr={{ base: 0, md: 4 }}
          css={{
            '&::-webkit-scrollbar': {
              display: 'none',
            },
            '-ms-overflow-style': 'none',
            'scrollbarWidth': 'none',
          }}
        >
          {/* Bio Section */}
          <VStack spacing="1.1rem" align="flex-start" pb={8}>
            <Heading fontWeight="bold" fontSize="2.0rem">
              Hi, I'm James!
            </Heading>
            <Text fontSize="1.0rem" fontWeight="medium">
              I'm a MS student at Cornell studying Computer Science. I also did my undergrad at Cornell, where I majored in CS and Math.
            </Text>
            <Text fontSize="1.0rem" fontWeight="medium">
              In my free time, I'm an avid listener of Korean rap & hiphop music
              and love to play tennis.
            </Text>
            <Text fontSize="1.0rem" fontWeight="medium">Feel free to reach out! ☕️</Text>
          </VStack>

          {/* Separator */}
          <Divider borderColor="gray.300" borderWidth="2px" my={8} mb={16} />

          {/* Spotify Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ paddingBottom: '10rem' }}
          >
            <VStack spacing={8} align="flex-start">
              <VStack spacing={2} align="flex-start">
                <HStack fontSize="1.5rem" fontWeight="bold" spacing={3}>
                  <Icon as={FaSpotify} color="#1DB954" boxSize={8} />
                  <Text bgGradient="linear(to-r, #1DB954, #1ed760)" bgClip="text">Top Streams ({getPreviousMonth()})</Text>
                </HStack>
              </VStack>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="full">
                {/* Top Songs Column */}
                <Box bg={cardBg} p={4} borderRadius="2xl" boxShadow="xl">
                  <HStack mb={4} spacing={3}>
                    <Heading size="md">Top Songs</Heading>
                  </HStack>
                  <VStack spacing={4} align="stretch">
                    {topSongs.map((song, index) => (
                      <motion.div key={index} variants={itemVariants}>
                        <Link href={song.link} isExternal _hover={{ textDecoration: 'none' }}>
                          <HStack spacing={3} p={2} borderRadius="lg" _hover={{ bg: hoverBg }} transition="all 0.2s" cursor="pointer">
                            <Text fontWeight="bold" color="gray.400" w="16px" fontSize="sm">{index + 1}</Text>
                            <Image src={song.cover} alt={song.title} boxSize="40px" borderRadius="md" objectFit="cover" fallbackSrc="https://via.placeholder.com/50" />
                            <Box>
                              <Text fontWeight="semibold" fontSize="sm" noOfLines={1}>{song.title}</Text>
                              <Text fontSize="xs" color="gray.500" noOfLines={1}>{song.artist}</Text>
                            </Box>
                          </HStack>
                        </Link>
                      </motion.div>
                    ))}
                  </VStack>
                </Box>

                {/* Top Artists Column */}
                <Box bg={cardBg} p={4} borderRadius="2xl" boxShadow="xl">
                  <HStack mb={4} spacing={3}>
                    <Heading size="md">Top Artists</Heading>
                  </HStack>
                  <VStack spacing={4} align="stretch">
                    {topArtists.map((artist, index) => (
                      <motion.div key={index} variants={itemVariants}>
                        <Link href={artist.link} isExternal _hover={{ textDecoration: 'none' }}>
                          <HStack spacing={3} p={2} borderRadius="lg" _hover={{ bg: hoverBg }} transition="all 0.2s" cursor="pointer">
                            <Text fontWeight="bold" color="gray.400" w="16px" fontSize="sm">{index + 1}</Text>
                            <Image src={artist.image} alt={artist.name} boxSize="40px" borderRadius="full" objectFit="cover" fallbackSrc="https://via.placeholder.com/50" />
                            <Text fontWeight="semibold" fontSize="sm">{artist.name}</Text>
                          </HStack>
                        </Link>
                      </motion.div>
                    ))}
                  </VStack>
                </Box>
              </SimpleGrid>
            </VStack>
          </motion.div>
        </Box>
      </Flex>
    </div>
  );
};

export default Home;
