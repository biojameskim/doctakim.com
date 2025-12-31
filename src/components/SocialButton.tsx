import { ReactNode } from 'react';
import { chakra, VisuallyHidden, useColorModeValue } from '@chakra-ui/react';

const SocialButton = ({
  children,
  label,
  onClick,
}: {
  children: ReactNode;
  label: string;
  onClick?: () => void;
}) => {
  return (
    <chakra.span
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
      }}
      onClick={onClick}
      fontSize={'md'}
      css={{ WebkitTapHighlightColor: "transparent", touchAction: "manipulation" }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.span>
  );
};

export default SocialButton