import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Login.css';
function Login()
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
      <button type="submit">Submit Form</button><br />
    </form>
  </div>
        </div>
    )
}

export default Login;