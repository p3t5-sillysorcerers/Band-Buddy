import React from 'react';
import axios from "axios";


class JamButton extends React.Component {

    postJams = () =>{
        console.log(this.props.selectedMusicans)
        axios.post("api/jams", this.props.selectedMusicans)
            .then(response => {
        console.log("posted: " + JSON.stringify(response.data))  
      }
            )};


    render(props) {
        return (
<button variant="warning" className="jambutton" onClick= {this.postJams} >Let's Jam</button> 
        )
    }
}
export default JamButton
