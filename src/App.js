import React from 'react';
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
}

export default App;
