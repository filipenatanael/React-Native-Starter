import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import MapView from 'react-native-maps';

export default class Geolocation extends Component {

  render() {
    const { region } = this.props;
    console.log(region);
    return (
      <View style={styles.container}>
      <MapView
      style={ styles.map }
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }
});
