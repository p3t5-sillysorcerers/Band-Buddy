
# Band Buddy

 A social app that allows you to find local musicians to jam with.  Users can create a profile, then set up a jam session based on other available users.
 
Go to site: https://p3t5-sillysorcerers.herokuapp.com/

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Features](#features)
* [Status](#status)
* [Contact](#contact)

## General info

A musician community building app.  Users can sign up for an account. They then can create a jam session based on the available musicians.


## Technologies

*  React v 16.9.0
*  Express 4.17.1
*  Node.js  12.9.0
*  MongoDB  

  

## Code Examples


```
class ActiveUsers extends Component {
  //STATE
  state = {
    profiles: [],
    unfilterdProfiles: [],
    instrumentProfiles:[],
    guitarProfiles:[],
    inputValue: "",
    musicians: [],
    showing: false,
    filtered: "Instrument"
  };
  //_______________________

  //GETS ALL PROFILES ON ACTIVE USER PAGE LOAD
  componentDidMount() {
    axios.get("api/profiles").then(response => {
      this.setState({
        profiles: response.data,
        unfilterdProfiles: response.data,
      });
      const guitarProfiles = this.state.profiles
      console.log(response.data);
      console.log(guitarProfiles)
    });
  }
  //_______________________

  //USER ADDED TO JAM LIST ON LICK OF "LETS JAM" CARD BUTTON
  onClick = e => {
      console.log(e)
    // this.setState({ inputValue: e });
    this.setState({
      musicians: [...this.state.musicians, `${e.musician +": "+ e.instrument}`]
    });
    console.log(e.username);
    this.removeCard(e.username);
  };
  //_______________________

  //FILTERS OUT CARDS WHERE USERNAME IS IN JAM LIST
  removeCard = username => {
    const profiles = this.state.profiles 
    const filter = this.state.profiles.filter(
      profile => profile.username !== username
    );
    console.log("username: "+ username)
    this.setState({
      profiles: filter,
      currentProfiles: profiles
    });
    console.log(this.state.musicians);
  };
  //_______________________

  //POST LIST OF JAMS TO DB
  postJams = e => {
    console.log(this.state.musicians);
    const unfilterdProfiles = this.state.unfilterdProfiles;
    console.log("3"+unfilterdProfiles)
    this.setState({
      musicians: [],
      profiles: unfilterdProfiles
    });
    axios.post("api/jams", this.state.musicians).then(response => {
      console.log("posted: " + JSON.stringify(response.data));
        this.handleClose()

    });
  };



```


## Features
List of features ready and TODOs for future development

* Responsive design
* Easy user experience
* User Profile Page
* Select User based on Instrument or specialty
* Form a jam session based on selective available users

To-do list and Next features:
* User Chat feature
* Contact users
* Local Musician Search
* Unavailable user option
* Soundcloud Integration
* View other users profile view

## Status
Project is: in progress because we want to continue to make improvements and improve the user experience. 


## Contact
Created by   [@PhilD203] [@kpassaglia]
 [@cdperez7] [@DanLongo19]   - feel free to contact us!
=======
## Band Buddy

# Project 3 Team: Kevin, Phil, Dan, Connor

### Application Usage
We created an app for musicians to be able to meet up and jam together. You can create a profile and search for other musicians based on their instrument and style, pick a place and time to meet up and then jam! 


### Technologies Used
-React
-Passport
  -Login authentication with hashed passwords 
-Bootstrap
-Express
-Javascript
-MongoDB/Mongoose
-HTML/CSS


## How It Works

The first page or homepage you is the log in page. If you already have an account you can enter to your profile.  

If you do not have an account you can create one! 


## Profile Page:
Through a simple form you can input all of your information so that active users can find you and schedule a jam session!

## Active Users Page:
Scan through users to see their instrument, styles and skill level to match up and create a group. Click on the person that matches most and the populate into a jam session. From there you can pick a time and place to meet up and jam! 

### The Future
- Search for users based on their instrument, style and skill level
- Be able to chat with active users online in order to schedule your jam session
- Add in your music samples through Soundcloud or Spotify


## Thank you!

