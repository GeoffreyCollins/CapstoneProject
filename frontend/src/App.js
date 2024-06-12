import React, { useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';
import './App.css'; // Assuming you have an App.css for general styles

const FAQ = lazy(() => import('./components/FAQ'));
const Dashboard = lazy(() => import('./components/Dashboard')); // Lazy load the Dashboard component

const App = () => {
  const [city, setCity] = useState('');
  const [location, setLocation] = useState(null);
  const [carbonFootprint, setCarbonFootprint] = useState(null); // State to handle carbon footprint data
  const [error, setError] = useState(null); // State to handle errors

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearch = async () => {
    if (city) {
      try {
        console.log(`Searching for city: ${city}`);
        const response = await axios.get(`http://localhost:5001/city/${encodeURIComponent(city)}`);
        setLocation(response.data.location);
        setCarbonFootprint(response.data.carbon_footprint); // Set carbon footprint data
        setError(null); // Clear any previous errors
        console.log(`Location and carbon footprint found: ${JSON.stringify(response.data)}`);
      } catch (error) {
        console.error(`Error fetching location for city ${city}:`, error.message);
        if (error.response && error.response.status === 404) {
          setError('City not found. Please check the spelling and try again.');
        } else {
          setError('Error retrieving city data. Please try again.');
        }
        setLocation(null); // Clear previous location data
        setCarbonFootprint(null); // Clear previous carbon footprint data
      }
    }
  };

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
                <button onClick={handleSearch}>Search</button>
                {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}
                {location && (
                  <>
                    <MapContainer
                      key={`${location.lat}-${location.lon}`} // Unique key to force re-render
                      center={[location.lat, location.lon]}
                      zoom={13}
                      style={{ height: '400px', width: '100%' }}
                    >
                      <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      />
                      <Marker position={[location.lat, location.lon]}>
                        <Popup>
                          {city}
                          <br />
                          Carbon Footprint: {carbonFootprint} {/* Display carbon footprint */}
                        </Popup>
                      </Marker>
                    </MapContainer>
                    <Dashboard city={city} location={location} carbonFootprint={carbonFootprint} />
                  </>
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
