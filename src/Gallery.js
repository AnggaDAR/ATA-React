import React, { Component } from 'react';
// import foto from './img/foto.png';
// import icon_location from './img/ico/ico-location.png';
// import icon_twitter from './img/ico/ico-twitter.png';
// import icon_instagram from './img/ico/ico-instagram.png';
// import './css/home.css';
// import './css/bootstrap.min.css';

class Gallery extends Component {
  render() {
    return (
        <section class="gallery">
            <div className="gallery">
                <img src="assets/img/ico/ico-gallery.png" />
                <span>GALLERY</span>
                <hr/>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <img className="gallery-item mx-auto d-block" src="assets/img/exp-gallery/jake-allison-1322894-unsplash.jpg" />
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <img className="gallery-item mx-auto d-block" src="assets/img/exp-gallery/jay-lee-1323073-unsplash.jpg" />
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <img className="gallery-item mx-auto d-block" src="assets/img/exp-gallery/nordwood-themes-1319985-unsplash.jpg" />
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <img className="gallery-item mx-auto d-block" src="assets/img/exp-gallery/ryan-1321510-unsplash.jpg" />
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <img className="gallery-item mx-auto d-block" src="assets/img/exp-gallery/nic-yee-1321843-unsplash.jpg" />
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <img className="gallery-item mx-auto d-block" src="assets/img/exp-gallery/phil-desforges-1322844-unsplash.jpg" />
                    </div>
                </div>
            </div>
        </section>
    );
  }
}

export default Gallery;
