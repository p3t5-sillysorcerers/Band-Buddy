import React from 'react';
import {Navbar, Nav} from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch, Redirect, withRouter, Link } from "react-router-dom";
import Profile from '../../pages/profile';
import ActiveUsers from '../../pages/activeUsers';
import Login from '../../pages/login';

class NavBar extends React.Component {

    render() {
        return (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/login">Band Buddy</Navbar.Brand>
    <Nav className="mr-auto">
      <Link to="profile">My Profile</Link>
      <Link to="activeusers">Active Users</Link>
    </Nav>
    <Navbar.Toggle />
  <Navbar.Collapse className="justify-content-end">
    <Navbar.Text>
      Signed in as: <a href="#login"> {this.props.name} </a>
    </Navbar.Text>
  </Navbar.Collapse>
    </Navbar>

        )
    }
}
// const NavBar = () => (
// <nav className="navbar navbar-inverse">
//   <div className="container-fluid">
//     <div className="navbar-header">
//       <img src="" id="navLogo"></img>
//       {/* <a className="navbar-brand" href="#">Band Buddy</a> */}
//     </div>
//     <ul className="nav navbar-nav">
//       <Link to="/"style={{color: "orange", height: "16px", padding: "25px"}}
//       >Home</Link>
//       {/* <br></br>
//       <Link to="/create">Create profile</Link> */}
//       {/* <br></br> */}
//       <Link to="/profile"style={{color: "orange", height: "16px", padding: "25px", paddingTop: "15px"}}
//       >My Profile</Link>
//             <Link to="/activeusers"style={{color: "orange", height: "16px", paddingLeft: "25px", paddingTop: "15px"}}
//       >Active Users</Link>
//     </ul>
//     <ul className="nav navbar-nav navbar-right">
//     <li><Link to="/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
//     </ul>
//   </div>
// </nav>
// );



export default NavBar;
