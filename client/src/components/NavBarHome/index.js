import React from 'react';
import {Navbar, Nav} from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch, Redirect, withRouter, Link } from "react-router-dom";

class NavBarHome extends React.Component {

    render() {
        return (
          <Route>
            <Navbar bg="dark">
              <img
                src="https://i.imgur.com/Psb5bVc.png"
                width="90"
                height="90"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
          </Navbar>
          </Route>
      
        )
        
    }
}

export default NavBarHome;