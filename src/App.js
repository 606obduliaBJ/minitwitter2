//import React from 'react';
import './App.css';
import React, { Component } from 'react';
import Login from './components/login/Login';
//import Twitter from './components/twitter/Twitter'
import Profile from '../src/components/Profile'
import SuggestedUser from '../src/components/suggestedUsers/SuggestedUsers'
//import 'bootstrap/dist/css/bootstrap.min.css'



class App extends Component {
 render() {
  return (
    <div className="App">
      
      <Login/>
      
            <Profile /> 
            
      <div>
      <SuggestedUser/>
        </div>     
    
    </div>
   );
 }
}
export default App;