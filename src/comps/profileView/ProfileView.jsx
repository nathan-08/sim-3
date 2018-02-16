import React from 'react'; 
import './profileView.css';
import Header from './../header/Header';

export default class ProfileView extends React.Component{
    render(){
        return(
            <div id="profile-view">
                <Header/>
                <div id="profile-view-sub-header">
                        <div id="profile-info-container">
                            <div>
                                <img src='#' alt='profile-pic'/>
                                <h2>User Name</h2>
                                
                            </div>
                            <div>
                                <button>Update</button>
                                <button>Cancel</button>
                            </div>
                        </div>
                        <div id="user-data">
                        <div className="profile-grid-item">
                            <p>First Name</p>
                            <input/>
                            <p>Last Name</p>
                            <input/>
                            <p>Gender</p>
                            <select>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                            <p>Hair Color</p>
                            <select>
                                <option value="Brown">Brown</option>
                            </select>
                            <p>Eye Color</p>
                            <select>
                                <option value="Blue">Blue</option>
                            </select>
                        
                        
                        </div>
                        <div className="profile-grid-item"></div>
                        <div className="profile-grid-item">
                            <p>Hobby</p>
                            <input/>
                            <p>Birthday Day</p>
                                <select>
                                    <option value={1}>01</option>
                                </select>
                            <p>Birthday Month</p>
                                <select>
                                    <option value={1}>01</option>
                                </select>
                            <p>Birthday Year</p>
                                <select>
                                    <option value={1991}>1991</option>
                                </select>
                        </div>
                        </div>
                </div>
            </div>
        )
    }
}