import React, { Component } from 'react';

export default class login extends Component {
    render() {
        return (
            <div id="signup">
                <div className="container" >
                    <div className="row">
                        <div className="col-xs-12">
                        </div>
                    </div>
                </div>
                <div className="signup-form">
                    <form onSubmit="">
                        <h1>Iniciar sesión en Twitter</h1>

                        <input type="text" value="Manuel"
                            placeholder="usuario" name="username" id="username"
                            onChange=""/>
                        <label ref="usernameLabel" id="usernameLabel"
                            htmlFor="username"></label>
                        <input type="password" id="passwordLabel"
                            value="123" placeholder="Contraseña"
                            name="password" onChange="" />
                        <label ref="passwordLabel" htmlFor="passwordLabel"></label>
                        <button className="btn btn-primary btn-lg " id="submitBtn"
                            onClick="">Regístrate</button>
                        <label ref="submitBtnLabel" id="submitBtnLabel" htmlFor="submitBtn"
                            className="shake animated hidden "></label>
                        <p className="bg-danger user-test">Crea un usuario o usa el usuario
<strong>test/test</strong></p>
                        <p>¿No tienes una cuenta? </p>
                    </form>
                </div>
            </div>
        )
    }
}