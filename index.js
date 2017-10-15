import React, { Component } from 'react';
import { View, Button, Text, AppRegistry } from 'react-native';

class MyComponent extends Component {
  render() {
    return (
      <View>
      <Text>{this.props.message}</Text>
      <Text>{this.props.firstName} {this.props.lastName}</Text>
      </View>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { stt_firstName: 'Filipe', stt_lastName: 'Natanael', sst_menssage: 'Hello!!' };
  }
  changeText() {
    this.setState({ sst_menssage: 'Hey, how are you?' });
  }

  render() {
    return (
      <View>
      <MyComponent firstName={this.state.stt_firstName} lastName={this.state.stt_lastName} message={this.state.sst_menssage} ></MyComponent>

      <Button title='My Button' onPress={() => { this.changeText() }} />
      </View>
    );
  }
}

AppRegistry.registerComponent('ReactNativeStarter', () => App);
