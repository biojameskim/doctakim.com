import { Box, Image, Text } from "@chakra-ui/react";
import { BlogImageType } from "../../types/BlogTypes";

// maxW is set to 400px as default. This is the width of a vertical image.
// When using BlogImage, if the image is horizontal, specify that with orientation='h'
// If the image is vertical, it will just be set to maxW which is 400px
// You can override these two by not putting an orientation at all and just setting the maxW for an image.

const BlogImage = ({
  src,
  alt,
  caption,
  caption2,
  orientation,
  maxW = "350px",
}: BlogImageType) => {
  return (
    <Box
      pt="5vh"
      pb="2vh"
      maxWidth={orientation === "h" ? "500px" : maxW}
      alignSelf="center"
    >
      <Image src={src} alt={alt} borderRadius="xl" />
      <Box height="0.5rem"></Box>
      <Text as="i" fontSize={{ base: "md", md: "md" }} paddingLeft="1.2rem">
        {caption}
      </Text>
      <br></br>
      <Text as="i" fontSize={{ base: "md", md: "md" }} paddingLeft="1.2rem">
        {caption2}
      </Text>
    </Box>
  );
};

export default BlogImage;
