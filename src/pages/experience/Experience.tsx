import {
  Text,
  Box,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  useColorModeValue,
} from "@chakra-ui/react";
import Employment from "./Employment";
import Research from "./Research";
// import Coursework from "./Coursework";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

const Experience = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Helmet>
        <title>biojameskim | Experience</title>
      </Helmet>

      <Box>
        <Text
          className="page-title"
          align="center"
          fontSize="4rem"
          fontWeight={"medium"}
          pt={"6vh"}
          pb={{ base: "2vh", md: "4vh" }}
        >
          Experience
        </Text>
        <Tabs
          orientation="horizontal"
          variant="soft-rounded"
          colorScheme="green"
          align="center"
        >
          <TabList>
            <Tab color={useColorModeValue("gray.600", "white")}>Employment</Tab>
            <Tab color={useColorModeValue("gray.600", "white")}>Research</Tab>
            {/* <Tab color={useColorModeValue("gray.600", "white")}>
              Skills & Courses
            </Tab> */}
          </TabList>
          <TabPanels>
            <TabPanel>
              <Employment />
            </TabPanel>
            <TabPanel>
              <Research />
            </TabPanel>
            {/* <TabPanel>
              <Coursework />
            </TabPanel> */}
          </TabPanels>
        </Tabs>
      </Box>
    </div>
  );
};

export default Experience;
