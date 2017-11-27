/**
* @providesModule src/router
*/

import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import {
  LoginScreen,
  SignupScreen,
  HomeScreen,
  AccountForm,
  MyProfile,
  Settings,
  ChangePassword,
  PrivacyPolicy,
  AboutUs,
  ContactUs,
} from '../modules';

const Routes = () => (
  <Router>
    <Scene key={'app_root'}>
      <Scene key={'loginScreen'} component={LoginScreen} hideNavBar />
      <Scene key={'signupScreen'} component={SignupScreen} hideNavBar />
      <Scene key={'homeScreen'} component={HomeScreen} hideNavBar initial />
      <Scene key={'accountForm'} component={AccountForm} hideNavBar />
      <Scene key={'myProfile'} component={MyProfile} hideNavBar />
      <Scene key={'settings'} component={Settings} hideNavBar />
      <Scene key={'changePassword'} component={ChangePassword} hideNavBar />
      <Scene key={'privacyPolicy'} component={PrivacyPolicy} hideNavBar />
      <Scene key={'aboutUs'} component={AboutUs} hideNavBar />
      <Scene key={'contactUs'} component={ContactUs} hideNavBar />
    </Scene>
  </Router>
);

export default Routes;
