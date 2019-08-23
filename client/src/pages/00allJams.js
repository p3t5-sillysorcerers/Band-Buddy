import React, {Component} from "react";
import { List, ListItem } from "../components/List";
import JamSession from "../components/JamSession"
import axios from "axios";

class AllJams extends Component {
state = {
    jamSessions: [],
};

// Loads ALL the Profiles in the DB
componentDidMount(){
axios.get("api/jams")
  .then(response => {
    console.log(response.data)
    this.setState({
        jamSessions: response.data
    })
    })
    };


render() {
    return (
        <>
        <h1> Jam Test </h1> 

        {this.state.jamSessions.map((jams, i) => {
                  return (
                    <JamSession
                      name={jams.jamMembers}
                      key={i}
                    /> 
                    );
                })}

        </>
    );
}
}
export default AllJams;




