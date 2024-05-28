import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const Visualization = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/api/cities');
      setData(result.data);
    };
    fetchData();
  }, []);

  const chartData = {
    labels: data.map(city => city.name),
    datasets: [
      {
        label: 'Population',
        data: data.map(city => city.population),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      }
    ]
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  return <Bar data={chartData} options={options} />;
};

export default Visualization;
