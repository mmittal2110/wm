import React, {Component} from 'react';
import Router from "../components/router-component";
import Header from "../components/header-component";
import Footer from "../components/footer-component";

class AppContainer extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Router/>
                <Footer/>
            </div>

        );
    }
}

export default AppContainer;
