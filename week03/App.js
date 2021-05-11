import React, { useEffect, useState } from 'react';
import { View, Text, TextInput } from 'react-native';

export default () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isIntitialized, setIsInitialized] = useState(false);

  function onInputChange(value) {
    setEmail(value);
  }

  useEffect(() => {
    if (isIntitialized && !email.endsWith('.com')) {
      setError('Incorrect Email');
    } else {
      setError('');
    }
  }, [email]);

  useEffect(() => {
    alert('On first render');
    setIsInitialized(true);
  }, []);

  return (
    <View>
      <TextInput
        style={{ borderColor: 'black', borderWidth: 1, margin: 5 }}
        placeholder="Input your email adress here..."
        onChangeText={onInputChange}
      />
      {error ? <Text>{error}</Text> : <></>}
    </View>
  );
};
