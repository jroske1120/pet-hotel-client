import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* addPet(action) {
    console.log('Posting data to database:', action.payload);

    try {
        yield axios.post(`/api/template/`, action.payload);
        // yield put 
    } catch (error) {
        console.log('Error with user info input:', error);
    }
};


function* addPetInfo() {
    yield takeEvery('ADD_PET', addPet);
};
export default addPetInfo;