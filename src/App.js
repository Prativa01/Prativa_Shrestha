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
import Dashboard from './Admin/Dashboard';
import AdminHeader from './Admin/AdminHeader';

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

          <Route path="/">
          <Header/>
            <Home/>
          </Route>
          <Route path="/admin">
          <AdminHeader/>
            <Dashboard/>
          </Route>
      </Switch>
      
    </div>
    </Router>
    
  );
}

export default App;
