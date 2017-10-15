//Import
import React from 'react';
import { View, Text, TouchableOpacity, AppRegistry } from 'react-native';


const sayHello = () => {
  alert('Hello');
}

//Create component
const App = () => {
  const { ViewStyle, CustomButton, TextButton, } = Styles;
  return (
    <View style={ViewStyle}>
       <TouchableOpacity style={CustomButton}>
         <Text style={TextButton}>Click Here</Text>
       </TouchableOpacity>
    </View>
  );
};

//Formatting
const Styles = {
  CustomButton: {
    backgroundColor: '#000',
    padding: 10,
    borderColor: '#1d8eb8',
    borderWidth: 3,
    borderRadius: 50,
    elevation: 5,
    /*Shadow props are only for iOS. With Android,
    you can use elevation in your View style.*/
  },
  TextButton: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    alignSelf: 'center',

  },
  ViewStyle: {
    backgroundColor: '#FFF8DC',
    height: 500,
    justifyContent: 'center', /* Horizontal alignment */
    /* alignItems: 'center',    Vertical alignment */
    flexDirection: 'column',
  },
};


//Render to device
AppRegistry.registerComponent('ReactNativeStarter', () => App);
