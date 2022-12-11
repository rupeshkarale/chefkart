import React from 'react'
import { Flex, Select, Box } from "@chakra-ui/react";
import { HamburgerIcon, IconButton } from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
const Dropdown = ({ handliASC, handliDSC }) => {
  return (
    <Menu>
      <MenuButton
        as={HamburgerIcon}
        aria-label="Options"
        icon={<HamburgerIcon />}
        variant="outline"
        px={4}
        py={2}
        transition="all 0.2s"
        borderRadius="md"
        borderWidth="1px"
        _hover={{ bg: "gray.400" }}
        _expanded={{ bg: "blue.400" }}
        _focus={{ boxShadow: "outline" }}
      />
      <MenuList ml="-85">
        <MenuItem onClick={handliASC} bgColor="white" p="4">
          Sort By ASC
        </MenuItem>
        <MenuItem onClick={handliDSC} bgColor="white" p="4">
          Sort By DSC
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default Dropdown