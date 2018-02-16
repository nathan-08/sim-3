import React from 'react';
import './dashboardView.css';
import Header from './../header/Header';


export default class DashboardView extends React.Component {
    render() {
        return (
            <div id="dashboard-view">
                <Header />
                <div id="dashboard-view-sub-header">
                    <div className="user-info-container">
                        <div>
                            <img src='#' alt="user-pic" />
                            <div>
                                <div>User Name</div>
                                <button>logout</button>
                            </div>
                        </div>
                        <div>
                            Welcome to Helo! Find recommended friends based on your similarities, and even search for them by name. The more you update your profiile, the better recommendations we can make!
                            </div>
                    </div>
                    <div className="friends-container">
                        <div>
                            <h3>Recommended Friends</h3>
                            <span><p>Sorted by</p><select>
                                <option value="get sum frens">get frens</option>
                            </select>
                            </span>
                        </div>
                        <div>
                            no recommendations
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}