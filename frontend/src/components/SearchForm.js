import React, { useState } from 'react';
import { Box, Button, Input } from '@chakra-ui/react';

const SearchForm = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleInputChange = (e) => setCity(e.target.value);
  const handleSearch = () => onSearch(city);

  return (
    <Box mb={4}>
      <Input value={city} onChange={handleInputChange} placeholder="Enter city name" mb={2} />
      <Button onClick={handleSearch} colorScheme="blue">Search</Button>
    </Box>
  );
};

export default SearchForm;
