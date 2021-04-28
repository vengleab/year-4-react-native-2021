import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.textStyle}>Hello world</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    color: '#e00',
    backgroundColor: '#00e',
    margin: 20,
    padding: 20,
    borderRadius: 20,
    alignItems: 'flex-end',
  },
});
