import React, { Component } from 'react'
// import {connect} from 'react-redux';
// import {signIn} from '../../store/Actions/authActions';
import {Redirect} from 'react-router-dom'
class Input extends Component {
    state = {
        aadhaar: '',
        VoterId: ''
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
                    <h5 className="dark-grey text-darken-3">Enter Voter's Details</h5>
                    
                    <div className="input-field">
                        <label htmlFor="aadhaar">AADHAAR</label>
                        <input type="text" id="aadhaar" onChange={this.handleOnChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="VoterId">VOTER ID</label>
                        <input type="text" id="VoterId" onChange={this.handleOnChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn z-depth-0 dark-blue darken-1">Verify</button>
                    </div>
                    
                </form>
            </div>
        )
    }
}
export default Input;