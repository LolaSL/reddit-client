import React, { useState } from 'react';
import './Login.css';
import Button from "../buttons/Button";
import PersonIcon from '@material-ui/icons/Person';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Modal from 'react-modal';
import { Router, Link } from 'react-router-dom'
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
                            <Link
                                startIcon={<GitHubIcon />}
                                size="small"
                                disabled>
                                Github
                            </Link>
                            <Link
                                href="https://github.com/Kerosz"
                                target="_blank"
                                rel="noopener noreferrer"
                                startIcon={<RedditIcon />}
                                size="small"
                                disabled
                                path
                            >Reddit</Link></Router>
                    </form>
                    <button onClick={closeModal}>close</button>
                </Modal>
            </div>
        </div>
    )
}

export default Login;