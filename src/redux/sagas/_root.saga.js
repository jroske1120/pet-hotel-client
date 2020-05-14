import { all } from 'redux-saga/effects';
import sampleSaga from './sample.saga';
import ownerSaga from './owner.saga';
import deletePetSaga from './deletePetSaga';
import displaySaga from './displaySaga';

export default function* rootSaga() {
  yield all([sampleSaga(), displaySaga(), deletePetSaga(), ownerSaga()]);
}


