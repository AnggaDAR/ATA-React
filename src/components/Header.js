import React, { Component } from 'react';
// import logo_alterra from '../images/logo/logo-alterra-academy.png'
import logo from '../logo.svg'
import '../styles/header.css'

class Header extends Component {
  render() {
    return (
        <header className="m-0 p-3 shadow-lg">
            <div className="container-fluid">
                <div className="row justify-content-between">
                    <div className="col-sm-12 col-md-12 col-lg-3 text-center">
                        <a href="index.html">
                            <img src={logo} className="logo" alt="" />
                        <div class="navbar-brand">
                            Kabarsabar
                        </div>
                        </a>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-7">
                        <ul className="nav nav-fill">
                            <li className="nav-item">
                                <a className="active" href="index.html">Home</a>
                            </li>
                            <li className="nav-item">
                                <a href="index.html">Entertainment</a>
                            </li>
                            <li className="nav-item">
                                <a href="index.html">Health</a>
                            </li>
                            <li className="nav-item">
                                <a href="index.html">Science</a>
                            </li>
                            <li className="nav-item">
                                <a href="index.html">Sports</a>
                            </li>
                            <li className="nav-item">
                                <a href="index.html">Technology</a>
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
