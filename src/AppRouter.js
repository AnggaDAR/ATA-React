import React, { Component } from 'react';
// import logo from './logo.svg';
import MainRoute from './routes/MainRoute';
import { withRouter } from "react-router-dom";
// import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <MainRoute/>
        <Footer/>
      </div>
    );
  }
}

export default withRouter(App);
