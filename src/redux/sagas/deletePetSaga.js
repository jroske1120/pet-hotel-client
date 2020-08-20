import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* deletePet(action) {
  try {
      console.log('in deletePet')
    //Delete the pet on a server delete request
    yield axios.delete(`/api/pet/${action.payload.pet_id}`);
    //Request information back from the server after change
    yield put({type: 'DISPLAY_ITEMS'});
  } catch (error) {
    console.error('Failed to Delete Pet', error);
  }
}

function* deletePetSaga() {
  yield takeLatest('DELETE_PET', deletePet);
}

export default deletePetSaga;