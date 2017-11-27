import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Body, Text } from 'native-base';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { dimensions, containerStyles } from '../../../themes';
import { Header, StatusBar, AppLogo } from '../../../components';

class PrivacyPolicy extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Container style={containerStyles.defaultContainer}>
        <StatusBar />
        <Header
          title="Privacy Policy"
          showMenu={false}
          showPlusIcon={false}
          onPressleftIcon={() => Actions.pop()}
        />
        <Content contentContainerStyle={{ padding: dimensions.defaultDimension }}>
          <AppLogo />
          <Card>
            {/* <CardItem header>
              <Text>Untitled</Text>
            </CardItem> */}
            <CardItem>
              <Body>
                <Text>Coming Soon ...</Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PrivacyPolicy);
