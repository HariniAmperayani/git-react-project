import './App.css';
import React from 'react';

import {createStore} from 'redux';
import {Provider} from 'react-redux';

import combReducer from './Reducers/ConfigureReducer';
import NameComp1 from './components/NameComp1';
import NameComp2 from './components/NameComp2';

function App() {

  const store = createStore(combReducer);

  return (

      <Provider store={store}>
          <div className="App">
            <NameComp1 />
            <NameComp2/>
          </div>
      </Provider>
  );
}

export default App;
