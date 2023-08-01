import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = (email, password) => {
    // Authenticate user
    // If authentication is successful, set isLoggedIn to true
    setIsLoggedIn(true);
    setEmail(email);
    setPassword(password);
    console.log(email)
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, email, password, login}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
