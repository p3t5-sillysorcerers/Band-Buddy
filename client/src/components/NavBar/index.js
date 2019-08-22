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
    <Navbar.Brand href="/login">Band Buddy</Navbar.Brand>
    <Nav className="mr-auto">
      <Link to="profile" style= {{justifyContent: 'space-between'}}>My Profile&nbsp;&nbsp;</Link>
 
      <Link to="activeusers" style= {{justifyContent: 'space-between'}}> Active Users</Link>
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
// const NavBar = () => (
// <nav className="navbar navbar-inverse">
//   <div className="container-fluid">
//     <div className="navbar-header">
//       <img src="" id="navLogo"></img>
//       {/* <a className="navbar-brand" href="#">Band Buddy</a> */}
//     </div>
//     <ul className="nav navbar-nav">
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
