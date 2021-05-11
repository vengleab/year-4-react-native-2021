import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default props => {
  return (
    <TouchableOpacity onPress={e=> props.setSelectedItem(props.item)}>
      <View style={[styles.item, props.item === props.selectedItem && styles.active]}>
        <Text>{props.item}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#aaa',
    margin: 10,
    padding: 10,
  },
  active: {
    backgroundColor: '#0a0'
  }
});
