//import React from 'react';
import './App.css';
import Profile from './components/Profile';
import React, { Component } from 'react';
import Login from './components/login/Login';
import SuggestedUser from './components/suggestedUsers/SuggestedUsers'



class App extends Component {
 render() {
  return (
    <div className="App">
      <header className="App-header">
        <Profile /> 
      </header>
      <Login/>
      <SuggestedUser/>
    
    </div>
   );
 }
}
export default App;