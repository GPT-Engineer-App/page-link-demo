import React from "react";
import { Box, Heading, Text, Button, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Box p={8}>
      <VStack spacing={8} align="center">
        <Heading as="h1" size="2xl">
          Welcome to My Website
        </Heading>
        <Text fontSize="xl">This is a simple website showcasing linking between pages.</Text>
        <Box>
          <Link to="/page1">
            <Button colorScheme="blue" mr={4}>
              Page 1
            </Button>
          </Link>
          <Link to="/page2">
            <Button colorScheme="green">Page 2</Button>
          </Link>
        </Box>
      </VStack>
    </Box>
  );
};

const Page1 = () => {
  return (
    <Box p={8}>
      <VStack spacing={8} align="center">
        <Heading as="h1" size="2xl">
          Page 1
        </Heading>
        <Text fontSize="xl">This is the first demo page.</Text>
        <Text>Here is some additional text for Page 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        <Link to="/">
          <Button colorScheme="blue">Back to Home</Button>
        </Link>
      </VStack>
    </Box>
  );
};

const Page2 = () => {
  return (
    <Box p={8}>
      <VStack spacing={8} align="center">
        <Heading as="h1" size="2xl">
          Page 2
        </Heading>
        <Text fontSize="xl">This is the second demo page.</Text>
        <Text>And here is some extra text content for Page 2. Pellentesque euismod nisi eu nulla convallis fermentum.</Text>
        <Link to="/">
          <Button colorScheme="green">Back to Home</Button>
        </Link>
      </VStack>
    </Box>
  );
};

export default Index;
export { Page1, Page2 };
