import React from 'react';
import './Signup.css';
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
      <input type="password" id="password" name="password" required />

      <h6>Already have an Account? <a href="#">Signup</a></h6>
      <button type="submit">Submit Form</button><br />
    </form>
  </div>
  </div>

    )
}

export default Signup;