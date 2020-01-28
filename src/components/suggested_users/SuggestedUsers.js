import React from 'react'
import perfil from './perfil.jpg'
//import perfil_01 from 'perfil_01.jpg';


class SuggestedUser extends React.Component{

  render(){
    return(
      <aside id="suggestedUsers" className="twitter-panel">
        <span className="su-title">A quién seguir</span>
        <div className="sg-item">
          <div className="su-perfil">
            <img src={perfil} alt="Juan manuel"/>
          </div>
          <div className="sg-body">
            <div>
              <a href={"/"}>
                <span className="sg-name">juan lopez</span>
                <span className="sg-username">@juan</span>
              </a>
            </div>
            <a href={"/"}
              className="btn btn-primary btn-sm">
              <i className="fa fa-user-plus" aria-hidden="true"></i>
              Ver perfil</a>
          </div>
      </div>
      </aside>
    )
  }
}
export default SuggestedUser;
