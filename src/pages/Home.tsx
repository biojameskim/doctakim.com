import { FaSpotify } from "react-icons/fa";
import {
  Box,
  Text,
  VStack,
  HStack,
  useColorModeValue,
  Image,
  Heading,
  SimpleGrid,
  Icon,
  Divider,
  Link
} from "@chakra-ui/react";
import { Helmet } from "react-helmet-async";
import { Link as RouterLink } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { topSongs, topArtists } from "../data/top_songs_artists";
import SEO from "../components/SEO";
import NowPlaying from "../components/NowPlaying";

// Inline placeholder so broken cover art doesn't depend on an external service.
const FALLBACK_IMAGE = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50'%3E%3Crect width='50' height='50' fill='%23cccccc'/%3E%3C/svg%3E";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cardBg = useColorModeValue("gray.50", "gray.700");
  const hoverBg = useColorModeValue("gray.100", "gray.600");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div>
      <Helmet>
        <title>biojameskim | Home</title>
      </Helmet>
      <SEO title="biojameskim | Home" description="I'm James — currently based in Ithaca, studying at Cornell. Welcome to my corner of the internet." url="/home" />

      <Box
        w="100%"
        maxW="800px"
        mx="auto"
        px={{ base: 4, md: 0 }}
        pt={{ base: 20, md: 24 }}
        pb={{ base: 8, md: 16 }}
      >
        {/* Bio Section */}
        <VStack spacing="1.1rem" align="flex-start" pb={8}>
          <Heading fontWeight="medium" fontSize="1.7rem" pb={{ base: 4, md: 4 }}>
            I'm James.
          </Heading>
          <Text fontSize="0.9rem" fontWeight="normal">
            I'm currently based in Ithaca, where I've spent the past few years at Cornell.
            I maintain a more academic website <Link as="a" target="_blank" href="https://biojameskim.me" color="green.500">here</Link>.
          </Text>
          <Text fontSize="0.9rem" fontWeight="normal">
            I enjoy logging moments of my life through journaling and share some in my <Link as={RouterLink} to="/blog" color="green.500">Blog</Link>.
            I also enjoy writing rap music (though I'm not as confident in sharing those).
          </Text>
          <Text fontSize="0.9rem" fontWeight="normal">If you'd like to connect, feel free to shoot me an <Link as="a" href="mailto:biojamesjkim@gmail.com" color="green.500">email</Link>.</Text>
        </VStack>

        {/* Separator */}
        <Divider borderColor="gray.300" borderWidth="2px" my={8} mb={16} />

        {/* Spotify Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ paddingBottom: '4rem' }}
        >
          <VStack spacing={8} align="flex-start">
            <VStack spacing={2} align="flex-start">
              <HStack fontSize="1.5rem" fontWeight="semibold" spacing={3}>
                <Icon as={FaSpotify} color="#1DB954" boxSize={8} />
                <Text bgGradient="linear(to-r, #1DB954, #1ed760)" bgClip="text">
                  <Box as="span" display={{ base: "block", md: "inline" }} fontSize={{ base: "1.2rem", md: "1.4rem" }}>Recently...</Box>
                </Text>
              </HStack>
            </VStack>

            <NowPlaying />

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="full">
              {/* Top Songs Column */}
              <Box bg={cardBg} p={4} borderRadius="2xl" boxShadow="xl">
                <HStack mb={4} spacing={3}>
                  <Heading size="md" fontWeight="bold">Top Songs</Heading>
                </HStack>
                <VStack spacing={4} align="stretch">
                  {topSongs.map((song, index) => (
                    <motion.div key={index} variants={itemVariants} style={{ willChange: 'opacity, transform' }}>
                      <Link href={song.link} isExternal _hover={{ textDecoration: 'none' }}>
                        <HStack spacing={3} p={2} borderRadius="lg" _hover={{ bg: hoverBg }} transition="all 0.2s" cursor="pointer">
                          <Text fontWeight="bold" color="gray.400" w="16px" flexShrink={0} fontSize="sm">{index + 1}</Text>
                          <Image src={song.cover} alt={song.title} boxSize="40px" flexShrink={0} borderRadius="md" objectFit="cover" fallbackSrc={FALLBACK_IMAGE} />
                          <Box>
                            <Text fontWeight="medium" fontSize={{ base: "0.9rem", md: "0.8rem" }} noOfLines={1}>{song.title}</Text>
                            <Text fontWeight="normal" fontSize="0.7rem" color="gray.500" noOfLines={1}>{song.artist}</Text>
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
                    <motion.div key={index} variants={itemVariants} style={{ willChange: 'opacity, transform' }}>
                      <Link href={artist.link} isExternal _hover={{ textDecoration: 'none' }}>
                        <HStack spacing={3} p={2} borderRadius="lg" _hover={{ bg: hoverBg }} transition="all 0.2s" cursor="pointer">
                          <Text fontWeight="bold" color="gray.400" w="16px" flexShrink={0} fontSize="sm">{index + 1}</Text>
                          <Image src={artist.image} alt={artist.name} boxSize="40px" flexShrink={0} borderRadius="full" objectFit="cover" fallbackSrc={FALLBACK_IMAGE} />
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
    </div>
  );
};

export default Home;
