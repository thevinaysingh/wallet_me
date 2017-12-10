import React, { Component } from 'react';
import {
  Text,
  Alert,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Container, Content, Card, Item, Input, Button } from 'native-base';
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
import { networkConnectivity } from '../../../utils';
import { FirebaseManager } from '../../../firebase/index';

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
  editableText: {
    color: Colors.placeholderTxtColor,
    fontSize: 14,
    alignSelf: 'center',
    textAlign: 'left',
    textAlignVertical: 'center',
  },
};

class MyProfile extends Component {
  constructor() {
    super();

    this.state = {
      displayName: FirebaseManager.profile.name,
      mob: FirebaseManager.profile.mobile,
      isNameEditable: false,
      isMobEditable: false,
      isLoading: false,
    };
  }

  handleSubmit = () => {
    const { mob, displayName } = this.state;
    if (!isDisplayNameValid(displayName)) {
      Alert.alert(errors.nameErrorText);
      return;
    }
    if (!isPhoneValid(mob)) {
      Alert.alert(errors.mobErrorText);
      return;
    }
    const profile= {
      name: displayName,
      mobile: mob,
    };
    this.setState({ isLoading: true });
    networkConnectivity().then(() => {
      FirebaseManager.updateProfile(profile)
      .then(() => {
        this.setState({
          isLoading: false,
          isNameEditable: false,
          isMobEditable: false,
        });
        ToastAndroid.show('Successfully update profile!', ToastAndroid.LONG);
        Actions.pop();
      }).catch((error) => {
        this.setState({ isLoading: false });
        Alert.alert('Profile Error', `${error}`);
      });
    }).catch((error) => {
      this.setState({
        isLoading: false,
      });
      Alert.alert('Network Error', `${error}`);
    });
  }

  handleBack = () => {
    Keyboard.dismiss();
    Actions.pop();
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
          title="My Profile"
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
              <Icon style={styles.iconStyle} size={20} name='mail' />
              <Input
                style={styles.editableText}
                value={FirebaseManager.profile.email}
                disabled
              />
            </Item>
            <Item style={{ marginVertical: dimensions.smallDimension }}>
              <Icon style={styles.iconStyle} size={20} name='user' />
              <Input
                style={[styles.editableText,
                  isNameEditable ?
                  { color: Colors.blackIconColor } : { color: Colors.placeholderTxtColor }]}
                placeholderTextColor={Colors.placeholderTxtColor}
                placeholder={'First & last name'}
                defaultValue={displayName}
                value={displayName}
                disabled={!isNameEditable}
                {...linkState(this, 'displayName')}
              />
              {!isNameEditable ?
                <Icon
                  onPress={() => this.setState({ isNameEditable: true })}
                  style={styles.iconEditStyle}
                  size={20}
                  name="edit"
                /> :
                <Icon
                  onPress={() => this.setState({ isNameEditable: false, displayName: 'Vinay Singh' })}
                  style={styles.iconEditStyle}
                  size={20}
                  name='x'
                />
              }
            </Item>
            <Item style={{ marginVertical: dimensions.smallDimension }}>
              <Icon style={styles.iconStyle} size={20} name='phone' />
              <Input
                style={[styles.editableText,
                    isMobEditable ?
                    { color: Colors.blackIconColor } : { color: Colors.placeholderTxtColor }]}
                placeholderTextColor={Colors.placeholderTxtColor}
                placeholder={'Mobile'}
                keyboardType={'phone-pad'}
                defaultValue={mob}
                value={mob}
                maxLength={10}
                disabled={!isMobEditable}
                {...linkState(this, 'mob')}
              />
              {!isMobEditable ?
                <Icon
                  onPress={() => this.setState({ isMobEditable: true })}
                  style={styles.iconEditStyle}
                  size={20}
                  name="edit"
                /> :
                <Icon
                  onPress={() => this.setState({ isMobEditable: false, mob: '9753238059' })}
                  style={styles.iconEditStyle}
                  size={20}
                  name='x'
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
                disabled={!isButtonDisabled}
                style={{
                  backgroundColor: !isButtonDisabled ?
                    Colors.placeholderTxtColor : Colors.primaryBgColor,
                  marginVertical: 15,
                }}
              >
                <Text style={labelStyles.primaryButtonLabel}>UPDATE</Text>
              </Button>}
          </Card>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MyProfile);
