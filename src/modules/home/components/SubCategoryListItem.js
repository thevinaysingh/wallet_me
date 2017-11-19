import React from 'react';
import _ from 'lodash';
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import { dimensions, Colors, labelStyles } from '../../../themes';

const CUSTOM_DIMENSION = (Dimensions.get('window').width - 30) / 2;

const styles = StyleSheet.create({
  content: {
    padding: dimensions.smallDimension,
    alignSelf: 'stretch',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  itemContainer: {
    width: CUSTOM_DIMENSION,
    height: CUSTOM_DIMENSION + 100,
    borderColor: Colors.primaryBgColor,
    borderWidth: 1,
    margin: dimensions.smallDimension,
  },
  itemNameText: {
    ...labelStyles.blackSmallLabel,
    marginLeft: 5,
    fontSize: 15,
  },
  itemSubnameText: {
    ...labelStyles.blackSmallLabel,
    marginLeft: 5,
  },
  costDisplayText: {
    fontSize: 14,
    color: Colors.primaryBgColor,
    marginLeft: 5,
    paddingVertical: 3,
  },
  addToCartButton: {
    backgroundColor: Colors.primaryBgColor,
    alignSelf: 'flex-end',
    borderRadius: 5,
    margin: 5,
  },
  addToCartButtonText: {
    ...labelStyles.cancelButtonLabel,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});

const SubCategoryListItem = props => (
  <View style={styles.content}>
    <View style={styles.itemContainer}>
      <Image
        source={{ uri: 'http://www.helloshoppee.com/image/cache/data/cate%20kirana-600x315.jpg' }}
        style={{ width: CUSTOM_DIMENSION - 5, height: CUSTOM_DIMENSION - 5 }}
      />
      <Text style={styles.itemNameText}>Name of the item</Text>
      <Text style={styles.itemSubnameText}>(Sub name)</Text>
      <Text style={styles.costDisplayText}>190 Rs. / 1 Kg</Text>
      <TouchableOpacity
        style={styles.addToCartButton}
      >
        <Text style={styles.addToCartButtonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.itemContainer}>
      <Image
        source={{ uri: 'http://www.helloshoppee.com/image/cache/data/cate%20kirana-600x315.jpg' }}
        style={{ width: CUSTOM_DIMENSION - 5, height: CUSTOM_DIMENSION - 5 }}
      />
      <Text style={styles.itemNameText}>Name of the item</Text>
      <Text style={styles.itemSubnameText}>(Sub name)</Text>
      <Text style={styles.costDisplayText}>190 Rs. / 1 Kg</Text>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.addToCartButton}
      >
        <Text style={styles.addToCartButtonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.itemContainer}>
      <Image
        source={{ uri: 'http://www.helloshoppee.com/image/cache/data/cate%20kirana-600x315.jpg' }}
        style={{ width: CUSTOM_DIMENSION - 5, height: CUSTOM_DIMENSION - 5 }}
      />
      <Text style={styles.itemNameText}>Name of the item</Text>
      <Text style={styles.itemSubnameText}>(Sub name)</Text>
      <Text style={styles.costDisplayText}>190 Rs. / 1 Kg</Text>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.addToCartButton}
      >
        <Text style={styles.addToCartButtonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.itemContainer}>
      <Image
        source={{ uri: 'http://www.helloshoppee.com/image/cache/data/cate%20kirana-600x315.jpg' }}
        style={{ width: CUSTOM_DIMENSION - 5, height: CUSTOM_DIMENSION - 5 }}
      />
      <Text style={styles.itemNameText}>Name of the item</Text>
      <Text style={styles.itemSubnameText}>(Sub name)</Text>
      <Text style={styles.costDisplayText}>190 Rs. / 1 Kg</Text>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.addToCartButton}
      >
        <Text style={styles.addToCartButtonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.itemContainer}>
      <Image
        source={{ uri: 'http://www.helloshoppee.com/image/cache/data/cate%20kirana-600x315.jpg' }}
        style={{ width: CUSTOM_DIMENSION - 5, height: CUSTOM_DIMENSION - 5 }}
      />
      <Text style={styles.itemNameText}>Name of the item</Text>
      <Text style={styles.itemSubnameText}>(Sub name)</Text>
      <Text style={styles.costDisplayText}>190 Rs. / 1 Kg</Text>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.addToCartButton}
      >
        <Text style={styles.addToCartButtonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.itemContainer}>
      <Image
        source={{ uri: 'http://www.helloshoppee.com/image/cache/data/cate%20kirana-600x315.jpg' }}
        style={{ width: CUSTOM_DIMENSION - 5, height: CUSTOM_DIMENSION - 5 }}
      />
      <Text style={styles.itemNameText}>Name of the item</Text>
      <Text style={styles.itemSubnameText}>(Sub name)</Text>
      <Text style={styles.costDisplayText}>190 Rs. / 1 Kg</Text>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.addToCartButton}
      >
        <Text style={styles.addToCartButtonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.itemContainer}>
      <Image
        source={{ uri: 'http://www.helloshoppee.com/image/cache/data/cate%20kirana-600x315.jpg' }}
        style={{ width: CUSTOM_DIMENSION - 5, height: CUSTOM_DIMENSION - 5 }}
      />
      <Text style={styles.itemNameText}>Name of the item</Text>
      <Text style={styles.itemSubnameText}>(Sub name)</Text>
      <Text style={styles.costDisplayText}>190 Rs. / 1 Kg</Text>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.addToCartButton}
      >
        <Text style={styles.addToCartButtonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.itemContainer}>
      <Image
        source={{ uri: 'http://www.helloshoppee.com/image/cache/data/cate%20kirana-600x315.jpg' }}
        style={{ width: CUSTOM_DIMENSION - 5, height: CUSTOM_DIMENSION - 5 }}
      />
      <Text style={styles.itemNameText}>Name of the item</Text>
      <Text style={styles.itemSubnameText}>(Sub name)</Text>
      <Text style={styles.costDisplayText}>190 Rs. / 1 Kg</Text>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.addToCartButton}
      >
        <Text style={styles.addToCartButtonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  </View>
);

SubCategoryListItem.propTypes = {
  item: PropTypes.any,
  onPressItem: PropTypes.func,
};

SubCategoryListItem.defaultProps = {
  item: {},
  onPressItem: _.noop,
};

export default SubCategoryListItem;
