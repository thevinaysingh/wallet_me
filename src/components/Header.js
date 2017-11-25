import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
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
  iconContainer: {
    paddingHorizontal: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeIconContainer: {
    width: 40,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  backIcon: {
    marginHorizontal: 10,
    width: 15,
    height: 15,
  },
});

const CustomHeader = props => (
  <View style={styles.headerContainer} >
    <TouchableOpacity
      onPress={props.onPressleftIcon}
      style={styles.iconContainer}
    >
      {props.showMenu ?
        <Icon name="menu" color={Colors.whiteIconColor} size={20} />
        : <Image style={styles.backIcon} source={Images.backWhite} />}
    </TouchableOpacity>
    <Text style={styles.headerTitleText} >{props.title}</Text>
    {props.showFilterIcon &&
    <TouchableOpacity
      onPress={props.onPressFilterIcon}
      style={styles.badgeIconContainer}
    >
      <Icon name="filter" color={Colors.whiteIconColor} size={15} />
    </TouchableOpacity>}
    {props.showRefreshIcon &&
    <TouchableOpacity
      onPress={props.onPressRefreshIcon}
      style={styles.badgeIconContainer}
    >
      <Icon name="refresh-ccw" color={Colors.whiteIconColor} size={15} />
    </TouchableOpacity>}
    {props.showPlusIcon &&
    <TouchableOpacity
      onPress={props.onPressRightIcon}
      style={styles.badgeIconContainer}
    >
      <Icon name="plus" color={Colors.whiteIconColor} size={20} />
    </TouchableOpacity>}
  </View>
);

CustomHeader.propTypes = {
  title: PropTypes.string,
  showMenu: PropTypes.bool,
  showPlusIcon: PropTypes.bool,
  showFilterIcon: PropTypes.bool,
  showRefreshIcon: PropTypes.bool,
  onPressleftIcon: PropTypes.func,
  onPressRightIcon: PropTypes.func,
  onPressFilterIcon: PropTypes.func,
  onPressRefreshIcon: PropTypes.func,
};

CustomHeader.defaultProps = {
  title: 'Title',
  showMenu: true,
  showPlusIcon: true,
  showFilterIcon: false,
  showRefreshIcon: false,
  onPressleftIcon: _.noop,
  onPressRightIcon: _.noop,
  onPressFilterIcon: _.noop,
  onPressRefreshIcon: _.noop,
};

export default CustomHeader;
