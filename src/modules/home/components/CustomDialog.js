import React from 'react';
import _ from 'lodash';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Keyboard,
} from 'react-native';
import PropTypes from 'prop-types';
import { dimensions, Colors, labelStyles } from '../../../themes';

const styles = StyleSheet.create({
  popContainer: {
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
    padding: 10,
    alignSelf: 'center',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: Colors.primaryBgColor,
    borderRadius: 5,
  },
  buttonContainer: {
    alignSelf: 'stretch',
    marginVertical: 10,
  },
  iconStyle: {
    paddingRight: 10,
    color: Colors.whiteIconColor,
  },
});

const CustomDialog = props => (
  <TouchableOpacity
    activeOpacity={1}
    onPress={() => props.onPressClose()}
    style={styles.popContainer}
  >
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => props.onPressClose()}
      style={styles.popupOuterContainer}
    >
      <TouchableOpacity
        style={styles.closePopupButton}
        onPress={() => props.onPressClose()}
      >
        <Icon name="close" color="black" size={30} style={{ padding: 5 }} />
      </TouchableOpacity>
      <View style={styles.popupInnerContainer}>
        <Text style={labelStyles.whiteXtraLargeLabel}>Select filter type</Text>
        {props.options.map(option => (
          <TouchableOpacity
            key={option.value}
            style={styles.buttonContainer}
            onPress={() => props.onSelectItem(option)}
          >
            <Text style={labelStyles.whiteLargeLabel}>
              <Icon style={styles.iconStyle} size={15} name={option.icon} />
              {`  ${option.label}`}
            </Text>
          </TouchableOpacity>))}
      </View>
    </TouchableOpacity>
  </TouchableOpacity>
);

CustomDialog.propTypes = {
  options: PropTypes.any,
  onSelectItem: PropTypes.func,
  onPressClose: PropTypes.func,
};

CustomDialog.defaultProps = {
  options: {},
  onSelectItem: _.noop,
  onPressClose: _.noop,
};

export default CustomDialog;
