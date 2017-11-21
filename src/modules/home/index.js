
/* eslint class-methods-use-this: 0 */
/* eslint no-underscore-dangle: 0 */
import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  ListView,
} from 'react-native';
import { Container, Content, List, ListItem, Card, Item, Input } from 'native-base';
import Icon from 'react-native-vector-icons/Feather';
import { Actions } from 'react-native-router-flux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { containerStyles, dimensions, Colors, labelStyles } from '../../themes';
import { Footer, Header, StatusBar } from '../../components';
import { AccountListItem } from './components';
import { local } from '../../constants';
import withDrawer from '../../utils/withDrawer';
import {
  linkState,
  // isEmailValid,
  // isPasswordValid,
  // isDisplayNameValid,
  // isAddressValid,
  // isPincodeValid,
  // isPhoneValid,
} from '../../utils';

const styles = StyleSheet.create({
  listHeader: {
    marginTop: 5,
    padding: 10,
    backgroundColor: Colors.primaryBgColor,
    color: 'white',
    fontSize: dimensions.primayFontSize,
  },
  content: {
    padding: dimensions.defaultDimension,
    alignSelf: 'stretch',
    flex: 1,
  },
  iconStyle: {
    color: Colors.themeIconColor,
    marginRight: 5,
  },
});

class Home extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(local.localAccountsList),
    };
  }

  onPopupEvent = (eventName, index, account) => {
    if (eventName !== 'itemSelected') return
    if (index === 0) {
      Actions.accountForm({ create: false, account: account});
    } else {
      //this.onRemove()
    }
  }

  onRemove() {
    // WIP
  }

  render() {
    return (
      <Container style={containerStyles.defaultContainer}>
        <StatusBar />
        <Header
          title="Home"
          onPressleftIcon={() => this.props.toggleDrawer()}
          onPressRightIcon={() =>
            Actions.accountForm({ create: true, account: local.newAccountObject })}
        />
        <View style={styles.content}>
          <Item
            style={{
              margin: dimensions.smallDimension,
              borderWidth: 1,
              borderColor: Colors.themeIconColor,
            }}
          >
            <Icon style={styles.iconStyle} size={20} name='search' />
            <Input
              style={labelStyles.blackSmallLabel}
              placeholderTextColor={Colors.placeholderTxtColor}
              placeholder={'Search'}
              returnKeyType={'done'}
            />
          </Item>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(account) =>
              <AccountListItem
                key={`${account.app_name}`}
                onPressItem={(acc) => this.handleAccountSelection(acc) }
                onPopupEvent={this.onPopupEvent}
                account={account} 
              />
            }
          />
        </View>
      </Container>
    );
  }
}

Home.propTypes = {
  toggleDrawer: PropTypes.func,
};

Home.defaultProps = {
  toggleDrawer: undefined,
};

const mapStateToProps = state => ({});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(withDrawer(Home));
