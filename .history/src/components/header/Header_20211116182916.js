import React from 'react';
import './Header.css';
import Logo from '../logo/Logo';
import Searchbar from '../searchbar/Searchbar';
import Login from '../login/Login';

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