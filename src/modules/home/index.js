import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ListView,
  Keyboard,
  RefreshControl,
  TouchableOpacity,
  Text,
} from 'react-native';
import { Container, Item, Input } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import Autocomplete from 'react-native-autocomplete-input';
import { Actions } from 'react-native-router-flux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { containerStyles, dimensions, Colors, labelStyles } from '../../themes';
import { Header, StatusBar } from '../../components';
import { AccountListItem, CustomDialog } from './components';
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
    alignSelf: 'stretch',
    flex: 1,
  },
  iconStyle: {
    color: Colors.themeIconColor,
    marginRight: 5,
  },
  filterIconStyle: {
    color: Colors.placeholderTxtColor,
    marginRight: 5,
  },
  filterIconStyle2: {
    color: Colors.primaryBgColor,
  },
  filterIconStyle2Container: {
    marginTop: 10,
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  suggestedTextContainer: {
    padding: 10,
  },
  listContainerStyle: {
    height: dimensions.getViewportHeight() / 3,
    width: dimensions.getViewportWidth() - 30,
  },
  searchBar: {
    margin: 10,
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: Colors.placeholderTxtColor,
    borderRadius: 5,
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
  },
  trueSearchBar: {
    borderWidth: 1,
    borderColor: Colors.blackIconColor,
    marginLeft: 10,
    marginTop: 10,
  },
});

class Home extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(local.localAccountsList),
      filter: local.getFilterList()[0],
      showFilter: false,
      refreshing: false,
      searchingItems: [],
      searchedText: 'Search',
      isSearching: false,
    };
  }

  componentWillMount() {
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide);
  }

  componentWillUnmount() {
    this.keyboardDidHideListener.remove();
    Keyboard.dismiss();
  }

  keyboardDidHide = () => {
    this.setState({ 
      isSearching: false,

    });
  }

  onPopupEvent = (eventName, index, account) => {
    // TODO:
    if (eventName !== 'itemSelected') return
    if (index === 0) {
      Actions.accountForm({ create: false, account: account});
    } else {
      //this.handleRemove()
    }
  }

  handleRefresh = () => {
    // TODO:
    // this.setState({refreshing: true});
    // fetchData().then(() => {
    //   this.setState({refreshing: false});
    // });
  }

  handleRemove() {
    // TODO:
  }

  handleSearch(text) {
    const data = local.localAccountsList.filter(account =>
      account[this.state.filter.key].toLowerCase().startsWith(text.toLowerCase()));

    this.setState({
      searchingItems: data,
      searchedText: text,
    });
  }

  handleSearchSelection(searchText) {
    const data = local.localAccountsList.filter(account =>
      account[this.state.filter.key].toLowerCase().startsWith(searchText.toLowerCase()));
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.setState({
      dataSource: searchText ? ds.cloneWithRows(data) : ds.cloneWithRows(local.localAccountsList),
      searchingItems: [],
      searchedText: searchText,
      isSearching: false,
    });
  }

  handleFilterSelection = (value) => {
    this.setState({
      filter: value,
      showFilter: false,
    });
  }

  handleStartSearch = () => {
    this.setState({ isSearching: true })
  }

  handleStopSearch = () => {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.setState({
      searchedText: 'Search',
      dataSource: ds.cloneWithRows(local.localAccountsList),
    })
  }

  renderFilterContainer = () => {
    return (
      <CustomDialog
        options={local.getFilterList()}
        onPressClose={() => this.setState({ showFilter: false })}
        onSelectItem={this.handleFilterSelection}
      />
    );
  }

  render() {
    const {
      refreshing,
      filter,
      showFilter,
      searchingItems,
      isSearching,
      searchedText,
    } = this.state;
    return (
      <Container style={containerStyles.defaultContainer}>
        <StatusBar />
        <Header
          title="Home"
          showFilterIcon={!isSearching}
          onPressleftIcon={() => this.props.toggleDrawer()}
          onPressRightIcon={() =>
            Actions.accountForm({ create: true, account: local.newAccountObject })}
          onPressFilterIcon={() => this.setState({ showFilter: true })}
        />
        {isSearching ?
          <View style={{ flexDirection: 'row' }}>
            <Autocomplete
              inputContainerStyle={styles.trueSearchBar}
              listContainerStyle={styles.listContainerStyle}
              data={searchingItems}
              autoFocus
              selectTextOnFocus
              underlineColorAndroid='transparent'
              defaultValue={searchedText}
              onChangeText={text => this.handleSearch(text)}
              renderItem={data => (
                <TouchableOpacity
                  style={styles.suggestedTextContainer}
                  onPress={() => this.handleSearchSelection(data[filter.key])}
                >
                  <Text style={labelStyles.blackMediumLabel}>{data[filter.key]}</Text>
                </TouchableOpacity>
              )}
            />
            <View style={styles.filterIconStyle2Container}>
              <Icon style={styles.filterIconStyle2} size={15} name={filter.icon} />
            </View>
          </View> :
          <View style={styles.content}>
            <TouchableOpacity
              style={styles.searchBar}
              onPress={this.handleStartSearch}
            >
              <Icon style={styles.iconStyle} size={20} name='search' />
              <Text style={{ flex: 1 }}>{searchedText}</Text>
              <Icon style={styles.filterIconStyle} size={14} name={filter.icon} />
              <TouchableOpacity
                style={{ paddingHorizontal: 20, paddingVertical: 15 }}
                onPress={() => this.handleStopSearch()}
              >
                <Icon style={styles.filterIconStyle} size={14} name="close" />
              </TouchableOpacity>
            </TouchableOpacity>
            <ListView
              style={{ marginVertical: 5 }}
              dataSource={this.state.dataSource}
              renderRow={account => (
                <AccountListItem
                  key={`${account.app_name}`}
                  onPressItem={acc => this.handleAccountSelection(acc)}
                  onPopupEvent={this.onPopupEvent}
                  account={account}
                />)}
              refreshControl={
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={this.handleRefresh}
                />
              }
            />
            {showFilter && this.renderFilterContainer()}
          </View>
          }
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
