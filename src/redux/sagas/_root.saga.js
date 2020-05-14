import { all } from 'redux-saga/effects';
import ownerSaga from './owner.saga';
import deletePetSaga from './deletePetSaga';
import displaySaga from './displaySaga';

export default function* rootSaga() {
  yield all([displaySaga(), deletePetSaga(), ownerSaga()]);
}

