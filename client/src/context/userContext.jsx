'use client';

import { createContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // * Hooks
  const initialData = {};
  const [user, setUser] = useState(initialData);

  // * Methods
  const cleanUser = () => setUser(initialData);

  return (
    <UserContext.Provider value={{ user, setUser, cleanUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
