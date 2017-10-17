import React, { Component } from 'react';
import { AppRegistry, Text, View, Button, } from 'react-native';
import { StackNavigator } from 'react-navigation';

class ChatScreen extends Component {
  static navigationOptions = {
    title: 'Chat with my friend',
  };
  render() {
    return (
      <View>
        <Text>I am happy to see you!</Text>
      </View>
    );
  }
}

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, how are you? </Text>
        <Button onPress={() => navigate('Chat')} title="Go to Next Page!" />
      </View>
    );
  }
}

export const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
});


AppRegistry.registerComponent('ReactNativeStarter', () => SimpleApp);
