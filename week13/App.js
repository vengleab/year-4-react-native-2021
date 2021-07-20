// import { Provider } from 'react-redux';
import React from 'react';
import Home from './Home';
import AuthComponent from './AuthComponent';
// import store from './redux/store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import { AuthProvider } from './context/AuthContext';

const Stack = createStackNavigator();

const AuthHome = props => (
  <AuthComponent {...props}>
    <Home />
  </AuthComponent>
);

export default () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="Home"
            component={props => <AuthHome {...props} color="black" />}
          />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
};
