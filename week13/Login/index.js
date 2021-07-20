import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import AuthContext from '../context/AuthContext';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

export default props => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const { setToken, isAuthenticated } = useContext(AuthContext);
  const navigation = useNavigation();

  async function login() {
    try {
      const res = await axios.post(
        'https://tools.so-vengleab.engineer/api/auth/login',
        {
          email: username,
          password,
        },
      );
      const responseData = res.data;
      const token = responseData?.result?.token;
      alert('Login successful');
      setToken(token);
    } catch (error) {
      alert('Login Fail');
      console.log('error', error);
    }
  }

  useEffect(() => {
    if (isAuthenticated) {
      if (navigation.canGoBack()) {
        navigation.goBack();
      } else {
        navigation.navigate('Home');
      }
    }
  }, [isAuthenticated]);

  return (
    <View style={styles.center}>
      <TextInput
        style={styles.textInput}
        label="username"
        mode="outlined"
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.textInput}
        secureTextEntry={true}
        onChangeText={setPassword}
        label="Password"
        mode="outlined"
      />
      <Button
        icon="lock"
        mode="contained"
        style={styles.loginButton}
        onPress={login}>
        Login
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    margin: 10,
    flex: 1,
  },
  textInput: {
    padding: 10,
  },
  loginButton: {
    padding: 10,
    margin: 10,
  },
  image: {
    alignSelf: 'center',
  },
});
