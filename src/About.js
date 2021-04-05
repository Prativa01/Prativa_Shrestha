
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                    </p>
                    <ul>
                    <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                    <li><i className="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                    <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                    </ul>
                    <p>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
                    </p>
                </div>
                </div>
                </div>
         </div>   
  
                 
</div>
      
    )
        }
}
export default About;
