import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  ListView,
  Image,
} from 'react-native';
import { Container, Content, List, ListItem } from 'native-base';
import { Actions } from 'react-native-router-flux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { containerStyles, dimensions, Colors } from '../../../themes';
import { Footer, Header, StatusBar } from '../../../components';
import { CategoryListItem, ImageSwiper } from '../components';
import { local } from '../../../constants';

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
});

class CategoryItems extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(local.categoryList[0].sub_category),
    };
  }

  handleSubmit() {
    // WIP
  }

  handleSubCategorySelection = (category) => {
    Actions.subCategoryScreen();
  }

  render() {
    return (
      <Container style={containerStyles.defaultContainer}>
        <StatusBar />
        <Header
          title={local.categoryList[0].name}
          showMenu={Boolean(false)}
          onPressleftIcon={() => Actions.pop()}
          showRightIcon={Boolean(true)}
          showSearchIcon={Boolean(false)}
          onPressRightIcon={() => { /* WIP */ }}
        />
        <View style={styles.content}>
          <Image
            style={styles.imageStyle}
            source={{ uri: local.homeSwiperImages[0] }}
          />
          <Text style={styles.listHeader}>Sub Category</Text>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(category) =>
              <CategoryListItem
                key={`${category.name}`}
                onPressItem={(c) => this.handleSubCategorySelection(c) }
                category={category} 
              />
            }
          />
        </View>
      </Container>
    );
  }
}

CategoryItems.propTypes = {
  toggleDrawer: PropTypes.func,
};

CategoryItems.defaultProps = {
  toggleDrawer: undefined,
};

const mapStateToProps = state => ({});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItems);
