import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import '../Styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2 style={{color:"#4caf50"}}>About Us</h2>
          <p>
          Welcome to our website, your go-to destination for hassle-free train ticket bookings! Our mission is to simplify your travel experience by providing a seamless and efficient platform to book train tickets with ease.
          </p>
        </div>
        <div className="footer-section contact">
          <h2 style={{color:"#4caf50"}}>Contact Us</h2>
          <p>Email: traintickett.com</p>
          <p>Phone: 9629105552</p>
        </div>
        <div className="footer-section social">
          <h2 style={{color:"#4caf50"}}>Follow Us</h2>
          <div className="social-icons">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Our Online Train Ticket Booking System. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;