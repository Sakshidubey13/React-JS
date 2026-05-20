"use client";

import { useContext, createContext, useState } from "react";

const AppContext = createContext();
export default function ContextProvider({ childern }) {
  const [user, setUser] = useState(null);
  
  const login = (name) => {
    setUser({ name });
  };
  const logout = () => {
    setUser(null);
  };

  return (
    <AppContext.Provider value={{ user, login, logout }}>
      {children}
    </AppContext.Provider>
  );
}

const useApp = () => {
  useContext(AppContext);
};
