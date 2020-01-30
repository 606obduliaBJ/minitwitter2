
import Profile from '../Profile'
import React, { Component } from 'react'
import SuggestedUser from '../suggestedUsers/SuggestedUsers'

class Twitter extends Component {
 render() {
  return (
      <div>
         
          
            <div>
            <Profile /> 
            <SuggestedUser/>
            </div>
            
      </div>
    
   )
 }
}
export default Twitter;

