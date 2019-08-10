import React, {Component} from "react";
import { List, ListItem } from "../components/List";
import axios from "axios";
import API from "../utils/API";

class Profile extends Component {
    // Initialize this.state.profiles as an empty array
    state = {
        profile: []
    };
   
    // Loads one  Profile in the DB
    componentDidMount(){
        axios.get(`${"/api/profiles" + window.location.pathname}`)
        .then(response =>{
        this.setState({
          profile:response.data
        })
        console.log(this.state)
        })
        };

    render() {
        return (
            <>
            <h1> Profile Data Test </h1> 
            <h3> {this.state.profile.name}'s Profiles </h3>
            <ListItem>
             <strong>
            Name: {this.state.profile.name} // Username: {this.state.profile.userName} // From: {this.state.profile.location} // Plays: {this.state.profile.instrument}
            </strong>
            </ListItem >
            </>
        );
    }
}

export default Profile;