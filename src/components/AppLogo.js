import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Images } from 'src/assets';
import { Colors } from '../themes';

const styles = StyleSheet.create({
  logoIcon: {
    width: 80,
    height: 80,
    backgroundColor: Colors.primaryBgColor,
    alignSelf: 'center',
    marginVertical: 20,
  },
  footerText: {
    color: Colors.blackIconColor,
    fontSize: 14,
  },
});

const AppLogoView = () => (
  <Image
    style={styles.logoIcon}
    source={Images.logoIcon}
  />
);

export default AppLogoView;
