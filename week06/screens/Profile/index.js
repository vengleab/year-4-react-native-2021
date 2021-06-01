import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';

const Profile = props => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{ fontSize: 30 }}>Profile page</Text>
      <Button
        onPress={() => props.navigation.goBack()}
        mode="contained"
        style={{ margin: 3, padding: 3 }}>
        Go back
      </Button>
    </View>
  );
};

export default Profile;
