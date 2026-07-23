import {
  Box,
  HStack,
  Image,
  Link,
  Skeleton,
  Text,
  useColorModeValue,
  usePrefersReducedMotion,
} from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";

type NowPlayingData =
  | { isPlaying: false }
  | {
      isPlaying: true;
      title: string;
      artist: string;
      album: string;
      image: string;
      link: string;
    };

const POLL_INTERVAL_MS = 30_000;

const NowPlaying = () => {
  const [playback, setPlayback] = useState<NowPlayingData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const cardBg = useColorModeValue("gray.50", "gray.700");
  const cardHoverBg = useColorModeValue("gray.100", "gray.600");
  const mutedColor = useColorModeValue("gray.500", "gray.400");
  const prefersReducedMotion = usePrefersReducedMotion();

  const refreshPlayback = useCallback(async () => {
    try {
      const response = await fetch("/.netlify/functions/now-playing", {
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        throw new Error(`Now playing request failed (${response.status})`);
      }

      setPlayback((await response.json()) as NowPlayingData);
    } catch {
      // The weekly music lists still work if Spotify or the function is unavailable.
      setPlayback(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    refreshPlayback();
    const interval = window.setInterval(() => {
      if (document.visibilityState === "visible") {
        refreshPlayback();
      }
    }, POLL_INTERVAL_MS);

    const refreshWhenVisible = () => {
      if (document.visibilityState === "visible") {
        refreshPlayback();
      }
    };

    document.addEventListener("visibilitychange", refreshWhenVisible);
    return () => {
      window.clearInterval(interval);
      document.removeEventListener("visibilitychange", refreshWhenVisible);
    };
  }, [refreshPlayback]);

  if (isLoading) {
    return <Skeleton w="full" h="88px" borderRadius="2xl" />;
  }

  if (!playback?.isPlaying) {
    return null;
  }

  return (
    <Link
      href={playback.link}
      isExternal
      w="full"
      _hover={{ textDecoration: "none" }}
      aria-label={`Open ${playback.title} by ${playback.artist} on Spotify`}
    >
      <HStack
        bg={cardBg}
        p={3}
        pr={{ base: 4, md: 5 }}
        spacing={4}
        borderRadius="2xl"
        boxShadow="xl"
        transition="background 0.2s ease, transform 0.2s ease"
        _hover={{ bg: cardHoverBg, transform: "translateY(-1px)" }}
      >
        <Image
          src={playback.image}
          alt={`${playback.album} cover`}
          boxSize={{ base: "64px", md: "68px" }}
          flexShrink={0}
          borderRadius="xl"
          objectFit="cover"
        />

        <Box minW={0} flex={1}>
          <HStack spacing={2} mb={1}>
            <Box
              w="7px"
              h="7px"
              flexShrink={0}
              borderRadius="full"
              bg="#1DB954"
              boxShadow="0 0 0 4px rgba(29, 185, 84, 0.14)"
            />
            <Text
              color="#1DB954"
              fontSize="0.67rem"
              fontWeight="bold"
              letterSpacing="0.08em"
              textTransform="uppercase"
            >
              Now playing
            </Text>
          </HStack>
          <Text fontSize={{ base: "0.95rem", md: "1rem" }} fontWeight="semibold" noOfLines={1}>
            {playback.title}
          </Text>
          <Text color={mutedColor} fontSize="0.75rem" noOfLines={1}>
            {playback.artist}
          </Text>
        </Box>

        <HStack spacing="3px" align="flex-end" h="18px" aria-hidden="true">
          {[10, 17, 13].map((height, index) => (
            <Box
              key={height}
              w="3px"
              h={`${height}px`}
              bg="#1DB954"
              borderRadius="full"
              animation={
                prefersReducedMotion
                  ? undefined
                  : `now-playing-bar 0.9s ease-in-out ${index * 0.15}s infinite alternate`
              }
              sx={{
                "@keyframes now-playing-bar": {
                  from: { transform: "scaleY(0.35)" },
                  to: { transform: "scaleY(1)" },
                },
              }}
            />
          ))}
        </HStack>
      </HStack>
    </Link>
  );
};

export default NowPlaying;
