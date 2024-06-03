import {
  Box,
  Flex,
  Button,
  Stack,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link as LinkRouter } from "react-router-dom";

const DesktopNav = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex alignItems={"center"}>
      <Stack direction={"row"} spacing={4}>
        <LinkRouter to="/about">
          <Box
            as={Button}
            _hover={{ bg: "none" }}
            backgroundColor={useColorModeValue("gray.100", "gray.900")}
            fontSize="1.2rem"
            fontWeight="medium"
          >
            About
          </Box>
        </LinkRouter>
        {/* <LinkRouter to="/experience">
          <Box
            as={Button}
            _hover={{ bg: "none" }}
            backgroundColor={useColorModeValue("gray.100", "gray.900")}
            fontSize="1.2rem"
            fontWeight="medium"
          >
            Experience
          </Box>
        </LinkRouter> */}
        <LinkRouter to="/blog">
          <Box
            as={Button}
            _hover={{ bg: "none" }}
            backgroundColor={useColorModeValue("gray.100", "gray.900")}
            fontSize="1.2rem"
            fontWeight="medium"
          >
            Blog
          </Box>
        </LinkRouter>
        <Box
          as={Button}
          _hover={{ bg: "none" }}
          onClick={toggleColorMode}
          backgroundColor={useColorModeValue("gray.100", "gray.900")}
        >
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Box>
      </Stack>
    </Flex>
  );
};

export default DesktopNav;
