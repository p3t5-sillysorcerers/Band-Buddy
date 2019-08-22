import React, { Component } from "react";
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import CardBody from '../components/User Profile Card/Card Body'
import JamList from "../components/ListGroup"
import JamButton from "../components/Jambutton"
import axios from "axios";
import { ListGroup, Button } from 'react-bootstrap';
import './activeusers.css';

class ActiveUsers extends Component {

    state = {
        profiles: [],
        inputValue: '',
        musicians: [],
        jams:[]
    };

    componentDidMount() {
        axios.get("api/profiles")
            .then(response => {
                
                this.setState({
                    profiles: response.data
                })
                console.log(response.data)
            })
    }

    onClick = e => {
        this.setState({inputValue: e})
        // console.log(e)
        //  console.log("state" + this.state.profiles.name)
        this.setState({
            musicians: [...this.state.musicians, e.musician],
          })
          console.log(e.username);
          this.removeCard(e.username);
         
      }

removeCard = username =>{
const filter = this.state.profiles.filter(
profile => profile.username !== username
);
this.setState({
    profiles: filter
});
console.log(this.state.musicians)
};

    
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
                                />
                                <JamButton 
                                onClick={this.postJams}
                                selectedMusicans={this.state.musicians}
                                />
                                </ListGroup>
                            </div>
                            <div className="col-sm-8">
                                {this.state.profiles.map((profile,i) => {
                                    return (
                                        <CardBody
                                            image={profile.image}
                                            name={profile.name}
                                            username={profile.username}
                                            location={profile.location}
                                            instrument={profile.instrument}
                                            key={i}
                                            onClick = {this.onClick}
                                        />
                                    )
                                })
                            }
                            </div>
                        </div>
                    </div>
                </div>
                {/* <Footer /> */}
            </>
        );
    }
}

    export default ActiveUsers;
