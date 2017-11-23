import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Dimensions
} from 'react-native';
import MapView from 'react-native-maps';

const { width, height } = Dimensions.get('window')

const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width
const ASPECT_RADIO = width / height
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RADIO

export default class GeolocationTesting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialPosition:
      {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0,
      },
      markerPosition:
      {
        latitude: 40.7143528,
        longitude: -74.0059731
      }
    }
  }

  watchID: ?number = null

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      var lat = parseFloat(position.coords.latitude)
      var long = parseFloat(position.coords.longitude)
      console.log(position.coords.latitude);
      console.log(position.coords.longitude);
      var initialRegion = {
        latitude: lat,
        longitude: long,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      }
      this.setState({ initialPosition: initialRegion })
      this.setState({ markerPosition: initialRegion })
    },
    (error) => alert(JSON.stringify(error)),
    { enableHighAccuracy: true, timeout: 20000 }
  );

  setTimeout(function () {
    this.watchID = navigator.geolocation.watchPosition((position) => {
      var lat = parseFloat(position.coords.latitude)
      var long = parseFloat(position.coords.longitude)
      console.log(position.coords.latitude);
      var lastRegion = {
        latitude: lat,
        longitude: long,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      }

      this.setState({ initialPosition: lastRegion })
      this.setState({ markerPosition: lastRegion })
    })
  }, 30500);

}

componentWillUnmount() {
  navigator.geolocation.clearWatch(this.watchID)
}


render() {

  return (
    <View style={styles.container}>
    <MapView style={styles.map} region={this.state.initialPosition} />
    <MapView.Marker coordinate={this.state.markerPosition}>
    <View style={styles.radius}>
    <View style={styles.marker}>
    </View>
    </View>
    </MapView.Marker>
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
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  radius: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    overflow: 'hidden',
    backgroundColor: '#000',
    borderWidth: 1,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  marker: {
    height: 20,
    width: 20,
    borderWidth: 3,
    borderColor: '#F2F2F2',
    borderRadius: 20 / 2,
    overflow: 'hidden',
    backgroundColor: '#ACFA58'
  }
});
