import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Container } from 'native-base';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { containerStyles, dimensions, Colors, labelStyles } from '../../../themes';
import { Header, StatusBar } from '../../../components';
import { CartListItem } from '../components';
import { local } from '../../../constants';
import withDrawer from '../../../utils/withDrawer';

const styles = StyleSheet.create({
  listHeader: {
    marginTop: 5,
    padding: 10,
    backgroundColor: Colors.primaryBgColor,
    color: 'white',
    fontSize: dimensions.primayFontSize,
  },
  content: {
    padding: dimensions.defaultDimension,
    alignSelf: 'stretch',
    flex: 1,
  },
  imageStyle: {
    height: 200,
    width: dimensions.getViewportWidth(),
  },
  addToCartButton: {
    backgroundColor: Colors.primaryBgColor,
    alignSelf: 'flex-end',
    borderRadius: 5,
    margin: 5,
  },
  addToCartButtonText: {
    ...labelStyles.whiteMediumLabel,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  bottomContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: Colors.primaryBgColor,
  },
});

class MyCart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container style={containerStyles.defaultContainer}>
        <StatusBar />
        <Header
          title="My Cart"
          onPressleftIcon={() => this.props.toggleDrawer()}
          showRightIcon={Boolean(true)}
          showSearchIcon={Boolean(false)}
          onPressRightIcon={() => { /* WIP */ }}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            <CartListItem
              primaryButtonLabel={'Order me only'}
              onPressPrimaryButton={() => alert('my car edit')}
              order={local.orderItems.one}
              handleDelete={() => alert('delete clicked')}
            />
            <CartListItem
              primaryButtonLabel={'Order me only'}
              onPressPrimaryButton={() => alert('my car edit')}
              order={local.orderItems.one}
              handleDelete={() => alert('delete clicked')}
            />
            <CartListItem
              primaryButtonLabel={'Order me only'}
              onPressPrimaryButton={() => alert('my car edit')}
              order={local.orderItems.one}
              handleDelete={() => alert('delete clicked')}
            />
            <CartListItem
              primaryButtonLabel={'Order me only'}
              onPressPrimaryButton={() => alert('my car edit')}
              order={local.orderItems.one}
              handleDelete={() => alert('delete clicked')}
            />
            <CartListItem
              primaryButtonLabel={'Order me only'}
              onPressPrimaryButton={() => alert('my car edit')}
              order={local.orderItems.one}
              handleDelete={() => alert('delete clicked')}
            />
            <CartListItem
              primaryButtonLabel={'Order me only'}
              onPressPrimaryButton={() => alert('my car edit')}
              order={local.orderItems.one}
              handleDelete={() => alert('delete clicked')}
            />
            <CartListItem
              primaryButtonLabel={'Order me only'}
              onPressPrimaryButton={() => alert('my car edit')}
              order={local.orderItems.one}
              handleDelete={() => alert('delete clicked')}
            />
            <View style={styles.bottomContainer}>
              <Text style={labelStyles.blackLargeLabel}>Total Amount: ₹1000000</Text>
              <Text style={labelStyles.blackLargeLabel}>Delivery Charge: ₹100</Text>
              <Text style={labelStyles.blackLargeLabel}>Payable Amount: ₹1000100</Text>
              <TouchableOpacity
                style={styles.addToCartButton}
              >
                <Text style={styles.addToCartButtonText}>Order All</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </Container>
    );
  }
}

MyCart.propTypes = {
  toggleDrawer: PropTypes.func,
};

MyCart.defaultProps = {
  toggleDrawer: undefined,
};

const mapStateToProps = state => ({});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(withDrawer(MyCart));
