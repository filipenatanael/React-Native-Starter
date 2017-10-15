import React, { Component } from 'react';
import { View, Text, AppRegistry } from 'react-native';

class MyComponent extends Component {
  render() {
    return (
      <View>
      <Text>{this.props.message}</Text>
      <Text>My name is {this.props.name}</Text>
      </View>
    );
  }
}

class App extends Component {
  render() {
    return (
      <MyComponent
      name='DeadPool.'
      message='Hello!!'
      ></MyComponent>
    );
  }
}

AppRegistry.registerComponent('ReactNativeStarter', () => App);
