//Import
import React from 'react';
import { Text, AppRegistry } from 'react-native';

//Formatting
const Styles = {
  Text: {
    fontSize: 30,
    backgroundColor: '#3EDE5B',
    margin: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 15 },
    shadowOpacity: 1

  }
};

//Create component
const App = () => {
  return (
    <Text style={Styles.Text}>Hello World!</Text>
  );
}
//Render to device
AppRegistry.registerComponent('ReactNativeStarter', () => App);
