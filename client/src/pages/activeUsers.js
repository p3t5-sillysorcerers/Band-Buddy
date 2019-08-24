import React, { Component} from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import CardBody from "../components/User Profile Card/Card Body";
import UserFilter from "../components/Filter"
import JamList from "../components/ListGroup";
import JamButton from "../components/Jambutton";
import axios from "axios";
import { ListGroup, Button, Modal,Form} from "react-bootstrap";
import TimePicker from 'react-bootstrap-time-picker';
import "./activeusers.css";

class ActiveUsers extends Component {
  //STATE
  state = {
    profiles: [],
    unfilterdProfiles: [],
    instrumentProfiles:[],
    guitarProfiles:[],
    currentProfiles:[],
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
  //_______________________

  //SHOW AND HIDE MODAL ON BUTTON CLICK

  handleClose = () => this.setState({ showing: false });
  handleShow = () => this.setState({ showing: true });

  //_______________________

//FILTER CARDS BASED ON INSTRUMENT
handleFilter = e => { 
    console.log(e.names)
this.setState({
    filtered: e.names
})
    this.filterInstruments(e.names);

};

filterInstruments = names =>{
    const profiles = this.state.profiles
    const unfilterdProfiles = this.state.unfilterdProfiles;
    const currentProfiles = this.state.currentProfiles
    
    console.log("un: "+ unfilterdProfiles)
   
    console.log(profiles)
    if(names === "All"){
        this.setState({
          profiles: unfilterdProfiles
        });
    } else if(names === "Guitar") {
        const instrumentfilter = unfilterdProfiles.filter( profile => profile.instrument === names);
        this.setState({
            profiles: instrumentfilter
          });
    } else if(names === "Bass") {
            const instrumentfilter = unfilterdProfiles.filter( profile => profile.instrument === names);
            this.setState({
                profiles: instrumentfilter
              });
    } else if(names === "Drums") {
                const instrumentfilter = unfilterdProfiles.filter( profile => profile.instrument === names);
                this.setState({
                    profiles: instrumentfilter
                  });
    } else if(names === "Vocals") {
                    const instrumentfilter = unfilterdProfiles.filter( profile => profile.instrument === names);
                    this.setState({
                        profiles: instrumentfilter
                      });
    } else if(names === "Keys/Synth") {
                        const instrumentfilter = unfilterdProfiles.filter( profile => profile.instrument === names);
                        this.setState({
                            profiles: instrumentfilter
                          });
     } else if(names === "Brass") {
                            const instrumentfilter = unfilterdProfiles.filter( profile => profile.instrument === names);
                            this.setState({
                                profiles: instrumentfilter
                              });
                            } else if(names === "Other") {
                                const instrumentfilter = unfilterdProfiles.filter( profile => profile.instrument === names);
                                this.setState({
                                    profiles: instrumentfilter
                                  });
                                } 
        
    };   
 
  //_______________________


//REMOVE CARD FROM JAM LIST AND BACK INTO THE CARDS
  handleDelete = e =>{
    console.log(e.musicians)
  const musicians = this.state.musicians
  const profiles = this.state.profiles
  const name = e.musicians
  const removeMusician = musicians.filter(musician => musician !== name)
  const addBackToActive = profiles.filter(profile => profile == profile)
  this.setState({musicians: removeMusician})
  console.log(removeMusician)
  console.log(addBackToActive)

  }
  //_______________________

  render() {

    return (
      <>
        <NavBar />
        <div className="activeUsers">
          <div className="users">
            <div className="row">
              <div className="col-sm-4 group">

                <ListGroup>
                  <JamList 
                  musicians={this.state.musicians}
                  onClick={this.handleDelete}
                  />
                  <Button
                  type="button"
                  className="btn btn-danger"
                  onClick={this.handleShow}
                >
                  Set It Up
                </Button>
                </ListGroup>

                <Modal show={this.state.showing} onHide={this.handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>The Deets</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    Woohoo, you're almost set! Add the detials to set it up...
                
                    <Form.Group controlId="formGridAddress1">
                     <Form.Label>Address</Form.Label>
                     <Form.Control placeholder="1234 Main St" />
                     </Form.Group>
                    <Form.Group controlId="formGridAddress2">
                     <Form.Label>Address 2</Form.Label>
                    <Form.Control placeholder="Apartment, studio, or floor" />
                    </Form.Group>
                    Start Time: <TimePicker start="10:00" end="21:00" step={30} />
                    End Time: <TimePicker start="10:00" end="21:00" step={30} />
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                      Close
                    </Button>
                    <JamButton
                    onClick={this.postJams}
                    selectedMusicans={this.state.musicians}
                  />
                  </Modal.Footer>
                </Modal>
              </div>
              <div className="col-sm-8">
             
              <UserFilter 
              onReset={()=>this.resetFilter}
              title={this.state.filtered}
              onFilter = {this.handleFilter}
              />
                {this.state.profiles.map((profile, i) => {
                  return (
                    <CardBody
                      image={profile.image}
                      name={profile.name}
                      username={profile.username}
                      location={profile.location}
                      instrument={profile.instrument}
                      key={i}
                      onClick={this.onClick}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default ActiveUsers;
