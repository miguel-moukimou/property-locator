import { CssBaseline, Typography } from '@mui/material';
import { Button, AppBar, Toolbar } from "@mui/material";
import { makeStyles } from '@material-ui/styles';
import React, {useContext} from 'react';
import zIndex from '@mui/material/styles/zIndex';
import {Link, useNavigate} from "react-router-dom";

import StateContext from '../Contexts/StateContext';

const useStyle = makeStyles({
    leftNav: {
        marginRight: 'auto',

    },
    rightNav: {
        marginLeft: 'auto',
        marginRight: '10rem',
    },
    propertBtn: {
        backgroundColor: "green",
        color: "white",
        width: "15rem",
        fontSize: "1.1rem",
        marginRight: "1rem",
        '&:hover': {
            color: "black",
        }
    },
    loginBtn: {
        backgroundColor: "white",
        color: "black",
        width: "15rem",
        fontSize: "1.1rem",
        marginLeft: "1rem",
        '&:hover': {
            color: "white",
        }
    },
});
function Header() {
    const classes = useStyle();
    const navigate = useNavigate();

	const GlobalState = useContext(StateContext);

    return (
        <AppBar position="static">
            <Toolbar>
                <div className={classes.leftNav}>
                    <Button color="inherit" onClick={() => navigate('/')}><Typography variant='h4'>Home</Typography></Button>
                </div>
                <div>
                    <Button color="inherit" onClick={() => navigate('/listings')} style={{ marginRight: '2rem' }}><Typography variant='h6'>Listings</Typography></Button>
                    <Button color="inherit" style={{ marginLeft: '2rem' }}><Typography variant='h6'>Agencies</Typography></Button>
                </div>
                <div className={classes.rightNav}>
                    <Button color="inherit" className={classes.propertBtn}>Add Property</Button>
                    {GlobalState.userUsername !== '' ? <Button color="inherit" onClick={() => navigate('/login')} className={classes.loginBtn}>{GlobalState.userUsername}</Button>: <Button color="inherit" onClick={() => navigate('/login')} className={classes.loginBtn}>Login</Button>}
                    
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Header