/**
* @providesModule src/router
*/

import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import {
  LoginScreen,
  SignupScreen,
  HomeScreen,
} from '../modules';

const Routes = () => (
  <Router>
    <Scene key={'app_root'}>
      <Scene key={'loginScreen'} component={LoginScreen} hideNavBar />
      <Scene key={'signupScreen'} component={SignupScreen} hideNavBar />
      <Scene key={'homeScreen'} component={HomeScreen} hideNavBar initial />
    </Scene>
  </Router>
);

export default Routes;
