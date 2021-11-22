import React from 'react';
import './Header.css';
import Logo from '../../components/logo/Logo';
import Searchbar from '../../features/searchbar/Searchbar';
import Dashboard from '../../components/dashboard/Dashboard';

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