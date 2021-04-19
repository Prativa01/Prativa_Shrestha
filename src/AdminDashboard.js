import React, { Component } from'react';
import axios from 'axios'
import './AdminDashboard.css';
import back from './back.jpg';
import {Link, link} from 'react-router-dom';
import Card from "react-bootstrap/Card";

class AdminDashboard extends Component{
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
           
                <div className="container-fluid">
                     <img className="dashboard_image" src={back} alt=""/>
                    <div className="row">
                                {
                                    
                        //item==single product mero
                        //map==For loop
                    
                        this.state.items.map((item)=>{
                            return(
                                
                                <div className="col-md-3">
                                    <Card className="dashboardCard shadow-lg" style={{width: '20.5rem', height:"650px",
                                    textAlign:'center', color:"black",  justifyContent:"center", display:"flex", flexDirection:"column", marginLeft:"40px", marginTop:"30px", border:"1px solid black"}}>
                                    <Card.Body >
                                    <img className="home_image" src={"http://localhost:90/"+ item.ProductImage}/>
                                        <Card.Text style={{marginTop:"70px"}}>Product Name :{item.ProductName}</Card.Text>
                                        <Card.Text>Product Price :{item.ProductPrice}</Card.Text>
                                        <Card.Text>Product Description: {item.ProductDesc}</Card.Text>
                                        <Card.Text>Product Available: {item.ProductAvailable}</Card.Text>
                                        <button onClick={this.DeleteProduct.bind(this,item._id)}>Delete</button>
                                        <Link to={"/productupdate/"+ item._id} style={{marginRight:"10px"}}>Update</Link>
                                    </Card.Body>
                                    </Card>
                                </div>


                            
                       
                
                    
                    )
                })
            }
                
                </div>
                </div>
            
        )
    }
}
export default AdminDashboard;