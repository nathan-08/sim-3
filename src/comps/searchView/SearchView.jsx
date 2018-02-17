import React from 'react';
import './searchView.css';
import Header from './../header/Header';

export default class SearchView extends React.Component{
    render(){
        return(
            <div id="search-view">
                <Header/>
                <div id="search-view-sub-header">
                    <div id="search-box-container">
                        <select>
                            <option value="First Name">First Name</option>
                            <option value="Last Name">Last Name</option>

                        </select>
                        <input></input>
                        <button className="button-grey">Search</button>
                        <button className="button-white">Reset</button>
                    </div>

                    <div id="matching-users-container"> users matching search criterion will be listed here
                    </div>

                </div>
            </div>
        )
    }
}