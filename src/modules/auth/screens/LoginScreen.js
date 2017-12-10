import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import { Container, Content, Card, Item, Input, CardItem, Icon, Button, CheckBox } from 'native-base';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { LoginManager, FirebaseManager } from '../../../firebase';
import { Colors, dimensions, containerStyles, labelStyles } from '../../../themes';
import { AppLogo, StatusBar } from '../../../components';
import { linkState, isEmailValid, isPasswordValid, focusOnNext, networkConnectivity } from '../../../utils';
import { errors } from '../../../constants';

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
    opacity: 0.95,
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
    minHeight: 200,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: Colors.primaryBgColor,
    borderRadius: 5,
  },
});

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      showPassword: false,
      isLoading: false,
      showResetPassword: false,
      resetEmail: '',
    };
    this.isUserLoggedIn();
  }

  isUserLoggedIn() {
    FirebaseManager.getAuthRef().onAuthStateChanged((user) => {
      if (user) {
        FirebaseManager.uid = user.uid;
        Actions.homeScreen({ type: 'reset' });
      }
    });
  }

  handleSubmit() {
    const { email, password } = this.state;
    if (!isEmailValid(email)) {
      Alert.alert(errors.emailErrorText);
      return;
    } else if (!isPasswordValid(password)) {
      Alert.alert(errors.passwordErrorText);
      return;
    }
    this.setState({ isLoading: true });
    LoginManager.loginRequest(email, password)
      .then(() => {
        this.setState({ isLoading: false });
        Actions.homeScreen();
      }).catch((error) => {
        this.setState({ isLoading: false });
        Alert.alert('Login Error', `${error}`);
      });
  }

  handleResetPassword() {
    const { resetEmail } = this.state;
    if (!isEmailValid(resetEmail)) {
      Alert.alert(errors.emailErrorText);
      return;
    }
    this.setState({ isLoading: true });
    networkConnectivity().then(() => {
      LoginManager.resetPassword(resetEmail)
        .then((response) => {
          this.setState({
            email: '',
            password: '',
            isLoading: false,
            showResetPassword: false,
            resetEmail: '',
            showPassword: false,
          });
          Alert.alert('Forgot Password', `${response} Please check your email.`);
        }).catch((error) => {
          this.setState({ isLoading: false });
          Alert.alert('Forgot Password Error', `${error}`);
        });
    }).catch((error) => {
      this.setState({
        email: '',
        password: '',
        isLoading: false,
        showResetPassword: false,
        resetEmail: '',
        showPassword: false,
      });
      Alert.alert('Network Error', `${error}`);
    });
  }

  renderResetPassword() {
    return (
      <View style={styles.popContainer}>
        <View style={styles.popupOuterContainer}>
          <TouchableOpacity
            style={styles.closePopupButton}
            onPress={() => this.setState({ showResetPassword: false })}
          >
            <Icon name="close" color="black" size={30} style={{ padding: 5 }} />
          </TouchableOpacity>
          <View style={styles.popupInnerContainer}>
            <Text style={labelStyles.whiteXtraLargeLabel}>Enter Email</Text>
            <Item style={{ marginVertical: dimensions.smallDimension }}>
              <Input
                style={labelStyles.whiteSmallLabel}
                placeholderTextColor={Colors.placeholderTxtColor}
                placeholder={'Email'}
                returnKeyType="done"
                keyboardType="email-address"
                onSubmitEditing={() => this.handleResetPassword()}
                {...linkState(this, 'resetEmail')}
              />
            </Item>
            {this.state.isLoading ?
              <ActivityIndicator
                animating={Boolean(true)}
                color={'#bc2b78'}
                size={'large'}
                style={containerStyles.activityIndicator}
              /> :
              <Button
                onPress={() => this.handleResetPassword()}
                full
                transparent
                style={{ marginVertical: 15 }}
              >
                <Text style={labelStyles.primaryButtonLabel}>Send Reset Password link</Text>
              </Button>}
          </View>
        </View>
      </View>
    );
  }

  render() {
    return (
      <Container style={containerStyles.defaultContainer}>
        <StatusBar />
        <Content contentContainerStyle={{ padding: dimensions.defaultDimension }}>
          <AppLogo />
          <Card style={{ padding: dimensions.defaultDimension }}>
            <Item
              style={{
                marginBottom: dimensions.smallDimension,
                marginTop: -dimensions.smallDimension,
              }}
            >
              <Icon style={{ color: Colors.themeIconColor }} active name="mail" />
              <Input
                style={labelStyles.blackSmallLabel}
                placeholderTextColor={Colors.placeholderTxtColor}
                placeholder="Email"
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() => focusOnNext(this, 'passwordInput')}
                {...linkState(this, 'email')}
              />
            </Item>
            <Item style={{ marginVertical: dimensions.smallDimension }}>
              <Icon style={{ color: Colors.themeIconColor }} active name="lock" />
              <Input
                ref={(ref) => { this.passwordInput = ref; }}
                style={labelStyles.blackSmallLabel}
                placeholderTextColor={Colors.placeholderTxtColor}
                placeholder="Password (Min. 6 chars)"
                returnKeyType="done"
                secureTextEntry={!this.state.showPassword}
                onSubmitEditing={() => this.handleSubmit()}
                {...linkState(this, 'password')}
              />
            </Item>
            <CardItem>
              <CheckBox
                checked={this.state.showPassword}
                style={{ margin: -25 }}
                color={Colors.themeIconColor}
                onPress={() => this.setState({ showPassword: !this.state.showPassword })}
              />
              <Text style={[labelStyles.blackSmallLabel, { marginLeft: 40 }]}>Show password</Text>
            </CardItem>
            <Text
              onPress={() => this.setState({ showResetPassword: true })}
              style={[labelStyles.linkLabelStyle, { marginTop: -dimensions.smallDimension, textAlign: 'right' }]}
            >Forgot password
            </Text>
            {this.state.isLoading ?
              <ActivityIndicator
                animating={Boolean(true)}
                color={'#bc2b78'}
                size={'large'}
                style={containerStyles.activityIndicator}
              /> :
              <Button
                onPress={() => this.handleSubmit()}
                full
                style={{ backgroundColor: Colors.primaryBgColor, marginVertical: 15 }}
              >
                <Text style={labelStyles.primaryButtonLabel}>LOGIN</Text>
              </Button>}
          </Card>
          <View style={containerStyles.rowCenteredContainer}>
            <Text style={labelStyles.blackMediumLabel}> {"Don't have an account?"} </Text>
            <TouchableOpacity onPress={() => Actions.signupScreen()}>
              <Text
                style={[labelStyles.linkLabelStyle, { color: Colors.themeIconColor }]}
              >Register
              </Text>
            </TouchableOpacity>
          </View>
        </Content>
        {this.state.showResetPassword && this.renderResetPassword()}
      </Container>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
