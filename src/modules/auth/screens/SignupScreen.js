import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  Keyboard,
  ActivityIndicator,
  ToastAndroid,
} from 'react-native';
import { Container, Content, Card, Item, Input, Icon, Button } from 'native-base';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { LoginManager } from '../../../firebase';
import { Colors, dimensions, labelStyles, containerStyles } from '../../../themes';
import { Header, StatusBar } from '../../../components';
import {
  linkState,
  isEmailValid,
  isPasswordValid,
  isDisplayNameValid,
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
  iconEyeStyle: {
    color: Colors.primaryBgColor,
    width: 30,
    height: 30,
    alignSelf: 'center',
    borderRadius: 5,
    textAlign: 'center',
    textAlignVertical: 'center',
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
      isLoading: false,
      showPassword: false,
    };
  }

  handleSubmit = () => {
    const {
      email,
      mob,
      password,
      displayName,
    } = this.state;
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
    }
    this.setState({ isLoading: true });
    LoginManager.signUpRequest(displayName, email, mob, password)
    .then((response) => {
      this.setState({ 
        isLoading: false,
      });
      ToastAndroid.show('Successfully registered!', ToastAndroid.LONG);
      Actions.pop();
    }).catch((error) => {
      this.setState({ 
        isLoading: false,
      });
      Alert.alert('Registration Error', `${error}`);
    });
  }

  handleBack = () => {
    Keyboard.dismiss();
    Actions.pop();
  }

  render() {
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
                secureTextEntry={!this.state.showPassword}
                onSubmitEditing={this.handleSubmit}
                {...linkState(this, 'password')}
              />
              {this.state.showPassword ?
                <Icon
                  onPress={() => this.setState({ showPassword: false })}
                  style={styles.iconEyeStyle}
                  size={20}
                  name="eye"
                /> :
                <Icon
                  onPress={() => this.setState({ showPassword: true })}
                  style={styles.iconEyeStyle}
                  size={20}
                  name='eye-off'
                />
              }
            </Item>
            {this.state.isLoading ?
            <ActivityIndicator
              animating={Boolean(true)}
              color={'#bc2b78'}
              size={'large'}
              style={containerStyles.activityIndicator}
            /> :
            <Button
              onPress={this.handleSubmit}
              full
              style={{ backgroundColor: Colors.primaryBgColor, marginVertical: 15 }}
            >
              <Text style={labelStyles.primaryButtonLabel}>REGISTER</Text>
            </Button>}
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
