//Import
import React from 'react';
import { Text, AppRegistry } from 'react-native';

//Format
const Estilos = {
  Texto: {
    fontSize: 50,
    backgroundColor: '#3EDE5B',
    height: 300,
    //width: 300
  }
};


//Create component
const App = () => {
  return (
    <Text style={Estilos.Texto}>Olá</Text>
  );
}
//Render to device
AppRegistry.registerComponent('ReactNativeStarter', () => App);
