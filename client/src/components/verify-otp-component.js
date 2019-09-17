import React, {Component} from 'react';

class VerifyOtp extends Component {
    constructor(props) {
        super(props);
        this.resendOtp = this.resendOtp.bind(this);
        this.runTimer = this.runTimer.bind(this);
        this.state = {isResendVisible: true, timer : 30};
    }

    resendOtp() {
        this.setState({
            isResendVisible: false, timer : 30
        });
        this.runTimer();
        console.log(this.state.isResendVisible);
    }

runTimer(){
    setTimeout(() => {
        if (this.state.timer > 0) {
            this.runTimer();
            this.setState({
                timer: this.state.timer - 1
            });
        }
        else {
            this.setState({
                isResendVisible: true
            });
        }
    },1000)
}

    render() {
        return (
            <div>
                <form className="user-form">
                    <label className="input-label">Enter verification code</label>
                    <div class="sub-text"> Please type the verification code send to {this.props.match.params.phone} </div>
                    <div className="input-type-width"><input type="text" max-length="6" minlength="6" name="name" required
                                                             placeholder="Enter OTP here"
                                                             className="input-types input-type-width "/></div>
                    <div>
                        <button className="primary-btn">Verify OTP  </button>
                        {this.state.isResendVisible &&
                        <a href="#" className="resend-otp" onClick={this.resendOtp}>Resend OTP</a>
                        }
                        {! this.state.isResendVisible &&
                        <a className="resend-otp">Wait for {this.state.timer} seconds</a>
                        }
                    </div>
                </form>
            </div>
        );
    }
}

export default VerifyOtp;