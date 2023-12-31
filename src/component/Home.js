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

// import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import Footer from './Footer';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});



export default function Home() {

  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>
        <div class="topnav">
    
    <a href="#news" onClick={handleClickOpen}>Wallet</a>
    <a href="#contact">Trips</a>
    <a href="#about">Support</a>
    <a class="active" href="#home">Home</a>
    <div class="topnav1">
      <b>Train Ticket Booking System</b>
    </div>
    </div>

    <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"No cash in Wallet"}</DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-slide-description"
            style={{ color: "red" }}
          >
            ₹ 0
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} style={{color:'#4caf50'}}>Add Cash</Button>
          <Button onClick={handleClose} style={{color:'#4caf50'}}>Cancel</Button>
        </DialogActions>
      </Dialog>

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
    </div><br></br>
    <div class="v13_35">
        <div class="v13_2"></div><span class="v13_3">12507 - ARONAI EXPRESS</span><span class="v13_4">01:35 CBE --07h
            35m-- 09:10 PER</span>
        <div class="v13_16"><a href="#"></a>
            <div class="v13_5"></div><span class="v13_12">SL</span><span class="v13_13">₹ 325</span><span
                class="v13_14">PQWL91/WL83</span><span class="v13_15">Available</span>
        </div>
        <div class="v13_17">
            <div class="v13_18"></div><span class="v13_19">3A</span><span class="v13_20">₹ 835</span><span
                class="v13_21">PQWL55/WL44</span><span class="v13_22">81% Chance</span>
        </div>
        <div class="v13_23">
            <div class="v13_24"></div><span class="v13_25">2A</span><span class="v13_26">₹ 1170</span><span
                class="v13_27">PQWL9/WL7</span><span class="v13_28">86% Chance</span>
        </div>
        <div class="v13_29">
            <div class="v13_30"></div><span class="v13_31">1A</span><span class="v13_32">₹ 2060</span><span
                class="v13_33">PQWL78/WL2</span><span class="v13_34">65% Chance</span>
        </div>
    </div>
    <div class="section_2">
        <div class="v13_2"></div><span class="v13_3">12680 - MAS INTERCITY</span><span class="v13_4">06:20 CBE --07h
            30m-- 13:50 MAS</span>
        <div class="v13_16">
            <div class="v13_5"></div><span class="v13_12">SL</span><span class="v13_13">₹ 325</span><span
                class="v13_14">ABWL51/WL83</span><span class="v13_15">Available</span>
        </div>
        <div class="v13_17">
            <div class="v13_18"></div><span class="v13_19">3A</span><span class="v13_20">₹ 835</span><span
                class="v13_21">ABWL54/WL39</span><span class="v13_22">86% Chance</span>
        </div>
        <div class="v13_23">
            <div class="v13_24"></div><span class="v13_25">2A</span><span class="v13_26">₹ 1170</span><span
                class="v13_27">ABWL1/WL3</span><span class="v13_28">69% Chance</span>
        </div>
        <div class="v13_29">
            <div class="v13_30"></div><span class="v13_31">1A</span><span class="v13_32">₹ 2060</span><span
                class="v13_33">ABWL69/WL54</span><span class="v13_34">81% Chance</span>
        </div>
    </div>
    <Footer></Footer>
    </div>
  )
}
