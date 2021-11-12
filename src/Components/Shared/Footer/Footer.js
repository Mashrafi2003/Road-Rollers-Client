import { Box } from '@mui/system';
import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
<Box sx={{marginTop:'30px'}}>
<div>
             <div className='footer'>
            <footer>
      <div class="main-content">
        <div class="left box">
          <h2>About us</h2>
          <div class="content">
            <p>We ensure that all properties listed with us are verified thoroughly before taking live, so that you can revel in a good ambience.</p>
            <div class="social">
              <a href="https://facebook.com/coding.np"><span class="fab fa-facebook-f"></span></a>
              <a href="#"><span class="fab fa-twitter"></span></a>
              <a href="https://instagram.com/coding.np"><span class="fab fa-instagram"></span></a>
              <a href="https://youtube.com/c/codingnepal"><span class="fab fa-youtube"></span></a>
            </div>
          </div>
        </div>
        <div class="center box">
          <h2>Address</h2>
          <div class="content">
            <div class="place">
              <span class="fas fa-map-marker-alt"></span>
              <span class="text">Dhaka, Bangladesh</span>
            </div>
            <div class="phone">
              <span class="fas fa-phone-alt"></span>
              <span class="text">+089-765432100</span>
            </div>
            <div class="email">
              <span class="fas fa-envelope"></span>
              <span class="text">abc@example.com</span>
            </div>
          </div>
        </div>
        <div class="right box">
          <h2>Contact us</h2>
          <div class="content">
            <form action="#">
              <div class="email">
                <div class="text">Email *</div>
                <input type="email" required/>
              </div>
              <div class="msg">
                <div class="text">Message *</div>
                
              </div>
              <div class="btn">
                <button type="submit">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="bottom">
        <center>
          <span class="credit">Website By <a href="https://www.codingnepalweb.com">Travel Guru</a> | </span>
          <span class="far fa-copyright"></span><span> 2021 All rights reserved.</span>
        </center>
      </div>
    </footer>
        </div>
        </div>
        </Box>
    );
};

export default Footer;