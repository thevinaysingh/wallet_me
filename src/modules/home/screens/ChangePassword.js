import React, { Component } from 'react';
import {
  View,
  Keyboard,
  StyleSheet,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  TextInput,
} from 'react-native';
import { Container, Content, Input, Card, Item, Icon, Button, CardItem, Right } from 'native-base';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Colors, dimensions, labelStyles, containerStyles } from '../../../themes';
import { Header, StatusBar, IconInput } from '../../../components';
import {
  linkState,
  isDisplayNameValid,
  isPhoneValid,
  assignRef,
  focusOnNext,
} from '../../../utils';
import { errors } from '../../../constants';
// import Input from '../components/Input';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryBgColor,
  },
  scrollContainer: {
    width: dimensions.getViewportWidth(),
  },
  imageTopView: {
    flex: 1,
    marginTop: 50,
    alignItems: 'center',
  },
  bottomButtonView: {
    flex: 3,
    alignItems: 'center',
  },
  textInputView: {
    marginTop: 10,
    height: 55,
    width: dimensions.getViewportWidth() - 50,
  },
  orSigninBorder: {
    width: (dimensions.getViewportWidth() / 2) - 100,
    height: 1,
    bottom: 0,
    backgroundColor: Colors.primaryBgColor,
  },
  textInputStyle: {
    top: 10,
    height: 50,
    fontSize: 18,
    width: dimensions.getViewportWidth() - 50,
    bottom: 0,
    paddingLeft: 8,
    color: 'black',
  },
  logoIcon: {
    width: 150,
    height: 150,
    alignSelf: 'center',
  },
  centerButtonView: {
    width: dimensions.getViewportWidth(),
    top: 0,
    height: 80,
    alignItems: 'center',
  },
  tapToSignUpView: {
    flexDirection: 'row',
    marginTop: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tapToForgotView: {
    left: (dimensions.getViewportWidth() / 2) - 100,
    height: 30,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  tapToSocialView: {
    flexDirection: 'row',
    marginTop: 20,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signInbutton: {
    top: 20,
    backgroundColor: 'green',
    width: dimensions.getViewportWidth() / 2,
    borderRadius: 10.0,
    borderColor: 'grey',
    borderWidth: 1.0,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialIcons: {
    width: 40,
    height: 40,
    margin: 10,
  },
  signInText: {
    fontSize: 17,
    color: Colors.primaryBgColor,
    alignSelf: 'center',
  },
  forgotPassText: {
    fontSize: 14,
    color: Colors.primaryBgColor,
    alignSelf: 'center',
  },
  inputWrapperStyle: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  inputStyle: {
    borderWidth: 0,
  },
});

class ChangePassword extends Component {
  constructor() {
    super();

    this.state = {
      oldPassword: '',
      newPassword: '',
      showPassword: false,
    };
  }

  handleSubmit = () => {
    const { oldPassword, newPassword } = this.state;
    // TODO: call api to change password.
  }

  render() {
    const { oldPassword, newPassword, showPassword } = this.state;
    const isButtonDisabled = (oldPassword.length >= 6 && newPassword.length >= 6);
    return (
      <Container style={containerStyles.defaultContainer}>
        <StatusBar />
        <Header
          title="Change Password"
          showMenu={false}
          showPlusIcon={false}
          onPressleftIcon={() => Actions.pop()}
        />
        <Content contentContainerStyle={{ padding: dimensions.defaultDimension }}>
          <IconInput
            icon="lock"
            secureTextEntry
            placeholder='Current password (Min. 6 chars)'
            assignRef={ref => assignRef(this, 'currentPasswordInput', ref)}
            returnKeyType={'next'}
            onSubmitEditing={() => focusOnNext(this, 'newPasswordInput')}
            {...linkState(this, 'oldPassword')}
          />
          <IconInput
            icon="lock"
            type="password"
            showPassword={showPassword}
            onPressEye={showPasswordStatus => this.setState({ showPassword: !showPasswordStatus })}
            placeholder='New password (Min. 6 chars)'
            assignRef={ref => assignRef(this, 'newPasswordInput', ref)}
            returnKeyType={'done'}
            onSubmitEditing={this.handleSubmit}
            {...linkState(this, 'newPassword')}
          />
          <Button
            onPress={this.handleSubmit}
            full
            disabled={!isButtonDisabled}
            style={{
              backgroundColor: !isButtonDisabled ?
                Colors.placeholderTxtColor : Colors.primaryBgColor,
              marginVertical: 15,
            }}
          >
            <Text style={labelStyles.primaryButtonLabel}>Submit</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword);
