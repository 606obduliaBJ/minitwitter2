import React from 'react';
<<<<<<< HEAD
import './App.css';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Profile /> 
      </header>
    </div>
  );
=======
//import { render } from 'react-dom';
//import logo from './logo.svg';
import './App.css';
//import './components/suggested_users/styles.css'
import SuggestedUser from './components/suggested_users/SuggestedUsers'


class App extends React.Component{

  render(){
    return(
      <SuggestedUser/>
    )
  }
>>>>>>> master
}

export default App;
