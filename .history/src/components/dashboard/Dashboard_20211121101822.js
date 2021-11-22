import React, { useState } from 'react';
import './Dashboard.css';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from '../theme/temes';
import Paper from '@mui/material/Paper'
import Switch from '@mui/material/Switch'



const StyledApp = styled.div`
color: ${props => props.theme.fontColor}`;

export default function Dashboard() {

    const [theme, setTheme] = useState('light');

    const themeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="dashboard">
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
                <MenuItem
                    onClick={handleClose}
                    component="a"
                    href="https://google.com"
                    mailto="mailto:mail-example@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer">Contact me</MenuItem>
                <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme} >
                    <GlobalStyles />
                    <StyledApp >
                        <MenuItem rel="noopener noreferrer" >Change mode
                            <Switch onClick={() => themeToggler()} >
                                <Paper />
                            </Switch></MenuItem>
                    </StyledApp>
                </ThemeProvider>
            </Menu>
        </div>
    )
}





