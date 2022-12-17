import {
  Box,
  Flex,
  Button,
  Stack,
  useColorModeValue,
  useColorMode,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import {
  ChevronDownIcon,
  MoonIcon,
  SunIcon,
} from '@chakra-ui/icons';
import { Link as LinkRouter } from 'react-router-dom';

const DesktopNav = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (

    <Flex alignItems={'center'}>
      <Stack direction={'row'} spacing={4}>
        <LinkRouter to="/about"><Button backgroundColor={useColorModeValue('gray.100', 'gray.900')} fontSize='1.8rem' fontWeight="bold">About</Button></LinkRouter>
        <LinkRouter to="/employment"><Button backgroundColor={useColorModeValue('gray.100', 'gray.900')} fontSize='1.8rem' fontWeight="bold">Employment</Button></LinkRouter>
        <LinkRouter to="/projects"><Button backgroundColor={useColorModeValue('gray.100', 'gray.900')} fontSize='1.8rem' fontWeight="bold">Projects</Button></LinkRouter>
        <LinkRouter to="/blog"><Button backgroundColor={useColorModeValue('gray.100', 'gray.900')} fontSize='1.8rem' fontWeight="bold">Blog</Button></LinkRouter>
        <LinkRouter to="/connect"><Button backgroundColor={useColorModeValue('gray.100', 'gray.900')} fontSize='1.8rem' fontWeight="bold">Connect</Button></LinkRouter>
        <Box as={Button} onClick={toggleColorMode} backgroundColor={useColorModeValue('gray.100', 'gray.900')}>
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Box>
      </Stack>
    </Flex>

  );
};

export default DesktopNav