import React, { Component } from 'react';
import './Form.css'

export default class Form extends Component {
  constructor(){
    super()
    this.state = {
      titleValue: undefined,
      priceValue: undefined,
      urlValue: undefined,
      imageValue: undefined,
      imgUrl: undefined
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

  updateimgurl = (e) => {
    this.setState({ imgUrl: e.target.value })
  }

  render(){
    return(
      <div className="row form">
      <div className="left-container col-md-6">
        <form method="post">
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input className="form-control" name="title" type="text" placeholder="Borla Exhuast" value={this.state.titleValue} onChange={e => this.updateTitleValue(e)} />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input className="form-control" name="price" type="text" placeholder="$750" value={this.state.priceValue} onChange={e => this.updatePriceValue(e)} />
          </div>
          <div className="form-group">
            <label htmlFor="url">URL</label>
            <input className="form-control" name="url" type="text" placeholder="https://carparts.com" value={this.state.urlValue} onChange={e => this.updateUrlValue(e)} />
          </div>
          <div className="form-group">
            <label htmlFor="image">Add a photo</label><br />
            <input className="btn btn-info" name="image" type="file"  encType="multipart/form-data" hidden /><br />
            <p>OR</p>
            <input type="text" className="form-control" name="imgurl" placeholder="Image URL" value={this.state.imgurl} onChange={e => this.updateimgurl(e)} />
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


        <div className="card">
          <div className="card-top-img col-md-12">
            <img src={this.state.imgUrl} className="part-img" />
          </div>
          <div className="title-text col-md-12">
            <h2>{this.state.titleValue}</h2>
          </div>
          <div className="price col-md-12">
            <h4>{this.state.priceValue}</h4>
          </div>
          <div className="url-text col-md-6">
            {this.state.urlValue ?
            <a href={this.state.urlValue}>Link</a>
            : null }
          </div>
        </div>

      </div>
    </div>
    )
  }
}
