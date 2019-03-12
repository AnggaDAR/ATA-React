import React, { Component } from 'react';
import logo_alterra from '../images/logo/logo-alterra-academy.png'
import '../styles/header.css'

class Header extends Component {
  render() {
    return (
        <header className="m-0 p-3 shadow-lg">
            <div className="container-fluid">
                <div className="row justify-content-between">
                    <div className="col-sm-12 col-md-12 col-lg-3 text-center">
                        <a href="index.html">
                            <img src={logo_alterra} className="logo" alt="" />
                        {/* <div class="navbar-brand">
                            Sabarsabar
                        </div> */}
                        </a>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-5">
                        <ul className="nav nav-fill">
                            <li className="nav-item">
                                <a className="active" href="index.html">Home</a>
                            </li>
                            <li className="nav-item">
                                <a href="index.html">Gallery</a>
                            </li>
                            <li className="nav-item">
                                <a href="index.html">Article</a>
                            </li>
                            <li className="nav-item">
                                <a href="index.html">Contact</a>
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
