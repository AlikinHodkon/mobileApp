import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';

export const useAuthViewModel = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const isAuthenticated = await AsyncStorage.getItem('userData').then((data) => !!data)
      setIsAuth(isAuthenticated);
      setIsLoading(false);
    };
    
    checkAuth();
  }, []);

  return { isAuth, setIsAuth, isLoading };
};