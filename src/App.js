import React from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import {BrowserRouter as Router, Switch, Route}
from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Register from './Register';
import Payment from './Payment';
import AdminHeader from './AdminHeader';
import AdminDashboard from "./AdminDashboard";

import AddProduct from "./AddProduct";
import UpdateProduct from "./UpdateProduct";
import About from "./About";
import Details from "./Details";
import Profile from "./Profile";
import Order from "./Order";
import EditProfile from "./EditProfile";




function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path ="/login">
        <Header/>
          <Login/>
          
        </Route>

        <Route path ="/register">
        <Header/>
          <Register/>
        
        </Route>

          <Route path="/checkout">
          <Header/>
            <Checkout/>
        
          </Route>

          <Route path="/payment">
          <Header/>
            <Payment/>
         
          </Route>
          
          <Route path="/addproduct">
          <AdminHeader/>
            <AddProduct/>
            
          </Route>

          
          <Route path ="/productupdate/:id" component={UpdateProduct}/>

          
          
          <Route path ="/about">
            <Header/>
            <About/>
          </Route>

          <Route path ="/details">
            <AdminHeader/>
            <Details/>
          </Route>

          <Route path ="/profile">
            <Header/>
            <Profile/>
          </Route>
          <Route path ="/order">
            <Header/>
            <Order/>
          </Route>

          <Route path="/admin">
          <AdminHeader/>
          <AdminDashboard/>
          </Route>

          <Route path="/">
          <Header/>
            <Home/>
         
          </Route>
          
          
      </Switch>
      
    </div>
    </Router>
    
  );
}

export default App;
