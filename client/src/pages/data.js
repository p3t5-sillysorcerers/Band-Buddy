import React, {Component} from "react";
import { List, ListItem } from "../components/List";
import axios from "axios";
import API from "../utils/API";


class Profiles extends Component {
    // Initialize this.state.books as an empty array
    state = {
        profiles: [],
    };

    // Loads ALL the Profiles in the DB
    componentDidMount(){
        axios.get("/api/profiles")
        .then(response =>{
        this.setState({
          profiles:response.data
        })
        console.log(this.state)
        })
        };

    //Loads ALL the Profiles  in the DB (THIS IS A METHOD TO USE)
    // loadProfiles = () => {
    //     API.getProfiles()
    //         .then(res =>
    //             this.setState({
    //                 profiles: res.data,
    //             })
    //         )
    //     console.log("state" + this.state)
    //         .catch(err => console.log(err));
    // };


    //   handleInputChange = event => {
    //     const { name, value } = event.target;
    //     console.log(name, value)
    //     // Updating the input's state
    //     this.setState({
    //       [name]: value
    //     });
    //   };

    //THIS IS REALLY IMPORTANT 
    //   handleFormSubmit = event => {
    //     event.preventDefault();
    //   console.log("clicked")
    //     API.saveProfile({
    //     name: this.state.name,
    //     username: this.state.username,
    //     instrument: this.state.instrument
    //   })
    //   .then(response=>{
    //     this.loadProfiles()
    //     })
    //   };
    // handleDelete = event =>{

    //   console.log(event.target.getAttribute("data-id"))
    //   API.deleteBook(event.target.getAttribute("data-id"))
    //   .then(response=>{
    //     this.loadProfiles()
    //   })
    // }


    render() {
        return (

            <>
            <h1> Data Test </h1> 
            <h3> All Profiles </h3>
            {this.state.profiles.length ? ( 
              <List>
                {this.state.profiles.map(profile => (
                  <ListItem key={profile._id}>
                    <a href={"/profile/" + profile._id}>
                      <strong>
                        Name: {profile.name} // Username: {profile.userName} // From: {profile.location} // Plays: {profile.instrument}
                      </strong>
                    </a>
                  </ListItem>
                ))}
              </List>
              ) : (
              <h3>No Results to Display</h3>
            )}

            </>
        );
    }
}


export default Profiles;