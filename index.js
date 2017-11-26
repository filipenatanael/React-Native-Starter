import firebase from 'firebase';
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import Geolocation from './src/Components/Geolocation';


export default class App extends Component {
  componentWillMount() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyCkyZoDkl2y_REw4Wsi1CZhcH4ChIEgcZU",
      authDomain: "mapstesting-65542.firebaseapp.com",
      databaseURL: "https://mapstesting-65542.firebaseio.com",
      projectId: "mapstesting-65542",
      storageBucket: "mapstesting-65542.appspot.com",
      messagingSenderId: "455795677208"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Geolocation />
    );
  }

}

AppRegistry.registerComponent('ReactNativeStarter', () => App);
