import React, { Component } from'react';
import axios from 'axios'
import './AdminDashboard.css';
import frozen from './frozen.jpg';
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
                     <img className="dashboard_image" src={frozen} alt=""/>
                    <div className="row">
                                {
                                    
                        //item==single product mero
                        //map==For loop
                    
                        this.state.items.map((item)=>{
                            return(
                                
                                <div className="col-md-3">
                                    <Card className="dashboardCard shadow-lg" style={{width: '20rem',
                                    textAlign:'center', color:"#fff", background: "#0f2f45", justifyContent:"center", display:"flex", flexDirection:"column", marginLeft:"50px"}}>
                                    <Card.Body>
                                    <img className="home_image" src={"http://localhost:90/"+ item.ProductImage}/>
                                        <Card.Text >Product Name :{item.ProductName}</Card.Text>
                                        <Card.Text>Product Price :{item.ProductPrice}</Card.Text>
                                        <Card.Text>Product Description: {item.ProductDesc}</Card.Text>
                                        <Card.Text>Product Available: {item.ProductAvailable}</Card.Text>
                                        <button onClick={this.DeleteProduct.bind(this,item._id)}>Delete</button>
                                        <Link to={"/productupdate/"+ item._id} style={{marginRight:"10px"}}>Update</Link>
                                    </Card.Body>
                                    </Card>
                                </div>


                            
                            // <div className="">
                            //     <div className="dashboard col-md-3">
                            //         <div className="dashboard_info">
                                            
                            //                     <p ><img className="home_image" src={"http://localhost:90/"+ item.ProductImage}/></p>
                            //                     <p>Product Name :{item.ProductName}</p>
                            //                     <p className='dashboard_price'>
                            //                     <p>Product Price :{item.ProductPrice}</p>
                            //                     </p>
                            //                     <p>Product Description :{item.ProductDesc}</p>
                            //                     <p>Product Available :{item.ProductAvailable}</p>
                                    
                            //             {/* <button>Update</button>
                            //             <button>Delete</button> */}
                            //             <p><button onClick={this.DeleteProduct.bind(this,item._id)}>Delete</button></p>
                            //             <p><Link to ={"/productupdate/"+ item._id}>Update</Link></p>
                            //         </div>
                            //     </div>
                            // </div>
                
                    
                    )
                })
            }
                
                </div>
                </div>
            
        )
    }
}
export default AdminDashboard;