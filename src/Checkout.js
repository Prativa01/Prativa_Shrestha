import React, { Component } from 'react';
import './Checkout.css';
import ecom from './ecom.jpg';
import Subtotal from './Subtotal';
import { StateContext, useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';

function Checkout(){
   
    const [{basket}, dispatch] = useStateValue();

    return(
        <div className="checkout">
          <div className="checkout_left">
              <img className="checkout_ad" src={ecom} alt=""/>
              

              <div>
                  
                  <h2 className="checkout_title">Your shopping Basket</h2>
                  {basket.map(item =>(
                      <CheckoutProduct
                      id={item.id}
                      title={item.title}
                      image ={item.image}
                      price ={item.price}
                      rating ={item.rating}
                      >
                          
                      </CheckoutProduct>
                  ))}

              </div>
          </div>
          <div className="checkout_right">
              <Subtotal/>
             
          </div>
        </div>
    )
}

export default Checkout;