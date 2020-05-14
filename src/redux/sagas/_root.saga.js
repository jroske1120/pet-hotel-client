import { all } from 'redux-saga/effects';
import sampleSaga from './sample.saga';
import ownerSaga from './owner.saga';

export default function* rootSaga() {
  yield all([sampleSaga(), ownerSaga()]);
}
