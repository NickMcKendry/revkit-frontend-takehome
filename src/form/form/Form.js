import React, { Component } from 'react';
import './Form.css'
import axios from 'axios'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import PropTypes from 'prop-types'

export default class Form extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  constructor(props, context){
    super(props, context)
    this.state = {
      titleValue: undefined,
      priceValue: undefined,
      urlValue: undefined,
      imageValue: undefined,
      file: ''
    }
  }

  updateTitleValue = (e) => {
    this.setState({ titleValue: e.target.value })
  }

  updatePriceValue = (e) => {
    this.setState({ priceValue: e.target.value })
  }

  updateUrlValue = (e) => {
    this.setState({ urlValue: e.target.value })
  }

  updateImageValue = (e) => {
    this.setState({ imageValue: e.target.value })
  }

  updateFileImageValue = (e) => {
    e.preventDefault()
    let reader = new FileReader();
    let file = e.target.files[0]

    reader.onloadend = () => {
      this.setState({
        file: file,
        imageValue: reader.result
      })
    }
    reader.readAsDataURL(file)
  }

   onSubmit = (e) => {
    e.preventDefault()
    const title = this.state.titleValue
    const price = this.state.priceValue
    const url = this.state.urlValue
    const image = this.state.imageValue


      axios.post('https://nickmckendryrevkit.herokuapp.com/api/favorites', {title: title, price: price, url: url, image: image})
    .then((result) => {
      console.log(result);
      this.context.router.history.push('/favorites')
    })
  }




  render(){



    return(
      <div className="row form">
      <div className="left-container col-md-6">
        <form method="post" onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input required className="form-control" name="title" type="text" placeholder="Borla Exhuast" value={this.state.titleValue} onChange={e => this.updateTitleValue(e)} />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input required className="form-control" name="price" type="text" placeholder="$750" value={this.state.priceValue} onChange={e => this.updatePriceValue(e)} />
          </div>
          <div className="form-group">
            <label htmlFor="url">URL</label>
            <input required className="form-control" name="url" type="text" placeholder="https://carparts.com" value={this.state.urlValue} onChange={e => this.updateUrlValue(e)} />
          </div>
          <div className="form-group">
            <label htmlFor="image">Add a photo</label><br />
            <input  className="btn btn-info" name="image" type="file"  encType="multipart/form-data" onChange={e => this.updateFileImageValue(e)} hidden /><br />
            <p>OR</p>
            <input required type="text" className="form-control" name="image" placeholder="Image URL" value={this.state.imageValue} onChange={e => this.updateImageValue(e)} />
          </div>
          <button type="submit" className="btn btn-warning">Add to wishlist</button>
        </form>

        <h1 className="text-center or">OR</h1>

        <form>
          <div className="form-group">
            <label htmlFor="link">Paste a link to a mod from the web!</label>
            <input className="form-control" name="link" type="text" placeholder="https://carparts.com" />
          </div>
          <button type="submit" className="btn btn-warning">Add to wishlist</button>
        </form>
      </div>
      <div className="right-container col-md-5">


        <div className="card text-center">
          <div className="top-img col-md-12">
            {this.state.imageValue ?
            <img src={this.state.imageValue} className="part-img" />
            : <img src="https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.martinezcreativegroup.com%2Fwp-content%2Fuploads%2F2014%2F05%2Fimg-placeholder.png&f=1" className="part-img" /> }
          </div>
          <div className="title-text col-md-12">
            {this.state.titleValue ?
            <h2>{this.state.titleValue}</h2>
            : <h2>Title</h2>}
          </div>
          <div className="price col-md-12">
            {this.state.priceValue ?
            <h4>{this.state.priceValue}</h4>
            : <h4>Price</h4> }
          </div>
          <div className="url-text col-md-6 text-center">

            <a href={this.state.urlValue} style={{cursor: 'pointer'}} >Link</a>

          </div>
        </div>

      </div>
    </div>
    )
  }
}
