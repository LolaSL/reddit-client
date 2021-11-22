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


const Login = ({ theme, classes }) => {


    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div className={classes.root}>
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
                            <MenuItem
                                className={classes.item}
                                component="a"
                                href="https://github.com/LolaSL"
                                target="_blank"
                                rel="noopener noreferrer">
                                <Button label={"Github"}
                                    startIcon={<GitHubIcon />}
                                    size="small"
                                    disabled
                                /></MenuItem>
                            <MenuItem
                                className={classes.item}
                                component="a"
                                href="https://www.reddit.com/"
                                target="_blank"
                                rel="noopener noreferrer">
                                <Button label={"Reddit"}
                                    startIcon={<RedditIcon />}
                                    size="small"
                                    disabled

                                /></MenuItem>


                        </form>
                        <button onClick={closeModal}>close</button>
                    </Modal>
                </div>
            </div>
        </div>
    )
}
Login.propTypes = {
    theme: PropTypes.string.isRequired,
    root: PropTypes.string.isRequired,
    item: PropTypes.string.isRequired


}
export default Login;
