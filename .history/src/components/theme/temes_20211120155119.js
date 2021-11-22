import React, { useState } from 'react'
import { createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Switch from '@mui/material/Switch';
import { ThemeProvider } from '@mui/material/styles';

const DarkTheme = () => {
    const [dark, setDark] = useState(false)

    const theme = createTheme({
        styleOverrides: `
              html {
                 -webkit-font-smoothing: auto;
              },
                palette: {
            type: dark ? 'dark' : 'light',
        },
            `

    })

    return (
        <ThemeProvider theme={theme}>
            <Switch checked={dark} onChange={() => setDark(!dark)} />
            <Paper>

            </Paper>
        </ThemeProvider>
    )
}

export default DarkTheme