// src/contexts/UserContext.jsx
import React, { createContext, useContext, useState } from 'react';

// Create the UserContext and a hook to use it
const UserContext = createContext();
export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Store user details, initially null
  const [role, setRole] = useState("admin"); // Store role information

  // Function to log in a user and set user information
  const loginUser = (userData, userRole) => {
    setUser(userData);
    setRole(userRole);
  };

  // Function to log out a user and clear user information
  const logoutUser = () => {
    setUser(null);
    setRole("");
  };

  return (
    <UserContext.Provider value={{ user, role, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};
