import { all } from 'redux-saga/effects';
import sampleSaga from './sample.saga';
import addPetInfo from './petInfo.saga';

export default function* rootSaga() {
  yield all([sampleSaga(), addPetInfo()]);
}
