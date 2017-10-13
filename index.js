//Import
import React from 'react';
import { Text, AppRegistry } from 'react-native';

//Formatting
const Styles = {
  Text: {
    fontSize: 50,
    backgroundColor: '#3EDE5B',
    paddingTop: 20,
    paddingBottom: 30,
    margin: 10,
    marginHorizontal: 5,
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
