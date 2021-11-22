import React, { useState } from 'react';
import './Login.css';
import Button from "../buttons/Button";
import PersonIcon from '@material-ui/icons/Person';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Modal from 'react-modal';
import GitHubIcon from '@material-ui/icons/GitHub';
import RedditIcon from '@material-ui/icons/Reddit';
import { MenuItem } from '@material-ui/core';
import PropTypes from "prop-types";

Modal.setAppElement('body');
export default function Login({ primary }) {


    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div>
            <div className="login">
                <Button label={"Log In"} />
                <Button primary={primary} label={"Sign Up"} />
                <div className="profile" label={"Profile"} onClick={openModal}>
                    <PersonIcon className="hoverable" />
                    <ArrowDropDownIcon className="hoverable" />
                    <Modal
                        isOpen={modalIsOpen}
                        // onRequestClose={closeModal}
                        contentLabel="Modal"
                    >
                        <h2 >Vew Options</h2>
                        <div>More</div>
                        <form>
                            <MenuItem
                                component="a"
                                href="https://github.com/LolaSL"
                                target="_blank"
                                rel="noopener noreferrer">
                                <Button label={"Github"}
                                    primary={primary}
                                    startIcon={<GitHubIcon />}
                                    size="small"
                                    disabled
                                /></MenuItem>
                            <MenuItem
                                component="a"
                                href="https://www.reddit.com/"
                                target="_blank"
                                rel="noopener noreferrer">
                                <Button label={"Reddit"}
                                    primary={primary}
                                    startIcon={<RedditIcon />}
                                    size="small"
                                    disabled
                                />
                            </MenuItem>
                        </form>
                        <Button id="btn" label={"Close"} primary={primary} onClick={closeModal} />
                    </Modal>
                </div>
            </div>
        </div>
    )
}



Login.propTypes = {
    primary: PropTypes.string.isRequired,

}


