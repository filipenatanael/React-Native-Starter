import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';

export default class Item extends Component {
  render() {
    return (
      <View>
      <Image style={styles.photo} source={{ uri: this.props.item.foto }} />
      <Text>{this.props.item.foto}</Text>
      <Text>{this.props.item.titulo}</Text>
      <Text>{this.props.item.valor}</Text>
      <Text>{this.props.item.local_anuncio}</Text>
      <Text>{this.props.item.data_publicacao}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  photo: {
    width: 100,
    height: 100,
  },
});

//uri:this.props.item.foto.replace('https','http')
