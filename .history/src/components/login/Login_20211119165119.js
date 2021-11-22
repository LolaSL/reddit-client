import React, { useState } from 'react';
import './Login.css';
import Button from "../buttons/Button";
import PersonIcon from '@material-ui/icons/Person';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Modal from 'react-modal';
import { Router, Route } from 'react-router'
import GitHubIcon from '@material-ui/icons/GitHub';
import RedditIcon from '@material-ui/icons/Reddit';


const Login = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div className="login">
            <Button label={"Log In"} />
            <Button primary label={"Sign Up"} />
            <div className="profile" label={"Profile"} onClick={openModal}>
                <PersonIcon className="hoverable" />
                <ArrowDropDownIcon className="hoverable" />
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Example Modal"
                >
                    <h2 >Vew Options</h2>
                    <div>More</div>
                    <form>
                        <Router>
                            <Route
                                to="/https://github.com/LolaSL"
                                target="_blank"
                                rel="noopener noreferrer">
                                <button
                                    startIcon={<GitHubIcon />}
                                    size="small"
                                    disabled>
                                    Github</button>
                            </Route>
                            <Route
                                to="/https://reddit.com"
                                target="_blank"
                                rel="noopener noreferrer">
                                <button
                                    startIcon={<RedditIcon />}
                                    size="small"
                                    disabled

                                >Reddit</button></Route></Router>
                    </form>
                    <button onClick={closeModal}>close</button>
                </Modal>
            </div>
        </div>
    )
}

export default Login;