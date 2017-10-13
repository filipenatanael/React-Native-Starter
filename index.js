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
    marginHorizontal: 10,
    color: '#fff',
    //fontStyle: 'italic',
    fontWeight: 'bold', /* Between 100 and 900 */
    textAlign: 'center',
    //textDecorationLine: 'underline line-through',

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
