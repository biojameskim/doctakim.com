import { Stack, Box, Image, Text, useColorModeValue } from "@chakra-ui/react"
import { Link as LinkRouter } from 'react-router-dom'

const BlogCard = ({ route, title, description, update, image, alt }: { route: string, title: string, description: string, update: string, image: string, alt: string }) => {
    return (
        <LinkRouter to={route}>
            <Stack as="a"
                className='blog-card'
                p={4}
                mb={'3rem'}
                boxShadow={'2xl'}
                rounded='lg'
                overflow='hidden'
                bg={useColorModeValue('gray.200', 'gray.900')}
                href={route}
                alignItems={'left'}
                maxW={{ base: '98%', md: '100%' }}
            >
                <Box flexShrink={0} pos='relative'>
                    <Image
                        boxSize='300px'
                        borderRadius='2xl'
                        width={{ md: 400 }}
                        src={image}
                        alt={alt}
                    />
                </Box>
                <Stack mt={{ base: 4, md: 0 }} ml={{ md: 6 }} maxW={'400'} >
                    <Text
                        fontWeight='bold'
                        textTransform='uppercase'
                        fontSize='1rem'
                        letterSpacing='wide'
                        color='teal.600'
                        pt='3'
                    >
                        {update}
                    </Text>
                    <Text
                        mt={1}
                        display='block'
                        fontSize='1.7rem'
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
                        fontSize='1rem'
                    >
                        {description}
                    </Text>
                </Stack>

            </Stack>
        </LinkRouter>
    )
}

export default BlogCard