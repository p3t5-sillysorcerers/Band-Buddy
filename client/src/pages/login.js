import React, { Component } from "react";
import NavBarHome from '../components/NavBarHome';
import {Navbar, InputGroup, Form, FormControl, Button, Container, Col, Row, Jumbotron} from "react-bootstrap"

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./Login.css"

const Login = (props) => {
    return (
      // <div class="container col-4"></div>
      // <Image source={require('../images/cassette.jpg')} style={styles.container}>
<>

<Navbar bg="dark">
<Navbar.Brand className="mr-auto" href="#home">
  <img
    src="https://i.imgur.com/Psb5bVc.png"
    width="30"
    height="30"
    className="d-inline-block align-top"
    alt="React Bootstrap logo"
  />
  </Navbar.Brand>

  <Form inline>
    <InputGroup>
      <FormControl 
      className=" mr-sm-2"
        placeholder="Username"
        type="email"
        name="username"
        value={props.username}
        onChange={props.handleInput}
      />
    </InputGroup>
  <InputGroup>
      <InputGroup.Prepend>
      </InputGroup.Prepend>
      <FormControl 
      className="mr-sm-2"
        placeholder="Password"
        value={props.password}
                  name="password"
                  onChange={props.handleInput}
                  type="password"
      />
    </InputGroup>
    <Button type="submit" href="/profiles"value="Log In" onClick={props.loginHandler} >Log In</Button>
    
  </Form>
</Navbar>



<Jumbotron>
<Container>
  <Row>
    <Col sm={12}><h1 class="display-4">Band Buddy! Find music buds in your area!</h1></Col>
  </Row>
  <Row>
    <Col sm={12}>  <p class="lead">Create a profile, add your instrument, and hook up with musicians in your neighborhood.</p></Col>
  </Row>
  <Row>
  <Col sm ={2}> 
  <Button variant="outline-primary" href="/create" type="submit" value="Create Profile">Create Account</Button>
  </Col>
  </Row>
</Container>
</Jumbotron>
  </>


    );
  }
export default Login;


