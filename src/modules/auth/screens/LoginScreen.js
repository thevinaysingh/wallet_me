import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Container, Content, Card, Item, Input, CardItem, Icon, Button, CheckBox } from 'native-base';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Colors, dimensions, containerStyles, labelStyles } from '../../../themes';
import { AppLogo, StatusBar } from '../../../components';
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
    };
  }

  handleSubmit() {
    const { email, password } = this.state;
    if (!isEmailValid(email)) {
      Alert.alert(errors.emailErrorText);
    } else if (!isPasswordValid(password)) {
      Alert.alert(errors.passwordErrorText);
    }
    // Call Api for login
  }

  focusInput(inputField) {
    this[inputField]._root.focus();
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
              <Icon style={{ color: Colors.themeIconColor }} active name="lock" />
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
            <Text style={labelStyles.blackLargeLabel}> {"Don't have an account?"} </Text>
            <TouchableOpacity onPress={() => Actions.signupScreen()}>
              <Text style={labelStyles.linkLabelStyle}>Register</Text>
            </TouchableOpacity>
          </View>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(withDrawer(Login));
