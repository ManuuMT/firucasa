'use client';

import loginService from '@/services/users/login';
import registerService from '@/services/users/register';
import { toastHandler } from '@/utils/toastHandler';
import { createContext, useContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import verifyService from '@/services/users/verify';

const UserContext = createContext();

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error('useUser must be used within a UserProvider');
  return context;
};

export const UserProvider = ({ children }) => {
  // * Hooks
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // * Methods
  const login = async values => {
    const res = await loginService(values);
    if (res?.status === 200) {
      toastHandler('Login exitoso', 'success');
      setUser(res.data);
      return true;
    } else toastHandler(res, 'error');
  };

  const register = async values => {
    const res = await registerService(values);

    if (res?.status === 200) {
      toastHandler('Registro exitoso', 'success');
      setUser(res.data);
      return true;
    } else toastHandler(res, 'error');
  };

  const logout = () => setUser(null);

  const checkLogin = async () => {
    setIsLoading(true);
    const { token } = Cookies.get();
    if (token) {
      try {
        const res = await verifyService(token);
        setUser(res.data);
      } catch (error) {
        setUser(null);
      }
    }
    setIsLoading(false);
  };

  // * Life Cycle
  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <UserContext.Provider value={{ user, login, register, logout, isLoading }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
