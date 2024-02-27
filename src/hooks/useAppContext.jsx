"use client";
import React, { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

const useAppContext = () => {
  const { user, setUser } = useContext(AppContext);
  const login = (userEmail, password, role) => {
    setUser({
      name: userEmail,
      lastName: password,
      email: userEmail,
      role,
    });
  };
  return {
    user,
    login,
  };
};

export default useAppContext;
