import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Container, Content, Card, Icon, CardItem, Right } from 'native-base';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Colors, dimensions, containerStyles } from '../../../themes';
import { Header, StatusBar } from '../../../components';

const styles = {
  listItemText: {
    flex: 1,
    paddingVertical: 5,
    color: Colors.primaryBgColor,
  },
};

class Settings extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Container style={containerStyles.defaultContainer}>
        <StatusBar />
        <Header
          title="Settings"
          showMenu={false}
          showPlusIcon={false}
          onPressleftIcon={() => Actions.pop()}
        />
        <Content contentContainerStyle={{ padding: dimensions.defaultDimension }}>
          <Card>
            <TouchableOpacity
              onPress={() => Actions.changePassword()}
            >
              <CardItem>
                <Text style={styles.listItemText}>Change password</Text>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </CardItem>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Actions.privacyPolicy()}
            >
              <CardItem>
                <Text style={styles.listItemText}>Privacy policy</Text>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </CardItem>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Actions.aboutUs()}
            >
              <CardItem>
                <Text style={styles.listItemText}>About us</Text>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </CardItem>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Actions.contactUs()}
            >
              <CardItem>
                <Text style={styles.listItemText}>Contact us</Text>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </CardItem>
            </TouchableOpacity>
          </Card>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
