import React from 'react';
import './Logo.css';
import logo from './reddit-logo.png'


const Logo = () => {
    return (
        <div className='logo hoverable' test-data="logoIMG">
            <img src={logo} alt="logo" />
            <span id="header-title">Reddit Client</span>
        </div>
    )
}

export default Logo;