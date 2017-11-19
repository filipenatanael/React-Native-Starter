import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import MapView from 'react-native-maps';

export default class Geolocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialPosition:
      {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0
      },
      markerPosition:
      {
        latitude: 0,
        longitude: 0
      }
    }
  }


  render() {
    return (
      <View style={styles.container}>
      <MapView style={styles.maps} initialRegion={this.state.initialPosition}>
      <MapView.Market coordinate={this.state.initialPosition}>
         <View style={styles.radius}>
         <View style={styles.marker}>

         </View>
         </View>
      </MapView.Market>
      </MapView>
      </View>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000'
  },
  maps: {
    left: 0,
    right: 0
  },
  radius: {

  },
  marker: {

  }
});
