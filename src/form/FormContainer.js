import React , { Component } from 'react';

import './FormContainer.css'

import Form from './form/Form'

export default class FormContainer extends Component {
  render(){
    return(
      <div className="container-fluid form-container">
        <Form />
      </div>
    )
  }
}
