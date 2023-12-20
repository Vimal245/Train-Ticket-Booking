import React from 'react'
import '../Styles/landinpage.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


export default function Landinpage() {
  return (
    <div>
      <div class="landnav">
    
    <a href="#news">Help</a>
    <a href="#contact">Contact us</a>
    <a href="#about">About</a>
    <a class="active" href="#home">Home</a>
    <div class="landnav1">
      <b>Train Ticket Booking System</b>
    </div>
  </div>

    <div class="headd">
        <h1>
            BOOK YOUR NEXT TRAIN TICKET !
        </h1>
        <h4>Explore new places by Simple & fast booking</h4>
    </div><br></br><br></br>

    <div class="putton">
    <Stack direction="row" spacing={2}>
      <Button variant="contained" color="success">
        <Link to="/login" style={{textDecoration: 'none', color:'white'}}>Login</Link>
      </Button>
      <Button variant="contained" color="success">
      <Link to="/Signup" style={{textDecoration: 'none', color:'white'}}>Signup</Link>
      </Button>
    </Stack>
    </div>
    

    </div>
  )
}
