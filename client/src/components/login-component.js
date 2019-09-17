import React, { Component } from 'react';
class Login extends Component {
    render() {
        return (
            <div>
                <form className="user-form">
                    <label className="input-label">Phone Number</label>
                    <div className="input-type-width">   <input type="text" name="name" required placeholder="Enter phone number" className="input-types input-type-width " /></div>
                    <label  className="input-label">Password</label>
                    <div className="input-type-width">   <input type="password" name="password" required placeholder="Password" className="input-types input-type-width" /> </div>
                    <div>   <button className="primary-btn">Login</button> </div>
                </form>
            </div>
        );
    }
}

export default Login;
