import React, { useState, useRef } from 'react';
import { makeStyles, Container, Typography, Paper, TextField, Button, Fab, } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
    DeepBackground: {
        background: 'linear-gradient( 50deg, #0e21b0, #6e0920)',
        backgroundSize: '400% 400%',
        position: 'absolute',
        overflow: 'hidden',
        top: 0,
        left: 0,
        marginTop: 0,
        marginBottom: 0,
        marginLeft: 0,
        marginRight: 0,
        padding: 0,
        maxWidth: '100%',
        height: '300vh',
        zIndex: -100,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        animation: `$backgroundAnimationSelect 3s infinite alternate ${theme.transitions.easing.easeInOut}`,
    },
    '@keyframes backgroundAnimationSelect': {
        '0%': {
           backgroundSize: '100% 100%',
        },
        '100%': {
            backgroundSize: '120% 200%',
        },
    },
}));

function LandingPage(props) {
    const classes = useStyles();

    return(
        <div style={{ margin: 0, padding: 0, zIndex: '-10', }}>
            <Container className={classes.DeepBackground}></Container>
        </div>
    );
}
export default LandingPage;