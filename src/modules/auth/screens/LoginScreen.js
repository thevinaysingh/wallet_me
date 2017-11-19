import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Keyboard,
  Alert,
} from 'react-native';
import { Container, Content, Card, Item, Input, CardItem, Icon, Button, CheckBox } from 'native-base';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Colors, dimensions, containerStyles, labelStyles } from '../../../themes';
import { Footer, Header, AppLogo, StatusBar } from '../../../components';
import { linkState, isEmailValid, isPasswordValid } from '../../../utils';
import { errors } from '../../../constants';
import withDrawer from '../../../utils/withDrawer';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      showPassword: false,
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
  }

  keyboardDidShow = () => {
    this.setState({ isKeyboardOpen: true });
  }

  keyboardDidHide = () => {
    this.setState({ isKeyboardOpen: false });
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
    // Call Api for login
  }

  focusInput(inputField) {
    this[inputField]._root.focus();
  }

  render() {
    const {
      isKeyboardOpen,
      email,
      password,
    } = this.state;
    return (
      <Container style={containerStyles.defaultContainer}>
        <StatusBar />
        <Header title="Login" onPressleftIcon={() => this.props.toggleDrawer()}
        />
        <Content contentContainerStyle={{ padding: dimensions.defaultDimension }}>
          <AppLogo />
          <Card style={{ padding: dimensions.defaultDimension }}>
            <Item
              style={{
                marginBottom: dimensions.smallDimension,
                marginTop: -dimensions.smallDimension,
              }}
            >
              <Icon style={{ color: Colors.themeIconColor }} active name="person" />
              <Input
                getRef={(ref) => { this.emailInput = ref; }}
                style={labelStyles.blackSmallLabel}
                placeholderTextColor={Colors.placeholderTxtColor}
                placeholder="Email"
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() => this.focusInput('passwordInput')}
                {...linkState(this, 'email')}
              />
            </Item>
            <Item floatingLabel style={{ marginVertical: dimensions.smallDimension }}>
              <Icon style={{ color: Colors.themeIconColor }} active name="key" />
              <Input
                getRef={(ref) => { this.passwordInput = ref; }}
                style={labelStyles.blackSmallLabel}
                placeholderTextColor={Colors.placeholderTxtColor}
                placeholder="Password"
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
              onPress={() => Alert.alert('forgot password')}
              style={[labelStyles.linkLabelStyle, { marginTop: -dimensions.smallDimension, textAlign: 'right' }]}
            >Forgot password
            </Text>
            <Button
              onPress={() => this.handleSubmit()}
              full
              style={{ backgroundColor: Colors.primaryBgColor, marginVertical: 15 }}
            >
              <Text style={labelStyles.primaryButtonLabel}>LOGIN</Text>
            </Button>
          </Card>
          <View style={containerStyles.rowCenteredContainer}>
            <Text style={labelStyles.blackMediumLabel}> {"Don't have an account?"} </Text>
            <TouchableOpacity onPress={() => Actions.signupScreen()}>
              <Text style={labelStyles.linkLabelStyle}>Register</Text>
            </TouchableOpacity>
          </View>
        </Content>
        {!isKeyboardOpen && <Footer />}
      </Container>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(withDrawer(Login));
