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
