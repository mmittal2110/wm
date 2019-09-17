import React, { Component } from 'react';
class Register extends Component {
    render() {
        return (
            <div>
                <form className="user-form">
                    <label className="input-label">Full Name</label>
                    <div className="input-type-width">   <input type="text" name="name" required placeholder="Enter Full Name" className="input-types input-type-width " /></div>
                    <label  className="input-label">Mobile Number</label>
                    <div className="input-type-width">   <input type="text" name="number" required placeholder="Enter 10 digit number" className="input-types input-type-width" /> </div>
                    <label  className="input-label">Password</label>
                    <div className="input-type-width">   <input type="password" name="password" required placeholder="Password" className="input-types input-type-width" /> </div>
                    <label  className="input-label">Confirm Password</label>
                    <div className="input-type-width">   <input type="password" name="c-password" required placeholder="Confirm Password" className="input-types input-type-width" /> </div>
                    <div>  <input type="checkbox" className="input-types"/>
                        <label  className="checkbox-label">By signing up you agree Terms & Conditions</label> </div>
                    <div>   <button className="primary-btn">Start Free Trial</button> </div>
                </form>
            </div>
        );
    }
}

export default Register;

