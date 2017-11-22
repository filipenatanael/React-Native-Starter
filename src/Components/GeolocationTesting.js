import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

export default class GeolocationTesting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error: null,
    };
  }

  componentDidMount() {
    console.log('entrou no componentDidMount!');
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log('Entrou no getCurrentPosition');
        console.log(position.coords.latitude);
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: false, timeout: 50000, maximumAge: 5000 },
    );

  }

  render() {
    return (
      <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Latitude: {this.state.latitude}</Text>
      <Text>Longitude: {this.state.longitude}</Text>
      {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
      </View>
    );
  }
}
