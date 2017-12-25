import firebase from 'firebase';
import React, { Component } from 'react';
import { Text, AppRegistry } from 'react-native';
/**
* import Geolocation from './src/Components/Geolocation';
*/

import { isSignedIn } from "./src/Components/AuthWorkflow/services/auth";
import { RootNavigator }  from './src/Components/AuthWorkflow/routes';

export default class App extends Component {
  /*
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
*/

state = {
  signed: false,
  signLoaded: false,
};

componentWillMount() {
  isSignedIn()
  .then(response => this.setState({ signed: response, signLoaded: true }))
  .catch(error => alert("An error has occurred!"));
}

render() {
  const { signLoaded, signed } = this.state;

  if (!signLoaded) {
    return <Text style={{ fontSize: 15, textAlign: 'center', marginTop: 25}}>signLoaded Returned False.</Text>;
  } else {

    const Layout = RootNavigator(signed);
    return (
      <Layout />
    );
  }
}

}

AppRegistry.registerComponent('ReactNativeStarter', () => App);
