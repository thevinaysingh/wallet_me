import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import _ from 'lodash';
import {
  Text,
  StyleSheet,
  View,
} from 'react-native';
import { Colors } from '../../../themes';
import PopupMenu from './PopupMenu';

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    backgroundColor: Colors.defaultBgColor,
    padding: 5,
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 5,
    elevation: 10,
  },
  leftContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignSelf: 'stretch',
  },
  iconStyle: {
    color: Colors.themeIconColor,
  },
  titleTextStyle: {
    color: Colors.themeIconColor,
    fontSize: 17,
  },
  textStyle: {
    color: 'grey',
    fontSize: 15,
    paddingVertical: 2,
  },
});

const AccountListItem = props => (
  <View
    style={styles.container}
  >
    <View style={styles.leftContainer}>
      <Text style={styles.titleTextStyle}>
        <Icon style={styles.iconStyle} size={14} name='th' />
        {` ${props.account.app_name}`}
      </Text>
      <Text style={styles.textStyle}>
        <Icon style={styles.iconStyle} size={14.5} name='chrome' />
        {` ${props.account.web_url}`}
      </Text>
      <Text style={styles.textStyle}>
        <Icon style={styles.iconStyle} size={17} name='user-secret' />
        {` ${props.account.username}`}
      </Text>
      <Text style={styles.textStyle}>
        <Icon style={styles.iconStyle} size={21.5} name='lock' />
        {` ${props.account.password}`}
      </Text>
    </View>
    <PopupMenu
      actions={['Edit', 'Remove']}
      onPress={(eventName, index) => props.onPopupEvent(eventName, index, props.account)}
    />
  </View>
);

AccountListItem.propTypes = {
  account: PropTypes.any,
  onPressItem: PropTypes.func,
  onPopupEvent: PropTypes.func,
};

AccountListItem.defaultProps = {
  account: {},
  onPressItem: _.noop,
  onPopupEvent: _.noop,
};

export default AccountListItem;
