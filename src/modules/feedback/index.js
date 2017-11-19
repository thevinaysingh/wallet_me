import React, { Component } from 'react';
import {
  Text,
  Alert,
} from 'react-native';
import { Container, Content, Card, Item, Input, Icon, Button } from 'native-base';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Colors, containerStyles, dimensions, labelStyles } from '../../themes';
import { Footer, Header, AppLogo, StatusBar } from '../../components';
import { linkState, isEmailValid, isDisplayNameValid, isAddressValid } from '../../utils';
import { errors } from '../../constants';
import withDrawer from '../../utils/withDrawer';

class Feedback extends Component {
  constructor() {
    super();
    this.state = {
      displayName: '',
      email: '',
      comments: '',
    };
  }

  handleSubmit() {
    const { displayName, email, comments } = this.state;
    if (!isDisplayNameValid(displayName)) {
      Alert.alert(errors.nameErrorText);
    } else if (!isEmailValid(email)) {
      Alert.alert(errors.emailErrorText);
    } else if (!isAddressValid(comments)) {
      Alert.alert(errors.addressErrorText);
    }
    // Call Api for feedback
  }

  focusInput(inputField) {
    this[inputField]._root.focus();
  }

  render() {
    return (
      <Container style={containerStyles.defaultContainer}>
        <StatusBar />
        <Header
          title="Feedback"
          onPressleftIcon={() => this.props.toggleDrawer()}
        />
        <Content contentContainerStyle={{ padding: dimensions.defaultDimension }}>
          <AppLogo />
          <Card style={{ padding: dimensions.defaultDimension }}>
            <Text style={labelStyles.blackMediumLabel}>Your comments/suggetions are welcomed</Text>
            <Item
              style={{
                marginBottom: dimensions.smallDimension,
                marginTop: dimensions.secondaryDimension,
              }}
            >
              <Icon style={{ color: Colors.themeIconColor }} active name='happy' />
              <Input
                style={labelStyles.blackSmallLabel}
                placeholderTextColor={Colors.placeholderTxtColor}
                placeholder={'Full name'}
                returnKeyType={'next'}
                getRef={(ref) => { this.nameInput = ref; }}
                onSubmitEditing={() => this.focusInput('emailInput')}
                {...linkState(this, 'displayName')}
              />
            </Item>
            <Item style={{ marginVertical: dimensions.smallDimension }}>
              <Icon style={{ color: Colors.themeIconColor }} active name='person' />
              <Input
                style={labelStyles.blackSmallLabel}
                placeholderTextColor={Colors.placeholderTxtColor}
                placeholder={'Email'}
                keyboardType={'email-address'}
                returnKeyType={'next'}
                getRef={(ref) => { this.emailInput = ref; }}
                onSubmitEditing={() => this.focusInput('commentsInput')}
                {...linkState(this, 'email')}
              />
            </Item>
            <Item style={{ marginVertical: dimensions.smallDimension, alignItems: 'flex-start' }}>
              <Icon style={{ color: Colors.themeIconColor, paddingTop: 10 }} active name='paper' />
              <Input
                style={[labelStyles.blackSmallLabel, { textAlignVertical: 'top'}]}
                placeholderTextColor={Colors.placeholderTxtColor}
                placeholder={'Leave your comments here'}
                multiline
                numberOfLines={4}
                getRef={(ref) => { this.commentsInput = ref; }}
                {...linkState(this, 'comments')}
              />
            </Item>
            <Button
              onPress={() => this.handleSubmit()}
              full
              style={{ backgroundColor: Colors.themeIconColor, marginVertical: 15 }}
            >
              <Text style={labelStyles.primaryButtonLabel}>SUBMIT</Text>
            </Button>
          </Card>
        </Content>
        <Footer />
      </Container>
    );
  }
}

Feedback.propTypes = {
  toggleDrawer: PropTypes.func,
};

Feedback.defaultProps = {
  toggleDrawer: undefined,
};

const mapStateToProps = state => ({});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(withDrawer(Feedback));
