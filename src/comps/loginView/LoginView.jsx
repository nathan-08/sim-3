import React from 'react';
import './loginView.css';
import logo from './../../assets/logo.png';
import { Link } from 'react-router-dom';


export default class LoginView extends React.Component{
    render(){
        return(
            <div id="login-view">
                <div id="helo-block">
                    <img src={logo} alt="logo"/>
                    <h1>Helo</h1>
                    <button onClick={()=>this.props.history.push('/dashboard')}>Login / Register</button>
                </div>
            </div>
        )
    }
}