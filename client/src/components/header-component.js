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
                            <li className="navbar-li">
                                <a className="li-anchors" href="#">Intro</a> </li>
                            <li className="navbar-li">  <a className="li-anchors" href="#">Home</a> </li>
                            <li className="navbar-li"> <a className="li-anchors" href="#">Pages</a>  </li>
                            <li className="navbar-li"><a className="li-anchors" href="#">Blogs</a>   </li>
                            <li className="navbar-li"><a className="li-anchors" href="#">Features</a>    </li>
                            <li className="navbar-li"><a className="li-anchors" href="/user/login">Login</a>    </li>
                            <li className="navbar-li">
                                <button className="primary-btn"><a className="li-anchors-white" href="/user/register">Start Free Trial</a> </button>
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
