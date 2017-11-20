import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { Card, CardItem } from 'native-base';
import { labelStyles } from '../../../themes';
import PopupMenu from './PopupMenu';

const styles = StyleSheet.create({
  leftContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
});

const AccountListItem = props => (
  <TouchableOpacity
    activeOpacity={1}
    onPress={() => props.onPressItem(props.account)}
  >
    <Card>
      <CardItem style={{ alignItems: 'flex-start' }}>
        <View style={styles.leftContainer}>
          <Text style={labelStyles.blackLargeLabel}>{props.account.app_name}</Text>
          <Text style={labelStyles.blackMediumLabel}>{props.account.web_url}</Text>
          <Text style={labelStyles.blackMediumLabel}>{props.account.username}</Text>
          <Text style={labelStyles.blackMediumLabel}>{props.account.password}</Text>
        </View>
        <PopupMenu actions={['Edit', 'Remove']} onPress={props.onPopupEvent} />
      </CardItem>
    </Card>
  </TouchableOpacity>
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
