import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Home from './pages/Home';
// import Gallery from './pages/Gallery';
// import Contact from './pages/Contact';
import Article from './pages/Article';
import AppRouter from './AppRouter';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";

// Home
// ReactDOM.render(<Home />, document.getElementById('home'));

// Gallery
// ReactDOM.render(<Gallery />, document.getElementById('gallery'));

//Article
ReactDOM.render(<Article />, document.getElementById('root'));

//Contact
// ReactDOM.render(<Contact />, document.getElementById('contact'));

const rootEl = document.getElementById("root");
const render = Component =>
    ReactDOM.render(
        <BrowserRouter>
            <Component/>
        </BrowserRouter>,
        rootEl
    )

render(AppRouter);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
