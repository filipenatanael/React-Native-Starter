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
        latitude: 0,
        longitude: 0
      }
    }
  }

  watchID: ?number = null

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      var lat = parseFloat(position.coords.latitude)
      var long = parseFloat(position.coords.longitude)

      var initialRegion = {
        latitude: lat,
        longitude: long,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      }
      console.log('AASDASDASDsadas')
      this.setState({ initialPosition: initialRegion })
      this.setState({ markerPosition: initialRegion })
    },
    (error) => alert(JSON.stringify(error)),
    { enableHighAccuracy: false, timeout: 20000, maximumAge: 2000 })



    this.watchID = navigator.geolocation.watchPosition((position) => {
      var lat = parseFloat(position.coords.latitude)
      var long = parseFloat(position.coords.longitude)

      var lastRegion = {
        latitude: lat,
        longitude: long,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      }

      this.setState({ initialPosition: lastRegion })
      this.setState({ markerPosition: lastRegion })
    })
    console.log(this.state.initialPosition);
  }

  componentWillUnmount() {

    navigator.geolocation.clearWatch(this.watchID)
  }


  render() {
    const { region } = this.props;
    console.log(region);
    return (
      <View style={styles.container}>
      <MapView style={styles.map} Region={this.state.initialPosition} />
      <MapView.Marker
      coordinate={this.state.markerPosition}
      >
      </MapView.Marker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 550,
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
