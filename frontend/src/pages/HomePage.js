import React, { useState } from 'react';
import { Container, Heading, Alert, AlertIcon } from '@chakra-ui/react';
import axios from 'axios';
import SearchForm from '../components/SearchForm';
import MapComponent from '../components/MapComponent';

const HomePage = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async (city) => {
    setError(null);
    try {
      const response = await axios.get(`http://localhost:5000/api/city/${city}`);
      setLocation(response.data.location);
    } catch (err) {
      setError('Error retrieving city data');
    }
  };

  return (
    <Container centerContent>
      <Heading as="h1" size="xl" mb={4}>Carbon Tracker</Heading>
      <SearchForm onSearch={handleSearch} />
      {error && (
        <Alert status="error" mb={4}>
          <AlertIcon />
          {error}
        </Alert>
      )}
      {location && <MapComponent location={location} />}
    </Container>
  );
};

export default HomePage;
