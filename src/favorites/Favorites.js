import React, { Component } from 'react';
import axios from 'axios'

import './Favorites.css'

import Image from './background.png'

export default class Favorites extends Component {
  constructor(){
    super()
    this.state = {
      favorites: []
    }
  }

  getFavorites = () => {
    axios.get('https://nickmckendryrevkit.herokuapp.com/api/favorites')
      .then((response) => {
        console.log(response.data[0]);
        this.setState({ favorites: response.data })
      })
  }

  componentDidMount(){
    this.getFavorites()
  }

  render(){
    console.log(typeof(this.state.favorites), 'type');
    return(
      <div className="container-fluid full" >
        <div className="card-container container-fluid text-center">
          <h1 className="wishlist-header">Your WishList</h1>

          {this.state.favorites.map((favorite, i) => (
            <div key={i} className="smallcard col-md-3 text-center">
                <div className="top-img col-md-12">
                  <img src={favorite.image} className="part-img" />
                </div>
                <div className="title-text col-md-12">
                  <h5>{favorite.title}</h5>
                </div>
                <div className="price col-md-12">
                  <h4>{favorite.price}</h4>
                </div>
                <div className="url-text col-md-6">
                  <a href={favorite.url} style={{cursor: 'pointer'}}>Link</a>
                </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}
