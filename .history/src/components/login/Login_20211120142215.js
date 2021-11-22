import React, { useState } from 'react';
import './Login.css';
import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import RedditIcon from '@mui/icons-material/Reddit';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PropTypes from "prop-types";
import Modal from '../modal/Modal';

export default function Login({ primary }) {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <div>
            <div className="login">
                <Button label={"Log In"} />
                <Button primary={primary} label={"Sign Up"} />
                <div className="profile" label={"Profile"} >
                    <Button
                        id="basic-button"
                        aria-controls="basic-menu"
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <PersonIcon className="hoverable" />
                        <ArrowDropDownIcon className="hoverable" onClick={() => setIsOpen(true)} />
                        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                            <h2 >Vew Options</h2>
                            <h3>More</h3>
                            <form>
                                <Menu
                                    component="a"
                                    href="https://github.com/LolaSL"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <Button label={"Github"}
                                        primary={primary}
                                        // startIcon={<GitHubIcon />}
                                        // size="small"
                                        disabled
                                    /></Menu>
                                <Menu
                                    component="a"
                                    href="https://www.reddit.com/"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <Button label={"Reddit"}
                                        primary={primary}
                                        // startIcon={<RedditIcon />}
                                        // size="small"
                                        disabled
                                    />
                                </Menu>
                            </form>
                        </Modal>
                </div>
            </div>
        </div>
    )
}



Login.propTypes = {
    primary: PropTypes.string,

}


