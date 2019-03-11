import React, { Component } from 'react';
// import logo_alterra from './img/logo/logo-alterra-academy.png';
// import './css/home.css';
// import './css/bootstrap.min.css';

class Header extends Component {
  render() {
    return (
        <header>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-5">
                        <div className="logo">
                            <img src="assets/img/logo/logo-alterra-academy.png" />
                        </div>
                    </div>
                    <div className="col-sm-0 col-md-0 col-lg-2"></div>
                    <div className="col-sm-12 col-md-12 col-lg-5">
                        <ul className="nav nav-fill">
                            <li className="nav-item">
                                <a className="active" href="index.html">ABOUT</a>
                            </li>
                            <li className="nav-item">
                                <a href="#">GALLERY</a>
                            </li>
                            <li className="nav-item">
                                <a href="#">CONTACT</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
  }
}

export default Header;
