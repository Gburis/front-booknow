import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router } from 'react-router-dom';

import Routes from './main/routes'

class App extends React.Component{
  render(){
    return(
      <Router>
        <Routes/>
      </Router>
    );
  }
}

export default App;
