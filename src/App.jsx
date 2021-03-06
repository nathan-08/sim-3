import React, { Component } from 'react';
import './reset.css';
import './App.css';
import './buttons.css';
import LoginView from './comps/loginView/LoginView';
import { Route } from 'react-router-dom';
import DashboardView from './comps/dashboardView/DashboardView';
import ProfileView from './comps/profileView/ProfileView';
import SearchView from './comps/searchView/SearchView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={LoginView}/>
        <Route path="/dashboard" component={DashboardView}/>
        <Route path="/profile" component={ProfileView}/>
        <Route path="/search" component={SearchView}/>
      </div>
    );
  }
}

export default App;
