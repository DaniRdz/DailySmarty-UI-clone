import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Home from './home';
import Results from './results';


export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Router>
          <Switch>
            <Route exact path='/' component= {Home} />
            <Route exact path='/results' component= {Results} />
          </Switch>
        </Router> 
      </div>
    );
  }
}
