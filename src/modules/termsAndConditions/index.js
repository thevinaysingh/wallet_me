import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container, Content, Card, CardItem, Body } from 'native-base';
import PropTypes from 'prop-types';
import { containerStyles, dimensions, labelStyles } from '../../themes';
import { Footer, Header, AppLogo, StatusBar } from '../../components';
import withDrawer from '../../utils/withDrawer';

class TermsAndConditions extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Container style={containerStyles.defaultContainer}>
        <StatusBar />
        <Header
          title="Privacy & Policy"
          onPressleftIcon={() => this.props.toggleDrawer()}
        />
        <Content contentContainerStyle={{ padding: dimensions.defaultDimension }}>
          <AppLogo />
          <Card style={{ padding: dimensions.defaultDimension }}>
            <CardItem header>
              <Text>Title</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text style={labelStyles.blackSmallLabel}>Privacy and policy description here</Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
        <Footer />
      </Container>
    );
  }
}

TermsAndConditions.propTypes = {
  toggleDrawer: PropTypes.func,
};

TermsAndConditions.defaultProps = {
  toggleDrawer: undefined,
};

export default withDrawer(TermsAndConditions);
