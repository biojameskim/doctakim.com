import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    useColorMode,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    HStack,
    VStack,
    StackDivider,
    Show,
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
    MoonIcon,
    SunIcon,
  } from '@chakra-ui/icons';
  import { Link as LinkRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';
  
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
                <Box as={Button} 
                backgroundColor={useColorModeValue('gray.100', 'gray.900')} justify={'flex-start'} fontSize='2rem' fontWeight="bold">
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
  
  const DesktopNav = () => {
    const { colorMode, toggleColorMode } = useColorMode();
  
    return (
        <>
        <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={4}>
                <LinkRouter to="/about"><Button backgroundColor={useColorModeValue('gray.100', 'gray.900')} fontSize='1.8rem' fontWeight="bold">About</Button></LinkRouter>
                <Menu>
                    <MenuButton as={Button} backgroundColor={useColorModeValue('gray.100', 'gray.900')} fontSize='1.8rem' fontWeight="bold" rightIcon={<ChevronDownIcon />}>
                        Work
                    </MenuButton>
                    <MenuList backgroundColor={useColorModeValue('gray.100', 'gray.900')}>
                        <LinkRouter to="/employment"><MenuItem fontSize='1.7rem'>Employment</MenuItem></LinkRouter>
                        <LinkRouter to="/projects"><MenuItem fontSize='1.7rem'>Projects</MenuItem></LinkRouter>
                        <LinkRouter to="/resume"><MenuItem fontSize='1.7rem'>Resume</MenuItem></LinkRouter>
                    </MenuList>
                </Menu>
                <LinkRouter to="/blog"><Button backgroundColor={useColorModeValue('gray.100', 'gray.900')} fontSize='1.8rem' fontWeight="bold">Blog</Button></LinkRouter>
                <LinkRouter to="/connect"><Button backgroundColor={useColorModeValue('gray.100', 'gray.900')} fontSize='1.8rem' fontWeight="bold">Connect</Button></LinkRouter>
                <Box as={Button} onClick={toggleColorMode} backgroundColor={useColorModeValue('gray.100', 'gray.900')}>
                  {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                </Box>
            </Stack>
      </Flex>
      </>
    );
  };
  
  
  const MobileNav = () => {
    return (
        <Menu matchWidth >
          <MenuButton as={Button}>
            <IconButton
            icon={
              <HamburgerIcon  w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
            />
          </MenuButton>
          <MenuList>
            <LinkRouter to="/about"><MenuItem bg='white'>About</MenuItem></LinkRouter>
            <LinkRouter to="/employment"><MenuItem>Employment</MenuItem></LinkRouter>
            <LinkRouter to="/projects"><MenuItem>Projects</MenuItem></LinkRouter>
            <LinkRouter to="/resume"><MenuItem>Resume</MenuItem></LinkRouter>
            <LinkRouter to="/blog"><MenuItem>Blog</MenuItem></LinkRouter>
            <LinkRouter to="/connect"><MenuItem>Connect</MenuItem></LinkRouter>
          </MenuList>
        </Menu>
      
    );
  };

  interface NavItem {
    label: string;
    children?: Array<NavItem>;
    href?: string;
  }
  
  const NAV_ITEMS: Array<NavItem> = [
    {
      label: 'About',
      href: '/about'
    },
    {
      label: 'Work',
      children: [
        {
          label: 'Employment',
          href: '#',
        },
        {
          label: 'Projects',
          href: '#',
        },
        {
            label: 'Resume',
            href: '#',
          }
      ],
    },
    {
      label: 'Blog',
      href: '#',
    },
    {
      label: 'Connect',
      href: '#',
    },
  ];