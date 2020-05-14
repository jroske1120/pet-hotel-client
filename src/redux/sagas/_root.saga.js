import { all } from 'redux-saga/effects';
import deletePetSaga from './deletePetSaga';
import displaySaga from './displaySaga';

export default function* rootSaga() {
  yield all([displaySaga(), deletePetSaga()]);
}


