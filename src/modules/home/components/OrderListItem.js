import React from 'react';
import _ from 'lodash';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { Card, CardItem } from 'native-base';
import PropTypes from 'prop-types';
import { Colors, labelStyles } from '../../../themes';

const styles = StyleSheet.create({
  title: {
    paddingHorizontal: 15,
    paddingTop: 5,
    fontSize: 18,
    color: Colors.blackIconColor,
  },
  subTitle: {
    paddingHorizontal: 15,
    fontSize: 16,
    color: Colors.placeholderTxtColor,
  },
  totalLabel: {
    flex: 1,
    color: Colors.placeholderTxtColor,
  },
  orderCancel: {
    color: 'red',
    fontWeight: '500',
    fontSize: 16,
  },
  orderPending: {
    color: '#D5B845',
    fontWeight: '500',
    fontSize: 16,
  },
  orderDone: {
    color: 'green',
    fontWeight: '500',
    fontSize: 16,
  },
  cancelButton: {
    flexDirection: 'row',
    backgroundColor: Colors.primaryBgColor,
    padding: 5,
    borderRadius: 5,
    left: 18,
  },
  bottomContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

const OrderListItem = props => (
  <Card>
    <Text style={styles.title}>{props.order.ordered_item_name}</Text>
    <Text style={styles.subTitle}>{`Quantity: ${props.order.item_unit} X ${props.order.unit_count}`}</Text>
    <CardItem>
      <Text style={styles.totalLabel}>{`Total: ₹ ${props.order.total_value}`}</Text>
      <View style={styles.bottomContainer}>
        {
          props.order.ordered_item_status === -1 &&
          <Text style={styles.orderCancel}>Cancelled</Text>
        }
        {
          props.order.ordered_item_status === 0 &&
          <Text style={styles.orderPending}>Pending</Text>
        }
        {
          props.order.ordered_item_status === 1 &&
          <Text style={styles.orderDone}>Success</Text>
        }
        {props.order.ordered_item_status === 0 &&
          <TouchableOpacity
            onPress={() => props.handleCancel()}
            style={styles.cancelButton}
          >
            <Text style={labelStyles.cancelButtonLabel}>X</Text>
            <Text style={labelStyles.cancelButtonLabel}>Cancel</Text>
          </TouchableOpacity>
        }
      </View>
    </CardItem>
  </Card>
);

OrderListItem.propTypes = {
  order: PropTypes.any,
  ordered_item_name: PropTypes.string,
  item_unit: PropTypes.string,
  unit_count: PropTypes.number,
  total_value: PropTypes.number,
  ordered_item_status: PropTypes.number,
  handleCancel: PropTypes.func,
};

OrderListItem.defaultProps = {
  order: {},
  ordered_item_name: 'Item missing',
  item_unit: 'unit missing',
  unit_count: 0,
  total_value: 0,
  ordered_item_status: -2,
  handleCancel: _.noop,
};

export default OrderListItem;
