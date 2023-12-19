import { Box, Text } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import { Helmet } from "react-helmet";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home-page">
      <Helmet>
        <title>biojameskim | Home</title>
      </Helmet>
      <Box textAlign="center">
        <Text
          className="page-title"
          fontSize={{ base: "3.2rem", md: "4rem" }}
          pb={{ base: "2vh", md: "0" }}
        >
          Currently ...
        </Text>
        <Box
          className="home-page-typewriter"
          fontSize="2rem"
          fontWeight="light"
        >
          <Typewriter
            options={{ loop: true }}
            onInit={(typewriter) => {
              typewriter
                .typeString("Doing AI/ML research at Cornell 🧠")
                .pauseFor(2000)
                .deleteAll()
                .typeString(
                  "Thinking of new blog post ideas 📝 (check out my blog!)"
                )
                .pauseFor(2000)
                .deleteAll()
                .typeString("Trying to get better at tennis 🎾 ")
                .pauseFor(2000)
                .start();
            }}
          />
        </Box>
      </Box>
    </div>
  );
};

export default Home;
