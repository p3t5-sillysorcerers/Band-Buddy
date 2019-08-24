import React from "react";
import { Navbar, InputGroup, Form, FormControl, Button, Container, Col, Row, Jumbotron } from "react-bootstrap"
import "./Login.css"

const loginStyle={
  color: 'white',
  backgroundColor: "#F55F00",
  borderColor: "#F55F00"

}
const heroText={
  color: '#F55F00',
  fontFamily: 'Righteous'
}

const subText={
  fontFamily: 'Righteous'
}


const Login = (props) => {
  return (
  
    <>
      <Navbar bg="dark">
        <Navbar.Brand className="mr-auto" href="#home">
          <img
            src="https://i.imgur.com/Psb5bVc.png"
            width="160"
            height="160"
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
          <Button type="submit" href="/profile" value="Log In" onClick={props.loginHandler} style={loginStyle} >Log In</Button>

        </Form>
      </Navbar>

      <Jumbotron>
        <Container>
          <Row>
            <Col sm={12}><h1 className="display-4" style ={heroText}>Band Buddy! Find music buds in your area!</h1></Col>
          </Row>
          <Row>
            <Col sm={12}>  <p className="lead alert-link" style={subText}>Create a profile, add your instrument, and jam.</p></Col>
          </Row>
          <Row>
            <Col sm={2}>
              <Button variant="outline-dark" href="/create" type="submit" value="Create Profile">Create Account</Button>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </>


  );
}
export default Login;


