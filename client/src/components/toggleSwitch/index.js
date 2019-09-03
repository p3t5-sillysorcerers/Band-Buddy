import React, { Component } from "react";
import Switch from "react-switch";
import axios from "axios"

 
class ToggleSwitch extends Component {
  constructor(props) {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(checked) {
    this.setState({ checked });
    const username= this.props.username
    const active = this.props.active
    console.log(this.state.checked)
    console.log(username)
    console.log(active)
    // this.updateActive(username)
  }

  updateActive=(username)=>{
    axios.post("api/profiles", username).then(response => {
        console.log("updated: " + response.data);
  })
}
 
  render(props) {
    return (
      <label>
        
        <Switch 
        onChange={this.handleChange} 
        checked={this.state.checked} 
        onColor="#F55F01"
    onHandleColor="#6C757C"
    handleDiameter={30}
    uncheckedIcon={false}
    checkedIcon={false}
    boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
    activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
    height={20}
    width={48}
    className="react-switch"
    id="material-switch"/>
    <br></br>
    <span hidden={this.state.checked} style={{color: "White"}} ><strong>Click to be found</strong></span>
      </label>
    );
  }
}
export default ToggleSwitch