import React, { Component } from 'react';
// import logo_alterra from '../images/logo/logo-alterra-academy.png'
import logo from '../logo.svg';
import '../styles/header.css';
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
        <header className="m-0 p-3 shadow-lg">
            <div className="container-fluid">
                <div className="row justify-content-between">
                    <div className="col-sm-12 col-md-12 col-lg-3 text-center">
                        <Link to="/">
                            <img src={logo} className="logo" alt="" />
                        <div className="navbar-brand">
                            Kabarsabar
                        </div>
                        </Link>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-7">
                        <ul className="nav nav-fill">
                            <li className="nav-item">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Health">Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Science">Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Sports">Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Technology">Technology</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
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
