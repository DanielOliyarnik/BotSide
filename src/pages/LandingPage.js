import React, { useState, useRef } from 'react';
import { makeStyles, Container, Typography, Paper, TextField, Button, Fab, } from '@material-ui/core';
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
    BannerContainer: {
        position: 'relative',
        top: '5%',
        marginTop: 0,
        marginLeft: '20%',
        marginRight: '20%',
        margin: 0,
        padding: 0,
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '60%',
        height: '20vh',
        zIndex: 1000,
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
    firstIntroTextWrapper: {
        position: 'absolute',
        bottom: '50%',
        left: '10%',
        padding: 0,
        width: '50%',
        height: '8vh',
        Zindex: 10,
        [theme.breakpoints.down('sm')]:{
            left: '10%',
            width: '90%',
        },
    },
    baseText: {
        fontFamily: 'Segoe UI',
        fontSize: 12,
        color: 'white',
        wordWrap: 'break-word',
        width: '90%',
    },
    firstIntroHeaderText: {
        fontFamily: 'Segoe UI',
        color: 'white',
        wordWrap: 'break-word',
        width: '90%',
        fontSize: 20, 
        marginBottom: '3%', 
        fontStyle: 'oblique',
        [theme.breakpoints.down('xs')]:{
            fontSize: 12
        },
    },
    firstIntroText: {
        fontFamily: 'Segoe UI',
        color: 'white',
        wordWrap: 'break-word',
        width: '90%',
        fontSize: 24,
        workWap: 'break-word',
        fontWeight: 1000,
        [theme.breakpoints.down('xs')]:{
            fontSize: 16
        },
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
                    <Container className={classes.BannerContainer}>
                        <div className="banner-wrapper">
                            <h1 className="welcome-text">
                                GeoBot
                            </h1>
                                <svg className="svg-front">
                                    <ellipse className="elip-front" cx="50%" cy="50%" rx="150" ry="50" />
                                </svg>
                            
                        </div>
                    </Container>
                    <div 
                        className={classes.firstArrowBtn}
                        onClick = {() => {
                            goToSecondPage();
                        }}
                    >
                        <ScrollBtn />
                    </div>
                    <div className={classes.firstIntroTextWrapper}>
                        <Typography className={classes.firstIntroHeaderText}>
                            give discord a new meaning...
                        </Typography>
                        <Typography className={classes.firstIntroText}>
                            After hours of work, it's finally here. GeoBot is the next step in discord entertainment and fun! With GeoBot you can finally have that enjoyable and interactive experience that is missing from everyday discord servers.
                        </Typography>
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