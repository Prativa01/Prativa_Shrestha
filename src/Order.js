import { Component } from "react";
import './About.css';

class Order extends Component{
    render(){
        return(
            <div class="container">  
            
            <form id="contact" action="" method="post" style={{marginRight:"350px"}}>
                <h3> Contact</h3>
                <h4>Contact Us!!!</h4>
                <fieldset>
                <input placeholder="Enter your name" type="text" tabindex="1" required autofocus/>
                </fieldset>
                <fieldset>
                <input placeholder="Enter your email" type="email" tabindex="2" required/>
                </fieldset>
                <fieldset>
                <input placeholder="Location" type="text" tabindex="3" required/>
                </fieldset>
                <fieldset>
                <input placeholder="Enter your number" type="tel" tabindex="4" required/>
                </fieldset>
                <fieldset>
                <textarea placeholder="Type your Message Here...." tabindex="5" required></textarea>
                </fieldset>
                <fieldset>
                <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
                </fieldset>
            </form>


            </div>
        )
    }
}
export default Order;