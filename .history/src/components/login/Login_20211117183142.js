import React from 'react';
import './Login.css';
import Button from "../buttons/Button";
import PersonIcon from '@material-ui/icons/Person';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const Login = () => {
    return (
        <div className="login">
            <Button primary label={"Log In"} />
            <Button secondary label={"Sign Up"} />
            <div className="profile" label={"Profile"}>
                <PersonIcon className="hoverable" />
                <ArrowDropDownIcon className="hoverable" />
            </div>
        </div>
    )
}

export default Login;