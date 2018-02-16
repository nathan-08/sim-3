import React, { Component } from 'react';
import './reset.css';
import './App.css';
import LoginView from './comps/loginView/LoginView';
import { Route } from 'react-router-dom';
import DashboardView from './comps/dashboardView/DashboardView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={LoginView}/>
        <Route path="/dashboard" component={DashboardView}/>
      </div>
    );
  }
}

export default App;
