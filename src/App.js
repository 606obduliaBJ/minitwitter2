import React from 'react';
import './App.css';
import Profile from './components/Profile';
import React, { Component } from 'react';
import Login from './components/login/Login';



class App extends Component {
 render() {
  return (
    <div className="App">
      
        <Profile /> 
      <Login>

      </Login>
    </div>
   );
 }
}
export default App;