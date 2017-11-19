import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container, Content, Card, CardItem, Body } from 'native-base';
import PropTypes from 'prop-types';
import { containerStyles, dimensions, labelStyles } from '../../../themes';
import { Footer, Header, AppLogo, StatusBar } from '../../../components';
import withDrawer from '../../../utils/withDrawer';

class AboutUs extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Container style={containerStyles.defaultContainer}>
        <StatusBar />
        <Header
          title="About Us"
          onPressleftIcon={() => this.props.toggleDrawer()}
        />
        <Content contentContainerStyle={{ padding: dimensions.defaultDimension }}>
          <AppLogo />
          <Card style={{ padding: dimensions.defaultDimension }}>
            <CardItem header>
              <Text>About us</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text style={labelStyles.blackSmallLabel}>about us description here</Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
        <Footer />
      </Container>
    );
  }
}

AboutUs.propTypes = {
  toggleDrawer: PropTypes.func,
};

AboutUs.defaultProps = {
  toggleDrawer: undefined,
};

export default withDrawer(AboutUs);
