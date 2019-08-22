import React from 'react';
import {Navbar, Nav} from "react-bootstrap";
import { BrowserRouter as Router , Link } from "react-router-dom";
import Logout from '../../logout';
// import Profile from '../../pages/profile';
// import ActiveUsers from '../../pages/activeUsers';
// import Login from '../../pages/login';

//install react route and get the link from it 


class NavBar extends React.Component {

    render() {
        return (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/login">
               <img
                src="https://i.imgur.com/Psb5bVc.png"
                width="160"
                height="160"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              /></Navbar.Brand>
    <Nav className="mr-auto">
      <Link to="profile" style= {{color: 'white'}}>My Profile&nbsp;&nbsp;</Link>
 
      <Link to="activeusers" style= {{color: 'white'}}> Active Users</Link>
    </Nav>
    <Navbar.Toggle />
  <Navbar.Collapse className="justify-content-end">
    <Navbar.Text>
      <Logout></Logout>
    </Navbar.Text>
  </Navbar.Collapse>
    </Navbar>

        )
    }
}

export default NavBar;
