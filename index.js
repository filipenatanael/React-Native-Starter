//Import
import React from 'react';
import { View, Button, AppRegistry } from 'react-native';


const sayHello = () => {
  alert('Hello');
}

//Create component
const App = () => {
  const { ViewStyle, } = Styles;
  return (
    <View style={ViewStyle}>
     <Button
     title='Say Hello'
     color='#000'
     accessibilityLabel='Click here to say hello!'
     onPress={sayHello}
     />
    </View>
  );
};

//Formatting
const Styles = {
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
