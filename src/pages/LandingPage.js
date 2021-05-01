import React, { useState, useRef } from 'react';
import { makeStyles, Container, Typography, Paper, TextField, Button, Fab, Divider, } from '@material-ui/core';
import clsx from 'clsx';
import './LandingPage.css';
import ScrollBtn from '../components/ScrollToPage';

const useStyles = makeStyles((theme) => ({
    deepBackground: {
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
    pageBackground: {
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
    firstArrowBtn: {
        position: 'absolute',
        bottom: '8%',
        left: '0%',
        marginLeft: '50%',
        marginRigth: '50%',
        padding: 0,
        width: '10%',
        height: '8vh',
    },
}));

function LandingPage(props) {

    const secondPageReferance = useRef(null);
    const classes = useStyles();

    window.addEventListener('scroll', () => {
        document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
      }, false);

    const goToSecondPage = () => {
        window.scrollTo({
            top: secondPageReferance.current.offsetTop,
            behavior: 'smooth'
        });
    }

    return(
        <div style={{margin: 0, padding: 0,}}>
            <Container className={classes.deepBackground}></Container>
            <div className='progress-bar'></div>
            <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>
            <Container className={classes.pageBackground}>
                <div className={'page-1'}>
                    <div 
                        className={classes.firstArrowBtn}
                        onClick = {() => {
                            goToSecondPage();
                        }}
                    >
                        <ScrollBtn />
                    </div>
                </div>
            </Container>
            <Container ref={secondPageReferance} className={classes.pageBackground}>
                <div className={'page-2'}>
                    <div className={classes.firstArrowBtn}>
                        <ScrollBtn />
                    </div>
                </div>
            </Container>
        </div>
    );
}
export default LandingPage;