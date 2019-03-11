import React, { Component } from 'react';
import blog_ayako from '../images/ayako.jpeg';
import blog_alphatech from '../images/alphatech.png';

class StoryList extends Component {
  render() {
    return (
      <div class="col-8">
        <div class="card mb-3">
          <img src={blog_ayako} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title mx-2">Nikahi Putri Ayako, Pria dari Jepang Lepaskan gelar Rakyat Jelata</h5>
            <p class="card-text">Pernikahan Rakyat Jelata dan Putri Ayako dilangsungkan lewat upacara tradisional kejawen</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div class="card mb-3">
          <img src={blog_alphatech} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title mx-2">Gabung Alpha Tech Academy Sekarang!</h5>
            <p class="card-text">Alpha Tech Academy telah meluluskan 11 mentee sebagai Software Engineer</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    );
  }
}

export default StoryList;
