import React from 'react';
import Home from './screens/Home';
import Profile from './screens/Profile';
import Info from './screens/Info';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { SCREEN_NAME } from './constants/screen';

const TabBarIcon = props => {
  const { focused, color, size, name } = props;
  return (
    <Icon
      style={{ fontSize: size, color: focused ? color : 'black' }}
      name={name}
    />
  );
};

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarBadge: 1,
        }}>
        <Tab.Screen
          component={Home}
          name={SCREEN_NAME.HOME}
          options={{
            tabBarIcon: props => <TabBarIcon {...props} name="house-user" />,
          }}
        />
        <Tab.Screen
          component={Profile}
          name={SCREEN_NAME.PROFILE}
          options={{
            tabBarIcon: props => <TabBarIcon {...props} name="user-circle" />,
          }}
        />
        <Tab.Screen
          component={Info}
          name={SCREEN_NAME.INFO}
          options={{
            tabBarIcon: props => <TabBarIcon {...props} name="user-cog" />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
