import React from 'react';
import { Redirect } from "react-router-dom"
// import {withRouter} from "react-router-dom";

const Profile = props => {
    const is_login = JSON.parse(localStorage.getItem("is_login"));
    const email = localStorage.getItem("email")
    const password = localStorage.getItem("password")
    const username = localStorage.getItem("username")
    console.log("is_login", is_login);

    if(is_login === null){
        alert("Anda belum login, silakan login dulu!")
        return <Redirect to={{pathname: "/login"}} />
    } else {
        return (
            <section className="row my-5 mx-0 justify-content-center">
                <div className="col-lg-4 col-sm-8 col-12">
                    <h1 className="text-center">Profile</h1>
                    <p>
                        <label>Email:</label> {email}
                    </p>
                    <p>
                        <label>Username:</label> {username}
                    </p>
                    <p>
                        <label>Password:</label> {password}
                    </p>
                </div>
            </section>
        );
    }
}

export default Profile