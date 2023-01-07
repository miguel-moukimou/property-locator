import { CssBaseline, Typography } from '@mui/material';
import {Button, AppBar, Toolbar} from "@mui/material";
import { makeStyles } from '@material-ui/styles';
import React from 'react'

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
    }
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
        </>
    )
}

export default Home;