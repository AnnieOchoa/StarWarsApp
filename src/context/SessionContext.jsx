import { createContext, useState } from 'react';

export const SessionContext = createContext(null);

const SessionProvider = ({ children }) => {
  const [sessionData, setSessionData] = useState({
    favorites: [],
    user: null,
  });

  return (
    <SessionContext.Provider value={{ sessionData, setSessionData }}>
      {children}
    </SessionContext.Provider>
  );
};

export default SessionProvider;
