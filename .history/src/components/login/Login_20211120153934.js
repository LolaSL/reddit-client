import React, { useState } from 'react';
import './Login.css';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import DarkTheme from '../theme/DarkTheme';



export default function Login() {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div>
            <Button
                id="basic-button"
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                Dashboard
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem
                    onClick={handleClose} component="a"
                    href="https://github.com/LolaSL"
                    target="_blank"
                    rel="noopener noreferrer">GitHub</MenuItem>
                <MenuItem
                    onClick={handleClose}
                    component="a"
                    href="https://www.reddit.com/"
                    target="_blank"
                    rel="noopener noreferrer">Reddit</MenuItem>
                <DarkTheme />
            </Menu>
        </div>
    )
}






