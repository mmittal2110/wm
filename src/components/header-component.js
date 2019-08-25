import React, { Component } from 'react';
import Logo from "./logo-component";
class Header extends Component {
    render() {
        return (
            <div>
                Header component
                <Logo />
            </div>
        );
    }
}

export default Header;
