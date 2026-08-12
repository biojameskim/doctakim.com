import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
/* Both icons come from the same Ant Design set the navbar uses. The restart was a
   `vsc` icon, drawn on a 16px grid with heavier strokes, which made it look bolder
   than everything around it. */
import { AiOutlineHome, AiOutlineReload } from "react-icons/ai";
import SocialButton from "../SocialButton";

const Footer = () => {
  const navigate = useNavigate();
  /* Matches NavBar's colour exactly. These used to differ by one step on the grey
     scale (700 vs 600), which read as the footer being set in a heavier weight when
     both are actually 400. Lifted out of the JSX because inlining the hook alongside
     several style props pushes Chakra's prop union past what the language server
     will represent. */
  const textColor = useColorModeValue("gray.600", "white");

  /* No fill of its own. On most pages that means it sits on the page background; on
     the start page the backdrop is a fixed canvas underneath it, so the sky shows
     straight through and the footer needs no colour matching to blend.

     The nesting below deliberately mirrors NavBar — same outer px, same maxW="5xl"
     inner track — so the copyright lines up under the logo and the icons line up
     under the Blog/gallery pair. If you change one, change the other. */
  return (
    <Box bg="transparent" color={textColor} mb={4}>
      <Flex py={4} px={{ base: 4 }} align="center" justify="center">
        <Flex
          flex={{ base: 1 }}
          maxW="5xl"
          w="100%"
          direction={{ base: "column", md: "row" }}
          alignItems="center"
          justify={{ base: "center", md: "space-between" }}
          gap={4}
        >
          <Text fontSize={{ base: "0.8rem", md: "0.9rem" }}>
            © {new Date().getFullYear()} biojameskim
          </Text>

          {/* gap={1} matches the navbar's right-hand pair */}
          <Flex alignItems="center" gap={1}>
            <Link
              to="/home"
              style={{
                borderRadius: "50%",
                display: "inline-flex",
                WebkitTapHighlightColor: "transparent",
              }}
            >
              <SocialButton label={"Home"}>
                <AiOutlineHome />
              </SocialButton>
            </Link>
            <Box
              as="button"
              onClick={() => {
                navigate("/");
                window.scrollTo(0, 0);
              }}
              cursor="pointer"
              css={{ WebkitTapHighlightColor: "transparent" }}
            >
              <SocialButton label={"Back to start"}>
                <AiOutlineReload />
              </SocialButton>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
