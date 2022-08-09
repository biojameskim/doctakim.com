import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
    Link
  } from '@chakra-ui/react';
  import { FaLinkedin, FaGithub } from 'react-icons/fa';
  import { FiMail } from 'react-icons/fi';
  import { ReactNode } from 'react';
  
  const SocialButton = ({
    children,
    label,
    href,
  }: {
    children: ReactNode;
    label: string;
    href: string;
  }) => {
    return (
      <chakra.button as={Link}
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={10}
        h={10}
        cursor={'pointer'}
        href={href} isExternal
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  export default function Footer() {
    return (
      <Box
        bg={useColorModeValue('gray.100', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}
      >
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Text>© 2022 James Kim</Text>
          <Stack direction={'row'} spacing={6} px={20}>
            <SocialButton label={'Mail'} href={'mailto:jjk297@cornell.edu'}>
              <FiMail />
            </SocialButton>
            <SocialButton label={'Github'} href={"https://github.com/doctakim"}>
              <FaGithub />
            </SocialButton>
            <SocialButton label={'Linkedin'} href={'https://www.linkedin.com/in/doctakim/'}>
              <FaLinkedin />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    );
  }