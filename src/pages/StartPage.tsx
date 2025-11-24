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
import { Text, useColorModeValue, Show, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { useEffect } from "react";

const StartPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="starter-page">
      <Show below="md">
        <Flex h="100vh" align="flex-start" justify="center" pt="35vh">
          <Text fontSize="3rem" fontWeight="bold">Hi, I'm James.</Text>
        </Flex>
      </Show>
      <Show above="md">
        <ScrollContainer>
          <ScrollPage>
            <Animator
              animation={batch(Fade(), Move(), Sticky(), MoveOut(0, -200))}
            >
              <Text as="span" fontSize={{ base: "3rem", md: "5rem" }} fontWeight="bold">Hi, I'm James.</Text>
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
              <Text as="span" fontSize={{ base: "2rem", md: "3rem" }}>I'm studying</Text>
              <br />
              <Text as="span" fontSize={{ base: "3rem", md: "6rem" }} fontWeight="bold">CS at Cornell 👨🏻‍💻</Text>
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
                <Text color={useColorModeValue("black", "black")} fontSize="70%">
                  Originally from
                </Text>
                <Text color={useColorModeValue("black", "black")} fontSize="90%">
                  (Southern) California 🌴
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
                <Text color={useColorModeValue("black", "black")} fontSize="70%">
                  But currently in
                </Text>
                <Text color={useColorModeValue("black", "black")} fontSize="90%">
                  Ithaca, NY ❄️
                </Text>
                {/* <Text as="span" fontSize={{ base: "3rem", md: "60px" }}>❄️ ❄️ ❄️</Text> */}
              </Animator>
            </div>
          </ScrollPage>

          <ScrollPage>
            <Animator animation={batch(Fade(), Sticky(), MoveOut())}>
              <Text fontSize={{ base: "2rem", md: "60px" }}>Welcome to my corner</Text>
              <Text fontSize={{ base: "2rem", md: "60px" }}>of the internet.</Text>
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
                <Text as="span" fontSize={{ base: "5rem", md: "120px" }}>🏠</Text>
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
