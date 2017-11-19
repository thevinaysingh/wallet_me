import React from 'react';
import { Icon } from 'native-base';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
} from 'react-native';
import { Images } from 'src/assets';
import { Colors } from '../themes';

const styles = StyleSheet.create({
  headerContainer: {
    height: 52,
    backgroundColor: Colors.primaryBgColor,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    elevation: 10,
  },
  headerTitleText: {
    color: Colors.whiteLabelColor,
    fontSize: 20,
    fontFamily: 'entypo',
    flex: 1,
  },
  badgeCountText: {
    fontSize: 11,
    color: Colors.whiteLabelColor,
  },
  iconContainer: {
    paddingHorizontal: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeIconContainer: {
    width: 60,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  backIcon: {
    marginHorizontal: 10,
    width: 20,
    height: 20,
  },
  menuIcon: {
    color: Colors.whiteIconColor,
    paddingHorizontal: 10,
  },
  badgeIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -15,
    marginBottom: 20,
  },
});

const CustomHeader = props => (
  <View style={styles.headerContainer} >
    <TouchableOpacity
      onPress={props.onPressleftIcon}
      style={styles.iconContainer}
    >
      {props.showMenu ?
        <Icon style={styles.menuIcon} active name="menu" />
        : <Image style={styles.backIcon} source={Images.backWhite} />}
    </TouchableOpacity>
    <Text style={styles.headerTitleText} >{props.title}</Text>
    {props.showRightIcon &&
      <TouchableOpacity
        onPress={props.onPressRightIcon}
        style={styles.badgeIconContainer}
      >
        { props.showSearchIcon ?
          <Icon style={styles.menuIcon} active name="search" />
          : <Icon style={styles.menuIcon} active name="cart" />}
        {!props.showSearchIcon && props.badgeCount > 0 &&
          <View style={styles.badgeIcon}>
            <Text style={styles.badgeCountText}>{props.badgeCount}</Text>
          </View>}
      </TouchableOpacity>}
  </View>
);

CustomHeader.propTypes = {
  title: PropTypes.string,
  showMenu: PropTypes.bool,
  showRightIcon: PropTypes.bool,
  showSearchIcon: PropTypes.bool,
  onPressleftIcon: PropTypes.func,
  onPressRightIcon: PropTypes.func,
  badgeCount: PropTypes.number,
};

CustomHeader.defaultProps = {
  title: 'Title',
  showMenu: true,
  showRightIcon: false,
  showSearchIcon: true,
  onPressleftIcon: _.noop,
  onPressRightIcon: _.noop,
  badgeCount: 0,
};

export default CustomHeader;
