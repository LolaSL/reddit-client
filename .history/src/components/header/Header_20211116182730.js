import React from 'react';
import './Header.css';
import Logo from '../logo/Logo';

const Header = () => {
    return (
        <div className="header">
            <Logo />
            <Searchbar />
            <Login />
        </div>
    )
}

export default Header;