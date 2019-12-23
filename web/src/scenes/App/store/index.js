import React, { createContext, useContext, useReducer } from 'react';
import { reducer } from './reducers';

export const GlobalContext = createContext();

export const Provider = ({ initialState, children }) => {
  return (
    <GlobalContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </GlobalContext.Provider>
  );
};
export const useGlobalState = arg => {
  const [state, dispatch] = useContext(GlobalContext);
  return [arg ? state[arg] : state, dispatch];
};
