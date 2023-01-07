import { CssBaseline, Typography } from '@mui/material';
import {Button, AppBar, Toolbar} from "@mui/material";
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import city from "./assets/city-hero.png"
import zIndex from '@mui/material/styles/zIndex';

const useStyle = makeStyles({
    leftNav: {
        marginRight: 'auto',

    },
    rightNav: {
        marginLeft: 'auto',
        marginRight: '10rem',   
    },
    propertBtn:{
        backgroundColor: "green",
        color: "white",
        width: "15rem",
        fontSize: "1.1rem",
        marginRight: "1rem",
        '&:hover':{
            color: "black",
        }
    },
    loginBtn:{
        backgroundColor: "white",
        color: "black",
        width: "15rem",
        fontSize: "1.1rem",
        marginLeft: "1rem",
        '&:hover':{
            color: "white",
        }
    },
    cityHero:{
        width: "100%",
        height: "92vh",
    },
    overlayText: {
        position: "absolute",
        zIndex: "100",
        top: "150px",
        left: "20px",
        textAlign: "center",
    },
    homeTitle: {
        color: "white",
        fontWeight: "bolder",
    },
    heroButton: {
        fontSize: "3.5rem",
        borderRadius: "15px",
        backgroundColor: "green",
        marginTop: "2rem",
        boxShadow: "3px 3px 3px white",
    },
})
function Home() {
    const classes = useStyle();
    return (
        <>
            <CssBaseline />
            <AppBar position="static">
                <Toolbar>
                    <div className={classes.leftNav}>
                        <Button color="inherit"><Typography variant='h4'>Home</Typography></Button>
                    </div>
                    <div>
                        <Button color="inherit" style={{marginRight: '2rem'}}><Typography variant='h6'>Listings</Typography></Button>
                        <Button color="inherit" style={{marginLeft: '2rem'}}><Typography variant='h6'>Agencies</Typography></Button>
                    </div>
                    <div className={classes.rightNav}>
                        <Button color="inherit" className={classes.propertBtn}>Add Property</Button>
                        <Button color="inherit" className={classes.loginBtn}>Login</Button>
                    </div>
                </Toolbar>
            </AppBar>
            <div style={{postion: "relative"}}>
            <img src={city} className={classes.cityHero}/>
            <div className={classes.overlayText}>
                <Typography variant='h1' className={classes.homeTitle}>FIND YOUR <span style={{color: "green"}}>NEXT PROPERTY</span>  ON OUR WEBSITE</Typography>
                <Button variant='contained' className={classes.heroButton}>SEE ALL PROPERTIES</Button>
            </div>
            </div>
        </>
    )
}

export default Home;