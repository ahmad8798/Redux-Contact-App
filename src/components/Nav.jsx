import React from 'react'
import { AppBar, IconButton, Toolbar, Typography, Stack, Button } from '@mui/material'
import ContactsIcon from '@mui/icons-material/Contacts';
import { Link } from 'react-router-dom';
const Nav = () => {
    const anchorStyle = {
        textDecoration: "none",
        color: "inherit"
    }
    return (
        <AppBar sx={{ mb: 2 }} position='static'>
            <Toolbar>
                <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
                    <Link to="/" style={anchorStyle}> <ContactsIcon /></Link>
                </IconButton>
                <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                    <Link to="/" style={anchorStyle}><Button color='inherit'>Redux Contact App</Button></Link>
                </Typography>

            </Toolbar>
        </AppBar>
    )
}

export default Nav
