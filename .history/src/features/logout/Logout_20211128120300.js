import React from 'react';
import { logout, selectUser } from '../../store/userSlice';
import { useDispatch, useSelector } from "react-redux";
import './Logout.css';

const Logout = () => {
    const user = useSelector(selectUser)
    const dispatch = useDispatch();
    const handleLogout = (e) => {
        e.preventDefault();

        dispatch(logout());
    };

    return (
        <div className='logout'>
            <p>Welcome <span className="user-name">{user.name}</span></p>{""}

            <button className="logout-button" onClick={(e) => handleLogout(e)}>
                Logout
            </button>
        </div>
    )
}

export default Logout;
