import React from 'react';
import "./Product.css";
import chajang from "./chajangNoodles.jpg"
import { useStateValue } from './StateProvider';

function Product({id,title,image,price,desc,rating}){
    const [{basket}, dispatch] = useStateValue();
    //dispatch is how we manipulate the data

    console.log("this is the basket >>>", basket)
    const addToBasket =() =>{
        // dispatch the item into the data layer
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                desc:desc,
                rating:rating
            }
        });
    };
    return(
        <div className="product"  style={{border:"1px solid black"}}>
            <div className="product_info">
                <p>{title}</p>
                <p className='product_price'>
                   <small>Price Rs </small>
                    <strong>{price}</strong>
                </p>
                <p>{desc}</p>
                <div className="product_rating">
                    {Array(rating).fill().map((_ , i) => (
                        <p>⭐</p>
                    ))}
                    
                    
                </div>
            </div>
            <img src={image} alt=""/>
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product;