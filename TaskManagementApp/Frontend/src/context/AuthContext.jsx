import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

//Create a context for authentication
const AuthContext = createContext();


//Create a custom hook to use the AuthContext
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
    console.log('User logged in:', userData);
  };

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
};

export const useAuth = () => useContext(AuthContext);