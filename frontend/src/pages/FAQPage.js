import React from 'react';
import { Container, Heading, Box, Text } from '@chakra-ui/react';

const FAQPage = () => {
  return (
    <Container centerContent>
      <Heading as="h1" size="xl" mb={4}>Frequently Asked Questions</Heading>
      <Box w="100%" maxW="800px">
        <Box mb={4}>
          <Heading as="h3" size="md" mb={2}>What is Carbon Tracker?</Heading>
          <Text>
            Carbon Tracker is an application that helps you track the carbon footprint of different cities. Simply enter a city name, and the app will display the location on a map and provide relevant data.
          </Text>
        </Box>
        <Box mb={4}>
          <Heading as="h3" size="md" mb={2}>How do I use the Carbon Tracker?</Heading>
          <Text>
            To use Carbon Tracker, enter the name of a city in the search bar on the home page and click "Search". The map will then update to show the location of the city.
          </Text>
        </Box>
        <Box mb={4}>
          <Heading as="h3" size="md" mb={2}>Where does the data come from?</Heading>
          <Text>
            The location data is provided by the OpenWeatherMap API. For carbon footprint data, we are working on integrating additional APIs to provide comprehensive information.
          </Text>
        </Box>
        <Box mb={4}>
          <Heading as="h3" size="md" mb={2}>Is the Carbon Tracker free to use?</Heading>
          <Text>
            Yes, Carbon Tracker is free to use. We aim to provide valuable information to help users understand and reduce their carbon footprint.
          </Text>
        </Box>
      </Box>
    </Container>
  );
};

export default FAQPage;
