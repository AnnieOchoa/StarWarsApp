import { createContext, useState } from 'react';

export const SessionContext = createContext(null);

const SessionProvider = ({ children }) => {
  //children es quien recibe hijos.
  const [sessionData, setSessionData] = useState({
    favorites: {
      movies: [],
      planets: [],
      characters: [],
    },
    user: null,
  });

  return (
    <SessionContext.Provider value={{ sessionData, setSessionData }}>
      {children}
    </SessionContext.Provider>
  );
};

export default SessionProvider;
