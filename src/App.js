import './App.css';
import React, { Component } from 'react';
import Login from './components/login/Login';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Twitter from '../src/components/twitter/Twitter'
import SuggestedUser from './components/suggestedUsers/SuggestedUsers';
import Profile from './components/Profile'

import TweetDetail from './components/Detail/TweetDetail';

class App extends Component {
 render() {
  return (
    <BrowserRouter>
      <div>
      <Login></Login>
        <Switch>
          <Route
            path="/twitter" component={Twitter}/>
            <Route
            path="/profile" component={Profile}/>
            <Route
            path="/suggestedUser" component={SuggestedUser}/>
            <Route 
            path="/tweetDetail" component={TweetDetail}/>
        </Switch>    
      </div>
    </BrowserRouter>
    
   );
 }
}
export default App;