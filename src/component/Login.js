import React, { useState } from 'react';
import { Link } from 'react-router-dom';


import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


import '../Styles/Login.css';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


const Login = () => {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    phno: '',
    email: '',
  });

  const [errors, setErrors] = useState({ email: '' });

  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };



  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Reset email validation error when user types
    if (e.target.name === 'email') {
      setErrors({ ...errors, email: '' });
    }
  };

  const validateEmail = (email) => {
    // Simple email validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email before submission
    if (!validateEmail(formData.email)) {
      setErrors({ ...errors, email: 'Please enter a valid email address' });
      return;
    }

    setOpen(true);

    // console.log('Form data submitted:', formData);
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

      <div className="hello">
        <div className="top">
          <header>
            <center><h3><i>Signup</i></h3></center>
          </header>
        </div>
        <form className="form">
          <label htmlFor="fname">First name:</label>
          <input
            type="text"
            id="fname"
            name="fname"
            value={formData.fname}
            onChange={handleChange}
            required
          /><br />

          <label htmlFor="lname">Last name:</label>
          <input
            type="text"
            id="lname"
            name="lname"
            value={formData.lname}
            onChange={handleChange}
            required
          /><br />

          <label htmlFor="phno">Phone number:</label>
          <input
            type="tel"
            id="phno"
            name="phno"
            value={formData.phno}
            onChange={handleChange}
            required
          /><br />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <p style={{ color: 'red' }}>{errors.email}</p>

          <center><h6>Already have an Account? <Link to="/login">Login</Link></h6></center>

          <button type="submit" onClick={handleSubmit}><Link to="/Home" style={{ textDecoration: 'none', color: 'white' }}>Submit Form</Link></button><br />
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Welcome {formData.fname} {formData.lname}
        </Alert>
      </Snackbar>
        </form>
      </div>
    </div>
  );
};

export default Login;