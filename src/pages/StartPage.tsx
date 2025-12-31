import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  Move,
  MoveOut,
  Sticky,
  ZoomIn,
} from "react-scroll-motion";
import { Text, useColorModeValue, Show, Image as ChakraImage, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

import { motion } from "framer-motion";

const StartPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const mobileImageVariants = {
    offscreen: { y: 20, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="starter-page">
      <Helmet>
        <title>biojameskim</title>
      </Helmet>
      <Show below="md">
        <VStack spacing="50vh" pt="20vh" pb="50vh" align="center" justify="start" w="100%">
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2, margin: "-100px" }}
            variants={mobileImageVariants}
            style={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <ChakraImage src="images/profile/frame1.png" alt="Welcome" htmlWidth="70%" />
          </motion.div>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2, margin: "-100px" }}
            variants={mobileImageVariants}
            style={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <ChakraImage src="images/profile/frame2.png" alt="Frame 2" htmlWidth="70%" />
          </motion.div>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2, margin: "-100px" }}
            variants={mobileImageVariants}
            style={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <ChakraImage src="images/profile/frame3.png" alt="Frame 3" htmlWidth="70%" />
          </motion.div>
        </VStack>
      </Show>
      <Show above="md">
        <ScrollContainer>
          <ScrollPage>
            <Animator
              animation={batch(Fade(), Move(), Sticky(), MoveOut(0, -200))}
            >
              <Text as="span" fontSize={{ md: "3rem" }} fontWeight="medium">Hi! I'm James.</Text>
              <Text
                className="scroll-icon"
                pt="2rem"
                fontSize="2rem"
                align={"center"}
              >
                <ChevronDownIcon />
              </Text>
            </Animator>
          </ScrollPage>

          <ScrollPage>
            <Animator
              animation={batch(Sticky(), Fade(), ZoomIn(2, 1), MoveOut(0, -500))}
            >
              <Text as="span" fontSize={{ md: "2rem" }} fontWeight="regular">I'm studying</Text>
              <br />
              <Text as="span" fontSize={{ md: "3rem" }} fontWeight="medium">CS at Cornell 👨🏻‍💻</Text>
            </Animator>
          </ScrollPage>

          {/* <ScrollPage>
            <Animator
              animation={batch(
                Fade(),
                Move(0, 200),
                Sticky(50, 50),
                MoveOut(0, -300)
              )}
            >
              <Text as="span" fontSize={{ base: "2rem", md: "3rem" }}>with a double major in</Text>
              <br />
              <Text as="span" fontSize={{ base: "3rem", md: "5rem" }} fontWeight="bold">Mathematics 🔢</Text>
            </Animator>
          </ScrollPage> */}

          <ScrollPage>
            <div className="from-california">
              <Animator
                animation={batch(
                  Fade(),
                  Move(0, 190),
                  Sticky(37, 63),
                  MoveOut(0, -300)
                )}
              >
                <Text color={useColorModeValue("black", "black")} fontSize={{ md: "2rem" }} fontWeight="regular">
                  Originally from
                </Text>
                <Text color={useColorModeValue("black", "black")} fontSize={{ md: "3rem" }} fontWeight="medium">
                  California 🌴
                </Text>
                {/* <Text as="span" fontSize={{ base: "3rem", md: "60px" }}>🌴 🌴 🌴</Text> */}
              </Animator>
            </div>
          </ScrollPage>

          <ScrollPage>
            <div className="in-ithaca">
              <Animator
                animation={batch(
                  Fade(),
                  Move(0, 800),
                  Sticky(65, 35),
                  MoveOut(0, -300)
                )}
              >
                <Text color={useColorModeValue("black", "black")} fontSize={{ md: "2rem" }} fontWeight="regular">
                  But currently in
                </Text>
                <Text color={useColorModeValue("black", "black")} fontSize={{ md: "3rem" }} fontWeight="medium">
                  Ithaca, NY ❄️
                </Text>
                {/* <Text as="span" fontSize={{ base: "3rem", md: "60px" }}>❄️ ❄️ ❄️</Text> */}
              </Animator>
            </div>
          </ScrollPage>

          <ScrollPage>
            <Animator animation={batch(Fade(), Sticky(), MoveOut())}>
              <Text fontSize={{ md: "2.5rem" }} fontWeight="medium">Welcome to my corner</Text>
              <Text fontSize={{ md: "2.5rem" }} fontWeight="medium">of the internet.</Text>
            </Animator>
          </ScrollPage>

          <ScrollPage>
            <Animator animation={Fade()}>
              <span style={{ fontSize: "60px" }}> </span>
            </Animator>
          </ScrollPage>

          {/* <ScrollPage>
            <Animator animation={batch(Sticky(), Fade(), ZoomIn(2, 1))}>
              <Text as="span" fontSize={{ base: "2rem", md: "60px" }} textAlign="center">
                Come check out what I'm doing!
              </Text>
            </Animator>
          </ScrollPage> */}

          {/* <ScrollPage>
            <Animator animation={Fade()}>
              <span style={{ fontSize: "60px" }}> </span>
            </Animator>
          </ScrollPage> */}

          <ScrollPage>
            <Animator animation={batch(Sticky(), FadeIn(), ZoomIn(2, 1))}>
              <Link to="/home">
                <ChakraImage src="/images/icons/home-sm.png" boxSize={{ md: 28 }} />
                {/* <Text as="span" fontSize={{ md: "6rem" }}>🏠</Text> */}
              </Link>
              <Text
                className="scroll-icon"
                mt="-4"
                fontSize="2rem"
                align={"center"}
              >
                <ChevronUpIcon />
              </Text>
            </Animator>
          </ScrollPage>
        </ScrollContainer>
      </Show>
    </div>
  );
};

export default StartPage;
