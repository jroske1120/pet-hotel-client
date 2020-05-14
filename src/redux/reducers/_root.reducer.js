import { combineReducers } from 'redux';
import sampleReducer from './sample.reducer';
import getDisplay from './displayReducer'
import setOwner from './owner.reducer';

const rootReducer = combineReducers({ sampleReducer, getDisplay, setOwner });

export default rootReducer;
