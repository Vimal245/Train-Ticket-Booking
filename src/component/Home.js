import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import '../Styles/Home.css';
import imagee from '../Images/swap.png'

export default function Home() {
  return (
    <div>
        <div class="topnav">
    
    <a href="#news">Help</a>
    <a href="#contact">Contact us</a>
    <a href="#about">About</a>
    <a class="active" href="#home">Home</a>
    <div class="topnav1">
      <b>Train Ticket Booking System</b>
    </div>
    </div>
    <div class="hello1">
        <img src='https://www.confirmtkt.com/img/icons/ic-search-from-desktop.svg'></img>
        <TextField
          From
          id="outlined-error"
          label="From"
          defaultValue="Coimbatore"
        />
        <img id="img1" src={imagee}></img>
        <img src="https://www.confirmtkt.com/img/icons/ic-search-to-desktop.svg"></img>
        <TextField
          To
          id="outlined-error"
          label="To"
          defaultValue="Chennai"
        />
        <img src="https://www.confirmtkt.com/img/icons/ic-search-calender-desktop.svg"></img>
        <TextField
          To
          id="outlined-error"
          label="Date"
          defaultValue="21 Dec 2023"
        />
        <Button id="b1" variant="contained">Search</Button>
    </div>
    </div>
  )
}
