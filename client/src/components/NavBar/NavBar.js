import React from 'react';
import "./style.css"

const NavBar = () => (

<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <img src="https://i.imgur.com/Psb5bVc.png"></img>
      {/* <a class="navbar-brand" href="#">Band Buddy</a> */}
    </div>
    <ul class="nav navbar-nav">
      <li><a href="#">Home</a></li>
      <li><a href="#">Profile</a></li>
      <li><a href="#">Search</a></li>
    </ul>
    <ul class="nav navbar-nav navbar-right">
      <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
    </ul>
  </div>
</nav>
);



export default NavBar;