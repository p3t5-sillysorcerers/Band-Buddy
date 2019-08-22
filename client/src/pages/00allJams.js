import React, {Component} from "react";
import { List, ListItem } from "../components/List";
import axios from "axios";

class AllJams extends Component {
state = {
    jams: [],
};

// Loads ALL the Profiles in the DB
componentDidMount(){
axios.get("api/jams")
  .then(response => {
    console.log(response.data)
    })
    };


render() {
    return (

        <>
        <h1> Data Test </h1> 
        <h3> All Profiles </h3>
                  <strong>
                    Current Jam:{this.state.jams}
                  </strong>
           
          ) : (
          <h3>No Results to Display</h3>
        )}

        </>
    );
}
}
export default AllJams;