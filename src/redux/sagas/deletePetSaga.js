import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* deletePet(action) {
  try {
      console.log('in deletePet')
    //Delete the pet on a server delete request
    yield axios.delete(`/api/template/delete/${action.payload.pet_id}`);
    //Request information back from the server after change
    
  } catch (error) {
    console.error('Failed to Delete Pet', error);
  }
}

function* deletePetSaga() {
  yield takeLatest('DELETE_PET', deletePet);
}

export default deletePetSaga;