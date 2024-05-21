import React, { useState } from 'react';
import { TextField, Button, Container } from '@material-ui/core';

const DataInputForm = () => {
  const [city, setCity] = useState('');
  const [population, setPopulation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <TextField
          label="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Population"
          value={population}
          onChange={(e) => setPopulation(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default DataInputForm;
