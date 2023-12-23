import React, { useState } from 'react';
import '../Styles/Signup.css';
import { Link } from 'react-router-dom';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


function Signup() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirm_password: '',
  });

  const [errors, setErrors] = useState({
    password: '',
    confirm_password: '',
  });


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


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Reset password and confirm_password validation errors when user types
    if (e.target.name === 'password' || e.target.name === 'confirm_password') {
      setErrors({
        ...errors,
        password: '',
        confirm_password: '',
      });
    }

    if (e.target.name === 'email') {
      setErrors({ ...errors, email: '' });
    }

  };

  const validatePassword = () => {
    // Simple password validation
    const minLength = 8;
    if (formData.password.length < minLength) {
      setErrors({
        ...errors,
        password: `Password must be at least ${minLength} characters long`,
      });
      return false;
    }
    return true;
  };

  const validateConfirmPassword = () => {
    // Check if confirm_password matches password
    if (formData.confirm_password !== formData.password) {
      setErrors({
        ...errors,
        confirm_password: 'Passwords do not match',
      });
      return false;
    }
    return true;
  };

  const validateEmail = (email) => {
    // Simple email validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate password and confirm_password before submission
    if (!validatePassword() || !validateConfirmPassword()) {
      return;
    }
    if (!validateEmail(formData.email)) {
      setErrors({ ...errors, email: 'Please enter a valid email address' });
      return;
    }

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

      <div class="hello">
        <div class="top">
          <header>
            <center><h3><i>Login</i></h3></center>
          </header>
        </div>
        <form class="form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <p style={{ color: 'red' }}>{errors.email}</p>

          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <p style={{ color: 'red' }}>{errors.password}</p>

          <label htmlFor="confirm_password">Confirm Password: </label>
          <input
            type="password"
            id="confirm_password"
            name="confirm_password"
            value={formData.confirm_password}
            onChange={handleChange}
            required
          />
          <p style={{ color: 'red' }}>{errors.confirm_password}</p>

          <center><h6>Don't have an Account? <Link to="/Signup">Signup</Link></h6></center>
          <button type="submit" onClick={handleClick}><Link to="/Home" style={{ textDecoration: 'none', color: 'white' }}>Submit Form</Link></button><br />
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Welcome back :)
        </Alert>
      </Snackbar>
        </form>
      </div>
    </div>
  );
}

export default Signup;
