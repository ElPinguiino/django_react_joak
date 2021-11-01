import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

import logo from '../../../images/secondlogo.png';

import useStyles from './NavbarElements';

const Navbar = () => {
    const classes = useStyles();
    
    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="joaklogo" height="35px" className={classes.image} />
                        Juan Of A Kind
                    </Typography>
                    <div className={classes.grow} />
                    <Typography variant="h6" className={classes.title} color="inherit">
                        Pre Order Form
                    </Typography>
                    <Typography variant="h6" className={classes.title} color="inherit">
                        Home
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar