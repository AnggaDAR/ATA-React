import React, { Component } from 'react';
// import logo_alterra_plain from './img/logo/logo-alterra-academy-plain.png';
// import icon_facebook from './img/ico/ico-facebook.png';
// import icon_twitter from './img/ico/ico-twitter.png';
// import icon_instagram from './img/ico/ico-instagram.png';
// import './css/home.css';
// import './css/bootstrap.min.css';

class Footer extends Component {
  render() {
    return (
        <footer>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-9 col-7 my-2">
                        <img className="footer-image" src="assets/img/logo/logo-alterra-academy-plain.png" />
                        <h6> &copy; Copyright Alterra Group 2019</h6>
                    </div>
                    <div className="col-md-3 col-7 my-2">
                        <h5>Follow Us On</h5>
                        <table>
                            <tr>
                                <td>
                                    <img className="social-media" src="assets/img/ico/ico-facebook.png" />
                                </td>
                                <td>
                                    <span>Facebook</span><br/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img className="social-media" src="assets/img/ico/ico-twitter.png" />
                                </td>
                                <td>
                                    <span>Twitter</span><br/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img className="social-media" src="assets/img/ico/ico-instagram.png" />
                                </td>
                                <td>
                                    <span>Instagram</span><br/>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </footer>
    );
  }
}

export default Footer;
