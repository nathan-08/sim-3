import React from 'react';
import './header.css';
import home from './../../assets/home.png';
import search from './../../assets/search.png';
import { Link } from 'react-router-dom';

export default class Header extends React.Component{
    render(){
        return(
            <div id='header'>
                <div>Helo
                <Link to='/'><img src={home} alt="home-icon"/></Link>
                <img src={search} alt="search-icon"/></div> 
                <div>Dashboard</div> 
                <div>Logout</div> 
            </div>
        )
    }
}