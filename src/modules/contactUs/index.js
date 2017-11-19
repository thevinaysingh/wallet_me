import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container, Content, Card, Left, CardItem, Body } from 'native-base';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Feather';
import { Colors, containerStyles, dimensions, labelStyles } from '../../themes';
import { Footer, Header, AppLogo, StatusBar } from '../../components';
import withDrawer from '../../utils/withDrawer';

class ContactUs extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const iconSize = 25;
    const d = dimensions.defaultDimension;
    return (
      <Container style={containerStyles.defaultContainer}>
        <StatusBar />
        <Header
          title="Contact us"
          onPressleftIcon={() => this.props.toggleDrawer()}
        />
        <Content style={{ flex: 1, padding: d }}>
          <AppLogo />
          <Card
            style={{ padding: d, borderColor: Colors.primaryBgColor, borderWidth: 1 }}
          >
            <CardItem>
              <Left>
                <Icon name="chrome" color={Colors.themeIconColor} size={iconSize} />
                <Body>
                  <Text style={labelStyles.blackMediumLabel}>www.gharbaithekirana.in</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Left>
                <Icon name="at-sign" color={Colors.themeIconColor} size={iconSize} />
                <Body>
                  <Text style={labelStyles.blackMediumLabel}>gharbaithekirana@gmail.com</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Left>
                <Icon name="map-pin" color={Colors.themeIconColor} size={iconSize} />
                <Body>
                  <Text style={labelStyles.blackMediumLabel}>www.gharbaithekirana.in</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Left>
                <Icon name="phone" color={Colors.themeIconColor} size={iconSize} />
                <Body>
                  <Text style={labelStyles.blackMediumLabel}>+91 9753238059</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
        </Content>
        <Footer />
      </Container>
    );
  }
}

ContactUs.propTypes = {
  toggleDrawer: PropTypes.func,
};

ContactUs.defaultProps = {
  toggleDrawer: undefined,
};

export default withDrawer(ContactUs);
