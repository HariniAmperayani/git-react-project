import {combineReducers} from 'redux';
import NumReducer from './NumReducer';

const reds = {storeNum : NumReducer};

const combReducer = combineReducers(reds);

export default combReducer;