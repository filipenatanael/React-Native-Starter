/*
Code of the index of the application...
to test it is necessary to place it in the root and adjust the path of the directories
or copy and paste the code into (./ReactNativeStarter/Index.js)
*/

import React, { Component } from 'react';
import { Text, AppRegistry } from 'react-native';

import { isSignedIn } from "./src/Components/AuthWorkflow/services/auth";
import { RootNavigator }  from './src/Components/AuthWorkflow/routes';

export default class App extends Component {
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
