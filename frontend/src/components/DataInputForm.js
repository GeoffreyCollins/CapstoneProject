import React, { useState, useContext } from 'react';
import { TextField, Button, Container, Grid, Paper } from '@material-ui/core';
import { AppContext } from '../context/AppContext';
import axios from 'axios';

const DataInputForm = () => {
  const { setData } = useContext(AppContext);
  const [city, setCity] = useState('');
  const [population, setPopulation] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/cities', { name: city, population });
      setData(prevData => ({ ...prevData, city: response.data.name, population: response.data.population }));
    } catch (error) {
      console.error('Error saving city data:', error);
    }
  };

  return (
    <Container>
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                label="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                fullWidth
                margin="normal"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Population"
                value={population}
                onChange={(e) => setPopulation(e.target.value)}
                fullWidth
                margin="normal"
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default DataInputForm;
