import React from 'react';
import '../Styles/Signup.css';
import { Link } from 'react-router-dom';


function Signup()
{
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
        <centre><h3><i>Login</i></h3></centre>
      </header>
    </div>
    <form class="form" >
      <label For="email">Email: </label>
      <input type="email" id="email" name="email" required />

      <label For="password">Password: </label>
      <input type="password" id="password" required />

      <label For="confirmpassword">Confirm Password: </label>
      <input type="password" id="confirm_password" required />

      <h6>Don't have an Account? <Link to="/Signup">Signup</Link></h6>
      <button type="submit">Submit Form</button><br />
    </form>
  </div>
  </div>

    )
}

export default Signup;