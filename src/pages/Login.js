import React, { Component } from 'react';
// import axios from 'axios';
import {withRouter} from "react-router-dom";

class Login extends Component{
    state = { username: "", password: ""};
    changeInput = e => {
        this.setState({[e.target.name]: e.target.value});
    };
    postLogin = () =>{
        const {username, password} = this.state;
        // const data = {
        //     username: username,
        //     password: password,
        // };
        const self = this;
        // axios
        // .post("https://atareact.free.beeceptor.com/auth", data)
        // .then(function(response){
        //     console.log(response.data);
        //     if (response.data.hasOwnProperty("api_key")){
        //         localStorage.setItem("api_key", response.data.api_key);
        //         localStorage.setItem("is_login", true);
        //         localStorage.setItem("full_name", response.data.full_name);
        //         localStorage.setItem("email", response.data.email);
        //         self.props.history.push("/profile")
        //     }
        // })
        // .catch(function(error){
        //     console.log(error)
        // });
        localStorage.setItem("api_key", "abcd");
        localStorage.setItem("is_login", true);
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        localStorage.setItem("full_name", "Angga Dwi");
        localStorage.setItem("email", "angga@alphatech.id");
        self.props.history.push("/profile")
    }
    render(){
        console.log("state ", this.state);
        return (
            <section className="row my-5 mx-0 justify-content-center">
                <form onSubmit={e => e.preventDefault()} className="col-4">
                    <h4 className="text-center">Login</h4>
                    <div>
                        <input
                            className="form-control m-1"
                            type="text"
                            name="username"
                            placeholder="Username"
                            onChange={e => this.changeInput(e)}
                        />    
                    </div>                
                    <div>
                        <input
                            className="form-control m-1"
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={e => this.changeInput(e)}
                        />    
                    </div> 
                    <button onClick={() => this.postLogin()}>Login</button>
                    <button type="reset">Reset</button>
                </form>
            </section>
        )
    }
}

export default withRouter(Login)