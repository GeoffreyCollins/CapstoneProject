import React from 'react';
import { AppProvider } from './context/AppContext';
import CityInputForm from './components/CityInputForm';
import Visualization from './components/Visualization';
import './App.css';

function App() {
  return (
    <AppProvider>
      <div className="App">
        <h1>City Data</h1>
        <CityInputForm />
        <Visualization />
      </div>
    </AppProvider>
  );
}

export default App;