import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Navbar = () => {
    //console.log('here')
    //const profile = props.profile;
    return (
        <nav className="nav-wrapper grey darken-1">
            <div className="container">
                <Link to='/' className='brand-logo'>VOTER FILTER</Link>
                <div>
                    <ul className='right'>
                        <li><NavLink to='/'>VOTE</NavLink></li>
                        <li><NavLink to='/about'>ABOUT</NavLink></li>
                        <li><NavLink to='/contact'>CONTACT</NavLink></li>

                    </ul>
                </div>
            </div>
        </nav>
        
        
    )
}
export default Navbar;