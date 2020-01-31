import React from 'react'
import perfil from './perfil.png'
import perfil_01 from './perfil_01.png'
import './SuggestedUsers.css'


class SuggestedUser extends React.Component{

  render(){
    return(
      <aside id="suggestedUsers" className="twitter-panel">
        <span className="su-title">A quién seguir</span>
        <div className="sg-item">
          <div className="su-avatar">
            {/*--perfil: es el nombre de la imagen que tiene el usuario -->*/}
            <img src={perfil} alt="Juan lopez"/>
          </div>
          <div className="sg-body">
            <div>
              <a href={"/"}>{/*se le asigna la ruta para dicho usuario */}
                <span className="sg-name">Juan López</span>
                <span className="sg-username">@juan</span>
              </a>
            </div>
            <a href={"/"}
              className="btn btn-primary btn-sm">
              <i className="fa fa-user-plus" aria-hidden="true"></i>
              Ver perfil</a>
          </div>
        </div>
        <br></br>
        <div className="sg-item">
          <div className="su-avatar">
            <img src={perfil_01} alt="mario lopez"/>
          </div>
          <div className="sg-body">
            <div>
              <a href={"/"}>
                <span className="sg-name">Juan Pérez</span>
                <span className="sg-username">@juanito.p</span>
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
