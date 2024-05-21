import React from 'react';
import './App.css';
import Header from './components/Header';
import DataInputForm from './components/DataInputForm';
import Visualization from './components/Visualization';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <DataInputForm />
        <Visualization />
      </main>
    </div>
  );
}

export default App;
