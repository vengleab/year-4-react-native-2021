import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import ListItem from './components/ListItem';

export default () => {
  const items = ['Apple', 'Banana', 'Cat', 'Dog', 'Eat'];
  const [selectedItem, setSelectedItem] = useState('')
  return <View>
    <ListItem items={items} selectedItem={selectedItem} setSelectedItem={setSelectedItem}/>
  </View>
}