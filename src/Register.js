import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Register.css';
import logo from "./logo1.png";
import axios from 'axios';

class Register extends Component{
    state={
        fullname:"",
        username:"",
        address:"",
        contact:"",
        email:"",
        password:"",
        chkregister : false
    }
    sendUserData =(e) =>{
        e.preventDefault()
        const data ={
            fullname :this.state.fullname,
            username :this.state.username,
            address :this.state.address,
            contact :this.state.contact,
            email :this.state.email,
            password :this.state.password
        }
        axios.post("http://localhost:90/user/register", data)
        .then(response=>{
            console.log(response)
        })
        .catch(error=>{
            console.log(console.error())
        })
    }
    render(){
        if(this.state.chkregister === true){
            //redirect to dashboard
            return <Redirect to ='/login' />

        }
    return(
        <div className="Register">
            <Link to ='/'>
            <img className="Register_logo" src={logo} alt=""/>
            </Link>
            <div className ='Register_container'>
                <h1>Register</h1>
                <form>
                    <h5 for ="fullname">Fullname</h5>
                    <input type="text" placeholder="Enter fullname" name="fullname" id="fullname" value={this.state.fullname} onChange={(event)=>{this.setState({fullname : event.target.value})}} required/>
                    <h5 for ="username">Username</h5>
                    <input type="text" placeholder="Enter username" name="username" id="username" value={this.state.username} onChange={(event)=>{this.setState({username : event.target.value})}} required/>
                    <h5 for="address">Address</h5>
                    <input type="text" placeholder="Enter Address" name="address" id="address" value={this.state.address} onChange={(event)=>{this.setState({address : event.target.value})}} required/>
                    <h5 for="context">Contact</h5>
                    <input type="text" placeholder="Enter Contact" name="contact" id="contact" value={this.state.contact} onChange={(event)=>{this.setState({contact : event.target.value})}} required/>
                    <h5 for="email">Email</h5>
                    <input type="text" placeholder="Enter Email" name="email" id="email" value={this.state.email} onChange={(event)=>{this.setState({email : event.target.value})}} required/>
                    <h5 for="password">Password</h5>
                    <input type="text" placeholder="Enter Password" name="password" id="password" value={this.state.password} onChange={(event)=>{this.setState({password : event.target.value})}} required/>

                    <button type="submit" className='Register_btn' onClick={this.sendUserData}>Register</button>

                    

                </form>
                
            </div>
        </div>
        
    )
}
}
export default Register;