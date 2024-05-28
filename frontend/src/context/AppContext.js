import React, { createContext, useReducer } from 'react';

const initialState = {
  cities: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_CITIES':
      return { ...state, cities: action.payload };
    default:
      return state;
  }
};

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
