import React, { useState, useEffect } from 'react';
import Axios from "axios";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import { Icon } from "leaflet";
import { Grid, AppBar, Typography, Button, Card, CardHeader, CardMedia, CardContent, IconButton, CardActions, CircularProgress } from '@mui/material';
import { makeStyles } from '@material-ui/styles';
import houseIconPng from "./assets/house.png";
import apartmentIconPng from "./assets/house.png";
import officeIconPng from "./assets/office-building.png";
import data from "./assets/Data/Dummydata";


const useStyles = makeStyles({
    cardWrapper: {
        margin: "0.5rem",
        border: "1px solid black",
        position: "relative",
    },
    cardPicture: {
        paddingRight: "1rem",
        paddingLeft: "1rem",
        height: "20rem",
        width: "30rem",
    },
    priceOverlay: {
        position: "absolute",
        backgroundColor: 'green',
        zIndex: "1000",
        color: "white",
        top: "100px",
        left: "20px",
        padding: "5px",

    },
});

function Listings() {

    const classes = useStyles();
    const houseicon = new Icon({
        iconUrl: houseIconPng,
        iconSiez: [40, 40],
    });
    const apartmenticon = new Icon({
        iconUrl: apartmentIconPng,
        iconSiez: [40, 40],
    });
    const officeicon = new Icon({
        iconUrl: officeIconPng,
        iconSiez: [40, 40],
    });

    const [latitude, setLatitude] = useState(51.505);
    const [longitude, setLongitude] = useState(-0.09);

    const polylineOne = [
        [51.505, -0.09],
        [51.51, -0.1],
        [51.51, -0.12],
    ]

    const [allListings, setAllListings] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() =>{
        const source = Axios.CancelToken.source();
        async function getAllListings(){
            try {
                const response = await Axios.get('/api/listings/', {cancelToken: source.token});
                setAllListings(response.data);
                setIsLoading(false);
            } catch(error){
                console.log(error.response);
            }
        }
        getAllListings();
        return ()=>{
            source.cancel();
        }
    }, []);
    

    if(isLoading === true){
        return (
            <Grid container justifyContent="center" alignItems="center" style={{height: "100vh"}}>
                <CircularProgress />
            </Grid>
        )
    }

    return (
        <Grid container>
            <Grid item xs={4}>
                {allListings.map((listing) => {
                    return (
                        <Card key={listing.id} className={classes.cardWrapper}>
                            <CardHeader

                                action={
                                    <IconButton aria-label="settings">
                                    </IconButton>
                                }
                                title={listing.title}
                            />
                            <CardMedia
                                className={classes.cardPicture}
                                component="img"
                                image={listing.picture1}
                                title={listing.title}
                            />
                            <CardContent>
                                <Typography variant="body2" component="p">
                                    {listing.description.substring(0,200)}
                                </Typography>

                                {listing.property_status === "Sale" ?(
                                    <Typography className={classes.priceOverlay} variant="body">
                                    {listing.listing_type}: EUR {listing.price}
                                 </Typography>
                                ) : (
                                    <Typography className={classes.priceOverlay} variant="body">
                                    {listing.listing_type}: EUR {listing.price} / {listing.rental_frequency}
                                </Typography>
                                )}
                                
                            </CardContent>
                            <CardActions disableSpacing>

                                <IconButton aria-label="share">
                                </IconButton>

                            </CardActions>
                        </Card>
                    )
                })}
            </Grid>
            <Grid item xs={8} style={{marginTop: "0.5rem"}}>
                <AppBar position='sticky'>
                    <div style={{ height: '100vh' }}>
                        <MapContainer center={[latitude, longitude]} zoom={10} scrollWheelZoom={true}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />

                            {allListings.map((listing) => {
                                function displayIcon() {
                                    if (listing.listing_type === 'House') {
                                        return houseicon;
                                    }
                                    else if (listing.listing_type === 'Apartment') {
                                        return apartmenticon;
                                    }
                                    else if (listing.listing_type === 'Office') {
                                        return officeicon;
                                    }
                                }
                                return (
                                    <Marker key={listing.id}
                                        icon={displayIcon()}
                                        position={[
                                            listing.latitude,
                                            listing.longitude
                                        ]}>
                                        <Popup>
                                            <Typography variant='h5'>{listing.title}</Typography>
                                            <img src={listing.picture1} style={{ height: "14rem", width: "18rem" }} />
                                            <Typography variant='body1'>{listing.description.substring(0, 150)}...</Typography>
                                            <Button variant='contained'>Show details</Button>
                                        </Popup>

                                    </Marker>
                                )
                            })}
                        </MapContainer>
                    </div>
                </AppBar>
            </Grid>
        </Grid>
    )
}

export default Listings