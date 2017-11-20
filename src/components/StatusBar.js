import React from 'react';
import { StatusBar } from 'react-native';
import { Colors } from '../themes';

const CommonStatusBar = () => (
  <StatusBar
    backgroundColor={Colors.statusBarColor}
    barStyle="light-content"
  />
);

export default CommonStatusBar;
