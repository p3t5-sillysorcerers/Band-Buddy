import React, {Component} from "react";
import { List, ListItem } from "../components/List";
import axios from "axios";

class AllProfiles extends Component {
    // Initialize this.state.profiles as an empty array
    state = {
        profiles: [],
    };

    // Loads ALL the Profiles in the DB
    componentDidMount(){
      // console.log("state" + this.state)
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

    render() {
        return (

            <>
            <h1> Data Test </h1> 
            <h3> All Profiles </h3>
            {this.state.profiles.length ? ( 
              <List>
                {this.state.profiles.map(profile => (
                  <ListItem key={profile.userName}>
                    <a href={profile.userName}>
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


export default AllProfiles;