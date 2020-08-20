import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* displayItems() {
    try {
        console.log('in display saga');

        const response = yield axios.get('/api/pet');

        console.log('put in display reducer,', response.data);
        yield put({ type: 'SET_DISPLAY', payload: response.data });


    } catch (error) {
        console.error('SET DISPLAY failed', error);
    }
};

function* displaySaga() {
    yield takeEvery('DISPLAY_ITEMS', displayItems);
};

export default displaySaga;
