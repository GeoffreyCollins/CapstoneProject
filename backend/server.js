const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());

app.get('/city/:city', async (req, res) => {
  const cityName = req.params.city;
  try {
    console.log(`Received request for city: ${cityName}`);
    const encodedCityName = encodeURIComponent(cityName);
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${encodedCityName}&appid=${process.env.OPENWEATHERMAP_API_KEY}`);
    const { coord } = response.data;
    console.log(`Coordinates for ${cityName}: ${coord.lat}, ${coord.lon}`);
    res.json({ location: { lat: coord.lat, lon: coord.lon } });
  } catch (error) {
    console.error(`Error retrieving city data for ${cityName}:`, error.message);
    if (error.response) {
      console.error('Response data:', error.response.data);
      console.error('Response status:', error.response.status);
      console.error('Response headers:', error.response.headers);
    }
    if (error.response && error.response.status === 404) {
      res.status(404).send('City not found');
    } else {
      res.status(500).send('Error retrieving city data');
    }
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
