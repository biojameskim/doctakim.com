import {
  Box,
  Flex,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link as LinkRouter } from "react-router-dom";
import { AiOutlineHome, AiOutlineCamera } from "react-icons/ai";

import SocialButton from "../SocialButton";

export default function NavBar() {
  // Kept opaque on purpose: Safari 26+ samples the background-color of a sticky
  // element near the top of the viewport to tint its toolbar, and a translucent
  // one leaves the resulting color up to Safari. See index.css.
  const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.600", "white");

  return (
    <Box className="navbar">
      <Flex
        bg={bgColor}
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
          <Flex alignItems="center" gap={2}>
            <LinkRouter to="/blog">
              <Button
                variant="ghost"
                fontSize="1.1rem"
                fontWeight="normal"
                borderRadius="full"
                size="sm"
                px={3}
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
