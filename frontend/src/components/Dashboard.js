import React from 'react';
import './Dashboard.css';

const Dashboard = ({ city, location, carbonFootprint }) => {
    return (
        <div className="dashboard">
            <h2>City: {city}</h2>
            <p>Latitude: {location.lat}</p>
            <p>Longitude: {location.lon}</p>
            <p>Carbon Footprint: {carbonFootprint}</p>
        </div>
    );
};

export default Dashboard;