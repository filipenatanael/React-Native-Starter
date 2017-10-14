//Import
import React from 'react';
import { Text, View, AppRegistry } from 'react-native';

//Create component
const App = () => {
  const { ViewStyle, TextStyle1, TextStyle2, } = Styles;
  return (
    <View style={ViewStyle}>
    <Text style={TextStyle1}>Hello World! 1</Text>
    <Text style={TextStyle2}>Hello World! 2</Text>
    </View>
  );
};


//Formatting
const Styles = {
  TextStyle1: {
    fontSize: 50,
    backgroundColor: '#99FD77',
    paddingTop: 20,
    paddingBottom: 30,
    margin: 10,
    marginHorizontal: 10,
    color: '#000',
    fontWeight: 'bold', /* Between 100 and 900 */
    textAlign: 'center',
  },
  TextStyle2: {
    fontSize: 50,
    backgroundColor: '#D8D8D8',
    paddingTop: 20,
    paddingBottom: 30,
    margin: 10,
    marginHorizontal: 10,
    color: '#000',
    fontWeight: 'bold', /* Between 100 and 900 */
    textAlign: 'center',
  },
  ViewStyle: {
    backgroundColor: '#FFF8DC',
    height: 300,
    justifyContent: 'center', /* Horizontal alignment */
    /* alignItems: 'center',    Vertical alignment */
    flexDirection: 'column',
  },
};


//Render to device
AppRegistry.registerComponent('ReactNativeStarter', () => App);
