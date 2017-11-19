import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import { Card, CardItem } from 'native-base';
import { labelStyles } from '../../../themes';

const styles = StyleSheet.create({
  leftContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  categoryImage: {
    height: 60,
    width: 60,
    borderRadius: 10,
    backgroundColor: 'transparent',
  },
});

const CategoryListItem = props => (
  <TouchableOpacity
    activeOpacity={1}
    onPress={() => props.onPressItem(props.category)}
  >
    <Card>
      <CardItem style={{ }}>
        <View style={styles.leftContainer}>
          <Text style={labelStyles.blackLargeLabel}>{props.category.name}</Text>
          <Text style={labelStyles.blackMediumLabel}>{props.category.sub_name}</Text>
        </View>
        <Image source={{ uri: 'http://cdn-img.health.com/sites/default/files/styles/large_16_9/public/field/image/090617-selena-gomez-time-first-tout_0.jpg?itok=MCMjqDxS' }} style={styles.categoryImage} />
        <Icon name="chevron-right" color="black" size={30} />
      </CardItem>
    </Card>
  </TouchableOpacity>
);

CategoryListItem.propTypes = {
  category: PropTypes.any,
  onPressItem: PropTypes.func,
};

CategoryListItem.defaultProps = {
  category: {},
  onPressItem: _.noop,
};

export default CategoryListItem;
