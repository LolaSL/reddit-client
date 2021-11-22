import React, { useState } from 'react';
import './Login.css';
import Button from "../buttons/Button";
import PersonIcon from '@material-ui/icons/Person';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Modal from 'react-modal';
import { Router, Route } from 'react-router'
import GitHubIcon from '@material-ui/icons/GitHub';
import RedditIcon from '@material-ui/icons/Reddit';
import { useHistory } from 'react-router';

const Login = () => {
    const history = useHistory();
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
                                to="/ www.github.com/LolaSL"
                                target="_blank"
                                rel="noopener noreferrer">
                                <Button label={"Github"
                                }
                                    startIcon={<GitHubIcon />}
                                    size="small"
                                    disabled />

                            </Route>
                            <Route
                                to="/ www.reddit.com"
                                target="_blank"
                                rel="noopener noreferrer">
                                <Button label={"Reddit"}
                                    startIcon={<RedditIcon />}
                                    size="small"
                                    disabled />

                            </Route></Router>
                    </form>
                    <button onClick={closeModal}>close</button>
                </Modal>
            </div>
        </div>
    )
}

export default Login;