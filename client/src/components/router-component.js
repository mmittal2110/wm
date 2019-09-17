import routeconfigUtility from "../js/utility/routeconfig-utility";
import {BrowserRouter, Route, Link, Switch} from "react-router-dom";
import React, {Component} from 'react';
import Home from "../pages/home-page";
import User from "../pages/user-page";
import Notfound from "../components/notfound-component";
import {Redirect} from 'react-router';

class Router extends Component {
    render() {
        return (
            <div class="router-wrapper">
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/user/*" component={User}/>
                        <Route component={Notfound}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default Router;
