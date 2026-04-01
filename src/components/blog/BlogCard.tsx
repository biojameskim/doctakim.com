import { Stack, Box, Image, Text, useColorModeValue, AspectRatio } from "@chakra-ui/react"
import GracefulImage from "../GracefulImage"
import { Link as LinkRouter } from 'react-router-dom'
import { BlogCardType } from "../../types/BlogTypes"

const BlogCard = ({ route, title, description, release, image, alt, pin }: BlogCardType) => {
    return (
        <LinkRouter to={route} style={{ display: 'flex', flexDirection: 'column', WebkitTapHighlightColor: "transparent" }}>
            <Stack as="a"
                className='blog-card'
                p={4}
                mb={'3rem'}
                shadow='lg'
                borderWidth={pin ? '10px' : '1px'}
                borderColor={useColorModeValue('gray.200', 'gray.600')}
                rounded='lg'
                bg={useColorModeValue('gray.100', 'gray.700')}
                href={route}
                alignItems={'left'}
                maxW={{ base: '98%', md: '100%' }}
                position={'relative'}
                transition="all 200ms ease-in-out"
                h="full"
                _hover={{
                    transform: "translateY(-3px)",
                    boxShadow: useColorModeValue("0px 12px 10px lightgray", "0px 12px 10px rgba(0, 0, 0, 0.4)")
                }}
                css={{ WebkitTapHighlightColor: "transparent", touchAction: "manipulation" }}
            >
                {pin && (
                    <Image
                        position='absolute'
                        objectFit="contain"
                        width='35px'
                        right='-4'
                        top='-4'
                        src={'/images/icons/redpin.png'}
                        alt='Red pin'
                    />
                )}

                <Box>
                    <AspectRatio ratio={4 / 3} borderRadius='xl' overflow="hidden">
                        <GracefulImage
                            boxSize='full'
                            w='full'
                            h='full'
                            src={image}
                            alt={alt}
                        />
                    </AspectRatio>
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
                        fontSize='1.4rem'
                        lineHeight='normal'
                        fontWeight='medium'
                        maxW='100%'
                    >
                        {title}
                    </Text>

                    <Text
                        maxW='full'
                        mt={2}
                        color={useColorModeValue('gray.600', 'gray.400')}
                        fontSize='0.9rem'
                        fontWeight='normal'
                    >
                        {description}
                    </Text>

                </Stack>

            </Stack>
        </LinkRouter>
    )
}

export default BlogCard