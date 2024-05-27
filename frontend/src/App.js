import React, { useContext } from 'react';
import './App.css';
import Header from './components/Header';
import DataInputForm from './components/DataInputForm';
import Visualization from './components/Visualization'; 
import GraphPlaceholder from './components/GraphPlaceholder'; // Placeholder for now
import { AppProvider, AppContext } from './context/AppContext';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import theme from './theme';

function App() {
  const { data } = useContext(AppContext);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppProvider>
        <div className="App">
          <Header />
          <main>
            <DataInputForm />
            <GraphPlaceholder /> {/* Placeholder for the graph */}
            {/* <Visualization /> Uncomment this when you have the actual visualization component ready */}
          </main>
        </div>
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;
