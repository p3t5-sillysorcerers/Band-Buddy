import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
// import Bootstrap from "react-bootstrap";
// import NavBar from "../components/NavBar/NavBar";
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
          <Button
            block
            buttonSize="large"
            style={{backgroundColor:"#222222"}}
            onClick={(event) => this.handleClick(event)}
            type="submit"
          >
            Login
          </Button>
          <Button
            block
            buttonSize="large"
            style={{backgroundColor:"#222222"}}
            onClick={(event) => this.handleClick(event)}
            type="submit"
          >
            Create Profile
          </Button>
          {/* <a href = >/a> */}
        </Form>
      </div>
      </div>
      // <div class="container col-4"></div>
      
    );
  }
}

// class Login extends Component {

//     render() {

//         return (
            
//             <div className="App">
//                 <div className="App-header">
//                     {/* <img src={logo} className="App-logo" alt="logo" /> */}
//                     <h2>This is going to be the login page</h2>
//                 </div>
//                 <p className="App-intro">
//                     To get started, edit <code>src/App.js</code> and save to reload.
//                 </p>
//             </div>
//         );
//     }
// }

// export default Login;