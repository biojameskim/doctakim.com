import { Box, Text } from "@chakra-ui/react";
import GracefulImage from "../GracefulImage";
import { BlogImageType } from "../../types/BlogTypes";
import { useColorModeValue } from "@chakra-ui/react";

// maxW is set to 350px as default. This is the width of a vertical image.
// When using BlogImage, if the image is horizontal, specify that with orientation='h'
// If the image is vertical, it will just be set to maxW which is 350px
// You can override these two by not putting an orientation at all and just setting the maxW for an image.

const BlogImage = ({
  src,
  alt,
  caption,
  caption2,
  orientation,
  maxW = "350px",
  borderRadius,
  captionFontFamily,
  italic = false,
  pt,
  pb,
}: BlogImageType) => {

  return (
    <Box
      pt={pt ? pt : "5vh"}
      pb={pb ? pb : "5vh"}
      maxWidth={orientation === "override" ? maxW : (orientation === "h" ? "450px" : maxW)}
      width="100%"
      alignSelf="center"
    >
      <GracefulImage
        src={src}
        alt={alt}
        borderRadius={borderRadius || "none"}
        minH={orientation === "override" ? "auto" : (orientation === "h" ? "250px" : "350px")}
        w="100%"
        objectFit={orientation === "override" ? "contain" : "cover"}
      />
      <Box height="0.5rem"></Box>
      <Text as={italic ? "i" : "p"} fontSize={{ base: "0.8rem", md: "0.8rem" }} fontFamily={captionFontFamily} color={useColorModeValue("gray.500", "gray.400")}>
        {caption}
      </Text>
      <Text as={italic ? "i" : "p"} fontSize={{ base: "0.8rem", md: "0.8rem" }} fontFamily={captionFontFamily} color={useColorModeValue("gray.500", "gray.400")}>
        {caption2}
      </Text>
    </Box>
  );
};

export default BlogImage;
