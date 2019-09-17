import React, { Component } from 'react';
class Footer extends Component {
    render() {
        return (
            <div>
                <div className="footer-bg">
                    <div className="container">
                        <div className="footer-content">
                            <div className="about-links">
                                <ul className="footer-menu">
                                    <li className="footer-item">
                                        <a className="footer-item-anchor" href="#">About Us</a>
                                    </li>
                                    <li className="footer-item">
                                        <a className="footer-item-anchor" href="#">Policy</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="social-media-links">
                                <div className="social-item">
                                    <a className="social-anchor" href="#">
                                        <img src="https://img.icons8.com/color/48/000000/facebook.png" />
                                    </a>
                                </div>
                                <div className="social-item">
                                    <a className="social-anchor" href="#">
                                        <img src="https://img.icons8.com/color/48/000000/twitter-squared.png" />
                                    </a>
                                </div>
                                <div className="social-item">
                                    <a className="social-anchor" href="#">
                                        <img src="https://img.icons8.com/color/48/000000/google-plus-squared.png" />
                                    </a>
                                </div>
                                <div className="social-item">
                                    <a className="social-anchor" href="#">
                                        <img src="https://img.icons8.com/color/48/000000/youtube-squared.png" />
                                    </a>
                                </div>
                                <div className="social-item">
                                    <a className="social-anchor" href="#">
                                        <img src="https://img.icons8.com/color/48/000000/instagram-new.png" />
                                    </a>
                                </div>

                            </div>
                            <div className="copyright">
                                &#169; Copyright 2019 - All Rights Reserved
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
