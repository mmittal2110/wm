import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from "react-router-dom";
import Register from "../components/register-component";
import Login from "../components/login-component";
import Myaccount from "../components/myaccount-component";
class User extends Component {
    render() {
        return (
            <div>
                User page
                <BrowserRouter>
                    <Route exact path='/user/login'  component={Login} />
                    <Route exact path='/user/register'  component={Register} />
                    <Route exact path='/user/account'  component={Myaccount} />
                </BrowserRouter>
            </div>
        );
    }
}

export default User;
