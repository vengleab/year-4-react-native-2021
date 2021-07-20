import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
const AuthContext = React.createContext({});

export const AuthProvider = props => {
  const [token, setToken] = useState();
  const [firstLoad, setFirstLoad] = useState(true);

  const syncTokenWithAsyncStorage = async () => {
    console.log(token);
    const key = '@token';
    if (firstLoad) {
      await AsyncStorage.getItem(key).then(setToken);
    }
    await AsyncStorage.setItem(key, token);
  };

  useEffect(() => {
    syncTokenWithAsyncStorage();
  }, [token]);

  useEffect(() => {
    setFirstLoad(false);
  }, []);

  return (
    <AuthContext.Provider value={{ token, isAuthenticated: !!token, setToken }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
