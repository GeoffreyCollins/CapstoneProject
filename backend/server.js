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
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.OPENWEATHERMAP_API_KEY}`);
    const { coord } = response.data;
    res.json({ location: { lat: coord.lat, lon: coord.lon } });
  } catch (error) {
    res.status(500).send('Error retrieving city data');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
