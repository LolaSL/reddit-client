import React, { useState } from 'react';
import './Login.css';
import Button from "../buttons/Button";
import PersonIcon from '@material-ui/icons/Person';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import GitHubIcon from '@material-ui/icons/GitHub';
import RedditIcon from '@material-ui/icons/Reddit';
import { MenuItem } from '@material-ui/core';
import PropTypes from "prop-types";



export default function Login({ primary }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div>
            <div className="login">
                <Button label={"Log In"} />
                <Button primary={primary} label={"Sign Up"} />
                <div className="profile" label={"Profile"} onClick={handleShow}>
                    <PersonIcon className="hoverable" />
                    <ArrowDropDownIcon className="hoverable" />
                    <Modal

                        show={show}  >

                        <h2 >Vew Options</h2>
                        <h3>More</h3>
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
                        <Button id="btn" label={"Close"} primary={primary} onClick={handleClose} />
                    </Modal>
                </div>
            </div>
        </div>
    )
}



Login.propTypes = {
    primary: PropTypes.string.isRequired,

}


