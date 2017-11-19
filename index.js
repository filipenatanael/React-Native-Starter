import React from 'react';
import { AppRegistry } from 'react-native';

import Geolocation from './src/Components/Geolocation';


const App = () => (
   <Geolocation />
);


AppRegistry.registerComponent('ReactNativeStarter', () => App);
