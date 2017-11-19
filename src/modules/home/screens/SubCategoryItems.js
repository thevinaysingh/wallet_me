import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ListView,
  ScrollView,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { containerStyles, dimensions } from '../../../themes';
import { Header, StatusBar } from '../../../components';
import { SubCategoryListItem, OrderModifierPopup } from '../components';
import { local } from '../../../constants';

const styles = StyleSheet.create({
  content: {
    width: dimensions.getViewportWidth(),
    height: dimensions.getViewportHeight() - 54,
  },
});

class SubCategoryItems extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(local.categoryList[0].sub_category[0].type),
      isItemSelected: true,
    };
  }

  render() {
    console.log('WIP: ', this.state.dataSource);
    return (
      <View style={containerStyles.defaultContainer}>
        <StatusBar />
        <Header
          title={local.categoryList[0].sub_category[0].name}
          showMenu={Boolean(false)}
          onPressleftIcon={() => Actions.pop()}
          showRightIcon={Boolean(true)}
          showSearchIcon={Boolean(false)}
          onPressRightIcon={() => { /* WIP */ }}
        />
        <ScrollView style={styles.content}>
          <SubCategoryListItem />
        </ScrollView>
        {this.state.isItemSelected &&
          <OrderModifierPopup onPressClose={() => this.setState({ isItemSelected: false })} />}
      </View>
    );
  }
}

SubCategoryItems.propTypes = {
  toggleDrawer: PropTypes.func,
};

SubCategoryItems.defaultProps = {
  toggleDrawer: undefined,
};

const mapStateToProps = state => ({});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SubCategoryItems);
