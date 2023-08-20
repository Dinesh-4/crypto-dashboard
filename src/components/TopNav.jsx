import { FaBars } from "react-icons/fa";
import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { FaRegUserCircle } from "react-icons/fa";

const TopNav = ({ title, onOpen }) => {
  return (
    <Box px="4" bg="white">
      <HStack maxW="90rem" mx="auto" h="16" justify="space-between">
        <Icon as={FaBars} onClick={onOpen} display={{
          base:"block",
          lg: "none"
        }} />
        <Heading fontWeight="medium" fontSize="28px">
          {title}
        </Heading>
        <Menu>
          <MenuButton>
            <Icon as={FaRegUserCircle} fontSize="25px" />
          </MenuButton>
          <MenuList>
            <MenuItem>Logout</MenuItem>
            <MenuItem>Support</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
};

export default TopNav;
