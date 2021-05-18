import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import ListItemContext from '../../context/ListItemContext';

export default props => {
  const { selectedItem, setSelectedItem } = React.useContext(ListItemContext);
  const { item } = props;
  return (
    <TouchableOpacity onPress={e => setSelectedItem(item)}>
      <View style={[styles.item, item === selectedItem && styles.active]}>
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
    backgroundColor: '#0a0',
  },
});
