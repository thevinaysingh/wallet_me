import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Feather';
import { Actions } from 'react-native-router-flux';
import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Text,
} from 'react-native';
import { default as MenuIconButton } from './components/MenuIconButton';
import { labelStyles, Colors, dimensions } from '../../themes';
import { sidebarMenus } from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.sidebarBGColor,
    height: dimensions.getViewportHeight(),
  },
  headerContainer: {
    height: 150,
    backgroundColor: Colors.defaultBgColor,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 10,
  },
  bodyStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: Colors.sidebarBGColor,
    paddingBottom: 10,
  },
});


export default class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menus: sidebarMenus.menusList,
    };
  }

  handleSubmit = (key, index) => {
    if(index === 3) {
      // logout
      this.props.toggleDrawer();
      return;
    }    
    let menusList = this.state.menus.map((item, itemIndex) => {
      if (itemIndex === index) {
        item.active = true;
      } else {
        item.active = false;
      }
      return item;
    });
    this.setState({
      menus: menusList,
    });
    
    if(index === 0) {
      Actions.homeScreen();
      return;
    }
    if(index === 1) {
      //Actions.myProfile();
      return;
    }
    if(index === 2) {
      //Actions.settings();
      return;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={labelStyles.blackMediumLabel}>Vinay Singh</Text>
          <Text style={labelStyles.blackSmallLabel}>vinaysinghsatna01@gmail.com</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.bodyStyle}>
            {
              this.state.menus.map((menuItem, index) => {
                return (
                  <MenuIconButton
                    key={index}
                    label={menuItem.label}
                    active={menuItem.active}
                    icon={menuItem.icon}
                    onMenuIconPress={() => this.handleSubmit(menuItem.key, index)}
                  />
                );
              })
            }
          </View>
        </ScrollView>
      </View>
    );
  }
}

Sidebar.propTypes = {
  hasHeader: PropTypes.bool,
};

Sidebar.defaultProps = {
  hasHeader: false,
};
