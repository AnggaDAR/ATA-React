import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Article from './pages/Article';
import * as serviceWorker from './serviceWorker';

// Home
ReactDOM.render(<Home />, document.getElementById('home'));

// Gallery
ReactDOM.render(<Gallery />, document.getElementById('gallery'));

//Article
ReactDOM.render(<Article />, document.getElementById('article'));

//Contact
ReactDOM.render(<Contact />, document.getElementById('contact'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
