import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const MapComponent = ({ location, city }) => (
  <MapContainer center={[location.lat, location.lon]} zoom={13} style={{ height: '400px', width: '100%' }}>
    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    <Marker position={[location.lat, location.lon]}>
      <Popup>{city}</Popup>
    </Marker>
  </MapContainer>
);

export default MapComponent;
