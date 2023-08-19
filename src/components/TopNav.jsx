import { Box, Button, Container, Flex, HStack, Heading, Icon, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { FaRegUserCircle } from 'react-icons/fa';

const TopNav = () => {
  return (
    <Box>
        <HStack maxWidth="80rem" mx="auto"  h={"4rem"} justify="space-between">
                <Heading fontWeight="medium" fontSize="28px">Dashboard</Heading>
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
  )
}

export default TopNav