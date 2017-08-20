import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';


import App from './App';
import Header from './header/Header'
import FormContainer from './form/FormContainer'
import Favorites from './favorites/Favorites'

import {
  BrowserRouter as Router,
  Route,
  Link,
  browserHistory
} from 'react-router-dom'

import { createBrowserHistory } from 'history';

const history = createBrowserHistory()

ReactDOM.render(
  <Router history={history}>
    <div>
      <Header />
      <Route exact path='/' component={FormContainer} />
      <Route exact path='/favorites' component={Favorites} />
    </div>
  </Router>

  ,
  document.getElementById('root')
);


if(module.hot){
  module.hot.accept()
}
