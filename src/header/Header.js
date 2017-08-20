import React, { Component } from 'react';
import './Header.css'

import {
  BrowserRouter as Router,
  Route,
  Link,
  browserHistory
} from 'react-router-dom'

export default class Header extends Component {
  render(){
    return(
      <div className="jumbotron header">
        <Link to='/' style={{
          color: "#EFF6EE"
        }}><h1>Revkit</h1></Link>
      </div>
    )
  }
}
