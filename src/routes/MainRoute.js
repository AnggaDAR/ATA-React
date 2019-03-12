import React from "react";
import { Route, Switch } from "react-router-dom";

import Article from "../pages/Article";
import Health from "../pages/Health"
import Science from "../pages/Science"
import Sports from "../pages/Sports"
import Technology from "../pages/Technology"
import Login from "../pages/Login"
import Profile from "../pages/Profile";

const MainRoute = () => {
    return (
        <Switch>
            <Route exact path="/" component = {Article}/>
            <Route exact path="/health" component = {Health}/>
            <Route exact path="/science" component = {Science}/>
            <Route exact path="/sports" component = {Sports}/>
            <Route exact path="/technology" component = {Technology}/>
            <Route exact path="/profile" component = {Profile}/>
            <Route exact path="/login" component = {Login}/>
            {/* <Route exact path="/logout" component = {Technology}/> */}
        </Switch>
    )
}

export default MainRoute;