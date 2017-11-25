import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Feather';
import { Container, Content, Card, Item, Input, Button, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { Colors, dimensions, labelStyles, containerStyles } from '../../../themes';
import { Header, StatusBar } from '../../../components';
import {
  linkState,
  // isEmailValid,
  // isPasswordValid,
  // isDisplayNameValid,
  // isAddressValid,
  // isPincodeValid,
  // isPhoneValid,
} from '../../../utils';
// import { errors } from '../../../constants';

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
    };
    // this.itemsRef = firebase.database().ref().child('users').child('-Kn__pTjpsBCH01i-nlN').child('digital_accounts');
  }

  componentWillMount() {
    // NetInfo.isConnected.fetch().then((isConnected) => {
    //   isConnected ? this.setState({ netStatus: true }) : this.setState({ netStatus: false });
    // });
  }

  applyValidation() {
    let isAllfieldsValid = true;
    this.state.title === '' || this.state.webUrl === '' || this.state.userId === '' ||
    this.state.password === '' || this.state.linkedMob === '' || this.state.linkedEmail === '' ||
    this.state.objective === '' || this.state.type === '' ? isAllfieldsValid = false : null;
    return isAllfieldsValid;
  }

  handleSubmit() {
    const isAllFieldsValid = this.applyValidation();
    if (isAllFieldsValid) {
      const digitalAccount = {
        app_name: this.state.title,
        web_url: this.state.webUrl,
        username: this.state.userId,
        password: this.state.password,
        linked_email: this.state.linkedEmail,
        linked_mob: this.state.linkedMob,
        objective: this.state.objective,
        type: 'Others',
        date: new Date().toDateString(),
      };

    //   this.itemsRef.push(digitalAccount)
    //   .then(() => {
    //     Alert.alert('Successfully added to wallet');
    //     this.setState({
    //       title: '',
    //       webUrl: '',
    //       userId: '',
    //       password: '',
    //       linkedMob: '',
    //       linkedEmail: '',
    //       objective: '',
    //     });
    //   });
    // } else {
    //   Alert.alert('Input error or no network');
    }
  }

  render() {
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
                {...linkState(this, 'title')}
              />
            </Item>
            <Item style={{ marginVertical: dimensions.smallDimension }}>
              <Icon style={styles.iconStyle} size={20} name='chrome' />
              <Input
                style={labelStyles.blackSmallLabel}
                placeholderTextColor={Colors.placeholderTxtColor}
                placeholder={'Http url (optional)'}
                returnKeyType={'next'}
                {...linkState(this, 'webUrl')}
              />
            </Item>
            <Item style={{ marginVertical: dimensions.smallDimension }}>
              <Icon style={styles.iconStyle} size={20} name='user' />
              <Input
                style={labelStyles.blackSmallLabel}
                placeholderTextColor={Colors.placeholderTxtColor}
                placeholder={'Username'}
                returnKeyType={'next'}
                {...linkState(this, 'userId')}
              />
            </Item>
            <Item style={{ marginVertical: dimensions.smallDimension }}>
              <Icon style={styles.iconStyle} size={20} name='lock' />
              <Input
                style={labelStyles.blackSmallLabel}
                placeholderTextColor={Colors.placeholderTxtColor}
                placeholder={'Password'}
                returnKeyType="next"
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
                style={labelStyles.blackSmallLabel}
                placeholderTextColor={Colors.placeholderTxtColor}
                placeholder={'Linked email (optional)'}
                returnKeyType="next"
                {...linkState(this, 'linkedEmail')}
              />
            </Item>
            <Item style={{ marginVertical: dimensions.smallDimension }}>
              <Icon style={styles.iconStyle} size={20} name='phone' />
              <Input
                style={labelStyles.blackSmallLabel}
                placeholderTextColor={Colors.placeholderTxtColor}
                placeholder={'Linked phone (optional)'}
                keyboardType={'phone-pad'}
                returnKeyType="next"
                {...linkState(this, 'linkedMob')}
              />
            </Item>
            <Item style={{ marginVertical: dimensions.smallDimension }}>
              <Icon style={styles.iconStyle} size={20} name='clipboard' />
              <Input
                style={labelStyles.blackSmallLabel}
                placeholderTextColor={Colors.placeholderTxtColor}
                placeholder={'Comments (optional)'}
                returnKeyType="done"
                {...linkState(this, 'objective')}
              />
            </Item>
            <Button
              onPress={() => this.handleSubmit()}
              full
              style={{ backgroundColor: Colors.primaryBgColor, marginVertical: 15 }}
            >
              <Text style={labelStyles.primaryButtonLabel}>{this.props.create ? 'Add' : 'Edit'}</Text>
            </Button>
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
