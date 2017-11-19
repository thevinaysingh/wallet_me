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
    height: 100,
    backgroundColor: Colors.defaultBgColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodyStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: Colors.sidebarBGColor,
    paddingBottom: 10,
  },
  menu: {
    marginTop: 10,
    paddingVertical: 3,
    alignItems: 'center',
    marginLeft: 20,
    flexDirection: 'row',
  },
  menuText: {
    paddingHorizontal: 20,
    fontSize: 20,
    fontWeight: '300',
    color: 'white',
    flex: 1,
  },
});


export default class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menus: sidebarMenus.unAuthenticatedMenuList,
    };
  }

  handleSubmit = (key, index) => {
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
    this.props.toggleDrawer();
    if(index === 0) {
      Actions.homeScreen();
      return;
    }
    if(index === 1) {
      Actions.aboutUsScreen();
      return;
    }
    if(index === 2) {
      //Actions.homeScreen();
      return;
    }
    if(index === 3) {
      Actions.myCartScreen();
      return;
    }
    if(index === 4) {
      Actions.myOrderScreen();
      return;
    }
    if(index === 5) {
      Actions.myKiranaScreen();
      return;
    }
    if(index === 7) {
      this.props.toggleDrawer();
      Actions.contactUsScreen();
      return;
    }
    if(index === 8) {
      this.props.toggleDrawer();
      Actions.termsAndConditionsScreen();
      return;
    }
    if(index === 9) {
      this.props.toggleDrawer();
      Actions.feedbackScreen();
      return;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={labelStyles.blackLargeLabel}>Not logged in as of Now.</Text>
          <Text style={labelStyles.blackLargeLabel}>Login / Register</Text>
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
            <MenuIconButton
              key={'share'}
              label={'Share'}
              active={false}
              icon={'share'}
              onMenuIconPress={() => alert('share clicked')}
            />
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
