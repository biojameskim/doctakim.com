import { Stack, Box, Image, Text, useColorModeValue } from "@chakra-ui/react"
import { Link as LinkRouter } from 'react-router-dom'
import { BlogCardType } from "../../types/BlogTypes"

const BlogCard = ({ route, title, description, release, image, alt, pin }: BlogCardType) => {
    return (
        <LinkRouter to={route}>
            <Stack as="a"
                className='blog-card'
                p={4}
                mb={'3rem'}
                shadow='lg'
                borderWidth={pin ? '1px' : '1px'}
                borderColor={useColorModeValue('gray.200', 'gray.600')}
                rounded='lg'
                bg={useColorModeValue('gray.100', 'gray.700')}
                href={route}
                alignItems={'left'}
                maxW={{ base: '98%', md: '100%' }}
                position={'relative'}
            >
                {pin && (
                    <Image
                        position='absolute'
                        objectFit="contain"
                        width='35px'
                        right='-4'
                        top='-4'
                        src={'images/icons/redpin2.png'}
                        alt='Red pin'
                    />
                )}

                <Box>
                    <Image
                        boxSize='full'
                        borderRadius='2xl'
                        w='full'
                        src={image}
                        alt={alt}
                    />
                </Box>

                <Stack mt={{ base: 4, md: 0 }} ml={{ md: 6 }} maxW={'400'} >
                    <Text
                        fontWeight='semibold'
                        textTransform='uppercase'
                        fontSize='1rem'
                        letterSpacing='wide'
                        color='teal.600'
                        pt='3'
                    >
                        {release}
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
                        maxW='full'
                        mt={2}
                        color={useColorModeValue('gray.600', 'gray.400')}
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