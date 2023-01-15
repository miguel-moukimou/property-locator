import { CssBaseline, Typography } from '@mui/material';
import Axios from "axios";
import { Button, AppBar, Toolbar, Menu, MenuItem } from "@mui/material";
import { makeStyles } from '@material-ui/styles';
import React, { useContext, useState } from 'react';
import zIndex from '@mui/material/styles/zIndex';
import { Link, useNavigate } from "react-router-dom";

import StateContext from '../Contexts/StateContext';
import DispatchContext from "../Contexts/DispatchContext";

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
    profileBtn: {
        color: "black",
        backgroundColor: "green",
        width: "15rem",
        fontWeight: "bolder",
        borderRadius: "15px",
        marginBottom: "0.25rem",
    },
    logoutBtn: {
        color: "black",
        backgroundColor: "red",
        width: "15rem",
        fontWeight: "bolder",
        borderRadius: "15px",
    },
});
function Header() {
    const classes = useStyle();
    const navigate = useNavigate();

    const GlobalState = useContext(StateContext);
    const GlobalDispatch = useContext(DispatchContext);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [openSnack, setOpenSnack] = useState(false);

    async function HandleLogout() {
		setAnchorEl(null);
		const confirmLogout = window.confirm("Are you sure you want to leave?");
		if (confirmLogout) {
			try {
				const response = await Axios.post(
					"/api-auth-djoser/token/logout/",
					GlobalState.userToken,
					{ headers: { Authorization: "Token ".concat(GlobalState.userToken) } }
				);

				GlobalDispatch({ type: "logout" });
                setOpenSnack(true);
                window.location.reload();
                navigate("/");
                console.log('here');
			} catch (e) {
                console.log(e.response)
            }
		}
	}

    function HandleProfile() {
		setAnchorEl(null);
		navigate("/profile");
	}


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
                    <Button color="inherit" className={classes.propertBtn} onClick={() => navigate('/add-property')}>Add Property</Button>
                    {GlobalState.userUsername !== '' &&  GlobalState.userUsername !== null ? <Button color="inherit" onClick={handleClick} className={classes.loginBtn}>{GlobalState.userUsername}</Button> : <Button color="inherit" onClick={() => navigate('/login')} className={classes.loginBtn}>Login</Button>}
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem className={classes.profileBtn} onClick={handleClose}>Profile</MenuItem>
                        <MenuItem className={classes.logoutBtn} onClick={HandleLogout}>Logout</MenuItem>
                    </Menu>
                </div>
            </Toolbar>
        </AppBar>
    )
}
export default Header