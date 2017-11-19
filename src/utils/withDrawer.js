import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Drawer from 'react-native-drawer';
import Sidebar from '../modules/sidebar';

export class DrawerWrapper extends Component {
  constructor() {
    super();
    this.state = {
      showDrawer: false,
    };
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  toggleDrawer() {
    this.setState({ showDrawer: !this.state.showDrawer });
  }

  render() {
    return (
      <Drawer
        type="overlay"
        content={<Sidebar hasHeader toggleDrawer={() => this.toggleDrawer()} />}
        open={this.state.showDrawer}
        openDrawerOffset={80}
        panOpenMask={0.05}
        tapToClose
        onOpen={() => this.setState({ showDrawer: true })}
        onClose={() => this.setState({ showDrawer: false })}
      >
        {React.createElement(
            this.props.component,
            {
              ...this.props.reduxProps,
              toggleDrawer: this.toggleDrawer,
            },
          )
        }
      </Drawer>
    );
  }
}

DrawerWrapper.propTypes = {
  component: PropTypes.func,
  reduxProps: PropTypes.objectOf(PropTypes.any),
};

DrawerWrapper.defaultProps = {
  component: undefined,
  reduxProps: undefined,
};

export default component => props => <DrawerWrapper component={component} reduxProps={props} />;
