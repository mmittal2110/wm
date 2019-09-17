import React, { Component } from 'react';
import Register from "../components/register-component.js";
class Home extends Component {
    render() {
        return (
            <div className="home-page">
             <div className="container">
                <div className="main-section">
                    <div className="main-section-text">
                      <div className="main-text">
                          Build your <div> Business Website </div>
                      </div>
                        <div className="inner-text">
                            You’ve got the will. We’ve got the way.
                        </div>
                        <button className="primary-btn-lg">View Demo</button>
                    </div>
                    <div className="main-section-form">
                      <Register/>
                    </div>
                </div>
             </div>
                <div className="skew-patch">
                </div>
             </div>
        );
    }
}

export default Home;
