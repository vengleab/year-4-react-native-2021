import React from 'react';
import { View, Text } from 'react-native';

export default props => {
  return (
    <View>
      <Text style={{ fontSize: 50 }}>Home page 1 - {props.color}</Text>
    </View>
  );
};
