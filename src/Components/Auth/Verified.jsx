import React from 'react';
import { Link } from 'react-router-dom';
const Verified = () => {
    //console.log('here')
    //const profile = props.profile;
    const key = '1234567890'
    return (
        <React.Fragment>
            <br/><br/>
            
            <div class="row">
                <div class="col s12 m8">
                
                    <div class="card blue-grey darken-1 myclass">
                        <div class="card-content white-text">
                            <span class="card-title">Verification Complete</span>
                            <p>Use This Key While Voting : {key}</p>
                        </div>
                        <div class="card-action">
                            <Link to='/'>Next Voter</Link>

                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>



    )
}
export default Verified;
