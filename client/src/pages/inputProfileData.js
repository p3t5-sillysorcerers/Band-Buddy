import React, { Component } from "react";
import { Input, FormBtn } from '../components/00inputProfileFrom';
import API from "../utils/API";
import axios from 'axios';

class InputData extends Component {
  state = {
    name: "",
    username: "",
    password: "",
    location: "",
    instrument: "",
    skillLevel: "",
    musicGenres: "",
    file: {},
    active: [true],
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    console.log(name, value)
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  //Form Submit
  handleFormSubmit = event => {
    event.preventDefault();
    console.log("clicked", this.state)
    
    axios.get('https://randomuser.me/api/').then(response =>{
      var profileImage = response.data.results[0].picture.large

      API.register({
        name: this.state.name,
        username: this.state.username,
        password: this.state.password,
        location: this.state.location,
        instrument: this.state.instrument,
        skillLevel: this.state.skillLevel,
        musicGenres: this.state.musicGenres,
        active:this.state.active,
        image: profileImage
      })
        .then(response => {
          console.log(response)
          window.location = "/login"
        })
    })
  };

  //Image file Added
  handlePhoto(file) {
    console.log(this.state.file);
    this.setState({
      file: file
    })
  };
  
  render() {
    return (
      <div className="createPage">

            <form>
              <Input
                name="name"
                placeholder="Name (required)"
                onChange={this.handleInputChange}
                value={this.state.name} />
              <Input
                name="username"
                placeholder="username (required)"
                onChange={this.handleInputChange}
                value={this.state.username} />
              <Input
                name="password"
                placeholder="password (required)"
                onChange={this.handleInputChange}
                value={this.state.password} />
                <Input
                name="instrument"
                placeholder="instrument (required)"
                onChange={this.handleInputChange}
                value={this.state.instrument} />
              <Input
                name="skillLevel"
                placeholder="skill Level"
                onChange={this.handleInputChange}
                value={this.state.skillLevel} />
              <Input
                name="location"
                placeholder="location"
                onChange={this.handleInputChange}
                value={this.state.location} />
              <Input name="musicGenres"
                placeholder="Favorite Music Genre"
                onChange={this.handleInputChange}
                value={this.state.musicGenres} />
              <FormBtn onClick={this.handleFormSubmit}>Create Profile</FormBtn>
            </form>
      </div>
    )
  }
}

export default InputData;