import React, { useState, useRef } from 'react';
import { makeStyles, Container, Typography, Paper, TextField, Button, Fab, Grid, Radio, Grow, Slider, } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import './LandingPage.css';
import ScrollBtn from '../components/ScrollToPage';
import infoCloud from '../assets/cloudsmall.png';
import infoArrow from '../assets/SocialArrow.png';
import GeoLogo from '../assets/GeoBot.png';
import GeoLogoArrow from '../assets/GeoBotArrowT.png';

const useStyles = makeStyles((theme) => ({
    deepBackground: {
        background: 'linear-gradient(55deg, #2A81E2, #2eb853)',
        backgroundSize: '300% 300%',
        position: 'absolute',
        overflow: 'hidden',
        top: 0,
        left: 0,
        padding: 0,
        margin: 0,
        maxWidth: '100%',
        height: '302vh',
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
        bottom: '5%',
        marginLeft: '50%',
        display: 'flex',
        padding: 0,
        width: '20%',
        height: '8vh',
        '&:hover': {
            "& $span": {
                opacity: 1,
            },
         },
    },
    span: {
        position: 'absolute',
        color: 'ivory',
        left: '-10%',
        bottom: '100%',
        width: '120px',
        height: '4vh',
        backgroundColor: '#35383d',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0,
        borderRadius: '45px',
        zIndex: 1000,
        transition: `all 0.3s ${theme.transitions.easing.easeInOut}`,
    },
    SecondArrowBtn: {
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
        opacity: 0,
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
        animation: `$infoCloudWrapperAnimate 10s ${theme.transitions.easing.easeInOut}`,
    },
    '@keyframes infoCloudWrapperAnimate': {
        '0%': {
            opacity: 1,
            bottom: '-20%',
        },
        '50%': {
            opacity: 1,
            bottom: '-20%',
        },
        '60%': {
            bottom: '15%',
        },
        '70%': {
            bottom: '12%',
        },
        '80%': {
            opacity: 1,
            bottom: '15%',
        },
        '100%': {
            opacity: 0,
            bottom: '-20%',
        }
    },
    infoCloudWrapper: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        transform: 'rotate(15deg)',
        zIndex: 10,
        fontWeight: 1000,
        fontFamily: 'Segoe UI',
        fontSize: 24,
        color: 'black',
        [theme.breakpoints.down('sm')]:{
            fontSize: 14,
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
    inviteBtn: {
        position: 'absolute',
        right: '15%',
        bottom: '45%',
        backgroundColor: '#0093BF',
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
            backgroundColor: '#30ABE1',
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
        height: '110px', 
        width: '90px',
        margin: 0,
    },
    geoLogoArrow: {
        position: 'relative',
        margin: 0,
        height: '110px', 
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
        height: '100%',
        paddingLeft: '5%',
        display: 'flex',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    slideShowArrowLeft: {
        position: 'absolute',
        transform: 'rotateY(180deg)',
        width: '10%',
        height: '50px',
        left: '5%',
        zIndex: 500,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        transition: '0.1s linear',
    },
    slideShowArrowRigth: {
        position: 'absolute',
        transform: 'rotateY(0deg)',
        width: '10%',
        height: '50px',
        right: '5%',
        zIndex: 500,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        transition: '0.1s linear',
    },
    radioWrapper: {
        position: 'relative',
        bottom: '-35%',
    },
    secondContent: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        backgroundImage: 'linear-gradient(to bottom right, #3490e0, #217050)',
        borderRadius: 15,
        zIndex: 100,
        bottom: '5%',
    },
    secondContentWrapper: {
        position: 'absolute',
        marginBottom: '5%',
        height: '70%',
        width: '80%',
        display: 'flex',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    reviewBackground: {
        position: 'relative',
        backgroundColor: '#35383d',
        borderRadius: 20,
        padding: 0,
        top: '5%',
        overflow: 'scroll',
        overflowX: 'hidden',
        width: '90%',
        height: '70vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    editFab: {
        position: 'absolute',
        bottom: '12%',
        right: '8%',
        cursor: 'pointer',
        animation: `$editFabAnimation 0.6s  ${theme.transitions.easing.easeInOut}`,
    },
    '@keyframes editFabAnimation': {
        '0%': {
            opacity: 0,
            transform: 'rotate(180deg)',
            right: '4%',
        },
        '100%': {
            opacity: 1,
            transform: 'rotate(0deg)',
            right: '8%',
        }
    },
    editFabOff: {
        position: 'absolute',
        bottom: '12%',
        transform: 'rotate(180deg)',
        right: '4%',
        cursor: 'pointer',
        opacity: 0,
        animation: `$editFabAnimationExit 0.6s  ${theme.transitions.easing.easeInOut}`,
    },
    '@keyframes editFabAnimationExit': {
        '0%': {
            opacity: 1,
            transform: 'rotate(0deg)',
            right: '8%',
        },
        '100%': {
            opacity: 0,
            transform: 'rotate(180deg)',
            right: '4%',
        }
    },
    newPostText: {
        position: 'fixed',
        bottom: '5%',
        left: '6%',
        width: '90%',
        height: '10%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'left',
        alignSelf: 'center',
        gap: '1%',
        animation: `$commentArea 0.6s  ${theme.transitions.easing.easeInOut}`,
    },
    '@keyframes commentArea': {
        '0%': {
            opacity: 0,
            bottom: '-10%',
        },
        '100%': {
            opacity: 1,
            bottom: '5%',
        }
    },
    newPostTextExit: {
        position: 'fixed',
        bottom: '-10%',
        left: '6%',
        width: '90%',
        height: '10%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'left',
        alignSelf: 'center',
        gap: '1%',
        opacity: 0,
        animation: `$commentAreaExit 0.6s  ${theme.transitions.easing.easeInOut}`,
    },
    '@keyframes commentAreaExit': {
        '0%': {
            opacity: 1,
            bottom: '5%',
        },
        '25%': {
            bottom: '10%',
        },
        '100%': {
            opacity: 0,
            bottom: '-10%',
        }
    },
    newPostTextNull: {
        opacity: 0,
        position: 'absolute',
    },
    textArea: {
        position: 'relative',
        backgroundColor: '#494d54', 
        borderRadius: 10,
        width: '85%', 
        height: '105%',
        boxShadow: '5px 5px 2px',
        [theme.breakpoints.down('xs')]: {
            width: '75%',  
        },
    },
    commentBtn: {
        position: 'absolute',
        right: '4%',
        bottom: '40%',
        backgroundColor: '#3277e6',
        borderRadius: 3,
        border: 0,
        width: '10%',
        height: '60%',
        transition: '0.3s', 
        fontWeight: 700,
        fontFamily: 'Segoe UI',
        fontSize: 12,
        color: 'black',
        cursor: 'pointer',
        boxShadow: '5px 5px 2px',
        '&:hover': {
            color: 'white',
            backgroundColor: '#384396',
            fontWeight: 1000,
            boxShadow: 'none',
        },
        [theme.breakpoints.down('xs')]:{
            fontSize: 10,
        },
    },
    cancelBtn: {
        position: 'absolute',
        right: '4%',
        bottom: '-8%',
        backgroundColor: '#c91010',
        borderRadius: 3,
        border: 0,
        width: '10%',
        height: '45%',
        transition: '0.3s', 
        fontWeight: 700,
        fontFamily: 'Segoe UI',
        fontSize: 12,
        color: 'black',
        cursor: 'pointer',
        boxShadow: '5px 5px 2px',
        '&:hover': {
            color: 'white',
            backgroundColor: '#384396',
            fontWeight: 1000,
            boxShadow: 'none',
        },
        [theme.breakpoints.down('xs')]:{
            fontSize: 10,
        },
    },
    ratingBackground: {
        position: 'absolute',
        backgroundColor: '#494d54', 
        borderRadius: 10,
        bottom: '110%',
        right: '40%',
        height: '60%',
        width: '30%',
        boxShadow: '5px 5px 2px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        [theme.breakpoints.down('xs')]:{
            width: '50%',
            right: '35%',
            height: '70%',
        },
    },
    slider: {
        position: 'absolute',
        width: '90%',
        bottom: '0%',
        [theme.breakpoints.down('xs')]:{
            width: '80%',
            bottom: '-15%',
        },
    },
}));

function LandingPage(props) {
    const [selectedValue, setSelectedValue] = useState('a');
    const [newCreatePost, setNewCreatePost] = useState(false);
    const [newPost, setNewPost] = useState('');
    const [newRating, setNewRating] = useState(3);
    const [firstPostCounter, setFirstPostCounter] = useState(false);
    const [comment, setComment] = useState([
    {
        message: "vary bad!vary bad!vary bad!vary bad!vary bad!vary bad!vary bad!vary bad!vary bad!vary bad!vary bad!vary bad!vary bad!vary bad!vary bad!vary bad!vary bad!vary bad!vary bad!vary bad!vary bad!vary bad!vary bad!vary bad!vary bad!vary bad!vary bad!vary bad!vary bad!vary bad!vary bad!vary bad!vary bad!vary bad!vary bad!vary bad!vary bad!vary bad!vary bad!vary bad!vary bad!vary bad!vary bad!vary bad!vary bad!vary bad!vary bad!vary bad!vary bad!vary bad!vary bad!vary bad!vary bad!vary bad!vary bad!vary bad!vary bad!vary bad!vary bad!vary bad!vary bad!vary bad!vary bad!vary bad!vary bad!vary bad!vary bad!vary bad!vary bad!vary bad!vary bad!vary bad!vary bad!vary bad!vary bad!vary bad!vary bad!vary bad!vary bad!vary bad!vary bad!vary bad!",
        rating: 0,
        date: "",
    },
    {
        message: "horrid!",
        rating: 0,
        date: "",
    },
]);

    const secondPageReferance = useRef(null);
    const thirdPageReferance = useRef(null);
    const firstPageReferance = useRef(null);
    
    const classes = useStyles();

    const handlePostChange = ((event) => {
        setNewPost(event.target.value);
    });

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
      };

    const handleRatingChange = (event, newValue) => {
        setNewRating(newValue);
    };

    const handleComment = (newComment) => {
        let today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const yyyy = today.getFullYear();
        today = mm + '/' + dd + '/' + yyyy;

        console.log(newPost);

        console.log(newComment);
        setComment((prev) => [...prev, {['message']: newPost, ['rating']: `${newRating} ⭐`, ['date']: `${today} 📅`} ]);
        console.log(comment);
        setNewPost('');
        setNewRating(0);
        setNewCreatePost(false);
    }   

const handleCancel = () => {
    setNewPost('');
    setNewRating(0);
    setNewCreatePost(false);
};

    const sideSetRight = () => {
        if (selectedValue === 'a'){
            setSelectedValue('b');
        } else if (selectedValue === 'b'){
            setSelectedValue('c');
        } else {
            setSelectedValue('a');
        }
    };
    
    const sideSetLeft = () => {
        if (selectedValue === 'c'){
            setSelectedValue('b');
        } else if (selectedValue === 'b'){
            setSelectedValue('a');
        } else {
            setSelectedValue('c');
        }
    };

    const handleCreatePost = () => {
        if (!firstPostCounter) setFirstPostCounter(true);
        setNewCreatePost(true);
    };

    function valuetext(value) {
        return value;
      }

    window.addEventListener('scroll', () => {
        document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
      }, false);

    const goToPage = (props) => {
        window.scrollTo({
            top: props.current.offsetTop,
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
            <div 
                className='up-man'
                onClick = {() => {
                    goToPage(firstPageReferance);
                }}
            >
                <ScrollBtn />
            </div>
            <Container ref={firstPageReferance} className={classes.pageBackground}>
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
                            goToPage(secondPageReferance);
                        }}
                    >
                        <span className={classes.span}>{'Learn More'}</span>
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
                            <img src={infoCloud} className={classes.infoCloud}/>
                        </Typography>
                    </div>
            
                        <Button
                            className={classes.inviteBtn}
                            onClick ={() => {
                                window.location ='https://discord.com/api/oauth2/authorize?client_id=837857979486568458&permissions=8&scope=bot';
                            }}
                            type='submit'
                        >
                            Intive GeoBot
                        </Button>

                </div>
            </Container>
            <Container ref={secondPageReferance} className={classes.pageBackground}>
                <div className={'page-2'}>
                    <div className={classes.rootSlideShow}>
                        <div className={classes.secondContentWrapper}>
                            <div className={classes.slideShowArrowLeft}>
                                <div 
                                    className='arrow-btn'
                                    onClick = {() => {
                                        sideSetLeft();
                                    }}
                                >
                                    <div className='arrow-arrow 1'></div>
                                    <div className='arrow-arrow 2'></div>
                                </div>
                            </div>
                            <div 
                                className={classes.slideShowArrowRigth}
                                onClick = {() => {
                                    sideSetRight();
                                }}
                            >
                                <div className='arrow-btn'>
                                    <div className='arrow-arrow 1'></div>
                                    <div className='arrow-arrow 2'></div>
                                </div>
                            </div>
                            <Grow 
                                in={selectedValue === 'a'}
                                {...((selectedValue === 'a') ? { timeout: 1000 } : {})}
                            >
                                <Paper elevation={4} className={classes.secondContent}>
                                    <Typography>geo stuff</Typography>
                                </Paper>
                            </Grow>
                            <Grow 
                                in={selectedValue === 'b'}
                                {...((selectedValue === 'b') ? { timeout: 1000 } : {})}
                            >
                                <Paper elevation={4} className={classes.secondContent}>
                                    <Typography>music stuff</Typography>
                                </Paper>
                            </Grow>
                            <Grow 
                                in={selectedValue === 'c'}
                                {...((selectedValue === 'c') ? { timeout: 1000 } : {})}
                            >
                                <Paper elevation={4} className={classes.secondContent}>
                                    <Typography>team/party stuff</Typography>
                                </Paper>
                            </Grow>
                        </div>
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
                        <div 
                            className={classes.SecondArrowBtn}
                            onClick = {() => {
                                goToPage(thirdPageReferance);
                            }}
                        >
                            <ScrollBtn />
                        </div>
                    </div>
                </div>
            </Container>
            <Container ref={thirdPageReferance} className={classes.pageBackground}>
                <div className={'page-3'}>
                    <Paper 
                        className={classes.reviewBackground} 
                        elevation={15}
                    >    
                        {comment.map((com) => (
                            <Paper 
                                elevation={5}
                                style={{
                                    width: "98%",
                                    backgroundColor: "#4b4f55",
                                    marginBottom: 5,
                                    padding: 10,
                                }}
                            >
                                <Typography 
                                    variant="subtitle1" 
                                    gutterBottom
                                    style={{ color: "rgb(243, 243, 242)", overflowWrap: "breakWord", wordWrap: "breakWord", overflow: "visible" }}
                                >
                                    {com.message}
                                </Typography>
                                <Typography 
                                    variant="body2" 
                                    color="textSecondary"
                                >
                                    {com.rating}
                                </Typography>
                                <Typography 
                                    variant="body2" 
                                    color="textSecondary"
                                >
                                    {com.date}
                                </Typography>
                            </Paper>
                        ))}
                    <div className={clsx({[classes.newPostTextExit]:((!newCreatePost)&&(firstPostCounter))},{[classes.newPostText]:(newCreatePost)}, {[classes.newPostTextNull]:(!firstPostCounter)},)}>
                        <TextField
                            size="small"
                            placeholder="Message"
                            multiline
                            rows='3'
                            className={classes.textArea}
                            inputProps={{
                                style: {
                                    color: "rgb(243, 243, 242)",
                                    height: '100%',
                                },
                            }}
                            onKeyPress={(e) => {
                                if (e.key === 'Enter') {
                                    console.log("sending comment");
                                    handleComment();
                                }
                            }}
                            variant="outlined"
                            value={newPost}
                            onChange={handlePostChange}
                        />
                        <Button
                            className={classes.commentBtn}
                            type='submit'
                            onClick = {() => {
                                handleComment();
                            }}
                        >
                            Make Comment
                        </Button>
                        <Button
                            className={classes.cancelBtn}
                            type='submit'
                            onClick = {() => {
                                handleCancel();
                            }}
                        >
                            Cancel
                        </Button>
                        <div className={classes.ratingBackground}>
                            <Typography style={{ position: 'absolute', color: '#86888c', bottom: '45%', }}>Rating</Typography>
                            <Slider
                                className={classes.slider}
                                value={newRating}
                                onChange={handleRatingChange}
                                getAriaValueText={valuetext}
                                aria-labelledby="discrete-slider"
                                valueLabelDisplay="auto"
                                step={1}
                                marks
                                min={0}
                                max={5}
                            />
                        </div>
                    </div>
                    </Paper>
                    <Fab 
                        className={clsx({[classes.editFab]:(!newCreatePost)},{[classes.editFabOff]:(newCreatePost)},)} 
                        color="primary" 
                        aria-label="edit"
                        onClick = {() => {
                            handleCreatePost();
                        }}
                    >
                        <EditIcon />
                    </Fab>

                </div>
            </Container>
        </div>
    );
}
export default LandingPage;