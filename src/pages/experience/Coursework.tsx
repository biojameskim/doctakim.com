import {
  Box,
  Flex,
  Text,
  List,
  ListItem,
  ListIcon,
  Grid,
  useColorModeValue,
} from "@chakra-ui/react";
import { BsCircle } from "react-icons/bs";
import CourseworkCard from "../../components/experience/CourseworkCard";
import { useEffect } from "react";

import { coursework_data } from "../../data/coursework";

const Coursework = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Flex
        w={{ base: "100%", md: "100%" }}
        mt="2rem"
        direction={{ base: "column", md: "column" }}
      >
        <Flex
          direction="column"
          w={{ base: "full", md: "full" }}
          mt="0"
          align="center"
          mb="5vh"
        >
          <Text
            fontSize="1.5rem"
            fontWeight="bold"
            mb="2.5rem"
            mt={{ base: "2rem", md: "0" }}
          >
            Technical Skills
          </Text>

          <Flex
            direction={{ base: "column", md: "row" }}
            w={{ base: "full", md: "80%" }}
            // justifyContent='center'
            // alignContent='center'
            // alignItems='center'
            gap={"6"}
          >
            <Flex
              className="skills-card"
              direction="column"
              w={{ base: "full" }}
              p="1.2rem"
              shadow="lg"
              borderWidth="1px"
              borderColor={useColorModeValue("gray.200", "gray.700")}
              rounded="lg"
              bg={useColorModeValue("gray.50", "gray.700")}
            >
              <Text align="left" fontSize="1.2rem" fontWeight="bold" mb="2vh">
                Languages
              </Text>
              <List spacing="0.5rem">
                <ListItem textAlign="left">
                  <ListIcon as={BsCircle} color="green.500" />
                  Java, Python, OCaml, C
                </ListItem>
                <ListItem textAlign="left">
                  <ListIcon as={BsCircle} color="green.500" />
                  TypeScript, JavaScript, HTML, CSS
                </ListItem>
                <ListItem textAlign="left">
                  <ListIcon as={BsCircle} color="green.500" />
                  Bash, SQL
                </ListItem>
              </List>
            </Flex>

            <Flex
              className="skills-card"
              direction="column"
              w={{ base: "full" }}
              p="1.2rem"
              shadow="lg"
              borderWidth="1px"
              borderColor={useColorModeValue("gray.200", "gray.700")}
              rounded="lg"
              bg={useColorModeValue("gray.50", "gray.700")}
            >
              <Text align="left" fontSize="1.2rem" fontWeight="bold" mb="2vh">
                Frameworks & Libraries
              </Text>
              <List spacing="0.5rem">
                <ListItem textAlign="left">
                  <ListIcon as={BsCircle} color="green.500" />
                  React, Next.js, Node.js, Express.js, Flask
                </ListItem>
                <ListItem textAlign="left">
                  <ListIcon as={BsCircle} color="green.500" />
                  MongoDB, Firebase, Firestore
                </ListItem>
                <ListItem textAlign="left">
                  <ListIcon as={BsCircle} color="green.500" />
                  ROS, Pandas, NumPy, SQLite, SQLAlchemy
                </ListItem>
              </List>
            </Flex>

            <Flex
              className="skills-card"
              direction="column"
              w={{ base: "full" }}
              p="1.2rem"
              shadow="lg"
              borderWidth="1px"
              borderColor={useColorModeValue("gray.200", "gray.700")}
              rounded="lg"
              bg={useColorModeValue("gray.50", "gray.700")}
            >
              <Text align="left" fontSize="1.2rem" fontWeight="bold" mb="2vh">
                Tools
              </Text>
              <List spacing="0.5rem">
                <ListItem textAlign="left">
                  <ListIcon as={BsCircle} color="green.500" />
                  Git, Docker, Postman, Linux, XCode
                </ListItem>
                <ListItem textAlign="left">
                  <ListIcon
                    as={BsCircle}
                    color={useColorModeValue("gray.50", "gray.700")}
                  />
                  {/* Dummy ListItem because it doesn't align correctly otherwise */}
                </ListItem>
                <ListItem textAlign="left">
                  <ListIcon
                    as={BsCircle}
                    color={useColorModeValue("gray.50", "gray.700")}
                  />
                  {/* Dummy ListItem because it doesn't align correctly otherwise */}
                </ListItem>
              </List>
            </Flex>
          </Flex>
        </Flex>

        <Box w="full" mt={{ base: "4rem", md: "2rem" }}>
          <Text fontSize="1.5rem" fontWeight="bold" mb="3rem">
            Coursework
          </Text>
          <Grid
            w={{ base: "full", md: "70%" }}
            templateColumns={{ md: "repeat(3, 1fr)" }}
            gap="6"
            mb="10vh"
          >
            {coursework_data.map((item, index) => (
              <CourseworkCard
                key={index}
                courseTitle={item.courseTitle}
                courseNumber={item.courseNumber}
                // affiliation={item.affiliation}
              />
            ))}
          </Grid>
        </Box>
      </Flex>
    </div>
  );
};

export default Coursework;
