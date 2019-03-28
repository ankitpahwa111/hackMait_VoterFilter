import React, { Component } from 'react'
// import {connect} from 'react-redux';
// import {signIn} from '../../store/Actions/authActions';
import { Redirect } from 'react-router-dom'
class OTP extends Component {
    state = {
        otp: ''
    };
    handleOnChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleOnSubmit = (e) => {
        e.preventDefault();
        // 
        // this.props.signIn(this.state)

        // this.props.history.push('/')
        // if(this.props.authError===null)
        // this.props.history.push('/')
    }
    render() {




        return (
            <div className="container">
                <form onSubmit={this.handleOnSubmit} className="white">
                    <h5 className="dark-grey text-darken-3">Enter OTP</h5>

                    <div className="input-field">
                        <label htmlFor="otp">OTP</label>
                        <input type="text" id="otp" onChange={this.handleOnChange} />
                    </div>
                    
                    <div className="input-field">
                        <button className="btn z-depth-0 dark-blue darken-1">Verify</button>
                    </div>

                </form>
            </div>
        )
    }
}
export default OTP;