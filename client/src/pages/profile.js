import React, { useContext } from "react";
import IdentityContext from "../../src/identity-context";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import {
  Button,
  Container,
  Col,
  Row,
  Jumbotron,
  ListGroup,
  Card,
  Nav
} from "react-bootstrap";
// import ProfileInfo from '../components/Profile Info';
import ProfImage from "../components/User Profile Card/Card Image";
// import ListGroup from "react-bootstrap/ListGroup";
import axios from "axios";
// import Button from "react-bootstrap/Button";
import "./profile.css";
import User from "../User";
import CurrentJams from "../components/JamList";
import { userInfo } from "os";

// loadJams = () => {
//   axios.get("api/jams")
//       .then(response => {
//         this.setState({
//           jams:response.data
//         })
//         console.log("posted: " + JSON.stringify(response.data))
//         })
//         };

function Profile() {
  const value = useContext(IdentityContext);
  console.log(value);

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
        </Jumbotron>
      </Container>

      <Footer />
    </>
  );
}

export default Profile;
