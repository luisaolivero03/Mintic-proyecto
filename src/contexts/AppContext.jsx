"use client";
import { createContext, useState } from "react";

const initialState = {
  name: null,
  lastName: null,
  email: null,
  role: null,
};

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(initialState);
  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};
