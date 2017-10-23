import React from 'react';
import { View } from 'react-native';

import Top from './Components/Top';
import Results from './Components/Results';
import Dashboard from './Components/Dashboard';

export default props => (
  <View>
  <Top />
  <Results />
  <Dashboard />
  </View>
);
