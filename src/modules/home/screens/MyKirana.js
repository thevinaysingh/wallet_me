
/* eslint class-methods-use-this: 0 */
/* eslint no-underscore-dangle: 0 */
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  ListView,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Container } from 'native-base';
import { Actions } from 'react-native-router-flux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { containerStyles, dimensions, Colors, labelStyles } from '../../../themes';
import { Header, StatusBar } from '../../../components';
import { CartListItem } from '../components';
import { local } from '../../../constants';
import withDrawer from '../../../utils/withDrawer';

const orderItems = {
  one: {
    ordered_item_name: 'Sugar',
    item_unit: 'Kg',
    unit_count: 1,
    total_value: 35,
    ordered_item_status: -1,
  },
  two: {
    ordered_item_name: 'Sugar',
    item_unit: 'Kg',
    unit_count: 1,
    total_value: 35,
    ordered_item_status: 0,
  },
  three: {
    ordered_item_name: 'Sugar',
    item_unit: 'Kg',
    unit_count: 1,
    total_value: 35,
    ordered_item_status: 1,
  },
};

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
    width: Dimensions.get('window').width,
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

class MyKirana extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(local.categoryList[0].sub_category),
    };
  }

  render() {
    return (
      <Container style={containerStyles.defaultContainer}>
        <StatusBar />
        <Header
          title="My Kirana"
          onPressleftIcon={() => this.props.toggleDrawer()}
          showRightIcon={Boolean(true)}
          showSearchIcon={Boolean(false)}
          onPressRightIcon={() => { /* WIP */ }}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            <CartListItem
              primaryButtonLabel={'Edit'}
              onPressPrimaryButton={() => alert('my Kirana edit')}
              order={orderItems.one}
              handleDelete={() => alert('delete clicked')}
            />
            <CartListItem
              primaryButtonLabel={'Edit'}
              onPressPrimaryButton={() => alert('my Kirana edit')}
              order={orderItems.one}
              handleDelete={() => alert('delete clicked')}
            />
            <CartListItem
              primaryButtonLabel={'Edit'}
              onPressPrimaryButton={() => alert('my Kirana edit')}
              order={orderItems.one}
              handleDelete={() => alert('delete clicked')}
            />
            <CartListItem
              primaryButtonLabel={'Edit'}
              onPressPrimaryButton={() => alert('my Kirana edit')}
              order={orderItems.one}
              handleDelete={() => alert('delete clicked')}
            />
            <CartListItem
              primaryButtonLabel={'Edit'}
              onPressPrimaryButton={() => alert('my Kirana edit')}
              order={orderItems.one}
              handleDelete={() => alert('delete clicked')}
            />
            <CartListItem
              primaryButtonLabel={'Edit'}
              onPressPrimaryButton={() => alert('my Kirana edit')}
              order={orderItems.one}
              handleDelete={() => alert('delete clicked')}
            />
            <CartListItem
              primaryButtonLabel={'Edit'}
              onPressPrimaryButton={() => alert('my Kirana edit')}
              order={orderItems.one}
              handleDelete={() => alert('delete clicked')}
            />
            <CartListItem
              primaryButtonLabel={'Edit'}
              onPressPrimaryButton={() => alert('my Kirana edit')}
              order={orderItems.one}
              handleDelete={() => alert('delete clicked')}
            />
          </View>
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
        </ScrollView>
      </Container>
    );
  }
}

MyKirana.propTypes = {
  toggleDrawer: PropTypes.func,
};

MyKirana.defaultProps = {
  toggleDrawer: undefined,
};

const mapStateToProps = state => ({});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(withDrawer(MyKirana));
