import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Posts from './components/Posts'
import User from './components/User'

class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <h2>Redux Blog</h2>
        </header>
        <Router>
          <Switch>
            <Route exact path="/" component={Posts}/>
            <Route pasth="/user:{id}" component={User}/>
          </Switch>
        </Router>


      </div>
    );
  }
}

export default App;
