import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { VscDebugRestart } from "react-icons/vsc";
import { AiOutlineHome } from "react-icons/ai";
import SocialButton from "../SocialButton";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <Box
      bg={useColorModeValue("gray.100", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text fontSize={{ base: "0.8rem", md: "0.9rem" }}>© {new Date().getFullYear()} James Kim</Text>
        <Stack direction={"row"} spacing={6} px={20}>
          <Link to="/home" style={{ borderRadius: '50%', display: 'inline-flex', WebkitTapHighlightColor: "transparent" }}>
            <SocialButton label={"Home"}>
              <AiOutlineHome />
            </SocialButton>
          </Link>
          <Box
            as="button"
            onClick={() => {
              navigate('/');
              window.scrollTo(0, 0);
            }}
            cursor="pointer"
            css={{ WebkitTapHighlightColor: "transparent" }}
          >
            <SocialButton label={"BacktoStart"}>
              <VscDebugRestart />
            </SocialButton>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
