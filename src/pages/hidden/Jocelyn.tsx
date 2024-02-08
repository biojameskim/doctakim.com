import { Box, Stack } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import BlogImage from "../../components/blog/BlogImage";

const Jocelyn = () => {
  return (
    <div>
      <Helmet>
        <title>biojameskim | To Jocelyn</title>
      </Helmet>
      <Box pb="5vh"></Box>
      <Stack
        width={{ base: "85%", md: "60%" }}
        fontSize={{ base: "17", md: "lg" }}
        fontFamily="century"
      >
        <BlogImage
          maxW="450px"
          src="../images/pictures/jocelyn/joce-valentines-pg1.png"
          alt="Joce Valentines pg1"
          caption="Is this.. a google slide?"
          orientation="h"
        />
        <BlogImage
          maxW="450px"
          src="../images/pictures/jocelyn/joce-valentines-pg2.png"
          alt="Joce Valentines pg2"
          caption="Got sentimental looking through these photos..."
          orientation="h"
        />
        <BlogImage
          maxW="450px"
          src="../images/pictures/jocelyn/joce-valentines-pg3.png"
          alt="Joce Valentines pg3"
          caption="Thank you Kevin..."
          caption2="Miss you Joce. Happy Valentine's Day."
          orientation="h"
        />
      </Stack>
      <Box pb="15vh"></Box>
    </div>
  );
};

export default Jocelyn;
