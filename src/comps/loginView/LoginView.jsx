import React from 'react';
import './loginView.css';
import logo from './../../assets/logo.png';


export default class LoginView extends React.Component{
    render(){
        return(
            <div id="login-view">
                <div id="helo-block">
                    <img src={logo} alt="logo"/>
                    <h1>Helo</h1>
                    <input placeholder="Login / Register"/>
                </div>
            </div>
        )
    }
}