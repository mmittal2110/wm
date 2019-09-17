import React, {Component} from 'react';
import {BrowserRouter, Route, Link, Switch} from "react-router-dom";
import Register from "../components/register-component";
import Login from "../components/login-component";
import Myaccount from "../components/myaccount-component";
import VerifyOtp from "../components/verify-otp-component";
import Notfound from "../components/notfound-component";
import {Redirect} from 'react-router';

class User extends Component {
    render() {
        return (
            <div class="user-wrapper">
                < BrowserRouter>
                    <switch>
                        <Route exact path='/user/login' component={Login}/>
                        <Route exact path='/user/register' component={Register}/>
                        <Route exact path='/user/account' component={Myaccount}/>
                        <Route exact path='/user/verify-otp/:phone' component={VerifyOtp}/>
                        <Route component={Notfound}/>
                    </switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default User;
