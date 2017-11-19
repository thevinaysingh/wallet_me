import { call, put, takeEvery } from 'redux-saga/effects';
import { API_ACTION } from '../actions/apiActions';
import {
  apiCall,
} from '../apiInterface';

function* manageResponseData(action, response) {
  if (response.error) {
    yield put({ type: action.types[2], data: response });
  } else {
    yield put({ type: action.types[1], data: response, collectionId: action.collectionId });
  }
}

function* apiInterface(action) {
  try {
    yield put({ type: action.types[0] });
    const response = yield call(apiCall, action.url, action.method, action.body);
    yield call(manageResponseData, action, response);
  } catch (e) {
    yield put({ type: action.types[2], data: e });
  }
}

export default function* watchApi() {
  yield takeEvery(API_ACTION, apiInterface);
}
