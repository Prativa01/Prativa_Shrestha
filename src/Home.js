import React, { Component } from 'react';
import './Home.css';
import back from './back.jpg';
import Product from './Product';
import chajang from "./ramen.jpg";
import axios from 'axios';


import {Link, link} from 'react-router-dom';
import Card from "react-bootstrap/Card";



class Home extends Component{
    state={
        items:[]
    }
    //page load huni bitikai load huni function
    componentDidMount(){
        axios.get('http://localhost:90/product/all')
        .then((alldata)=>{
            console.log(alldata)
            this.setState({
                items:alldata.data.data
            })
        })
        .catch((err)=>{
            console.log(err.response)
        })
    }

    //function for deleting
    DeleteProduct=(ProductId)=>{
    axios.delete("http://localhost:90/product/delete/"+ ProductId)
    .then((response)=>{
        alert(response.data.message)
        window.location.reload(true);
    })
    .catch((error)=>{
        console.log(error.response)
    })
    }
  
    render(){
    return(
        <div className='home'>
            <div className="home_container" >
            <img className="home_image" src={back} alt=""/>
            {
                 this.state.items.map((item)=>{
                    return(
                        <Product 
             
                    title={item.ProductName} 
                    price={item.ProductPrice}
                     image={"http://localhost:90/"+ item.ProductImage}
                     desc={item.ProductDesc}
                     rating={item.ProductAvailable}/>
                     
                    )

            
                    
  
            }
                            
                
                                   
                
            
                 )}

        
        </div>
        </div>
          

          
       
    )
}
}
export default Home;