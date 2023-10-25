import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import { CourseworkCardType } from "../../types/ExperienceTypes";

const CourseworkCard = ({
  courseTitle,
  courseNumber,
  affiliation,
}: CourseworkCardType) => {
  return (
    <Box
      className="hover-card"
      p={"0.5rem"}
      pt={{ base: "0.5rem", md: "0.5rem" }}
      maxW={{ base: "90%", md: "100%" }}
      w={"full"}
      // h={"full"}
      shadow="lg"
      borderWidth="1px"
      borderColor={useColorModeValue("gray.200", "gray.700")}
      rounded="lg"
      bg={useColorModeValue("gray.50", "gray.700")}
    >
      <Text align="left" fontSize="1.1rem" fontWeight="bold">
        {courseTitle}
      </Text>
      <Text align="left" fontSize="1rem">
        {courseNumber}
      </Text>
      <Text align="left" fontSize="1rem" color="gray.500">
        {affiliation}
      </Text>
    </Box>
  );
};

export default CourseworkCard;
