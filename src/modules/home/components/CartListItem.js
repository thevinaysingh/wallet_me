import React from 'react';
import _ from 'lodash';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import PropTypes from 'prop-types';
import { Colors, labelStyles } from '../../../themes';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.defaultBgColor,
    borderRadius: 5,
    elevation: 10,
    marginBottom: 10,
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
  },
  headerTextContainer: {
    flex: 1,
    height: 50,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  bottomText: {
    color: Colors.primaryBgColor,
    flex: 1,
  },
  addToCartButton: {
    backgroundColor: Colors.primaryBgColor,
    alignSelf: 'flex-end',
    borderRadius: 5,
    margin: 5,
  },
  addToCartButtonText: {
    ...labelStyles.cancelButtonLabel,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});

const CartListItem = props => (
  <View style={styles.container}>
    <View style={styles.headerContainer}>
      <View style={styles.headerTextContainer}>
        <Text style={labelStyles.blackLargeLabel}>Ordered Item</Text>
        <Text style={labelStyles.blackMediumLabel}>(Ordered Item subname)</Text>
      </View>
      <TouchableOpacity
        style={{ marginTop: -10 }}
        onPress={props.handleDelete}
      >
        <Icon name="trash-2" color="red" size={25} />
      </TouchableOpacity>
    </View>
    <View style={styles.bottomContainer}>
      <Text style={[styles.bottomText, { textAlign: 'left' }]}>Qty: 10000</Text>
      <Text style={{ color: Colors.primaryBgColor }}>Price: ₹90000</Text>
      <Text style={[styles.bottomText, { textAlign: 'right' }]}>₹90000</Text>
    </View>
    <TouchableOpacity
      style={styles.addToCartButton}
      onPress={props.onPressPrimaryButton}
    >
      <Text style={styles.addToCartButtonText}>{props.primaryButtonLabel}</Text>
    </TouchableOpacity>
  </View>
);

CartListItem.propTypes = {
  order: PropTypes.any,
  primaryButtonLabel: PropTypes.string,
  handleDelete: PropTypes.func,
  onPressPrimaryButton: PropTypes.func,
};

CartListItem.defaultProps = {
  order: {},
  primaryButtonLabel: 'primary button',
  handleDelete: _.noop,
  onPressPrimaryButton: _.noop,
};

export default CartListItem;
