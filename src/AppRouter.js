import React, { Component } from 'react';
// import logo from './logo.svg';
import MainRoute from './routes/MainRoute';
import { withRouter } from "react-router-dom";
// import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'

class App extends Component {
  postLogout = () => {
    localStorage.removeItem("is_login");
    this.props.history.push("/")
  }
  render() {
    return (
      <div className="App">
        <Header postLogout={this.postLogout}/>
        <MainRoute/>
        <Footer/>
      </div>
    );
  }
}

export default withRouter(App);
