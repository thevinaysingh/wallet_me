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
import { Header, Footer, StatusBar } from '../../../components';
import {
  linkState,
  isEmailValid,
  isPasswordValid,
  isDisplayNameValid,
  isAddressValid,
  isPincodeValid,
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
};

class Signup extends Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      mob: '',
      password: '',
      address: '',
      landmark: '',
      pincode: '',
      isKeyboardOpen: false,
    };
  }

  componentWillMount() {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide);
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
    Keyboard.dismiss();
  }

  keyboardDidShow = () => {
    this.setState({ isKeyboardOpen: true });
  }

  keyboardDidHide = () => {
    this.setState({ isKeyboardOpen: false });
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

  focusInput(inputField) {
    this[inputField]._root.focus();
  }

  renderFooterOption = () => {
    return (
      <View
        style={styles.keyBoardTextContainer}>
        <Text onPress={this.handleBack} style={[styles.keyBoardText, { paddingLeft: 20 }]}>Back</Text>
        <Text onPress={() => Keyboard.dismiss()} style={[styles.keyBoardText, { right: 100, position: 'absolute' }]}>Cancel</Text>
        <Text onPress={this.handleSubmit} style={[styles.keyBoardText, { right: 20, position: 'absolute' }]}>Register</Text>
      </View>
    );
  }

  render() {
    const {
      isKeyboardOpen,
      displayName,
      email,
      mob,
      password,
      address,
      landmark, 
      pincode,
    } = this.state;
    return (
      <Container style={containerStyles.defaultContainer}>
        <StatusBar />
        <Header
          title="Register"
          showMenu={false}
          onPressleftIcon={() => Actions.loginScreen()}
        />
        <Content contentContainerStyle={{ padding: dimensions.defaultDimension }}>
          <Card style={{ padding: dimensions.defaultDimension }}>
            <Text style={labelStyles.blackMediumLabel}>Personal Detail</Text>
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
                getRef={(ref) => { this.nameInput = ref; }}
                onSubmitEditing={() => this.focusInput('emailInput')}
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
                getRef={(ref) => { this.emailInput = ref; }}
                onSubmitEditing={() => this.focusInput('mobileInput')}
                {...linkState(this, 'email')}
              />
            </Item>
            <Item style={{ marginVertical: dimensions.smallDimension }}>
              <Icon style={styles.iconStyle} active name='keypad' />
              <Input
                style={labelStyles.blackSmallLabel}
                placeholderTextColor={Colors.placeholderTxtColor}
                placeholder={'Mobile'}
                keyboardType={'phone-pad'}
                returnKeyType={'next'}
                getRef={(ref) => { this.mobileInput = ref; }}
                onSubmitEditing={() => this.focusInput('passwordInput')}
                {...linkState(this, 'mob')}
              />
            </Item>
            <Item style={{ marginVertical: dimensions.smallDimension }}>
              <Icon style={styles.iconStyle} active name='lock' />
              <Input
                style={labelStyles.blackSmallLabel}
                placeholderTextColor={Colors.placeholderTxtColor}
                placeholder={'Password'}
                getRef={(ref) => { this.passwordInput = ref; }}
                returnKeyType="next"
                secureTextEntry
                onSubmitEditing={() => this.focusInput('addressInput')}
                {...linkState(this, 'password')}
              />
            </Item>
            <Text style={[labelStyles.blackMediumLabel, { marginTop: 15 }]}>Current Location</Text>
            <Item style={{ marginVertical: dimensions.smallDimension, alignItems: 'flex-start' }}>
              <Icon style={{ color: Colors.themeIconColor, paddingTop: 10 }} active name='paper' />
              <Input
                style={[labelStyles.blackSmallLabel, { textAlignVertical: 'top'}]}
                placeholderTextColor={Colors.placeholderTxtColor}
                placeholder={'Address'}
                multiline
                numberOfLines={4}
                getRef={(ref) => { this.addressInput = ref; }}
                {...linkState(this, 'address')}
              />
            </Item>
            <Item style={{ marginVertical: dimensions.smallDimension }}>
              <Icon style={styles.iconStyle} active name='paw' />
              <Input
                style={labelStyles.blackSmallLabel}
                placeholderTextColor={Colors.placeholderTxtColor}
                placeholder={'Landmark (optional)'}
                getRef={(ref) => { this.landmarkInput = ref; }}
                returnKeyType="next"
                onSubmitEditing={() => this.focusInput('pincodeInput')}
                {...linkState(this, 'landmark')}
              />
            </Item>
            <Item style={{ marginVertical: dimensions.smallDimension }}>
              <Icon style={styles.iconStyle} active name='calculator' />
              <Input
                style={labelStyles.blackSmallLabel}
                placeholderTextColor={Colors.placeholderTxtColor}
                placeholder={'Pincode'}
                keyboardType={'numeric'}
                getRef={(ref) => { this.pincodeInput = ref; }}
                returnKeyType="done"
                onSubmitEditing={() => this.handleSubmit}
                {...linkState(this, 'pincode')}
              />
            </Item>
            <Button
              onPress={() => this.handleSubmit()}
              full
              style={{ backgroundColor: Colors.primaryBgColor, marginVertical: 15 }}
            >
              <Text style={labelStyles.primaryButtonLabel}>REGISTER</Text>
            </Button>
          </Card>
          <View style={containerStyles.rowCenteredContainer}>
            <Text style={labelStyles.blackMediumLabel}> {"Already have an account?"} </Text>
            <TouchableOpacity onPress={() => Actions.pop()}>
              <Text style={labelStyles.linkLabelStyle}>Login</Text>
            </TouchableOpacity>
          </View>
        </Content>
        {
          isKeyboardOpen ? this.renderFooterOption() : <Footer />
        }
        
      </Container>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
