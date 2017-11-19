/**
* @providesModule src/rootSaga
*/
import { fork } from 'redux-saga/effects';
import watchApi from '../modules/api/saga';
import { sagaMiddleware } from '../store';
import StartupSaga from './startupSaga';

function* root() {
  yield fork(StartupSaga);
  yield fork(watchApi);
}

const run = () => sagaMiddleware.run(root);

export default run;

