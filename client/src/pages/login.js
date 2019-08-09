import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
// import Bootstrap from "react-bootstrap";
// import NavBar from "../components/NavBar/NavBar";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Login.css"

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleInputChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);

  }

  render() {
    return (
      // <div class="container col-4"></div>
      <div class="container login">
      <div className="Login">Username
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="email" bsSize="large">
            <Form.Control
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </Form.Group>Password
          <Form.Group controlId="password" bsSize="large">
            <Form.Control
              value={this.state.password}
              onChange={this.handleInputChange}
              type="password"
            />
          </Form.Group>
          {/* <Button
            block
            buttonSize="large"
            style={{backgroundColor:"#222222"}}
            onClick={(event) => this.handleSubmit(event)}
            type="submit"
          >
            Login
          </Button> */}
          {/* <Button
            block
            buttonSize="large"
            style={{backgroundColor:"#222222"}}
            onClick={(event) => this.handleSubmit(event)} {...<a href = '/data'></a>}
            type="submit"
          >
            Create Profile
          </Button> */}

            <Link to="/profile"
            style={{backgroundColor:"#222222", color: "white", height: "16px", padding: "10px"}}>Login</Link>
            <br></br>
            <br></br>
            <Link to="/create"
            style={{backgroundColor:"#222222", color: "white", height: "16px", padding: "10px"}}>Create profile</Link>
    
        </Form>
      </div>
      </div>

      
    );
  }
}
