import React from 'react';
import './Login.css';
import Button from "../buttons/Button"

const Login = () => {
    return (
        <div className="login">
            <Button label={"Log In"} />
            <Button label={"Sign Up"} />
            <Button label={"Profile"} />
        </div>
    )
}

export default Login;