import {
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Link as LinkRouter } from 'react-router-dom';

const MobileNav = () => {
  return (
    <Menu matchWidth >
      <MenuButton as={Button}>
        <IconButton
          icon={
            <HamburgerIcon w={5} h={5} />
          }
          variant={'ghost'}
          aria-label={'Toggle Navigation'}
        />
      </MenuButton>
      <MenuList>
        <LinkRouter to="/about"><MenuItem bg='white'>About</MenuItem></LinkRouter>
        <LinkRouter to="/experience"><MenuItem>Experience</MenuItem></LinkRouter>
        <LinkRouter to="/projects"><MenuItem>Projects</MenuItem></LinkRouter>
        <LinkRouter to="/blog"><MenuItem>Blog</MenuItem></LinkRouter>
        <LinkRouter to="/connect"><MenuItem>Connect</MenuItem></LinkRouter>
      </MenuList>
    </Menu>

  );
};

export default MobileNav