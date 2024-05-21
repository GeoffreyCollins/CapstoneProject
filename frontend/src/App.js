import React, { useContext } from 'react';
import './App.css';
import Header from './components/Header';
import DataInputForm from './components/DataInputForm';
import Visualization from './components/Visualization';
import Weather from './components/Weather';
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
            <Visualization />
            <Weather city={data.city} />
          </main>
        </div>
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;
