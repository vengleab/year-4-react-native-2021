import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import Item from '../Item';

export default props => {
  return (
    <View>
      {props.items.map( item => <Item key={item} item={item} selectedItem={props.selectedItem} setSelectedItem={props.setSelectedItem} />)}
    </View>
  );
};
