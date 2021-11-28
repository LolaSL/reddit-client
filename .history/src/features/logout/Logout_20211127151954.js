import React from 'react';
import { logout } from '../../store/userSlice';
import { useDispatch } from "react-redux";
import './Logout.css';

const Logout = () => {

    const handleLogout = (e) => {
        e.preventDefault();
        const dispatch = useDispatch();
        dispatch(logout());
    };

    return (
        <div className='logout'>
            <h1>Welcome <span className="user-name">{user.name}</span></h1>

            <button className="logout-button" onClick={(e) => handleLogout(e)}>
                Logout
            </button>
        </div>
    )
}

export default Logout;
