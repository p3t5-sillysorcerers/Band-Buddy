import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Login.css"

const Login = (props) => {
    return (
      // <div class="container col-4"></div>
      // <Image source={require('../images/cassette.jpg')} style={styles.container}>

        <div className="container login">
          <div className="Login">
            Username
              
                <input
                  type="email"
                  name="username"
                  value={props.username}
                  onChange={props.handleInput}
                />
                Password
          
                <input
                  value={props.password}
                  name="password"
                  onChange={props.handleInput}
                  type="password"
                />
                <input className="btn-lg btn-primary" type="submit" value="Log In" onClick={props.loginHandler}/>  
                <input className="btn-lg btn-primary" type="submit" value="Create Profile" onClick={props.loginHandler}/>         </div>
        </div>
  


    );
  }
export default Login;
