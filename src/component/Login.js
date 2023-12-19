import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Login.css';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Login()
{
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
    return(
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

  <div class="hello">

    <div class="top">
      <header>
        <centre><h3><i>Signup</i></h3></centre>
      </header>
    </div>
    <form class="form" >
      <label For="fname">First name: </label>
      <input type="text" id="fname" name="fname" required /><br />

      <label For="lname">Last name: </label>
      <input type="text" id="lname" name="lname" required /><br />

      <label For="phno">Phone number: </label>
      <input type="tel" id="phno" name="phno" required /><br />

      <label For="email">Email: </label>
      <input type="email" id="email" name="email" required />
      <centre><h6>Already have an Account? <Link to="/">Login</Link></h6></centre>
      <button type="submit"><Link to="/Home" onClick={handleClick} style={{textDecoration: 'none', color:'white'}}>Submit Form</Link></button><br />
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Signed up successfully!
        </Alert>
      </Snackbar>
    </form>
  </div>
        </div>
    )
}

export default Login;