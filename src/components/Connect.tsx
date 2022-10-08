import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { AiOutlinePhone } from 'react-icons/ai';
import { Box, Image, VStack, HStack, Button, Text } from '@chakra-ui/react';
import ProfilePic from '../images/pictures/connect_pfp.jpeg'
import { Helmet } from 'react-helmet';

export default function Connect() {
    return (
        <div>
            <Helmet>
                <title>doctakim | Connect</title>
            </Helmet>

            <VStack align={'center'} maxW={'md'} w={'full'}>
                <Box pb="2em">
                    <Text fontSize='4rem' fontWeight={'medium'} pt={'6vh'} pb={'1vh'} >Connect</Text>
                </Box>

                <Box className="connect-image" pb={7}>
                    <Image
                        borderRadius='2xl'
                        objectFit="contain"
                        width='240px'
                        src={ProfilePic}
                        alt='James Kim'

                    />
                </Box>
                <HStack spacing={6} align={'center'} maxW={'md'} pb={'6vh'}>
                    <VStack spacing={'1rem'} align={'center'} maxW={'md'} pl='5'>
                        <Button w='full' colorScheme='gray' leftIcon={<FaGithub />} as="a" href={"https://github.com/doctakim"} target={"_blank"} pr='5'>
                            <Text fontSize={'1.4rem'}>Github</Text>
                        </Button>
                        <Button w='full' colorScheme='linkedin' leftIcon={<FaLinkedin />} as="a" href={'https://www.linkedin.com/in/doctakim/'} target={"_blank"}>
                            <Text fontSize={'1.4rem'}>Linkedin</Text>
                        </Button>
                        <Button w='full' colorScheme='telegram' leftIcon={<FiMail />} as="a" href={'mailto:jjk297@cornell.edu'} pr='7'>
                            <Text fontSize={'1.4rem'}>Email</Text>
                        </Button>
                        <Button w='full' colorScheme='green' leftIcon={<AiOutlinePhone />} as="a" href={'tel:9514620458'} pr='7'>
                            <Text fontSize={'1.4rem'}>Phone</Text>
                        </Button>
                    </VStack>

                    <VStack spacing={'1.4rem'} align={'left'} maxW={'md'} w={'full'}>
                        <Text fontSize="1.5rem">
                            doctakim
                        </Text>
                        <Text fontSize="1.5rem">
                            James Kim
                        </Text>
                        <Text fontSize="1.5rem">
                            jjk297(at)cornell.edu
                        </Text>
                        <Text fontWeight="normal" fontSize="1.5rem">
                            (+1) 951-462-0458
                        </Text>
                    </VStack>


                </HStack>

            </VStack>
        </div>
    );
}