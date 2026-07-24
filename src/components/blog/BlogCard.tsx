import { Stack, Box, Image, Text, useColorModeValue, AspectRatio } from "@chakra-ui/react"
import GracefulImage from "../GracefulImage"
import { Link as LinkRouter } from 'react-router-dom'
import { BlogCardType } from "../../types/BlogTypes"

type BlogCardProps = Omit<BlogCardType, 'component'> & {
    compact?: boolean;
}

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December']

// 'October 2022' -> '10/22'. Compact view only; falls back to the full string if
// a release ever stops looking like 'Month YYYY'.
const shortDate = (release: string) => {
    const [month, year] = release.split(' ')
    const index = MONTHS.indexOf(month)
    if (index === -1 || !year) return release
    return `${String(index + 1).padStart(2, '0')}/${year.slice(-2)}`
}

const BlogCard = ({ route, title, description, release, image, alt, pin, compact = false }: BlogCardProps) => {
    return (
        <LinkRouter to={route} style={{ display: 'flex', flexDirection: 'column', WebkitTapHighlightColor: "transparent" }}>
            <Stack as="a"
                className='blog-card'
                // Stack spaces every child after the first, and the hidden image Box still
                // counts as a child — that stray gap is what pushed the compact text down.
                spacing={{ base: compact ? 1 : 2, md: 2 }}
                p={{ base: compact ? 3 : 4, md: 4 }}
                mb={{ base: compact ? 0 : '3rem', md: '3rem' }}
                shadow='lg'
                borderWidth={{ base: compact ? '1px' : pin ? '10px' : '1px', md: pin ? '10px' : '1px' }}
                borderColor={useColorModeValue('gray.200', 'gray.600')}
                rounded='lg'
                bg={useColorModeValue('gray.100', 'gray.700')}
                href={route}
                alignItems={'left'}
                maxW={{ base: compact ? '100%' : '98%', md: '100%' }}
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
                        display={{ base: compact ? 'none' : 'block', md: 'block' }}
                        position='absolute'
                        objectFit="contain"
                        width='35px'
                        right='-4'
                        top='-4'
                        src={'/images/icons/redpin.png'}
                        alt='Red pin'
                    />
                )}

                <Box display={{ base: compact ? 'none' : 'block', md: 'block' }}>
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

                <Stack
                    mt={{ base: compact ? 0 : 4, md: 0 }}
                    ml={{ md: 6 }}
                    maxW={'400'}
                    spacing={{ base: compact ? 1 : 2, md: 2 }}
                >
                    {/* Compact line: pin, MM/YY and the title all on one row. Mobile only —
                        the stacked release/title below take over from md up. */}
                    <Text
                        display={{ base: compact ? 'block' : 'none', md: 'none' }}
                        fontSize='0.9rem'
                        lineHeight='1.35'
                        fontWeight='medium'
                    >
                        {pin && (
                            <Image
                                display='inline-block'
                                src={'/images/icons/redpin.png'}
                                alt='Red pin'
                                objectFit='contain'
                                w='13px'
                                h='13px'
                                // The artwork runs corner to corner, so -45deg points the needle straight down.
                                transform='rotate(-45deg)'
                                verticalAlign='-0.05em'
                                position='relative'
                                top='-1px'
                                mr='0.28rem'
                            />
                        )}
                        <Box as='span' fontSize='0.74rem' fontWeight='semibold' color='teal.600'>
                            {shortDate(release)}
                        </Box>
                        <Box as='span' mx='0.35em' color={useColorModeValue('gray.500', 'gray.400')}>
                            &bull;
                        </Box>
                        {title}
                    </Text>

                    <Text
                        display={{ base: compact ? 'none' : 'block', md: 'block' }}
                        fontWeight='semibold'
                        textTransform='uppercase'
                        fontSize='0.9rem'
                        letterSpacing='wide'
                        color='teal.600'
                        pt='3'
                    >
                        {release}
                    </Text>
                    <Text
                        display={{ base: compact ? 'none' : 'block', md: 'block' }}
                        mt={1}
                        fontSize='1.3rem'
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
                        fontSize={{ base: compact ? '0.72rem' : '0.8rem', md: '0.8rem' }}
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
