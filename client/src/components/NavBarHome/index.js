import React from 'react';
import {Navbar} from "react-bootstrap";
import { BrowserRouter as Route } from "react-router-dom";

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