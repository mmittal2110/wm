import React, { Component } from 'react';
import notfound from '../images/notfound.png'
class Notfound extends Component {
    render() {
        return (
            <div class="not-found">
                <img src={notfound} alt = {"notfound"} />

            </div>
        );
    }
}


export default Notfound;
