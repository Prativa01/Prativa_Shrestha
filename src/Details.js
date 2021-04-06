import { Component } from "react";
import axios from 'axios';
import './Details.css'
class Details extends Component{
    state={
       
        details:[]
    }
 
    //to get data automatically from database without any click event
    componentDidMount(){
        axios.get("http://localhost:90/cart/all")
        .then((response)=>{
            console.log(response)
                this.setState({
                    details:response.data.data
                })

        })
        .catch((err)=>{
            console.log(err.response)
        })
    }
    componentDidMount(){
        axios.get("http://localhost:90/show_consumer")
        .then((consumerdata)=>{
            console.log(consumerdata)
                this.setState({
                    details:consumerdata.data
                
                })
                console.log(this.state.data)
        })
        .catch((err)=>{
            console.log(err.consumerdata)
        })
    }
    render(){
        return(
            <div className="Details">
                {/* <div className="cart_container">
                    <h3 className="font">Cart Details</h3>
                     <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0" style={{marginLeft:"50px"}}>
                            <thead style={{fontSize:"20px",fontWeight:"200"}}>
                                <tr>
                                    <th>ProductName</th>
                                    <th>ProductPrice</th>
                                    <th>ProductAvailable</th>
                                    <th>username</th>
                                </tr>
                            </thead>
                            
                                                    
                        <tbody>
                                                        
                        {
                            this.state.details.map((data)=>{
                                return(
                                        <tr style={{color:"black"}}>
                                            <td>{data.ProductName}</td>
                                            <td>{data.ProductPrice}</td>
                                            <td>{data.ProductAvailable}</td>
                                            <td>{data.username}</td>
                                                            
                                        </tr>
                                )
                                                     
                            })
                          
                        }
                        </tbody>
                    </table>
                </div> */}
                                                
                                                
                                                
                <div className="consumer-container">
                    <div className="row">
                        <h3 className="font">Consumer Details</h3>
                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0" style={{marginLeft:"20px"}}>
                            <thead style={{fontSize:"20px",fontWeight:"200", }}>
                                <tr>
                                    <th >Fullname</th>
                                        <th>Username</th>
                                        <th>Address</th>
                                        <th>Contact</th>
                                        <th>Email</th>
                                        </tr>
                            </thead>
                                                    
                         <tbody>
                                                        
                        {
                            this.state.details.map((consumer)=>{
                                return(
                                    <tr>
                                        <td>{consumer.fullname}</td>
                                        <td>{consumer.username}</td>
                                        <td>{consumer.address}</td>
                                        <td>{consumer.contact}</td>
                                        <td>{consumer.email}</td>
                                                            
                                    </tr>
                                )
                                                     
                            })
                          
                        }
                        </tbody>
                        </table>
                    </div>
                </div>

            </div>
                                            
        )
    }
}
export default Details;