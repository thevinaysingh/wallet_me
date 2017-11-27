import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Container, Content, Card, Item, Icon, Input, Button, CardItem, Right } from 'native-base';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Colors, dimensions, labelStyles, containerStyles } from '../../../themes';
import { Header, StatusBar } from '../../../components';
import {
  linkState,
  isDisplayNameValid,
  isPhoneValid,
} from '../../../utils';
import { errors } from '../../../constants';

const styles = {
  keyBoardTextContainer: {
    height: 40,
    backgroundColor: Colors.defaultGreyColor,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  keyBoardText: {
    fontSize: 16,
    paddingHorizontal: 10,
    color: Colors.themeIconColor,
  },
  iconStyle: {
    color: Colors.themeIconColor,
  },
  iconEditStyle: {
    color: Colors.blackIconColor,
    width: 30,
    height: 30,
    alignSelf: 'center',
    borderRadius: 5,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  listItemText: {
    flex: 1,
    paddingVertical: 5,
    color: Colors.primaryBgColor,
  },
};

class PrivacyPolicy extends Component {
  constructor() {
    super();

    this.state = {
      displayName: 'Vinay Singh',
      mob: '9753238059',
      isNameEditable: false,
      isMobEditable: false,
    };
  }

  render() {
    const {
      displayName,
      mob,
      isNameEditable,
      isMobEditable,
    } = this.state;
    const isButtonDisabled = (isNameEditable || isMobEditable);
    return (
      <Container style={containerStyles.defaultContainer}>
        <StatusBar />
        <Header
          title="Privacy Policy"
          showMenu={false}
          showPlusIcon={false}
          onPressleftIcon={() => Actions.pop()}
        />
        <Content contentContainerStyle={{ padding: dimensions.defaultDimension }}>
          <Card>
            <TouchableOpacity
              onPress={() => alert('Change password')}
            >
              <CardItem>
                <Text style={styles.listItemText}>Change password</Text>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </CardItem>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => alert('Privacy policy')}
            >
              <CardItem>
                <Text style={styles.listItemText}>Privacy policy</Text>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </CardItem>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => alert('About us')}
            >
              <CardItem>
                <Text style={styles.listItemText}>About us</Text>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </CardItem>
            </TouchableOpacity>
          </Card>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PrivacyPolicy);
