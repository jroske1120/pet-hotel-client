import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* addOwner( action ) {
    console.log( 'Got owner in addOwnerSaga', action.payload );
  try {
    yield axios.post('/api/owner', action.payload );

    // yield put({ type: 'SET_SAMPLE_RESPONSE', payload: response.data });
  } catch (error) {
    console.error('Sample GET failed', error);
  }
}

function* getOwner( action ) {
  console.log( 'In getOwnerSaga', action.type );
  try {
    const response = yield axios.get( '/api/owner' );

    console.log( 'Got a response', response.data );
    yield put({ type: 'SET_OWNER', payload: response.data });
  } catch (error) {
    console.error('Sample GET failed', error);
  }
}

function* ownerSaga() {
  yield takeLatest( 'ADD_OWNER', addOwner );
  yield takeLatest( 'GET_OWNER', getOwner );
}

export default ownerSaga;