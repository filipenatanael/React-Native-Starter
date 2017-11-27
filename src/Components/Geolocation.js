import firebase from 'firebase';
import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Alert,
  Text
} from 'react-native';
import MapView from 'react-native-maps';

const { width, height } = Dimensions.get('window')

const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width
const ASPECT_RADIO = width / height
const LATITUDE_DELTA = 0.000922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RADIO

export default class Geolocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialPosition:
      {
        latitude: -19.9166813,
        longitude: -43.9344931,
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
      let lat = parseFloat(position.coords.latitude)
      let long = parseFloat(position.coords.longitude)

      let initialRegion = {
        latitude: lat,
        longitude: long,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      }
      this.setState({ initialPosition: initialRegion })
      this.setState({ markerPosition: initialRegion })
    },
    (error) => Alert.alert(JSON.stringify(error)),
    { enableHighAccuracy: true, timeout: 20000 }
  );

  this.watchID = navigator.geolocation.watchPosition((position) => {
    let lat = parseFloat(position.coords.latitude);
    let long = parseFloat(position.coords.longitude);
    let lastRegion = {
      latitude: lat,
      longitude: long,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    };

    this.setState({ initialPosition: lastRegion });
    this.setState({ markerPosition: lastRegion });

    const coordenates = firebase.database().ref('coordenates');
    coordenates.push().set({
      latitude: lastRegion.latitude,
      longitude: lastRegion.longitude
    });
  });
}

componentWillUnmount() {
  navigator.geolocation.clearWatch(this.watchID);
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
    <View style={styles.coordContainer}>
    <View style={styles.coordRow}>
    <Text style={styles.coordText}>
    {
      'Latitude: '+JSON.stringify(this.state.initialPosition.latitude)
      +' Logitude: '+JSON.stringify(this.state.initialPosition.longitude)
    }
    </Text>
    </View>
    </View>
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
    bottom: 50,
  },
  radius: {
    height: 30,
    width: 30,
    borderRadius: 30 / 2,
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
  },
  coordContainer: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  coordRow: {
    width: SCREEN_WIDTH,
    height: 50,
    paddingTop: 15,
    backgroundColor: '#fff'
  },
  coordText: {
    textAlign: 'center',
    fontSize: 15
  }
});
