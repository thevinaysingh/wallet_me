
/* eslint class-methods-use-this: 0 */
/* eslint no-underscore-dangle: 0 */
import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  ListView,
} from 'react-native';
import { Container, Content, List, ListItem } from 'native-base';
import { Actions } from 'react-native-router-flux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { containerStyles, dimensions, Colors } from '../../themes';
import { Footer, Header, StatusBar } from '../../components';
import { CategoryListItem } from './components';
import { local } from '../../constants';
import withDrawer from '../../utils/withDrawer';

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
});

class Home extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(local.categoryList),
    };
  }

  handleSubmit() {
    // WIP
  }

  handleCategorySelection = (category) => {
    Actions.categoryScreen({category: category});
  }

  render() {
    return (
      <Container style={containerStyles.defaultContainer}>
        <StatusBar />
        <Header
          title="Home"
          onPressleftIcon={() => this.props.toggleDrawer()}
          showRightIcon={Boolean(true)}
          onPressRightIcon={() => { /* WIP */ }}
        />
        <View style={styles.content}>
          <Text style={styles.listHeader}>All Categories</Text>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(category) =>
              <CategoryListItem
                key={`${category.name}`}
                onPressItem={(c) => this.handleCategorySelection(c) }
                category={category} 
              />
            }
          />
        </View>
      </Container>
    );
  }
}

Home.propTypes = {
  toggleDrawer: PropTypes.func,
};

Home.defaultProps = {
  toggleDrawer: undefined,
};

const mapStateToProps = state => ({});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(withDrawer(Home));
