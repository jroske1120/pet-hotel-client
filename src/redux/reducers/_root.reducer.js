import { combineReducers } from 'redux';
import getDisplay from './displayReducer'
import setOwner from './owner.reducer';

const rootReducer = combineReducers({ getDisplay, setOwner });

export default rootReducer;
