import React, { Component } from 'react';
import { Provider } from 'react-redux';
import runRootSaga from './sagas';
import { store } from './store';
import Router from './routes';

export default class App extends Component {
  constructor() {
    super();
    runRootSaga();
  }

  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
