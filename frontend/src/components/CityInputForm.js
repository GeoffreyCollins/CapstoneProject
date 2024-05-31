import React, { useState } from 'react';
import axios from 'axios';

const CityInputForm = () => {
  const [cityName, setCityName] = useState('');
  const [population, setPopulation] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/cities', {
        name: cityName,
        population: parseInt(population, 10)
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error posting data', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
        placeholder="City Name"
        required
      />
      <input 
        type="number"
        value={population}
        onChange={(e) => setPopulation(e.target.value)}
        placeholder="Population"
        required
      />
      <button type="submit">Add City</button>
    </form>
  );
};

export default CityInputForm;
