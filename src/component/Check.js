import React from 'react';
import '../Styles/Check.css';
import { Helmet } from 'react-helmet';
import reliability from '../Images/reliability.png';
import station from '../Images/train.png';

export default function Check() {
  return (
    <div>
      <Helmet>
        <link
          rel="icon"
          type="image/x-icon"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          sizes="16x16 32x32"
        />
      </Helmet>
      <div class="landnav">
    
    <a href="#news">Help</a>
    <a href="#contact">Contact us</a>
    <a href="#about">About</a>
    <a class="active" href="#home">Home</a>
    <div class="landnav1">
      <b>Train Ticket Booking System</b>
    </div>
  </div>



  <section id="detailssetion">
        
        <div class="leftdiv">
            <div class="checkCovid">
              
                    <div class="crossIcon">
                        <img src={station} style={{height:'60px',marginTop:'10px'}}></img>
                    </div>
                    <div class="textcheck">
                        <h2>Coimbatore -> Chennai</h2>
                        <p>Review your Ticket</p>
                    </div>

            </div>     
              <section class="stayFlaxible">
                    <div class="stayflaxibleclass">
                        <div class="stayHomeimage">
                            <img src={reliability} style={{height:'80px',marginRight:'600px'}}></img>
                        </div>
                        <div class="stayHometext">
                        <h3>Stay flexible with no change fees</h3>
                        <p>We recommend booking a train with no change fees in case your plans change.</p>
                        <a href="#"><span>Change train</span></a>
                        </div>
                    </div>
              </section> 
               
              <section class="plansection">
                  <div class="sorceTodes">
                    
                     <div class="flitTime">
                        <h4><b></b></h4>
                        <p></p>
                        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    </div>
                     <br/><br/><br/>
                    <section class="Estimatedclass">                     
                    </section>
                    <div class="lastDiv">
                      <center><span>Tell Us how  we can improve our site </span></center>
                    </div>
                   
                  </div>

              </section>
        </div>
        <div class="rightdiv">
            <div class="checkout">
              <h1>Price Summay</h1>
              <label for="">Select no. of passengers</label>
              <select name="" id="passengerNum" onchange="numOfPass()">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            

            </div>
            <hr/>
            <div class="checkout2">
            <div class="button"> 
              <p></p>
              <table class="table2">
                <tr>
                  <td><h2>Trip Total</h2></td>
                  <td></td>
                  <td><h2 id="finalPrice">₹ 350</h2></td>
                </tr>
              </table>
              <p id="text">Rates are quoted in Indian rupees</p>
           <a href="paymentpage.html"> <button id="checkoutBtn">check out</button></a>
      
            </div>
            </div>
        </div>
     
      </section>
    </div>
  )
}

