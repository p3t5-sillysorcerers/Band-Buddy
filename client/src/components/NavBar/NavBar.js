import React from 'react';
import "./style.css"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const NavBar = () => (

<nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <img src="https://i.imgur.com/Psb5bVc.png" id="navLogo"></img>
      {/* <a className="navbar-brand" href="#">Band Buddy</a> */}
    </div>
    <ul class="nav navbar-nav">
      <Link to="/"style={{color: "orange", height: "16px", padding: "25px"}}
      >Home</Link>
      {/* <br></br>
      <Link to="/create">Create profile</Link> */}
      {/* <br></br> */}
      <Link to="/profile"style={{color: "orange", height: "16px", padding: "25px", paddingTop: "15px"}}
      >My Profile</Link>
            <Link to="/activeusers"style={{color: "orange", height: "16px", paddingLeft: "25px", paddingTop: "15px"}}
      >Active Users</Link>
    </ul>
    <ul className="nav navbar-nav navbar-right">
    <Link to="/"><li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li></Link>
    </ul>
  </div>
</nav>
);



export default NavBar;