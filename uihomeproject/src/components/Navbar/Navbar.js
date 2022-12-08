import React from 'react'
import { Grid, Typography } from '@mui/material';
// import Button from 'react-bootstrap/Button';
// import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import MapsHomeWorkOutlinedIcon from '@mui/icons-material/MapsHomeWorkOutlined';
import Button from '@mui/material/Button';


export default function Navbar() {
  return (
    <>
    <Typography style={{background: "#0D263B", color: "white", padding: "10px 0px"}}>
    <Grid container
        direction="row"
        justifyContent="center">
        <Grid item xs={10}>
          <Typography component="div" sx={{ display: "flex", alignItems: "center", color: "white" }} >
          <Grid item xs={2}>
            <Typography>
              <h1 style={{fontSize: "20px",display: 'flex', alignItems: "center"}}><MapsHomeWorkOutlinedIcon/>Houzing</h1>
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography style={{display: "flex", justifyContent: "center"}}>
              <h1 style={{fontSize: "20px",display: 'flex', justifyContent:"center", textAlign: "end", alignItems: "center"}}>Home</h1>
              <h1 style={{fontSize: "20px",display: 'flex', justifyContent:"center", textAlign: "end", alignItems: "center", paddingLeft:"20px"}}>Properties</h1>
              <h1 style={{fontSize: "20px",display: 'flex', justifyContent:"center", textAlign: "end", alignItems: "center", paddingLeft:"20px"}}>Contacts</h1>
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography style={{ display: "flex", justifyContent: "center", textAlign: "end", alignitems: "end"}}>
            <Button variant="outlined" style={{padding: "0px 20px",color: "white", borderColor: "white", borderRadius: "4px"}}>Login</Button>
            </Typography>
          </Grid>
          </Typography>
        </Grid>
      </Grid>
    </Typography>
    </>
  )
}

