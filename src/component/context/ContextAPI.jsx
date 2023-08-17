"use client";
import { createContext, useState } from "react";

export const ContextAPI = createContext();

export const ContextAPIProvider = ({ children }) => {
  const [loginStat, setLoginStat] = useState(false);

  const updateLoginData = (newData) => {
    setLoginData(newData);
  };

  const contextValue = {
    loginStat,
    setLoginStat,
  };

  return (
    <ContextAPI.Provider value={contextValue}>{children}</ContextAPI.Provider>
  );
};
