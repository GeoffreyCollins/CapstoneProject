import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Flex, Heading } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Flex as="nav" p={4} bg="blue.500" color="white" justifyContent="space-between" alignItems="center">
      <Heading as="h1" size="lg">Carbon Tracker</Heading>
      <Box>
        <Button as={Link} to="/" mr={4} colorScheme="blue" variant="outline">Home</Button>
        <Button as={Link} to="/faq" colorScheme="blue" variant="outline">FAQ</Button>
      </Box>
    </Flex>
  );
};

export default Navbar;
