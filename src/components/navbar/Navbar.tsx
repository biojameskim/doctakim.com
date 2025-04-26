import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  useColorMode,
  Show,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link as LinkRouter } from "react-router-dom";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box className="navbar">
      <Flex
        bg={useColorModeValue("gray.100", "gray.900")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 3 }}
        px={{ base: 4 }}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <MobileNav />
        </Flex>

        <Flex
          flex={{ base: 1 }}
          alignItems="center"
          justify={{ base: "center", md: "start" }}
        >
          <LinkRouter to="/about">
            <Box
              as={Button}
              className="navbar-james"
              _hover={{
                bg: "none",
                textShadow: "#FC0 0px 0px 10px",
              }}
              backgroundColor={useColorModeValue("gray.100", "gray.900")}
              justify={"flex-start"}
              fontSize="2.1rem"
              fontWeight="bold"
            >
              James Kim
            </Box>
          </LinkRouter>
          <Show below="md">
            <Button
              onClick={toggleColorMode}
              backgroundColor={useColorModeValue("gray.100", "gray.900")}
            >
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Show>

          <Flex justify={"flex-end"} display={{ base: "none", md: "flex" }}>
            <DesktopNav />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
