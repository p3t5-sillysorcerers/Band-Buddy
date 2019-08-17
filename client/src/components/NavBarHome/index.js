import React from 'react';
import {Navbar, Nav} from "react-bootstrap"

class NavBarHome extends React.Component {

    render() {
        return (
            <Navbar bg="dark">
            <Navbar.Brand href="#home">
              <img
                src="https://i.imgur.com/Psb5bVc.png"
                width="90"
                height="90"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
          </Navbar>
        )
    }
}

export default NavBarHome;