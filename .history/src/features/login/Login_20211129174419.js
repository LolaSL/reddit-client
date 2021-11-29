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
        <div className="login">
            <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
                <p>Login</p>
                <input type="name" placeholder="Enter name" value={name} required onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder="Enter email" value={email} required onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Enter password" value={password} required onChange={(e) => setPassword(e.target.value)} />
                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    )
}

export default Login;
