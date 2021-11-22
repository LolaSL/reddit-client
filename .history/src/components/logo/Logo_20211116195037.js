import React from 'react';
import './Logo.css';
import logo from './reddit-logo.png'


const Logo = () => {
    return (
        <div className='logo hoverable'>
            <img src={logo} alt="logo" />
            <span>Reddit Client</span>
        </div>
    )
}

export default Logo;