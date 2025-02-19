import './App.css';
import {createStore} from 'redux';
import { Provider } from 'react-redux';

import combReducer from './Reducers/ConfigureReducer';
import NavBar from './Common/NavBar';
import Main from './components/Main';
  
function App() 
{ 
   
  const store = createStore(combReducer);

  return (
    <Provider store={store}>
      <div className='App' >
          
          <NavBar/>
          <Main/>
          
      </div>
    </Provider>
  );
}

export default App;
