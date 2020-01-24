import React from 'react'
import {BrowserRouter as Router, Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import perfil from './perfil.jpg'
import './Profile.css' 



class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <Router>
            <aside id="profile" className="twitter-panel">
                <div className="profile-banner">               
                    <Link to={"/"} className="profile-name"  />
                </div>
                <div className="profile-body"> 
                    <img src={perfil}  alt="logo"  />                  
                    <Link to={"/"}
                        className="profile-name"> 
                        Juan Perez 
                    </Link>
                    <Link to={"/" }
                        className="profile-username">
                        @Juanito
                    </Link>
                </div>

                <div className="profile-resumen">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xs-3">
                                <Link to={"/" }>
                                    <p className="profile-resumen-title">TWEETS</p>
                                    <p className="profile-resumen-value">
                                        {45}</p>
                                </Link>
                            </div>
                            <div className="col-xs-4">
                                <Link to={"/ /following"}>
                                    <p className="profile-resumen-title">SIGUIENDO</p>
                                    <p className="profile-resumen-value">
                                        {15}</p>
                                </Link>
                            </div>
                            <div className="col-xs-5">
                                <Link to={"/followers"}>
                                    <p className="profile-resumen-title">SEGUIDORES</p>
                                    <p className="profile-resumen-value">
                                        {30}</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
            </Router>
        )
    }
}

Profile.propTypes = {
    profile: PropTypes.object.isRequired
}

export default Profile;