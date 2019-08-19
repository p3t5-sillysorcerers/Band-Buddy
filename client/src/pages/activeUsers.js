import React, { Component } from "react";
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import CardBody from '../components/User Profile Card/Card Body'
import  JamList from "../components/ListGroup"
import axios from "axios";
import Profile from './profile';

// import listgroup from '../components/ListGroup';
import { ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import './activeusers.css';

class ActiveUsers extends Component {

    state = {
        profiles: [],
        inputValue: '',
        musicians: []
    };

    componentDidMount() {
        axios.get("api/profiles")
            .then(response => {
                
                this.setState({
                    profiles: response.data
                })
            })
    }

    onClick = (e) => {
        this.setState({ inputValue: e})
        console.log(e)
        console.log(this.state)
        this.addToArray()
        // const { inputValue, musicians } = this.state;
        // if (inputValue) {
        //   const nextState = [...musicians, inputValue];
        //   this.setState({ musicians: nextState, inputValue: '' });
        // }
      }
    
    addToArray(){
        // let remove = this.state.profiles.map(function(item) { return item.value; }).indexOf(e.target.value);
        const { inputValue, musicians } = this.state;
        if (inputValue) {
          const nextState = [...musicians, inputValue];
          this.setState({ 
              
            musicians: nextState, 
            inputValue: '', 
            // profiles: this.state.profiles.filter((_, i) => i !== remove)
        
        });
        
    }
     console.log(this.state.musicians[0])
}


    render() {
        return (
            <>
<NavBar />
                <div className="activeUsers">
                    <div className="users">
                        <div className="row">
                            <div className="col-sm-4 group">
                            <ListGroup>
                                <JamList musicians={this.state.musicians} />
                                <Button variant="warning" className="jambutton">Let's Jam</Button> 
                                </ListGroup>
                            </div>
                            <div className="col-sm-8">
                                {this.state.profiles.map((profile,i) => {
                                    return (
                                        <CardBody
                                            name={profile.name}
                                            username={profile.userName}
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
                <Footer />
            </>
        );
    }
}

    export default ActiveUsers;


    // ListGroup
    // ListGroup.Item