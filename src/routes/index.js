/**
* @providesModule src/router
*/

import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import {
  LoginScreen,
  SignupScreen,
  HomeScreen,
  CategoryScreen,
  SubCategoryScreen,
  ContactUsScreen,
  FeedbackScreen,
  TermsAndConditionsScreen,
  MyOrderScreen,
  MyCartScreen,
  MyKiranaScreen,
  AboutUsScreen,
} from '../modules';

const Routes = () => (
  <Router>
    <Scene key={'app_root'}>
      <Scene key={'loginScreen'} component={LoginScreen} initial hideNavBar />
      <Scene key={'signupScreen'} component={SignupScreen} hideNavBar />
      <Scene key={'homeScreen'} component={HomeScreen} hideNavBar />
      <Scene key={'categoryScreen'} component={CategoryScreen} hideNavBar />
      <Scene key={'subCategoryScreen'} component={SubCategoryScreen} hideNavBar />
      <Scene key={'contactUsScreen'} component={ContactUsScreen} hideNavBar />
      <Scene key={'feedbackScreen'} component={FeedbackScreen} hideNavBar />
      <Scene key={'termsAndConditionsScreen'} component={TermsAndConditionsScreen} hideNavBar />
      <Scene key={'myOrderScreen'} component={MyOrderScreen} hideNavBar />
      <Scene key={'myCartScreen'} component={MyCartScreen} hideNavBar />
      <Scene key={'myKiranaScreen'} component={MyKiranaScreen} hideNavBar />
      <Scene key={'aboutUsScreen'} component={AboutUsScreen} hideNavBar />
    </Scene>
  </Router>
);

export default Routes;
