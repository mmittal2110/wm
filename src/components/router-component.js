import routeconfigUtility from "../js/utility/routeconfig-utility";
import {BrowserRouter, Route, Link} from "react-router-dom";
import React, {Component} from 'react';
import Home from "../pages/home-page";
import User from "../pages/user-page";

class Router extends Component {
      render() {
        return (
            <BrowserRouter>
                <Route exact path="/" component={Home} />
                <Route path="/user" component={User}/>
            </BrowserRouter>
        );
    }
}

export default Router;
