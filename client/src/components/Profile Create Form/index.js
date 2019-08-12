import React, { Component } from 'react';
import './style.css';

class ProfileCreateForm extends Component {

    state = {
        firstName: "",
        instrument: "",
        skillLevel: "",
        musicGenres: "",
        info: "",
        location: "",
        profileLinks: "",
    }


    handleInputChange = event => {

        const {name , value} = event.target;

        this.setState({
            [name]: value
        });
    }

    handleFormSubmit = event => {
        event.preventDefault();
    }

    render() {
       
        
        return (
            // <ImageBackground source={"https://st.depositphotos.com/1757583/3373/i/950/depositphotos_33733567-stock-photo-music-background.jpg"} style={{width: '100%', height: '100%'}}>
                   
                   
                   <form className="form" >
                        <input className="formInput"
                            value={this.state.firstName}
                            name="firstName"
                            onChange={this.handleInputChange}
                            type="text"
                            placeholder="First Name"
                        />
                        <br />
                        <input className="formInput"
                            value={this.state.instrument}
                            name="instrument"
                            onChange={this.handleInputChange}
                            type="text"
                            placeholder="Instrument"
                        />
                        <br />
                        <input className="formInput"
                            value={this.state.skillLevel}
                            name="skillLevel"
                            onChange={this.handleFormInputChange}
                            type="text"
                            placeholder="Ability"
                        />
                        <br />
                        <input className="formInput"
                            value={this.state.musicGenres}
                            name="skillLevel"
                            onChange={this.handleFormInputChange}
                            type="text"
                            placeholder="Genres"
                        />
                        <br />
                        <input className="formInput"
                            value={this.state.skillLevel}
                            name="skillLevel"
                            onChange={this.handleFormInputChange}
                            type="text"
                            placeholder="Ability"
                        />
                        <br />
                        <input className="formInput"
                            value={this.state.info}
                            name="skillLevel"
                            onChange={this.handleFormInputChange}
                            type="text"
                            placeholder="Bio"
                        />
                        <br />
                        <input className="formInput"
                            value={this.state.location}
                            name="skillLevel"
                            onChange={this.handleFormInputChange}
                            type="text"
                            placeholder="Location"
                        />
                        <br/>
                        <input className="formInput"
                            value={this.state.profileLinks}
                            name="skillLevel"
                            onChange={this.handleFormInputChange}
                            type="text"
                            placeholder="Profile Links"
                        />
                        <br/>
                        <button className="btn btn-primary" onClick={this.handleFormSubmit}>Submit</button>
                    </form>
                    // </ImageBackground>

        )

    }

}

export default ProfileCreateForm;











