import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Images } from 'src/assets';

const styles = StyleSheet.create({
  logoIcon: {
    width: 90,
    height: 90,
    alignSelf: 'center',
    marginVertical: 20,
    borderRadius: 5,
  },
});

const AppLogoView = () => (
  <Image
    style={styles.logoIcon}
    source={Images.logoIcon}
  />
);

export default AppLogoView;
