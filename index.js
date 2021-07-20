/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './week13/App';
import { name as appName } from './app.json';
import 'react-native-gesture-handler';

if (__DEV__) {
  import('./week13/config/reactotron').then(() =>
    console.log('Reactotron Configured'),
  );
}

AppRegistry.registerComponent(appName, () => App);
