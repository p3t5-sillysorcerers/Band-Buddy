import React, { Component } from "react";
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ProfileInfo from '../components/Profile Info';
import ProfImage from '../components/User Profile Card/Card Image';
import ListGroup from "react-bootstrap/ListGroup";
import axios from 'axios';
import Button from "react-bootstrap/Button";
import "./profile.css";


class Profile extends Component {

    state = {
        profile: []
    };
   
    // Loads one Profile in the DB
    //replace window.location.pathname --> username from passport ********
    componentDidMount(){
        //if authenticated then
        axios.get(`${"/api/profile" + window.location.pathname}`)
        .then(response =>{
        this.setState({
          profile:response.data
        })
        console.log(this.state)
        })
        };

    render() {

        return (
            <div className="container profilestyling">
                <div className="userProfile">
                    <div className="row">
                        <ProfImage />
                        {/* <ul>
                            <li>
                                <strong>Name:</strong> {this.props.name}
                            </li>
                            <li>
                                <strong>User Name:</strong> {this.props.username}
                            </li>
                            <li>
                                <strong>From:</strong> {this.props.location}
                            </li>
                            <li>
                                <strong>Plays:</strong> {this.props.instrument}
                            </li>
                            <li>
                                <strong>Skill Level:</strong> {this.props.skillLevel}
                            </li>
                            <li>
                                <strong>Music Genre:</strong> {this.props.musicGenres}
                            </li>
                        </ul> */}
                            <Button>Edit Profile</Button>
                    </div>

                </div>
            </div>
        )
    }
}

export default Profile;

