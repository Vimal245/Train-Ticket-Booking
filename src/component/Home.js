import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import '../Styles/Home.css';
import imagee from '../Images/swap.png';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import Chip from '@mui/material/Chip';

export default function Home() {

  const handleClick = () => {
    console.info("You clicked the Chip.");
  };


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

    <div class="filter">
        <h4 style={{color:'#4caf50'}}>FILTERS</h4><hr />
        <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Quota</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio color="success" />} label="General" />
        <FormControlLabel value="male" control={<Radio color="success"  />} label="Takkal" />
        <FormControlLabel value="other" control={<Radio color="success" />} label="Ladies" />
      </RadioGroup>
    </FormControl><hr />
        <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Origin Station</FormLabel>
      <FormControlLabel control={<Checkbox color="success"  />} label="NZM" />
      <FormControlLabel control={<Checkbox color="success"  />} label="NDLS" />
      <FormControlLabel control={<Checkbox color="success"  />} label="DEC" />
    </FormControl><hr></hr>
        <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Destination Station</FormLabel>
      <FormControlLabel control={<Checkbox color="success"  />} label="MMCT" />
      <FormControlLabel control={<Checkbox color="success"  />} label="CSMT" />
      <FormControlLabel control={<Checkbox color="success"  />} label="PNVL" />
      <FormControlLabel control={<Checkbox color="success"  />} label="BDTS" />
    </FormControl>
      

    </div>
        <div id="time">
        <FormControl><br></br>
      <FormLabel id="demo-radio-buttons-group-label">Arrival Time</FormLabel>
      <Chip label="05:00 - 11:00" onClick={handleClick} /><br></br>
      <Chip label="11:00 - 17:00" onClick={handleClick} /><br></br>
      <Chip label="17:00 - 23:00" onClick={handleClick} /><br></br>
      <Chip label="23:00 - 05:00" onClick={handleClick} />
    </FormControl><hr></hr>
        <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Departure Time</FormLabel>
      <Chip label="05:00 - 11:00" onClick={handleClick}/><br></br>
      <Chip label="11:00 - 17:00" onClick={handleClick} /><br></br>
      <Chip label="17:00 - 23:00" onClick={handleClick} /><br></br>
      <Chip label="23:00 - 05:00" onClick={handleClick} /><br></br>
    </FormControl>
        </div>
    <div class="sort">
        <h5>Sort by:</h5>&nbsp;&nbsp;&nbsp;&nbsp;
        <Button id="b2"><b>Departure</b></Button>
        <Button id="b2"><b>Duration</b></Button>
        <Button id="b2"><b>Arrival</b></Button>
    </div>

    

    </div>
  )
}
