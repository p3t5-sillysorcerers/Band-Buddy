import React from 'react';
import {Navbar, Nav} from "react-bootstrap"

class NavBar extends React.Component {

    render() {
        return (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">Band Buddy</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="profile">My Profile</Nav.Link>
      <Nav.Link href="activeusers">Active Users</Nav.Link>
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
