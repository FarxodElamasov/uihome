import { Grid, Typography } from '@mui/material'

import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import SearchIcon from '@mui/icons-material/Search';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import HandshakeIcon from '@mui/icons-material/Handshake';
// import HolidayVillageOutlinedIcon from '@mui/icons-material/HolidayVillageOutlined';


export default function Header() {
  return (
    <>
      <Grid container
        direction="row"
        display="flex"
        justifyContent="center"
        paddingTop="10px">
        <Grid item xs={10}>
          <Typography style={{ display: "flex" }}>
            <Grid item xs={4}>
              <TextField id="outlined-basic" variant="outlined" placeholder='Enter an address, neighborhood, city, or ZIP code' style={{ borderColor: "white", width: "100%" }} />
            </Grid>
            <Grid item xs={2}>
              <Typography style={{ display: "flex", justifyContent: "center", textAlign: "end", alignitems: "end" }}>
                <Button variant="contained" style={{ display: "flex", marginLeft: "20px", alignItems: "center", color: "black", borderColor: "#E6E9EC", background: "white", padding: "12px 16px", borderRadius: "4px" }}><HandshakeIcon/>Status</Button>
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography style={{ display: "flex", justifyContent: "center", textAlign: "end", alignitems: "end" }}>
                <Button variant="contained" style={{ display: "flex", marginLeft: "20px", alignItems: "center", color: "black", borderColor: "#E6E9EC", background: "white", padding: "12px 16px", borderRadius: "4px" }}><LocalOfferIcon/>Price</Button>
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography style={{ display: "flex", justifyContent: "center", textAlign: "end", alignitems: "end" }}>
                <Button variant="contained" style={{ display: "flex", marginLeft: "20px", alignItems: "center", color: "black", borderColor: "#E6E9EC", background: "white", padding: "12px 16px", borderRadius: "4px" }}><TuneOutlinedIcon />Advanced</Button>
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography style={{ display: "flex", justifyContent: "center", textAlign: "end", alignitems: "end" }}>
                <Button variant="contained" style={{ padding: "13px 20px", color: "black", background: "#0061DF", borderRadius: "4px", marginBottom: "20px" }}><SearchIcon />Search</Button>
              </Typography>
            </Grid>
            
          </Typography>
        </Grid>
      </Grid>

      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://vsekottedzhi.com.ua/Media/images/typicalProjects/background/6fd427e69a56eabbb74ecb060330ffaf.jpg" class="d-block w-100%" alt="..." style={{width: "100%"}}/>
          </div>
          <div class="carousel-item">
            <img src="https://www.immatravel.it/wp-content/uploads/2021/04/Luxury.jpg" class="d-block w-100%" alt="..." style={{width: "100%"}}/>
          </div>
          <div class="carousel-item">
            <img src="https://vsekottedzhi.com.ua/Media/images/typicalProjects/background/b23a433d80718bc088f6b4b4a6e10d1e.jpeg" class="d-block w-100%" alt="..." style={{width: "100%"}}/>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>



    </>
  )
}


