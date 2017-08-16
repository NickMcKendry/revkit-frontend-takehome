import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import App from './App';
import Header from './header/Header'
import FormContainer from './form/FormContainer'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

ReactDOM.render(
  <Router>
    <div>
      <Header />
      <Route exact path='/' component={FormContainer} />
    </div>
  </Router>

  ,
  document.getElementById('root')
);


if(module.hot){
  module.hot.accept()
}
