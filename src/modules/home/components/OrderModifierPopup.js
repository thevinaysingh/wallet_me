import React from 'react';
import _ from 'lodash';
import Icon from 'react-native-vector-icons/Feather';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import { dimensions, Colors, labelStyles, buttonStyles } from '../../../themes';

const styles = StyleSheet.create({
  addItemToCartContainer: {
    backgroundColor: Colors.defaultGreyColor,
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.85,
  },
  popupOuterContainer: {
    width: dimensions.getViewportWidth(),
    height: 250,
    justifyContent: 'center',
  },
  closePopupButton: {
    alignSelf: 'flex-end',
    backgroundColor: Colors.defaultBgColor,
    borderRadius: 22,
    marginBottom: -20,
    marginRight: 15,
    zIndex: 10,
  },
  popupInnerContainer: {
    width: 300,
    height: 200,
    padding: 10,
    alignSelf: 'center',
    backgroundColor: Colors.primaryBgColor,
    borderRadius: 5,
  },
  orderModifierContainer: {
    flexDirection: 'row',
    paddingTop: 15,
    paddingBottom: 10,
  },
  orderModifierHeaderTitle: {
    ...labelStyles.whiteMediumLabel,
    flex: 1,
    textAlign: 'center',
  },
  itemDesContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  counterButtonContainer: {
    height: 28,
    width: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Colors.defaultBgColor,
  },
  counterButtonText: {
    fontSize: 20,
    padding: 8,
    color: Colors.whiteLabelColor,
  },
  counterText: {
    fontSize: 16,
    paddingHorizontal: 5,
    color: Colors.whiteLabelColor,
  },
});

const OrderModifierPopup = props => (
  <View style={styles.addItemToCartContainer}>
    <View style={styles.popupOuterContainer}>
      <TouchableOpacity
        style={styles.closePopupButton}
        onPress={() => props.onPressClose()}
      >
        <Icon name="x" color="black" size={30} style={{ padding: 5 }} />
      </TouchableOpacity>
      <View style={styles.popupInnerContainer}>
        <Text style={labelStyles.whiteBigLabel}>Sugar</Text>
        <Text style={labelStyles.whiteMediumLabel}>(Cheeni)</Text>
        <View style={styles.orderModifierContainer}>
          <Text style={styles.orderModifierHeaderTitle}>Qty</Text>
          <Text style={styles.orderModifierHeaderTitle}>Price</Text>
          <Text style={styles.orderModifierHeaderTitle}>Total</Text>
        </View>
        <View style={[styles.orderModifierContainer, { paddingTop: 0, paddingBottom: 10 }]}>
          <View style={styles.itemDesContainer}>
            <TouchableOpacity
              style={styles.counterButtonContainer}
            >
              <Text style={styles.counterButtonText}>−</Text>
            </TouchableOpacity>
            <Text style={styles.counterText}>1</Text>
            <TouchableOpacity
              style={styles.counterButtonContainer}
            >
              <Text style={styles.counterButtonText}>+</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.itemDesContainer}>
            <Text style={styles.counterText}>₹90000</Text>
          </View>
          <View style={styles.itemDesContainer}>
            <Text style={styles.counterText}>= ₹50000</Text>
          </View>
        </View>
        <TouchableOpacity
          style={[buttonStyles.smallButtonContainer, { backgroundColor: Colors.defaultBgColor }]}
          onPress={() => props.onPressAddItem}
        >
          <Text style={[buttonStyles.smallButtonText, { color: Colors.primaryBgColor }]}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

OrderModifierPopup.propTypes = {
  item: PropTypes.any,
  onPressAddItem: PropTypes.func,
  onPressClose: PropTypes.func,
};

OrderModifierPopup.defaultProps = {
  item: {},
  onPressAddItem: _.noop,
  onPressClose: _.noop,
};

export default OrderModifierPopup;
