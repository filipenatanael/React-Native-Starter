//Import
import React from 'react';
import { View, Image, Text, AppRegistry } from 'react-native';


const sayHello = () => {
  alert('Hello');
}

//Create component
const App = () => {
  const { ViewStyle, ImageStyle, TextStyle, } = Styles;
  return (
    <View style={ViewStyle}>
    <Image style={ImageStyle} source={require('./images/react-native.png')}>
    <Text style={TextStyle}>Click here to read more about React Native.</Text>
    </Image>
    </View>
  );
};

//Formatting
const Styles = {
  ImageStyle: {
    width: 300,
    height: 300,
    justifyContent: 'flex-end',
  },
  TextStyle: {
    wigth: 250,
    hegth: 50,
    fontSize: 25,
    textAlign: 'center',
    color: '#fff',
  },
  ViewStyle: {
    backgroundColor: '#FFF8DC',
    height: 500,
    justifyContent: 'center', /* Horizontal alignment */
    alignItems: 'center', 
    //flexDirection: 'column',
  },
};


//Render to device
AppRegistry.registerComponent('ReactNativeStarter', () => App);
