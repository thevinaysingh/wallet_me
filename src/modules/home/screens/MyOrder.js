import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { containerStyles, dimensions } from '../../../themes';
import { Header, StatusBar } from '../../../components';
import { OrderListItem } from '../components';
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

class MyOrder extends Component {
  constructor() {
    super();
    this.state = {};
  }

  handleCancel() {
    alert('cancel')
  }

  focusInput(inputField) {
    this[inputField]._root.focus();
  }

  render() {
    return (
      <Container style={containerStyles.defaultContainer}>
        <StatusBar />
        <Header
          title="My Order"
          onPressleftIcon={() => this.props.toggleDrawer()}
        />
        <Content contentContainerStyle={{ padding: dimensions.defaultDimension }}>
          <OrderListItem
            order={orderItems.one}
            handleCancel={this.handleCancel}
          />
          <OrderListItem
            order={orderItems.two}
            handleCancel={this.handleCancel}
          />
          <OrderListItem
            order={orderItems.three}
            handleCancel={this.handleCancel}
          />
        </Content>
      </Container>
    );
  }
}

MyOrder.propTypes = {
  toggleDrawer: PropTypes.func,
};

MyOrder.defaultProps = {
  toggleDrawer: undefined,
};

const mapStateToProps = state => ({});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(withDrawer(MyOrder));
