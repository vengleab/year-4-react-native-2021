import React from 'react';
import Home from './screens/Home';
import Profile from './screens/Profile';
import Info from './screens/Info';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { SCREEN_NAME } from './constants/screen';
import {
  createStackNavigator,
  HeaderBackButton,
} from '@react-navigation/stack';
import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import Screen3 from './screens/Screen3';
import Screen4 from './screens/Screen4';
import HeaderTitle from './components/HeaderTitle';

const TabBarIcon = props => {
  const { focused, color, size, name } = props;
  return (
    <Icon
      style={{ fontSize: size, color: focused ? color : 'green' }}
      name={name}
    />
  );
};

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStackNavigation = () => {
  return (
    // <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Navigator>
      <Stack.Screen
        component={Home}
        name={SCREEN_NAME.HOME}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={Screen1}
        name={'Screen1'}
        options={({ navigation }) => {
          return {
            headerShown: navigation.canGoBack(),
            headerTitle: props => <HeaderTitle name="home" {...props} />,
            headerTintColor: 'blue',
            headerLeft: null,
          };
        }}
      />
      <Stack.Screen
        component={Screen2}
        name={'Screen2'}
        options={optionProps => ({
          headerLeft: null,
          headerRight: props => {
            return (
              <Icon
                {...props}
                name="home"
                onPress={() => {
                  optionProps.navigation.reset({
                    index: 0,
                    routes: [{ name: SCREEN_NAME.HOME }],
                  });
                }}
              />
            );
          },
        })}
      />
      <Stack.Screen component={Screen3} name={'Screen3'} />
      <Stack.Screen component={Screen4} name={'Screen4'} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarBadge: 1,
        }}>
        <Tab.Screen
          component={HomeStackNavigation}
          name={SCREEN_NAME.HOME_NAVIGATION}
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
