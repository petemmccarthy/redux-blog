import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PostsContainer from './components/PostsContainer'
import UserPosts from './components/UserPosts'

import store from './store'
import { Provider } from 'react-redux'

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className="App">

          <header className="App-header">
            <h2>Redux Blog</h2>
          </header>

          <Router>
            <Switch>
              <Route exact path="/" component={PostsContainer}/>
              <Route path="/users/:id" component={UserPosts}/>
            </Switch>
          </Router>

        </div>
      </Provider>
    )

  }
}

export default App;
