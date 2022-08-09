import { VStack, Stack, Center, Box, Image, Text, Link, useColorModeValue } from "@chakra-ui/react"

const BlogCard = ({ website, title, description, update, image, alt }: {website: string, title: string, description: string, update: string, image: string, alt: string}) => {
  return (
    
        <VStack as="a"
            target={"_blank"}
            className='blog-card'
            p={4} 
            display={{ md: 'flex' }} 
            boxShadow={'2xl'}
            rounded='lg'
            overflow='hidden'
            bg={useColorModeValue('gray.200','gray.900')}
            href={website}
            alignItems={'left'}
        >
            <Box flexShrink={0} pos='relative'>
                <Image
                boxSize='300px'
                borderRadius='2xl'
                width={{ md: 400 }}
                src= {image}
                alt={alt}
                />
            </Box>
            <Stack mt={{ base: 4, md: 0 }} ml={{ md: 6 }} maxW={'400'} >
                <Text
                fontWeight='bold'
                textTransform='uppercase'
                fontSize='xl'
                letterSpacing='wide'
                color='teal.600'
                pt='3'
                >
                    {update}
                </Text>
                <Text
                mt={1}
                display='block'
                fontSize='4xl'
                lineHeight='normal'
                fontWeight='semibold'
                maxW='100%'
                >
                    {title}
                </Text>
                
                <Text 
                    maxW='100%' 
                    mt={2} 
                    color='gray.500' 
                    fontSize='lg'
                > 
                    {description}
                </Text>
            </Stack>
            
        </VStack>

  )
}

export default BlogCard