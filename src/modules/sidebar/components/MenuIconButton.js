import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

const styles = StyleSheet.create({
  menu: {
    marginTop: 10,
    paddingVertical: 5,
    alignItems: 'center',
    marginLeft: 20,
    flexDirection: 'row',
  },
  menuText: {
    paddingHorizontal: 20,
    fontSize: 18,
    fontWeight: '300',
    color: 'white',
    flex: 1,
  },
});

const MenuIconButton = props => (
  <TouchableOpacity
    style={styles.menu}
    onPress={props.onMenuIconPress}
  >
    <Icon name={props.icon} color="white" size={20} />
    <Text style={styles.menuText}>{props.label}</Text>
    {props.active && <Icon name="check" color="white" size={25} style={{ marginRight: 15 }} />}
  </TouchableOpacity>
);

MenuIconButton.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.string,
  onMenuIconPress: PropTypes.func,
  active: PropTypes.bool,
};

MenuIconButton.defaultProps = {
  label: 'Label missing',
  icon: '',
  onMenuIconPress: _.noop,
  active: false,
};

export default MenuIconButton;
