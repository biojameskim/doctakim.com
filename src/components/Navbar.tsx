import { Box, Flex, Button, useColorModeValue, useColorMode, Show } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Link as LinkRouter } from 'react-router-dom';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

export default function NavBar() {
  
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box className="navbar">
      <Flex
        bg={useColorModeValue('gray.100', 'gray.900')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <MobileNav />
        </Flex>

        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <LinkRouter to="/home">
              <Box as={Button} backgroundColor={useColorModeValue('gray.100', 'gray.900')} justify={'flex-start'} fontSize='2rem' fontWeight="bold">
                  James Kim
              </Box>
            </LinkRouter>
            <Show below='md'>
              <Button onClick={toggleColorMode} backgroundColor={useColorModeValue('gray.100', 'gray.900')}>
                  {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Show>
            
          <Flex justify={'flex-end'} display={{ base: 'none', md: 'flex' }}>
            <DesktopNav />
          </Flex>

        </Flex>
      </Flex>
    </Box>
  );
}

  // interface NavItem {
  //   label: string;
  //   children?: Array<NavItem>;
  //   href?: string;
  // }
  
  // const NAV_ITEMS: Array<NavItem> = [
  //   {
  //     label: 'About',
  //     href: '/about'
  //   },
  //   {
  //     label: 'Work',
  //     children: [
  //       {
  //         label: 'Experiences',
  //         href: '#',
  //       },
  //       {
  //         label: 'Projects',
  //         href: '#',
  //       },
  //       {
  //           label: 'Resume',
  //           href: '#',
  //         }
  //     ],
  //   },
  //   {
  //     label: 'Blog',
  //     href: '#',
  //   },
  //   {
  //     label: 'Connect',
  //     href: '#',
  //   },
  // ];