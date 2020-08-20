import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* putCheckIn(action) {
  try {
    console.log('in putCheckIn', action.payload);
    //Delete the pet on a server delete request
    yield axios.put(`/api/pet/checkin/${action.payload.pet_id}`, {checked_in: action.payload.checked_in});
    //Request information back from the server after change
    yield put({type: 'DISPLAY_ITEMS'});
  } catch (error) {
    console.error('Failed to PUT request for checked_in', error);
  }
}

function* putCheckInSaga() {
  yield takeLatest('PUT_CHECK_IN', putCheckIn);
}

export default putCheckInSaga;