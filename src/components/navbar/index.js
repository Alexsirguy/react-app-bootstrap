import React from 'react';
import {
    Link
  } from 'react-router-dom';
import './index.css';
import logo from "./../../logo.svg"
 
function Navbar() {
  return (
    <nav className="navbar navbar-inverse navbar-custom">
    <div className="container-fluid">
      <div className="navbar-header">
        <a className="navbar-brand">
          <img src={logo} style={{height:"50px", marginTop:"-12px"}}/>  
        </a>
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      </div>
      <div class="collapse navbar-collapse" id="myNavbar">
      <ul className="nav navbar-nav navbar-right">
        <li><Link to="/">LOGIN</Link></li>
        <li><Link to="/">REGISTER</Link> </li>
      </ul>
      </div>
    </div>
  </nav>  
  );
}

export default Navbar;
