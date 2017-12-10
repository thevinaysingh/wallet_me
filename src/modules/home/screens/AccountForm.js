import React, { Component } from 'react';
import {
  Alert,
  ActivityIndicator,
  ToastAndroid,
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Feather';
import { Container, Content, Card, Item, Input, Button, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { Colors, dimensions, labelStyles, containerStyles } from '../../../themes';
import { Header, StatusBar } from '../../../components';
import {
  linkState,
  isEmailValid,
  isAddressValid,
  isPhoneValid,
  assignRef,
  focusOnNext,
  networkConnectivity,
} from '../../../utils';
import { FirebaseManager } from '../../../firebase/index';

const styles = {
  iconStyle: {
    color: Colors.themeIconColor,
    marginRight: 5,
  },
  iconEyeStyle: {
    color: Colors.whiteIconColor,
    width: 30,
    height: 30,
    alignSelf: 'center',
    borderRadius: 5,
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: Colors.primaryBgColor,
  },
};

class AccountForm extends Component {
  constructor(props) {
    super(props);
    const { account } = props;
    this.state = {
      title: account.app_name,
      webUrl: account.web_url,
      userId: account.username,
      password: account.password,
      linkedMob: account.linked_mob,
      linkedEmail: account.linked_email,
      objective: account.objective,
      showPassword: false,
      isLoading: false,
    };
  }

  handleSubmit() {
    const {
      title,
      webUrl,
      userId,
      password,
      linkedMob,
      linkedEmail,
      objective,
    } = this.state;
    if (linkedEmail.length > 0 || linkedMob.length > 0) {
      if (!isEmailValid(linkedEmail)) {
        Alert.alert('Input Error', 'Linked email is not valid');
        return;
      } else if(!isPhoneValid(linkedMob)) {
        Alert.alert('Input Error', 'Linked phone is not valid');
        return;
      }
    }
    const digitalAccount = {
      app_name: title,
      web_url: webUrl,
      username: userId,
      password,
      linked_email: linkedEmail === '' ? 'unset' : linkedEmail,
      linked_mob: linkedMob === '' ? 'unset' : linkedMob,
      objective: objective === '' ? 'unset' : linkedMob,
      type: 'Others',
      date: new Date().getDate().toString(),
    };
    networkConnectivity().then(() => {
      if (this.props.create) {
        this.setState({ isLoading: true });
        FirebaseManager.addAccount(digitalAccount)
          .then(() => {
            this.setState({ isLoading: false });
            ToastAndroid.show('Successfully added!', ToastAndroid.LONG);
            Actions.homeScreen({ type: 'reset' });
          }).catch((error) => {
            this.setState({ isLoading: false });
            Alert.alert('Error', `${error}`);
          });
      } else {
        FirebaseManager.updateAccount(digitalAccount, this.props.account.key)
        .then(() => {
          this.setState({ isLoading: false });
          ToastAndroid.show('Successfully updated!', ToastAndroid.LONG);
          Actions.homeScreen({ type: 'reset' });
        }).catch((error) => {
          this.setState({ isLoading: false });
          Alert.alert('Error', `${error}`);
        });
      }
    }).catch((error) => {
      Alert.alert('Network Error', `${error}`);
    });
  }

  isSubmitDisabled = () => {
    const {
      title,
      webUrl,
      userId,
      password,
    } = this.state;
    if (!isAddressValid(title) || !isAddressValid(webUrl)
      || !isAddressValid(userId) || !isAddressValid(password)) {
      return true;
    }
    return false;
  }

  render() {
    const isSubmitDisabled = this.isSubmitDisabled();
    return (
      <Container style={containerStyles.defaultContainer}>
        <StatusBar />
        <Header
          title={this.props.create ? 'Add Account' : 'Edit Account'}
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
              <Icon style={styles.iconStyle} size={20} name='grid' />
              <Input
                style={labelStyles.blackSmallLabel}
                placeholderTextColor={Colors.placeholderTxtColor}
                placeholder={'Application name'}
                returnKeyType={'next'}
                onSubmitEditing={() => focusOnNext(this, 'webUrlInput')}
                {...linkState(this, 'title')}
              />
            </Item>
            <Item style={{ marginVertical: dimensions.smallDimension }}>
              <Icon style={styles.iconStyle} size={20} name='chrome' />
              <Input
                ref={ref => assignRef(this, 'webUrlInput', ref)}
                style={labelStyles.blackSmallLabel}
                placeholderTextColor={Colors.placeholderTxtColor}
                placeholder={'Http url (optional)'}
                returnKeyType={'next'}
                onSubmitEditing={() => focusOnNext(this, 'userIdInput')}
                {...linkState(this, 'webUrl')}
              />
            </Item>
            <Item style={{ marginVertical: dimensions.smallDimension }}>
              <Icon style={styles.iconStyle} size={20} name='user' />
              <Input
                ref={ref => assignRef(this, 'userIdInput', ref)}
                style={labelStyles.blackSmallLabel}
                placeholderTextColor={Colors.placeholderTxtColor}
                placeholder={'Username'}
                returnKeyType={'next'}
                onSubmitEditing={() => focusOnNext(this, 'passwordInput')}
                {...linkState(this, 'userId')}
              />
            </Item>
            <Item style={{ marginVertical: dimensions.smallDimension }}>
              <Icon style={styles.iconStyle} size={20} name='lock' />
              <Input
                ref={ref => assignRef(this, 'passwordInput', ref)}
                style={labelStyles.blackSmallLabel}
                placeholderTextColor={Colors.placeholderTxtColor}
                placeholder={'Password'}
                returnKeyType="next"
                onSubmitEditing={() => focusOnNext(this, 'linkedEmailInput')}
                secureTextEntry={!this.state.showPassword}
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
            <Item style={{ marginVertical: dimensions.smallDimension }}>
              <Icon style={styles.iconStyle} size={20} name='mail' />
              <Input
                ref={ref => assignRef(this, 'linkedEmailInput', ref)}
                style={labelStyles.blackSmallLabel}
                placeholderTextColor={Colors.placeholderTxtColor}
                placeholder={'Linked email (optional)'}
                returnKeyType="next"
                keyboardType="email-address"
                onSubmitEditing={() => focusOnNext(this, 'linkedMobInput')}
                {...linkState(this, 'linkedEmail')}
              />
            </Item>
            <Item style={{ marginVertical: dimensions.smallDimension }}>
              <Icon style={styles.iconStyle} size={20} name='phone' />
              <Input
                ref={ref => assignRef(this, 'linkedMobInput', ref)}
                style={labelStyles.blackSmallLabel}
                placeholderTextColor={Colors.placeholderTxtColor}
                placeholder={'Linked phone (optional)'}
                keyboardType={'phone-pad'}
                returnKeyType="next"
                maxLength={10}
                onSubmitEditing={() => focusOnNext(this, 'objectiveInput')}
                {...linkState(this, 'linkedMob')}
              />
            </Item>
            <Item style={{ marginVertical: dimensions.smallDimension }}>
              <Icon style={styles.iconStyle} size={20} name='clipboard' />
              <Input
                ref={ref => assignRef(this, 'objectiveInput', ref)}
                style={labelStyles.blackSmallLabel}
                placeholderTextColor={Colors.placeholderTxtColor}
                placeholder={'Comments (optional)'}
                returnKeyType="done"
                onSubmitEditing={() => this.handleSubmit()}
                {...linkState(this, 'objective')}
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
                onPress={() => this.handleSubmit()}
                full
                disabled={isSubmitDisabled}
                style={{
                  backgroundColor: isSubmitDisabled ?
                    Colors.placeholderTxtColor : Colors.primaryBgColor,
                  marginVertical: 15,
                }}
              >
                <Text style={labelStyles.primaryButtonLabel}>{this.props.create ? 'Add' : 'Edit'}</Text>
              </Button>}
          </Card>
        </Content>
      </Container>
    );
  }
}

AccountForm.propTypes = {
  account: PropTypes.any,
  create: PropTypes.bool,
};

AccountForm.defaultProps = {
  account: {},
  create: true,
};

const mapStateToProps = state => ({});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AccountForm);
