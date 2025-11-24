import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link as LinkRouter } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";

import SocialButton from "../SocialButton";

export default function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();

  const bgColor = useColorModeValue("rgba(255, 255, 255, 0.8)", "rgba(26, 32, 44, 0.8)");
  const textColor = useColorModeValue("gray.600", "white");

  return (
    <Box className="navbar">
      <Flex
        bg={bgColor}
        backdropFilter="blur(10px)"
        color={textColor}
        minH={"60px"}
        py={{ base: 3 }}
        px={{ base: 4 }}
        align={"center"}
        position="sticky"
        top={4}
        mt={4}
        zIndex={999}
        justify="center"
      >
        <Flex
          flex={{ base: 1 }}
          alignItems="center"
          justify="space-between"
          maxW="7xl"
          w="100%"
        >
          {/* Left Side: Logo & Home Icon */}
          <Flex alignItems="center" gap={2}>
            <LinkRouter to="/">
              <Box
                as="img"
                src="/favicon_io/apple-touch-icon.png"
                alt="Logo"
                borderRadius="full"
                boxSize="38px"
                _hover={{ cursor: "pointer", opacity: 0.8 }}
              />
            </LinkRouter>
            <LinkRouter to="/home">
              <SocialButton label={"Home"}>
                <AiOutlineHome />
              </SocialButton>
            </LinkRouter>
          </Flex>

          {/* Right Side: Navigation & Theme Toggle */}
          <Flex alignItems="center" gap={4}>
            <LinkRouter to="/blog">
              <Button variant="ghost" fontSize="1.2rem" fontWeight="medium" borderRadius="full" size="sm" px={3}>
                Blog
              </Button>
            </LinkRouter>

            <Button
              onClick={toggleColorMode}
              variant="ghost"
              size="sm"
              fontSize="1.2rem"
              borderRadius="full"
            >
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
