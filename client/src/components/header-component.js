import React, { Component } from 'react';
import Logo from "./logo-component";
class Header extends Component {
    render() {
        return (
            <div className="header-bg">
            <div className="container">
               <div className="header-section">
                   <div className="logo-section">
                        <Logo />
                   </div>
                   <div className="navbar-section">
                        <ul className="navbar-ul">
                            <li className="navbar-li"> Intro </li>
                            <li className="navbar-li"> Home </li>
                            <li className="navbar-li"> Pages </li>
                            <li className="navbar-li"> Blogs </li>
                            <li className="navbar-li"> Features  </li>
                            <li className="navbar-li">
                                <button className="primary-btn">Login</button>
                            </li>
                        </ul>
                   </div>
               </div>
            </div>
            </div>
        );
    }
}

export default Header;
