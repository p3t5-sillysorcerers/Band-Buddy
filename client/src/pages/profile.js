import React, { Component } from "react";
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ProfileInfo from '../components/Profile Info';
import ProfImage from '../components/User Profile Card/Card Image';
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import "./profile.css";


class Profile extends Component {

    render() {

        return (
            <div className="container profilestyling">
                <div className="userProfile">
                    <div className="row">
                        <ProfImage />
                        <ListGroup>
                            <ListGroup.Item>Username:</ListGroup.Item>
                            <ListGroup.Item>Instrument:</ListGroup.Item>
                            <ListGroup.Item>Skill Level:</ListGroup.Item>
                            <ListGroup.Item>Music Genres:</ListGroup.Item>
                            <ListGroup.Item>Info:</ListGroup.Item>
                            <ListGroup.Item>Location:</ListGroup.Item>
                            <Button>Edit Profile</Button>
                        </ListGroup>
                    </div>

                </div>
            </div>
        )

    }
}

export default Profile;

