
import Profile from '../Profile'
import React, { Component } from 'react'
import SuggestedUser from '../suggestedUsers/SuggestedUsers'
import {Link } from 'react-router-dom';

class Twitter extends Component {
 render() {
  return (
      <div>
         
          
            <div>
            <Profile /> 
            <SuggestedUser/>
            
            </div>
            <Link to="/tweetDetail" className="link">Entrar a detalle</Link>
            
      </div>
    
   )
 }
}
export default Twitter;

