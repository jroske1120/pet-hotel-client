import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* addOwner( action ) {
    console.log( 'Got owner in addOwnerSaga', action.payload );
  try {
    yield axios.post('/api/owner', action.payload );

    yield put({ type: 'GET_OWNER'});
  } catch (error) {
    console.error('Error adding owner', error);
  }
}; // end addOwner

function* getOwner( action ) {
  console.log( 'In getOwnerSaga', action.type );
  try {
    const response = yield axios.get( '/api/owner' );

    console.log( 'Got a response', response.data );
    yield put({ type: 'SET_OWNER', payload: response.data });
  } catch (error) {
    console.error('Error getting owner', error);
  }
}; // end getOwner

function* deleteOwner( action ) {
  console.log( 'In deleteOwnerSaga', action );
  try {
    yield axios.delete( `/api/owner/${action.payload}` );

    yield put( { type: 'GET_OWNER' } );
  } catch (error) {
    console.error('Error deleting owner', error);
  }
}; // end deleteOwner

function* ownerSaga() {
  yield takeLatest( 'ADD_OWNER', addOwner );
  yield takeLatest( 'GET_OWNER', getOwner );
  yield takeLatest( 'DELETE_OWNER', deleteOwner );
}

export default ownerSaga;