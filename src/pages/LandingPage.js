import React, { useState, useRef } from 'react';
import { makeStyles, Container, Typography, Paper, TextField, Button, Fab, } from '@material-ui/core';
import clsx from 'clsx';
import './LandingPage.css';

const useStyles = makeStyles((theme) => ({
    DeepBackground: {
        background: 'linear-gradient( 50deg, #0e21b0, #218237)',
        backgroundSize: '300% 300%',
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
    PageBackground: {
        position: 'relative',
        overflow: 'hidden', 
        top: 0,
        left: 0,
        marginTop: 0,
        marginBottom: 0,
        marginLeft: 0,
        marginRight: 0,
        padding: 0,
        maxWidth: '100%',
        height: '100vh',
        zIndex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    PageSlideBase1: {
        position: 'relative',
        overflow: 'visible',
        backgroundColor: '#23272a', 
        borderRadius: 15,
        top: '0%',
        left: '0%',
        marginTop: 0,
        marginBottom: 0,
        marginLeft: 0,
        marginRight: 0,
        padding: 0,
        width: '100%',
        height: '100%',
        zIndex: 2,
        webkitBackfaceVisibility: "hidden",
        backfaceVisibility: "hidden",
    },
}));

function LandingPage(props) {


    const classes = useStyles();

    window.addEventListener('scroll', () => {
        document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
      }, false);

    return(
        <div>
            <Container className={classes.DeepBackground}></Container>
            <div className='progress-bar'></div>
            <Container className={classes.PageBackground}>
                <Container className={'page-wrapper'}>
                    <Paper className={classes.PageSlideBase1}>

                    </Paper>
                </Container>
            </Container>
            <Container className={classes.PageBackground}>
            </Container>
        </div>
    );
}
export default LandingPage;