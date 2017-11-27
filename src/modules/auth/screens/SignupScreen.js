import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  Keyboard,
} from 'react-native';
import { Container, Content, Card, Item, Input, Icon, Button } from 'native-base';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Colors, dimensions, labelStyles, containerStyles } from '../../../themes';
import { Header, StatusBar } from '../../../components';
import {
  linkState,
  isEmailValid,
  isPasswordValid,
  isDisplayNameValid,
  isAddressValid,
  isPincodeValid,
  isPhoneValid,
  focusOnNext,
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
};

class Signup extends Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      mob: '',
      password: '',
    };
  }

  handleSubmit = () => {
    Keyboard.dismiss();
    const { email, mob, password, address, landmark, pincode, displayName } = this.state;
    if (!isDisplayNameValid(displayName)) {
      Alert.alert(errors.nameErrorText);
      return;
    } else if (!isEmailValid(email)) {
      Alert.alert(errors.emailErrorText);
      return;
    } else if (!isPhoneValid(mob)) {
      Alert.alert(errors.mobErrorText);
      return;
    } else if (!isPasswordValid(password)) {
      Alert.alert(errors.passwordErrorText);
      return;
    } else if (!isAddressValid(address)) {
      Alert.alert(errors.addressErrorText);
      return;
    } else if (!isPincodeValid(pincode)) {
      Alert.alert(errors.pincodeErrorText);
      return;
    }
    // Call Api for Register
  }

  handleBack = () => {
    Keyboard.dismiss();
    Actions.pop();
  }

  isButtonDisabled = () => {
    return true;
  }

  render() {
    // const buttonDisabledStatus = this.isButtonDisabled();
    return (
      <Container style={containerStyles.defaultContainer}>
        <StatusBar />
        <Header
          title="Register"
          showMenu={false}
          showPlusIcon={false}
          onPressleftIcon={() => Actions.pop()}
        />
        <Content contentContainerStyle={{ padding: dimensions.defaultDimension }}>
          <Card style={{ padding: dimensions.defaultDimension }}>
            <Item
              style={{
                marginBottom: dimensions.smallDimension,
                marginTop: -dimensions.smallDimension,
              }}
            >
              <Icon style={styles.iconStyle} active name='person' />
              <Input
                style={labelStyles.blackSmallLabel}
                placeholderTextColor={Colors.placeholderTxtColor}
                placeholder={'First & last name'}
                returnKeyType={'next'}
                onSubmitEditing={() => focusOnNext(this, 'emailInput')}
                {...linkState(this, 'displayName')}
              />
            </Item>
            <Item style={{ marginVertical: dimensions.smallDimension }}>
              <Icon style={styles.iconStyle} active name='mail' />
              <Input
                style={labelStyles.blackSmallLabel}
                placeholderTextColor={Colors.placeholderTxtColor}
                placeholder={'Email'}
                keyboardType={'email-address'}
                returnKeyType={'next'}
                ref={(ref) => { this.emailInput = ref; }}
                onSubmitEditing={() => focusOnNext(this, 'mobileInput')}
                {...linkState(this, 'email')}
              />
            </Item>
            <Item style={{ marginVertical: dimensions.smallDimension }}>
              <Icon style={styles.iconStyle} active name='calculator' />
              <Input
                style={labelStyles.blackSmallLabel}
                placeholderTextColor={Colors.placeholderTxtColor}
                placeholder={'Mobile (10 digits)'}
                keyboardType={'phone-pad'}
                returnKeyType={'next'}
                maxLength={10}
                ref={(ref) => { this.mobileInput = ref; }}
                onSubmitEditing={() => focusOnNext(this, 'passwordInput')}
                {...linkState(this, 'mob')}
              />
            </Item>
            <Item style={{ marginVertical: dimensions.smallDimension }}>
              <Icon style={styles.iconStyle} active name='lock' />
              <Input
                style={labelStyles.blackSmallLabel}
                placeholderTextColor={Colors.placeholderTxtColor}
                placeholder={'Password (Min. 6 chars)'}
                ref={(ref) => { this.passwordInput = ref; }}
                returnKeyType="done"
                secureTextEntry
                onSubmitEditing={this.handleSubmit}
                {...linkState(this, 'password')}
              />
            </Item>
            <Button
              onPress={this.handleSubmit}
              full
              style={{ backgroundColor: Colors.primaryBgColor, marginVertical: 15 }}
            >
              <Text style={labelStyles.primaryButtonLabel}>REGISTER</Text>
            </Button>
          </Card>
          <View style={containerStyles.rowCenteredContainer}>
            <Text style={labelStyles.blackLargeLabel}> {"Already have an account?"} </Text>
            <TouchableOpacity onPress={() => Actions.pop()}>
              <Text
                style={[labelStyles.linkLabelStyle, { color: Colors.themeIconColor }]}
              >Login
              </Text>
            </TouchableOpacity>
          </View>
        </Content>        
      </Container>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
