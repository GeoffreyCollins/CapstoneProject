import React, { useState, useCallback, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from 'axios';
import debounce from 'lodash.debounce';
import 'leaflet/dist/leaflet.css';

const FAQ = lazy(() => import('./components/FAQ'));

const App = () => {
  const [city, setCity] = useState('');
  const [location, setLocation] = useState(null);

  const handleInputChange = (e) => {
    setCity(e.target.value);
    debouncedHandleSearch(e.target.value);
  };

  const handleSearch = async (city) => {
    if (city) {
      const response = await axios.get(`http://localhost:5001/city/${city}`);
      setLocation(response.data.location);
    }
  };

  const debouncedHandleSearch = useCallback(debounce(handleSearch, 300), []);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
          </ul>
        </nav>

        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={
              <div>
                <h1>Carbon Tracker</h1>
                <input type="text" value={city} onChange={handleInputChange} placeholder="Enter city name" />
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
            } />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
