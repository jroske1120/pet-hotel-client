import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* addPet(action) {
    console.log('Posting pet info to db:', action.payload);
    try {
        yield axios.post(`/api/pet/`, action.payload);
        yield put ({type: 'DISPLAY_ITEMS'});
        yield put({ type: 'GET_OWNER'});
    } catch (error) {
        console.log('Error with user info input:', error);
    }
};


function* addPetInfo() {
    yield takeEvery('ADD_PET', addPet);
};
export default addPetInfo;