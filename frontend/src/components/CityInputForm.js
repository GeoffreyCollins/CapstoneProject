import React, { useState } from 'react';
import axios from 'axios';

const CityInputForm = () => {
  const [name, setName] = useState('');
  const [population, setPopulation] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/cities', { name, population });
      // Clear the form
      setName('');
      setPopulation('');
      setError('');
    } catch (error) {
      setError('Failed to add city');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="City Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Population"
        value={population}
        onChange={(e) => setPopulation(e.target.value)}
      />
      <button type="submit">Add City</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default CityInputForm;
