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

    // Fetch location data from OpenWeather API
    const weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${encodedCityName}&appid=${process.env.OPENWEATHERMAP_API_KEY}`);
    if (!weatherResponse.ok) {
      throw new Error(`OpenWeather API error: ${weatherResponse.statusText}`);
    }
    const weatherData = weatherResponse.data;
    const { coord } = weatherData;
    const location = { lat: coord.lat, lon: coord.lon };

    // Fetch carbon data from Python ClimateIQ API server
    const climateResponse = await axios.get(`http://localhost:5002/climateiq/city/${encodedCityName}`);
    if (climateResponse.status !== 200) {
      throw new Error(`ClimateIQ API error: ${climateResponse.statusText}`);
    }
    const climateData = climateResponse.data;
    const { carbon_footprint } = climateData;

    // Combine data and send response
    res.json({ location, carbon_footprint });
  } catch (error) {
    console.error(`Error retrieving data for ${cityName}:`, error.message);
    if (error.response) {
      console.error('Response data:', error.response.data);
      console.error('Response status:', error.response.status);
      console.error('Response headers:', error.response.headers);
    }
    if (error.message.includes('City not found')) {
      res.status(404).send('City not found');
    } else {
      res.status(500).send('Error retrieving city data');
    }
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
