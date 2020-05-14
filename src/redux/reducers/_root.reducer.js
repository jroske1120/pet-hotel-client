import { combineReducers } from 'redux';
import sampleReducer from './sample.reducer';
import getDisplay from './displayReducer'

const rootReducer = combineReducers({ sampleReducer, getDisplay });

export default rootReducer;
