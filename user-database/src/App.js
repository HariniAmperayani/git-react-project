import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
import MainContainer from './components/MainContainer';
import NavBar from './common/NavBar';

function App() {

  const { isLoading } = useAuth0();
  
  if (isLoading) {
    console.log("isLoading is ",isLoading);
    return <h4>Loading..</h4>;
  }

  return (
    <div className="App">
      <MainContainer/>
      <NavBar/>
    </div>
  );
}

export default App;
