import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Carousel from 'react-bootstrap/Carousel';
import Avatar from '@mui/material/Avatar';
import BedIcon from '@mui/icons-material/Bed';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import BathtubIcon from '@mui/icons-material/Bathtub';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import { Grid } from '@mui/material';

export default function RecipeReviewCard() {
    return (
        <Grid container
            direction="row"
            display="flex"
            justifyContent="center"
            paddingTop="10px">
            <Grid item xs={8}>
                <h1 style={{
                    display: "flex", justifyContent: "center", fontFamily: 'Montserrat', fontStyle: "normal", fontWeight: "600", fontSize: "48px", lineHeight: "36px"
                }}>Recommended</h1>
                <p style={{ display: "flex", justifyContent: "center" }}>Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</p>
                <Carousel>
                    <Carousel.Item>
                        <Typography component="div" style={{ display: "flex", justifyContent: "space-around" }}>
                            <Card sx={{ maxWidth: 360 }}>
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image="https://cdn.ostrovok.ru/t/x220/content/7d/79/7d798625fef2324fa14590fe607cc2cc04f0427e.jpeg"
                                    alt="Paella dish"
                                />
                                <CardHeader
                                    avatar={
                                        <Avatar sx={{ bgcolor: red[500], marginLeft: "250px", marginTop: "-35px" }} aria-label="recipe">
                                            R
                                        </Avatar>
                                    }
                                />
                                <CardContent>
                                    <Typography variant="p" style={{ fontSize: "25px" }}>New Apartment Nice Wiew </Typography>
                                    <Typography variant="p" style={{ fontSize: "17px" }}>
                                        Set aside off of the heat to let rest for 10 minutes, and then serve.
                                    </Typography>
                                </CardContent>
                                <Typography component="div" style={{ display: "flex", justifyContent: "space-around" }}>
                                    <IconButton aria-label="add to favorites">
                                        <BedIcon />
                                    </IconButton>
                                    <IconButton aria-label="share">
                                        <BathtubIcon />
                                    </IconButton>
                                    <IconButton aria-label="share">
                                        <DirectionsCarFilledOutlinedIcon />
                                    </IconButton>
                                    <IconButton aria-label="share">
                                        <SquareFootIcon />
                                    </IconButton>
                                </Typography>
                                <Typography component="div" style={{ width: "100%", height: "1px", background: "#E6E9EC", marginTop: "16px", marginBottom: "25px" }} />
                                <Typography component="div" style={{ display: "flex", justifyContent: "space-between" }}>
                                    <Typography style={{ display: "flex", justifyContent: "space-between", textAlign: "center" }}>$7,500/mo</Typography>
                                    <Typography>
                                        <FavoriteBorderIcon />
                                        <ShareIcon />
                                    </Typography>
                                </Typography>
                            </Card>
                            <Card sx={{ maxWidth: 360 }}>
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image="https://cdn.ostrovok.ru/t/x220/content/7d/79/7d798625fef2324fa14590fe607cc2cc04f0427e.jpeg"
                                    alt="Paella dish"
                                />
                                <CardHeader
                                    avatar={
                                        <Avatar sx={{ bgcolor: red[500], marginLeft: "250px", marginTop: "-35px" }} aria-label="recipe">
                                            R
                                        </Avatar>
                                    }
                                />
                                <CardContent>
                                    <Typography variant="p" style={{ fontSize: "25px" }}>New Apartment Nice Wiew </Typography>
                                    <Typography variant="p" style={{ fontSize: "17px" }}>
                                        Set aside off of the heat to let rest for 10 minutes, and then serve.
                                    </Typography>
                                </CardContent>
                                <Typography component="div" style={{ display: "flex", justifyContent: "space-around" }}>
                                    <IconButton aria-label="add to favorites">
                                        <BedIcon />
                                    </IconButton>
                                    <IconButton aria-label="share">
                                        <BathtubIcon />
                                    </IconButton>
                                    <IconButton aria-label="share">
                                        <DirectionsCarFilledOutlinedIcon />
                                    </IconButton>
                                    <IconButton aria-label="share">
                                        <SquareFootIcon />
                                    </IconButton>
                                </Typography>
                                <Typography component="div" style={{ width: "100%", height: "1px", background: "#E6E9EC", marginTop: "16px", marginBottom: "25px" }} />
                                <Typography component="div" style={{ display: "flex", justifyContent: "space-between" }}>
                                    <Typography style={{ display: "flex", justifyContent: "space-between", textAlign: "center" }}>$7,500/mo</Typography>
                                    <Typography>
                                        <FavoriteBorderIcon />
                                        <ShareIcon />
                                    </Typography>
                                </Typography>
                            </Card>
                            <Card sx={{ maxWidth: 360 }}>
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image="https://cdn.ostrovok.ru/t/x220/content/7d/79/7d798625fef2324fa14590fe607cc2cc04f0427e.jpeg"
                                    alt="Paella dish"
                                />
                                <CardHeader
                                    avatar={
                                        <Avatar sx={{ bgcolor: red[500], marginLeft: "250px", marginTop: "-35px" }} aria-label="recipe">
                                            R
                                        </Avatar>
                                    }
                                />
                                <CardContent>
                                    <Typography variant="p" style={{ fontSize: "25px" }}>New Apartment Nice Wiew </Typography>
                                    <Typography variant="p" style={{ fontSize: "17px" }}>
                                        Set aside off of the heat to let rest for 10 minutes, and then serve.
                                    </Typography>
                                </CardContent>
                                <Typography component="div" style={{ display: "flex", justifyContent: "space-around" }}>
                                    <IconButton aria-label="add to favorites">
                                        <BedIcon />
                                    </IconButton>
                                    <IconButton aria-label="share">
                                        <BathtubIcon />
                                    </IconButton>
                                    <IconButton aria-label="share">
                                        <DirectionsCarFilledOutlinedIcon />
                                    </IconButton>
                                    <IconButton aria-label="share">
                                        <SquareFootIcon />
                                    </IconButton>
                                </Typography>
                                <Typography component="div" style={{ width: "100%", height: "1px", background: "#E6E9EC", marginTop: "16px", marginBottom: "25px" }} />
                                <Typography component="div" style={{ display: "flex", justifyContent: "space-between" }}>
                                    <Typography style={{ display: "flex", justifyContent: "space-between", textAlign: "center" }}>$7,500/mo</Typography>
                                    <Typography>
                                        <FavoriteBorderIcon />
                                        <ShareIcon />
                                    </Typography>
                                </Typography>
                            </Card>
                        </Typography>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Typography component="div" style={{ display: "flex", justifyContent: "space-around" }}>
                            <Card sx={{ maxWidth: 360 }}>
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image="https://cdn.ostrovok.ru/t/x220/content/7d/79/7d798625fef2324fa14590fe607cc2cc04f0427e.jpeg"
                                    alt="Paella dish"
                                />
                                <CardHeader
                                    avatar={
                                        <Avatar sx={{ bgcolor: red[500], marginLeft: "250px", marginTop: "-35px" }} aria-label="recipe">
                                            R
                                        </Avatar>
                                    }
                                />
                                <CardContent>
                                    <Typography variant="p" style={{ fontSize: "25px" }}>New Apartment Nice Wiew </Typography>
                                    <Typography variant="p" style={{ fontSize: "17px" }}>
                                        Set aside off of the heat to let rest for 10 minutes, and then serve.
                                    </Typography>
                                </CardContent>
                                <Typography component="div" style={{ display: "flex", justifyContent: "space-around" }}>
                                    <IconButton aria-label="add to favorites">
                                        <BedIcon />
                                    </IconButton>
                                    <IconButton aria-label="share">
                                        <BathtubIcon />
                                    </IconButton>
                                    <IconButton aria-label="share">
                                        <DirectionsCarFilledOutlinedIcon />
                                    </IconButton>
                                    <IconButton aria-label="share">
                                        <SquareFootIcon />
                                    </IconButton>
                                </Typography>
                                <Typography component="div" style={{ width: "100%", height: "1px", background: "#E6E9EC", marginTop: "16px", marginBottom: "25px" }} />
                                <Typography component="div" style={{ display: "flex", justifyContent: "space-between" }}>
                                    <Typography style={{ display: "flex", justifyContent: "space-between", textAlign: "center" }}>$7,500/mo</Typography>
                                    <Typography>
                                        <FavoriteBorderIcon />
                                        <ShareIcon />
                                    </Typography>
                                </Typography>
                            </Card>
                            <Card sx={{ maxWidth: 360 }}>
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image="https://cdn.ostrovok.ru/t/x220/content/7d/79/7d798625fef2324fa14590fe607cc2cc04f0427e.jpeg"
                                    alt="Paella dish"
                                />
                                <CardHeader
                                    avatar={
                                        <Avatar sx={{ bgcolor: red[500], marginLeft: "250px", marginTop: "-35px" }} aria-label="recipe">
                                            R
                                        </Avatar>
                                    }
                                />
                                <CardContent>
                                    <Typography variant="p" style={{ fontSize: "25px" }}>New Apartment Nice Wiew </Typography>
                                    <Typography variant="p" style={{ fontSize: "17px" }}>
                                        Set aside off of the heat to let rest for 10 minutes, and then serve.
                                    </Typography>
                                </CardContent>
                                <Typography component="div" style={{ display: "flex", justifyContent: "space-around" }}>
                                    <IconButton aria-label="add to favorites">
                                        <BedIcon />
                                    </IconButton>
                                    <IconButton aria-label="share">
                                        <BathtubIcon />
                                    </IconButton>
                                    <IconButton aria-label="share">
                                        <DirectionsCarFilledOutlinedIcon />
                                    </IconButton>
                                    <IconButton aria-label="share">
                                        <SquareFootIcon />
                                    </IconButton>
                                </Typography>
                                <Typography component="div" style={{ width: "100%", height: "1px", background: "#E6E9EC", marginTop: "16px", marginBottom: "25px" }} />
                                <Typography component="div" style={{ display: "flex", justifyContent: "space-between" }}>
                                    <Typography style={{ display: "flex", justifyContent: "space-between", textAlign: "center" }}>$7,500/mo</Typography>
                                    <Typography>
                                        <FavoriteBorderIcon />
                                        <ShareIcon />
                                    </Typography>
                                </Typography>
                            </Card>
                            <Card sx={{ maxWidth: 360 }}>
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image="https://cdn.ostrovok.ru/t/x220/content/7d/79/7d798625fef2324fa14590fe607cc2cc04f0427e.jpeg"
                                    alt="Paella dish"
                                />
                                <CardHeader
                                    avatar={
                                        <Avatar sx={{ bgcolor: red[500], marginLeft: "250px", marginTop: "-35px" }} aria-label="recipe">
                                            R
                                        </Avatar>
                                    }
                                />
                                <CardContent>
                                    <Typography variant="p" style={{ fontSize: "25px" }}>New Apartment Nice Wiew </Typography>
                                    <Typography variant="p" style={{ fontSize: "17px" }}>
                                        Set aside off of the heat to let rest for 10 minutes, and then serve.
                                    </Typography>
                                </CardContent>
                                <Typography component="div" style={{ display: "flex", justifyContent: "space-around" }}>
                                    <IconButton aria-label="add to favorites">
                                        <BedIcon />
                                    </IconButton>
                                    <IconButton aria-label="share">
                                        <BathtubIcon />
                                    </IconButton>
                                    <IconButton aria-label="share">
                                        <DirectionsCarFilledOutlinedIcon />
                                    </IconButton>
                                    <IconButton aria-label="share">
                                        <SquareFootIcon />
                                    </IconButton>
                                </Typography>
                                <Typography component="div" style={{ width: "100%", height: "1px", background: "#E6E9EC", marginTop: "16px", marginBottom: "25px" }} />
                                <Typography component="div" style={{ display: "flex", justifyContent: "space-between" }}>
                                    <Typography style={{ display: "flex", justifyContent: "space-between", textAlign: "center" }}>$7,500/mo</Typography>
                                    <Typography>
                                        <FavoriteBorderIcon />
                                        <ShareIcon />
                                    </Typography>
                                </Typography>
                            </Card>
                        </Typography>
                    </Carousel.Item>
                </Carousel>
            </Grid>
        </Grid>
    );
}