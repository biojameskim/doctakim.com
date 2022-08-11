import { ReactNode } from 'react';
import { chakra, VisuallyHidden, Link, useColorModeValue } from '@chakra-ui/react';

const SocialButton = ({
    children,
    label,
  }: {
    children: ReactNode;
    label: string;
  }) => {
    return (
      <chakra.button as={Link}
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={10}
        h={10}
        cursor={'pointer'}
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

export default SocialButton