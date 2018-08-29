import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Posts from './components/Posts'
import UserPosts from './components/UserPosts'

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
            <Route path="/users/:id" component={UserPosts}/>
          </Switch>
        </Router>

      </div>
    );
  }
}

export default App;
