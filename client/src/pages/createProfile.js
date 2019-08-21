import React, { Component } from "react";
import InputData from './00inputProfileData';
import { Navbar } from "react-bootstrap"

const createStyle={
  margin: '100px',
}

class Create extends Component{

    render(){
        return(
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

</Navbar>

            <div className="createPage" style={createStyle}>
                <div className="row">
                  <div className="col-sm-3"></div>
                  <div className="col-sm-6">
                    <InputData/>
                  </div>
                  <div className="col-sm-3"></div>
                </div>
            </div>
</>
        )
    }
}

export default Create;