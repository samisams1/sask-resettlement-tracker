import React, { createContext, useState } from 'react';

// 1. Create the empty Context radio tower link
export const AuthContext = createContext();

// 2. Build the Provider component that will wrap our whole application tree
export function AuthProvider({ children }) {
  // Fixed: Explicitly initialized with null for clean boolean checks
  const [user, setUser] = useState(null); 

  // Function to handle login actions
  const login = (userName) => {
    setUser({ name: userName, role: "Software Developer", location: "Dubai -> Saskatchewan" });
  };

  // Function to handle logout actions
  const logout = () => {
    setUser(null);
  };

  return (
    // 3. Broadcast 'user', 'login', and 'logout' down to every single nested child page
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
