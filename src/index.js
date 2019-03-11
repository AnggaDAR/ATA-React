import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './Header';
import Home from './Home';
import Gallery from './Gallery';
import Contact from './Contact';
import Footer from './Footer';
import * as serviceWorker from './serviceWorker';

// Home
ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Home />, document.getElementById('home'));
ReactDOM.render(<Footer />, document.getElementById('footer'));

// Gallery
ReactDOM.render(<Header />, document.getElementById('header2'));
ReactDOM.render(<Gallery />, document.getElementById('gallery'));
ReactDOM.render(<Footer />, document.getElementById('footer2'));

//Contact
ReactDOM.render(<Contact />, document.getElementById('contact'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
