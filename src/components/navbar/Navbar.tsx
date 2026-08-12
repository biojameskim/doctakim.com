import {
  Box,
  Flex,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link as LinkRouter, useLocation } from "react-router-dom";
import { AiOutlineHome, AiOutlineCamera } from "react-icons/ai";

import SocialButton from "../SocialButton";

export default function NavBar() {
  /* The start page is a single full-bleed image, so the bar drops its fill there and
     sits directly on the sky. Everywhere else it keeps the frosted panel. */
  const onStartPage = useLocation().pathname === "/";
  const panel = useColorModeValue("rgba(255, 255, 255, 0.8)", "rgba(26, 32, 44, 0.8)");
  const bgColor = onStartPage ? "transparent" : panel;
  const textColor = useColorModeValue("gray.600", "white");

  return (
    <Box className="navbar">
      <Flex
        bg={bgColor}
        backdropFilter={onStartPage ? "none" : "blur(10px)"}
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
          maxW="5xl"
          w="100%"
        >
          {/* Left Side: Logo & Home Icon */}
          <Flex alignItems="center" gap={2}>
            <LinkRouter to="/" style={{ WebkitTapHighlightColor: "transparent", display: "block" }}>
              <Box
                as="img"
                src="/favicon_io/apple-touch-icon.png"
                alt="Logo"
                borderRadius="full"
                boxSize="38px"
                _hover={{ cursor: "pointer", opacity: { base: 1, md: 0.8 } }}
                _active={{ opacity: 1 }}
                css={{ WebkitTapHighlightColor: "transparent", touchAction: "manipulation" }}
              />
            </LinkRouter>
            <LinkRouter to="/home" style={{ borderRadius: '50%', display: 'inline-flex', WebkitTapHighlightColor: "transparent" }}>
              <SocialButton label={"Home"}>
                <AiOutlineHome />
              </SocialButton>
            </LinkRouter>
          </Flex>

          {/* Right Side: Navigation */}
          <Flex alignItems="center" gap={1}>
            <LinkRouter to="/blog">
              <Button
                variant="ghost"
                fontSize="1.1rem"
                fontWeight="normal"
                borderRadius="full"
                size="sm"
                px={2}
                _hover={{ base: { bg: "transparent" }, md: {} }}
                _active={{ base: { bg: "transparent" }, md: {} }}
                css={{ WebkitTapHighlightColor: "transparent", touchAction: "manipulation" }}
              >
                Blog
              </Button>
            </LinkRouter>

            <LinkRouter to="/gallery" style={{ borderRadius: '50%', display: 'inline-flex', WebkitTapHighlightColor: "transparent" }}>
              <SocialButton label={"Gallery"}>
                <AiOutlineCamera />
              </SocialButton>
            </LinkRouter>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
