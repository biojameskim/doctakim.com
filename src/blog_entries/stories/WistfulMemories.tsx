import { Text, Stack } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import BlogImage from "../../components/blog/BlogImage";
import { useEffect } from "react";

const WistfulMemories = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Helmet>
        <title>biojameskim | Wistful Memories</title>
      </Helmet>

      <Text
        className="blog-title"
        fontSize="3rem"
        align={"center"}
        fontWeight={"medium"}
        pt={"12vh"}
      >
        Wistful Memories
      </Text>

      <div className="blog-text">
        <Text
          fontFamily="century"
          fontSize="2xl"
          align={"center"}
          fontWeight={"medium"}
          pt={"4vh"}
          pb={"10vh"}
        >
          April 2024
        </Text>

        <Stack
          spacing={7}
          width={{ base: "85%", md: "60%" }}
          fontSize={{ base: "17", md: "lg" }}
          fontFamily="century"
        >
          <BlogImage
            src="../images/blog_pictures/Wistful-Memories/Pictures/0_pasta.jpeg"
            alt="Fall in Ithaca"
            caption="Fall in Ithaca"
            orientation="v"
          />

          <Text pb="10vh">- James Kim</Text>
        </Stack>
      </div>
    </div>
  );
};

export default WistfulMemories;
