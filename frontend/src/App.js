import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';

const App = () => {
  const [city, setCity] = useState('');
  const [location, setLocation] = useState(null);

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearch = async () => {
    const response = await axios.get(`http://localhost:5000/city/${city}`);
    setLocation(response.data.location);
  };

  return (
    <div>
      <h1>Carbon Tracker</h1>
      <input type="text" value={city} onChange={handleInputChange} placeholder="Enter city name" />
      <button onClick={handleSearch}>Search</button>
      {location && (
        <MapContainer center={[location.lat, location.lon]} zoom={13} style={{ height: '400px', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[location.lat, location.lon]}>
            <Popup>
              {city}
            </Popup>
          </Marker>
        </MapContainer>
      )}
    </div>
  );
};

export default App;
