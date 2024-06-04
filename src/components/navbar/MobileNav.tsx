import {
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link as LinkRouter } from "react-router-dom";

const MobileNav = () => {
  return (
    <Menu matchWidth>
      <MenuButton as={Button} style={{ zIndex: "1" }}>
        <IconButton
          icon={<HamburgerIcon w={8} h={8} />}
          variant={"ghost"}
          aria-label={"Toggle Navigation"}
        />
      </MenuButton>
      <MenuList>
        {/* <LinkRouter to="/experience">
          <MenuItem fontSize={"1.75rem"}>Experience</MenuItem>
        </LinkRouter> */}
        <LinkRouter to="/blog">
          <MenuItem fontSize={"1.75rem"}>Blog</MenuItem>
        </LinkRouter>
      </MenuList>
    </Menu>
  );
};

export default MobileNav;
