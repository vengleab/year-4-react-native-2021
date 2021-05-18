import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import ListItemContext from '../../context/ListItemContext';

// export default props => {
//   const { selectedItem, setSelectedItem } = React.useContext(ListItemContext);
//   const { item } = props;
//   return (
//     <TouchableOpacity onPress={e => setSelectedItem(item)}>
//       <View style={[styles.item, item === selectedItem && styles.active]}>
//         <Text>{props.item}</Text>
//       </View>
//     </TouchableOpacity>
//   );
// };

export default class Item extends React.Component {
  // static contextType = ListItemContext;
  render() {
    // const { selectedItem, setSelectedItem } = this.context;
    const { item } = this.props;
    return (
      <ListItemContext.Consumer>
        {/* {contextProps => { */}
        {({ setSelectedItem, selectedItem }) => {
          return (
            <TouchableOpacity onPress={e => setSelectedItem(item)}>
              <View
                style={[styles.item, item === selectedItem && styles.active]}>
                <Text>{item}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      </ListItemContext.Consumer>
    );
  }
}

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
