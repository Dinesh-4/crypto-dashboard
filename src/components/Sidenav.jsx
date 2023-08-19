import { Box, HStack, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import { RxDashboard } from "react-icons/rx";
import { BsArrowDownUp } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";

const Sidenav = () => {
  const navLinks = [
    {
      icon: RxDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: BsArrowDownUp,
      text: "Transactions",
      link: "/transactions",
    },
  ];

  return (
    <Stack justifyContent="space-between" boxShadow="lg" maxWidth="16rem" h="100vh">
      <Box>
        <Heading as="h1" fontSize="20px" pt="3.5rem" textAlign="center">
          @CRYPTO CURRENCY
        </Heading>
        <Box mt="6" mx="3">
          {navLinks.map((nav) => (
            <HStack
              borderRadius="10px"
              key={nav.text}
              py="3"
              px="4"
              _hover={{
                bg: "#F3F3F7",
                color: "#171717"
        
              }}
              color="#797E82"
            >
              <Icon as={nav.icon} />
              <Text fontSize="14px" fontWeight="medium" >
                {nav.text}
              </Text>
            </HStack>
          ))}
        </Box>
      </Box>
      <Box mt="6" mx="3" mb="6">
        <HStack
              borderRadius="10px"
              py="3"
              px="4"
              _hover={{
                bg: "#F3F3F7",
                color: "#171717"
        
              }}
              color="#797E82"
            >
              <Icon as={BiSupport} />
              <Text fontSize="14px" fontWeight="medium" >
                Support
              </Text>
            </HStack>
      </Box>
    </Stack>
  );
};

export default Sidenav;
