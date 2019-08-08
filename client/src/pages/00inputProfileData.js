import React, { Component } from "react";
import { Input, TextArea, FormBtn } from '../components/00inputProfileFrom';
import ProfileUploadImage from "../components/Profile Upload Image";
import API from"../utils/API";

class InputData extends Component{
    state = {
        name: "",
        userName: "",
        location: "",
        instrument: "",
        skillLevel: "",
        musicGenres:""
      };

      handleInputChange = event => {
        const { name, value } = event.target;
        console.log(name, value)
        // Updating the input's state
        this.setState({
          [name]: value
        });
      };
     
      handleFormSubmit = event => {
        event.preventDefault();
      console.log("clicked")
        API.inputProfiles({
        name: this.state.name,
        userName: this.state.userName,
        location: this.state.location,
        instrument: this.state.instrument,
        skillLevel: this.state.skillLevel,
        musicGenres: this.state.musicGenres
      })
      .then(response=>{
        console.log("Profile Added")
        })
      };

    render(){
        return(
            <div className="createPage">
                <div className="row">
                    <div className="col-sm-4">
                    <ProfileUploadImage />
                    </div>
                    <div className="col-sm-4">
                    <form>
              <Input 
              name="name" 
              placeholder="Name (required)" 
              onChange={this.handleInputChange}
              value={this.state.name}/>
              <Input 
              name="userName" 
              placeholder="username (required)"
               onChange={this.handleInputChange}
               value={this.state.userName}/>
               <Input 
              name="location" 
              placeholder="location"
               onChange={this.handleInputChange}
               value={this.state.location}/>
               <Input 
              name="instrument" 
              placeholder="instrument"
               onChange={this.handleInputChange}
               value={this.state.instrument}/>
               <Input 
              name="skillLevel" 
              placeholder="skill Level"
               onChange={this.handleInputChange}
               value={this.state.skillLevel}/>
              <Input name="musicGenres" 
              placeholder="musicGenres (Optional)" 
              onChange={this.handleInputChange}
              value={this.state.musicGenres}/>
              <FormBtn onClick={this.handleFormSubmit}>Create Profile</FormBtn>
            </form>
                    </div>
                    <div className="col-sm-4"></div>
                </div>
            </div>
        )
    }
}

export default InputData;