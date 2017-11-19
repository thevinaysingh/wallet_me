/**
* @providesModule api/saga
*/

import { fork } from 'redux-saga/effects';
import watchApi from './apiSaga';

export default function* () {
  yield fork(watchApi);
}
