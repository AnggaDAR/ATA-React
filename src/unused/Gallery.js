import React, { Component } from 'react';
import Header from "../components/Header"
import Footer from "../components/Footer"
import foto1 from '../images/exp-gallery/jake-allison-1322894-unsplash.jpg'
import foto2 from '../images/exp-gallery/jay-lee-1323073-unsplash.jpg'
import foto3 from '../images/exp-gallery/nordwood-themes-1319985-unsplash.jpg'
import foto4 from '../images/exp-gallery/ryan-1321510-unsplash.jpg'
import foto5 from '../images/exp-gallery/nic-yee-1321843-unsplash.jpg'
import foto6 from '../images/exp-gallery/phil-desforges-1322844-unsplash.jpg'
import icon_gallery from '../images/ico/ico-gallery.png'
import '../styles/gallery.css'

class Gallery extends Component {
  render() {
    return (
        <div>
            <Header/>
            <section className="gallery">
                <div className="gallery">
                    <img src={icon_gallery} />
                    <span>GALLERY</span>
                    <hr/>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <img className="gallery-item mx-auto d-block" src={foto1} />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <img className="gallery-item mx-auto d-block" src={foto2} />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <img className="gallery-item mx-auto d-block" src={foto3} />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <img className="gallery-item mx-auto d-block" src={foto4} />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <img className="gallery-item mx-auto d-block" src={foto5} />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <img className="gallery-item mx-auto d-block" src={foto6} />
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    );
  }
}

export default Gallery;
