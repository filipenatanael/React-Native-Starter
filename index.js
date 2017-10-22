import React, { Component } from 'react';
import { AppRegistry, Text, View, Button, } from 'react-native';
import { StackNavigator } from 'react-navigation';





AppRegistry.registerComponent('ReactNativeStarter', () => AppMy);


/*
import { StackNavigator } from 'react-navigation';
import ProfileScreen from './ProfileScreen';


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigate('Profile', { name: 'Jane' })
        }
      />
    );
  }
}

const AppMy = StackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
});

*/
