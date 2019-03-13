import React, { Component } from 'react';
// import logo from './logo.svg';
import MainRoute from './routes/MainRoute';
import { withRouter } from "react-router-dom";
// import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import { connect } from "unistore/react"
import { actions } from './store';

class App extends Component {
  doLogout = () => {
    this.props.postLogout().then(
      () => {
          console.log(this.props);
          alert("Logout berhasil!")
          this.props.history.push("/login")
      }
    ) 
  }
  render() {
    return (
      <div className="App">
        <Header doLogout={this.doLogout}/>
        <MainRoute/>
        <Footer/>
      </div>
    );
  }
}

export default App;
// export default connect("is_login",actions)(withRouter(App));
