import React, { Component } from 'react';
import logo_alterra_plain from '../images/logo/logo-alterra-academy-plain.png';
import icon_facebook from '../images/ico/ico-facebook.png';
import icon_twitter from '../images/ico/ico-twitter.png';
import icon_instagram from '../images/ico/ico-instagram.png';
import '../styles/footer.css'

class Footer extends Component {
  render() {
    return (
        <footer>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-9 col-7 my-2">
                        <img className="footer-image" src={logo_alterra_plain} />
                        <h6> &copy; Copyright Alterra Group 2019</h6>
                    </div>
                    <div className="col-md-3 col-7 my-2">
                        <h5>Follow Us On</h5>
                        <div className="row">
                            <div className="col-2">
                                <img className="social-media" src={icon_facebook} />
                            </div>
                            <div className="col-8">
                                <span>Facebook</span><br/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2">
                                <img className="social-media" src={icon_twitter} />
                            </div>
                            <div className="col-8">
                                <span>Twitter</span><br/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2">
                                <img className="social-media" src={icon_instagram} />
                            </div>
                            <div className="col-8">
                                <span>Instagram</span><br/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
  }
}

export default Footer;
