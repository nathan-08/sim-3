import React, { Component } from 'react';
import './reset.css';
import './App.css';
import LoginView from './comps/loginView/LoginView';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={LoginView}/>
      </div>
    );
  }
}

export default App;
