import React, { Component } from'react';
import { NavItem } from 'react-bootstrap';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { useStateValue } from './StateProvider';
import {Link} from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from './reducer';

function Payment (){
   
    const [{basket, user}, dispatch] = useStateValue();
    return(
        <div className='payment'>
            <div className='payment_container'>

                <h1>
                    Checkout (<Link to ='/checkout'>{basket?.length}items</Link>)
                </h1>
                {/* delivery address */}
               {/* <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment_address'>
                        <p>{this.state.email}</p>
                        <p>{this.state.fullname}</p>
                        <p>{this.}</p>
                    </div>
               </div> */}

               {/* Review item */}
               <div className='payment_section'>
                   <div className='payment_title'>
                       <h3>Review item and delivery</h3>
                   </div>
                   <div className='payment_items'>
                       {basket.map(item => (
                        <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        />
                       ))}
                   </div>
               </div>

               {/* payment method */}
               <div className="payment_section">
                   <div className="payment_title">
                       <h3>Payment Method</h3>
                   </div>
                   <div className="payment details">
                        <h2>Cash on delivery</h2>
                        <div className='payment_priceContainer'>
                        <CurrencyFormat 
                            renderText={(value)=>(
                                <h3>Order Total: {value}</h3>
                                
                            )}
                            decimalScale={2}
                            value={getBasketTotal(basket)}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"Rs"}
                            />

                        </div>
                   </div>
               </div>

               
            </div>
        </div>
    )
                            
}
export default Payment;