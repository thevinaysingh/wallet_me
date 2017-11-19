import React from 'react';
import { Footer } from 'native-base';
import {
  StyleSheet,
  Text,
} from 'react-native';
import { Colors, labelStyles } from '../themes';

const styles = StyleSheet.create({
  footerContainer: {
    height: 40,
    backgroundColor: Colors.footerColor,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
  },
});

const CustomFooter = () => (
  <Footer style={styles.footerContainer} >
    <Text style={labelStyles.blackSmallLabel} >Powered by copacetictechnologies.com</Text>
  </Footer>
);

export default CustomFooter;
