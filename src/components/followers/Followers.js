import React from 'react'
import UserCard from './UserCard'
/*import APIInvoker from './utils/APIInvoker'
import PropTypes from 'prop-types'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import {connect} from 'react-redux'
import {findFollowersFollowings, resetFollowersFollowings}
  from  './actions/Actions'*/


class Followers extends React.Component{

  render(){
    return(
      <section>
        <div className="container-fluid no-padding">
          <div className="row no-padding">
                <div className="col-xs-12 col-sm-6 col-lg-4">
                  <UserCard/>
                </div>

          </div>
        </div>
      </section>
    )
  }
}


export default Followers;
