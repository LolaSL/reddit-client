import React from 'react';
import './Header.css';
import Logo from '../logo/Logo';
import Searchbar from '../searchbar/Searchbar';
import Dashboard from '../dashboard/Dashboard';

function Header() {
    return (
        <div className="header">
            <Logo />
            <Searchbar />
            <Dashboard />
        </div>
    );
}

export default Header;