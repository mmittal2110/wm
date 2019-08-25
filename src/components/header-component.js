import React, { Component } from 'react';
import Logo from "./logo-component";
class Header extends Component {
    render() {
        return (
            <div className="container">
                <Logo />
            </div>
        );
    }
}

export default Header;
