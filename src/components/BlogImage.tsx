import { Box, Image, Text } from "@chakra-ui/react"

const BlogImage = ({ src, alt, caption, caption2 }: { src: string, alt: string, caption?: string, caption2?: string }) => {
  return (
    <Box paddingY='5vh' maxWidth={'600px'} alignSelf='center'>
      <Image src={src} alt={alt} borderRadius='xl' />
      <Box height='0.5rem'></Box>
      <Text as='i' fontSize={{ base: "md", md: "lg" }} paddingLeft='1.2rem'>{caption}</Text>
      <br></br>
      <Text as='i' fontSize={{ base: "md", md: "lg" }} paddingLeft='1.2rem'>{caption2}</Text>
    </Box >
  )
}

export default BlogImage