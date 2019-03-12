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
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <ul className="nav nav-fill">
                            <li className="nav-item">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/health">Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/science">Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/sports">Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/technology">Technology</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-3">
                        <ul className="nav nav-fill">
                            <li className="nav-item dropdown">
                                <Link to="/profile">Profile</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link to="/login">Login</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link to="/login" onClick={() => this.props.postLogout()}>Logout</Link>
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
