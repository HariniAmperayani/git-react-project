import './App.css';
import {createStore} from 'redux';
import { combineReducers } from 'redux'; 
import { Provider } from 'react-redux';

import AdditionComp1 from './components/AdditionComp1';
import AdditionComp2 from './components/AdditionComp2';


  
function App() 
{ 
 
  // const initialState = {z:0};

  function ZReducer(state={redSum:0}, action)
  {
    
    console.log('The action in Reducer is ', action);
    let newState = {...state};

    if (action.type === 'test')
      newState.redSum = action.compSum;
    console.log('The state in Reducer is ', newState);
    return newState;

  }

  const reds =  { storeSum: ZReducer};
  // const combReducer = combineReducers(reds);
  const store = createStore(combineReducers(reds));


  return (
    <Provider store={store}>
    <div className='App' >

        <AdditionComp1/>
        <AdditionComp2/>

    </div>
    </Provider>
  );
}

export default App;
