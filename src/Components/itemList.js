import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
} from 'react-native';
import axios from 'axios';
import Item from './Item';

export default class ItemList extends Component {

  constructor(props) {
    super(props);
    this.state = { itemList: [] };
  }

  componentWillMount() {
    axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
    .then(response => { this.setState({ itemList: response.data }); })
    .catch(() => { console.log('Error to require data.'); });
  }

  render() {
    return (
      <ScrollView style={styles.ScrollView}>
      { this.state.itemList.map(item => { return (<Item key={item.titulo} item={item} />)})}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    ScrollView: {
      backgroundColor: '#EAECEE',
    }
});
