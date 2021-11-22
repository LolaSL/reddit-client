import React from 'react';
import './Login.css';
import Button from "../buttons/Button"

const Login = () => {
    return (
        <div className="login">
            <Button label={"Log In"} />
            <Button primary label={"Sign Up"} />
            <Button label={"Profile"} />
        </div>
    )
}

export default Login;