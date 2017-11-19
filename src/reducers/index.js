/**
* @providesModule src/rootReducer
*/

import { combineReducers } from 'redux';

function rootReducer(state = {}, action) {
  if (action.type === 'undefined') {
    return state;
  }

  switch (action.type) {
    default:
      return state;
  }
}

const reducers = {
  rootReducer,
};

export default combineReducers(reducers);
