import React, { useContext, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text } from 'react-native';
import AuthContext from '../context/AuthContext';
// import { connect } from 'react-redux';

const AuthComponent = ({ children, ...otherProps }) => {
  const { isAuthenticated } = useContext(AuthContext);
  // const { isAuthenticated } = props;
  const navigation = useNavigation();
  useEffect(() => {
    if (!isAuthenticated) {
      navigation.reset({
        routes: [{ name: 'Login' }],
      });
    }
  }, [isAuthenticated]);

  return React.cloneElement(children, otherProps);
};

export default AuthComponent;
