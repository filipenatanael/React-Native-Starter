import React from 'react';
import { View } from 'react-native';

//import Top from './Components/index';
import { Top, Results, Dashboard } from './Components';

export default props => (
  <View>
  <Top />
  <Results />
  <Dashboard />
  </View>
);
