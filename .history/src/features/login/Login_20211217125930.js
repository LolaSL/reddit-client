import React, { useState } from 'react';
import './Login.css'
import { useDispatch } from 'react-redux';
import { login } from "../../store/userSlice";


const Login = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(
            login({
                name: name,
                email: email,
                password: password,
                loggedIn: true
            })
        );
    };

    return (
        <form className="form-login" onSubmit={(e) => handleSubmit(e)}>
            <div className="login">
                <h1 id="login-title">Login</h1>
                <p>Please fill in this form to create an account.</p>
                <input type="text" placeholder="Enter name" value={name} autoComplete="username" required onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder="Enter email" value={email} autoComplete="email" required onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Enter password" value={password} autoComplete="current-password" required onChange={(e) => setPassword(e.target.value)} />
                <button type="submit" id="submit-button">Submit</button>
            </div>
        </form>

    )
}

export default Login;