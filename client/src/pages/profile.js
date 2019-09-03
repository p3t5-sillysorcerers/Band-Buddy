import React, { useContext } from "react";
import IdentityContext from "../../src/identity-context";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import {Container,Row,Jumbotron} from "react-bootstrap";
import ProfImage from "../components/User Profile Card/Card Image";
import ToggleSwitch from "../components/toggleSwitch"
import "./profile.css";
import User from "../User";
import AllJams from "./Jams"

const jamsWrapper={
display: "flex",
flexWrap: "wrap",
alignItems: "baseline",
justifyContent: "space-evenly"
}

function Profile() {
  const value = useContext(IdentityContext);
  // console.log(value.name);

  const containerStyle = {
    margin: "50px",
    backgroundImage:
      "url(" + "https://cdn.wallpapersafari.com/21/91/npfXyG.jpg" + ")"
  };

  return (
    <>
      <NavBar />
      <Container>
        <Jumbotron style={containerStyle}>
      
          <Row>
            <ProfImage />

            <User />
          </Row>
          {/* <ToggleSwitch 
          /> */}
        </Jumbotron>
    
      </Container>
      <Container 
      style = {jamsWrapper}>  
<AllJams />
</Container>
      <Footer />
    </>
  );
}

export default Profile;
