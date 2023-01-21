import { CssBaseline, Typography } from '@mui/material';
import { Button, AppBar, Toolbar } from "@mui/material";
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import city from "./assets/city-hero.png"
import zIndex from '@mui/material/styles/zIndex';

const useStyle = makeStyles({
    cityHero: {
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
            <div style={{ postion: "relative" }}>
                <img src={city} className={classes.cityHero} />
                <div className={classes.overlayText}>
                    <Typography variant='h1' className={classes.homeTitle}>FIND YOUR <span style={{ color: "green" }}>NEXT PROPERTY</span>  ON OUR WEBSITE</Typography>
                    <Button variant='contained' className={classes.heroButton} onClick={() =>navigate('/listings/')}>SEE ALL PROPERTIES</Button>
                </div>
            </div>
        </>
    )
}

export default Home;