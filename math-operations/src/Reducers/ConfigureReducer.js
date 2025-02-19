import { combineReducers } from 'redux';
import AdditionReducer from './AdditionReducer'; 
import MultiplicationReducer from './MultiplicationReducer';

const reds =  { storeSum: AdditionReducer, storeMul: MultiplicationReducer};
const combReducer = combineReducers(reds);

export default combReducer;
  