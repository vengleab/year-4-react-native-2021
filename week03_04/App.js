import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import Item from './components/Item';
import ListItem from './components/ListItem';
import ListItemContext from './context/ListItemContext';

export default () => {
  const items = ['Apple', 'Banana', 'Cat', 'Dog', 'Eat'];
  const [selectedItem, setSelectedItem] = useState('Dog');
  return (
    <View>
      <ListItemContext.Provider value={{ selectedItem, setSelectedItem }}>
        <ListItem items={items} />
      </ListItemContext.Provider>
    </View>
  );
};
