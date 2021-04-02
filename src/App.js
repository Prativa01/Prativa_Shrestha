
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

function App() {
  return (
    <Router>
    <div className="App">
    <Header/>
      <Switch>
        <Route path ="/login">
          <Login/>
        </Route>

        <Route path ="/register">
          <Register/>
        </Route>

          <Route path="/checkout">
            <Checkout/>
          </Route>

          <Route path="/payment">
            <Payment/>
          </Route>

          <Route path="/">
        
            <Home/>
          </Route>
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
