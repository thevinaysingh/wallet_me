import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Feather';
import { Item, Input } from 'native-base';
import {
  StyleSheet,
} from 'react-native';
import _ from 'lodash';

const styles = StyleSheet.create({
  iconStyle: {
    color: '#004E88',
    marginRight: 5,
  },
  blackSmallLabel: {
    color: 'black',
    fontSize: 14,
  },
  iconEyeStyle: {
    color: 'white',
    width: 30,
    height: 30,
    alignSelf: 'center',
    borderRadius: 5,
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: '#004E88',
  },
});

const IconInput = props => (
  <Item style={{ marginVertical: 5 }}>
    <Icon style={styles.iconStyle} size={20} name={props.icon} />
    <Input
      style={styles.blackSmallLabel}
      placeholderTextColor='grey'
      placeholder={props.placeholder}
      secureTextEntry={props.type === 'password' && !props.showPassword}
      {
        ...{ ref: ref => props.assignRef && props.assignRef(ref) }
      }
      {..._.omit(props, [
        'assignRef',
        'onPressEye',
        'icon',
        'type',
        'placeholder',
        'showPassword',
        'ref',
      ])}
    />
    {props.type === 'password' && props.showPassword &&
      <Icon
        onPress={() => props.onPressEye(props.showPassword)}
        style={styles.iconEyeStyle}
        size={20}
        name="eye"
      />
    }
    {props.type === 'password' && !props.showPassword &&
      <Icon
        onPress={() => props.onPressEye(props.showPassword)}
        style={styles.iconEyeStyle}
        size={20}
        name='eye-off'
      />
    }
  </Item>
);

IconInput.propTypes = {
  assignRef: PropTypes.func,
  onPressEye: PropTypes.func,
  icon: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  showPassword: PropTypes.bool,
};

IconInput.defaultProps = {
  assignRef: undefined,
  onPressEye: undefined,
  icon: undefined,
  placeholder: '',
  type: undefined,
  showPassword: false,
};

export default IconInput;
