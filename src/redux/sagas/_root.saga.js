import { all } from 'redux-saga/effects';
import sampleSaga from './sample.saga';
import deletePetSaga from './deletePetSaga';

export default function* rootSaga() {
  yield all([sampleSaga(), deletePetSaga()]);
}
