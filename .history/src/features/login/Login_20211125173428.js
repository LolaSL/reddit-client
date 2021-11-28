import React, { useState } from 'react';
import './Login.css'

const Login = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    return (
        <div className="login">
            <form className="login-form">
                <h1>Login</h1>
                <input type="name" placeholder="Enter name" value={name} required onChange={(event) => setName(event.target.value)} />
                <input type="email" placeholder="Enter email" value={email} required onChange={(event) => setEmail(event.target.value)} />
                <input type="password" placeholder="Enter password" value={password} required onChange={(event) => setPassword(event.target.value)} />
                <button type="submit" className="submit-button">Submit</button>
            </form>

        </div>
    )
}

export default Login;
