/**
 * @format
 */

import {AppRegistry} from 'react-native';
import MTonAirApp from './src';
import {name as appName} from './app.json';


// https://reactnative.dev/docs/appregistry
AppRegistry.registerComponent(appName, () => MTonAirApp);