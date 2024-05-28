import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Chart } from 'react-charts';

const Visualization = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/api/cities');
      setData(result.data);
    };
    fetchData();
  }, []);

  const chartData = React.useMemo(
    () => [
      {
        label: 'Cities',
        data: data.map((city) => [city.name, city.population]),
      },
    ],
    [data]
  );

  const axes = React.useMemo(
    () => [
      { primary: true, type: 'ordinal', position: 'bottom' },
      { type: 'linear', position: 'left' },
    ],
    []
  );

  return <Chart data={chartData} axes={axes} />;
};

export default Visualization;
