import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

import Application from './src/Application';


const App = () => (
   <Application />
);


AppRegistry.registerComponent('ReactNativeStarter', () => App);
