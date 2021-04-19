import React, { Component } from'react';
import home from './home.jpg';
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
                    <img src={home} className="img-fluid" alt=""/>
                </div>
                <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right" data-aos-delay="100" >
                    <h3>Electronic Store</h3>
                    <p className="fst-italic">
                   This electronic shop was started in 2000 A.D. Here we sell different types of electronic goods.

                    </p>
                    <ul>
                    <li><i className="ri-check-double-line"></i> Bigmart Supermarket has all the materials including groceries and vegetables for the people to shop at one place.</li>
                    <li><i className="ri-check-double-line"></i> It stands out as being the first in Nepal to provide the VALUE & SAVINGS concept to its shoppers</li>
                  
                    </ul>
                 
                </div>
                </div>
                </div>
         </div>   

                 
</div>
      
    )
        }
}
export default About;
