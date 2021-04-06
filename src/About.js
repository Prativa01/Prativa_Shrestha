import React, { Component } from'react';
import frozen from './frozen.jpg';
import './About.css';

class About extends Component{
    render(){
    return (
        <div className="ac">
        <div className="about">
         <div className="container" data-aos="fade-up">

                <div className="row">
                    <h3 className="us">About Us</h3>
                <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
                    <img src={frozen} className="img-fluid" alt=""/>
                </div>
                <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right" data-aos-delay="100" >
                    <h3>Foodmart</h3>
                    <p className="fst-italic">
                    Foodmart Supermarket stands out as one of the most valuable brands in Nepalese supermarket industry in a very short span since its inception. 
                    The first store was launched on 10th July, 2009 in the finest mall of the country - City Centre Mall, Kamalpokhari, Kathmandu, covering an area of 11,000 sq ft. It has been recognized for its innovation in introducing super marketing to the Nepalese market with a very different and organized approach.

                    </p>
                    <ul>
                    <li><i className="ri-check-double-line"></i> Bigmart Supermarket has all the materials including groceries and vegetables for the people to shop at one place.</li>
                    <li><i className="ri-check-double-line"></i> It stands out as being the first in Nepal to provide the VALUE & SAVINGS concept to its shoppers</li>
                  
                    </ul>
                    {/* <p>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
                    </p> */}
                </div>
                </div>
                </div>
         </div>   

            <div class="container">  
                <form id="contact" action="" method="post" style={{marginRight:"350px"}}>
                    <h3>Quick Contact</h3>
                    <h4>Contact us today, and get reply with in 24 hours!</h4>
                    <fieldset>
                    <input placeholder="Your name" type="text" tabindex="1" required autofocus/>
                    </fieldset>
                    <fieldset>
                    <input placeholder="Your Email Address" type="email" tabindex="2" required/>
                    </fieldset>
                    <fieldset>
                    <input placeholder="Your Phone Number" type="tel" tabindex="3" required/>
                    </fieldset>
                    <fieldset>
                    <input placeholder="Your Web Site starts with http://" type="url" tabindex="4" required/>
                    </fieldset>
                    <fieldset>
                    <textarea placeholder="Type your Message Here...." tabindex="5" required></textarea>
                    </fieldset>
                    <fieldset>
                    <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
                    </fieldset>
                </form>
    
    
                </div>
                 
</div>
      
    )
        }
}
export default About;
