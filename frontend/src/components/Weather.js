import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography } from '@material-ui/core';

const Weather = ({ city }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (city) {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY`)
        .then(response => setWeather(response.data))
        .catch(error => console.error('Error fetching weather data', error));
    }
  }, [city]);

  return (
    weather && (
      <Card style={{ marginTop: '20px' }}>
        <CardContent>
          <Typography variant="h5">Weather in {city}</Typography>
          <Typography variant="body1">Temperature: {weather.main.temp}°K</Typography>
          <Typography variant="body1">Weather: {weather.weather[0].description}</Typography>
        </CardContent>
      </Card>
    )
  );
};

export default Weather;
