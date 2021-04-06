// import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Login.css';
import logo from "./logo1.png";
import axios from 'axios';
import {Component, state, changeHandler, submitLogin } from "react";

class Login extends Component{
    state = {
        username : "",
        password : "",
        chklogin : false
    }

    changeHandler =(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        }
           
        )
    }

    submitLogin = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:90/user/login", this.state)
        .then((response)=>{
            console.log(response);
            localStorage.setItem('token',response.data.token)
            localStorage.setItem('username',response.data.data)
            this.setState({
                chklogin : true
            })
        })        
        .catch((err)=>{
            console.log(err.response)
        })
    }
    render(){
        if(this.state.chklogin === true){
            //redirect to dashboard
            return <Redirect to ='/' />

        }

        return(
        <div className="login">
            <Link to ='/'>
            <img className="login_logo" src={logo} alt=""/>
            </Link>
            <div className ='login_container'>
                <h1>Login</h1>
                <form>
                    <h5>Username</h5>
                    <input type="text"  name="username" value={this.state.username} onChange={this.changeHandler}/>
                    <h5>Password</h5>
                    <input type="text" name ="password" value={this.state.password} onChange={this.changeHandler}/>

                    <button className='login_signIn' onClick={this.submitLogin}>Login</button>

                    

                </form>
                <Link to ='/register'>
                <button className='login_register'>Create your Account</button>
                </Link>
                
            </div>
        </div>
        
    )
}
}
export default Login