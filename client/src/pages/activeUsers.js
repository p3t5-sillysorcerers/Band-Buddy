import React, { Component } from "react";
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import CardBody from '../components/User Profile Card/Card Body'
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
        const { inputValue, musicians } = this.state;
        if (inputValue) {
          const nextState = [...musicians, inputValue];
          this.setState({ musicians: nextState, inputValue: '' });
        }
       
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
                                    <ListGroup.Item>Bandy Buddy 1</ListGroup.Item>
                                    <ListGroup.Item>Band Buddy 2</ListGroup.Item>
                                    <ListGroup.Item>Band Buddy 3</ListGroup.Item>
                                    <ListGroup.Item>Band Buddy 4</ListGroup.Item>
                                </ListGroup>
                                <Button variant="warning" className="jambutton">Let's Jam</Button>

                            </div>
                            <div className="col-sm-8">
                                {this.state.profiles.map((profile,i) => {
                                        // console.log('profile in .map ???', profile);
                                    
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