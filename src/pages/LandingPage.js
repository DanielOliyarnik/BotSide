import React, { useState, useRef } from 'react';
import { makeStyles, Container, Typography, Paper, TextField, Button, Fab, Grid, Radio } from '@material-ui/core';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import './LandingPage.css';
import ScrollBtn from '../components/ScrollToPage';
import infoCloud from '../assets/Cloud.png';
import infoArrow from '../assets/SocialArrow.png';
import GeoLogo from '../assets/GeoBot.png';
import GeoLogoArrow from '../assets/GeoBotArrowT.png';

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
        bottom: '0%',
        marginLeft: '16%',
        
        display: 'flex',
        padding: 0,
        width: '20%',
        height: '8vh',
        [theme.breakpoints.down('xs')]:{
            marginLeft: '0%',
            marginRight: '0%',
        },
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
    inforCloudWrapperWrapper: {
        position: 'absolute',
        bottom: '12%',
        right: '28%',
        width: '15%',
        hight: '15%',
        display: 'flex',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]:{
            right: '10%',
        },
        animation: `$infoCloudWrapperAnimate 3.5s ${theme.transitions.easing.easeInOut}`,
    },
    '@keyframes infoCloudWrapperAnimate': {
        '0%': {
            bottom: '-20%',
        },
        '60%': {
            bottom: '15%',
        },
        '100%': {
            bottom: '12%',
        }
    },
    infoCloudWrapper: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        transform: 'rotate(20deg)',
        zIndex: 10,
        fontWeight: 1000,
        fontFamily: 'Segoe UI',
        fontSize: 24,
        color: 'black',
        [theme.breakpoints.down('sm')]:{
            fontSize: 14,
        },
        animation: `$infoCloudAnimate 1s infinite alternate ${theme.transitions.easing.easeInOut}`,
    },
    '@keyframes infoCloudAnimate': {
        '0%': {
            bottom: '4%',
        },
        '100%': {
            bottom: '2%',
        },
    },
    infoCloud: {
        position: 'absolute',
        width: '200px',
        hight: '200px',
        zIndex: -1,
        [theme.breakpoints.down('sm')]:{
            width: '100px',
            hight: '100px',
        },
    },
    infoArrow: {
        position: 'absolute',
        bottom: '5%',
        right: '38%',
        width: '5%',
        hight: '5%',
        transform: 'rotate(190deg)',
    },
    sendBtn: {
        position: 'absolute',
        right: '15%',
        bottom: '45%',
        backgroundColor: '#1a588a',
        borderRadius: 3,
        border: 0,
        width: '200px',
        height: '65px',
        transition: '0.3s', 
        fontWeight: 700,
        fontFamily: 'Segoe UI',
        fontSize: 16,
        color: 'black',
        cursor: 'pointer',
        '&:hover': {
            color: 'white',
            backgroundColor: '#384396',
            fontWeight: 1000,
        },
        [theme.breakpoints.down('xs')]:{
            width: '100px',
            height: '55px',
            bottom: '15%',
            left: '12%',
        },
    },
    geoLogo: {
        position: 'relative', 
        height: '90px', 
        width: '90px',
        margin: 0,
    },
    geoLogoArrow: {
        position: 'relative',
        margin: 0,
        height: '90px', 
        width: '10px',
    },
    logoWrapper: {
        position: 'absolute', 
        top: '1%', 
        width: '100%',
        height: '15%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        gap: '10px',
        animation: `$logoWrapperAnimate 5.2s  ${theme.transitions.easing.easeInOut}`,
    },
    '@keyframes logoWrapperAnimate': {
        '0%': {
            opacity: 0,
            gap: '70px',
        },
        '50%': {
            opacity: 0,
            gap: '70px',
        },
        '100%': {
            opacity: 1,
            gap: '10px',

        }
    },
    rootSlideShow: {
        position: 'absolute',
        width: '90%',
        height: '80%',
        paddingLeft: '5%',
        display: 'flex',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    radioWrapper: {
        position: 'relative',
        bottom: '-35%',
    },
}));

function LandingPage(props) {

    const [selectedValue, setSelectedValue] = React.useState('a');
    const secondPageReferance = useRef(null);
    const classes = useStyles();

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
      };

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
                    <div className={classes.logoWrapper}>
                        <img src={GeoLogo} className={classes.geoLogo} />
                        <img src={GeoLogoArrow} className={classes.geoLogoArrow} />
                    </div>
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
                    <div className={classes.inforCloudWrapperWrapper}>
                        <Typography className={classes.infoCloudWrapper}>
                            Learn More!
                            <img src={infoCloud} className={classes.infoCloud}/>
                        </Typography>
                    </div>
                    <form action={"https://discord.com/oauth2/authorize?client_id=837857979486568458&permissions=8&scope=bot"}>
                        <Button
                            className={classes.sendBtn}
                            type='submit'
                        >
                            Intive GeoBot
                        </Button>
                    </form>
                </div>
            </Container>
            <Container ref={secondPageReferance} className={classes.pageBackground}>
                <div className={'page-2'}>
                    <div className={classes.rootSlideShow}>
                        <div className={classes.radioWrapper}>
                            <Radio
                                checked={selectedValue === 'a'}
                                onChange={handleChange}
                                value='a'
                                name='radio-button'
                                inputProps={{ 'aria-label': 'A' }}
                            />
                            <Radio
                                checked={selectedValue === 'b'}
                                onChange={handleChange}
                                value="b"
                                name='radio-button'
                                inputProps={{ 'aria-label': 'B' }}
                            />
                            <Radio
                                checked={selectedValue === 'c'}
                                onChange={handleChange}
                                value='c'
                                name='radio-button'
                                inputProps={{ 'aria-label': 'D' }}
                            />
                        </div>
                        <div className={classes.firstArrowBtn}>
                            <ScrollBtn />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
export default LandingPage;