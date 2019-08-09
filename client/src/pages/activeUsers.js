import React, { Component } from "react";
import UserCard from '../components/User Profile Card/'
import CardBody from '../components/User Profile Card/Card Body'
import axios from "axios";



class ActiveUsers extends Component {

    state = {
        profiles: [],
    };

    componentDidMount() {
        axios.get("api/profiles")
            .then(response => {
                
                this.setState({
                    profiles: response.data
                })
            })
    }

    render() {

        return (
            <>
                <div className="activeUsers">
                    <div className="users">
                        <div className="row">
                            <div className="col-sm-3">

                            </div>
                            <div className="col-sm-6">
                                {this.state.profiles.map((profile,i) => {
                                        console.log('profile in .map ???', profile);
                                    
                                    return (
                                        <CardBody
                                            name={profile.name}
                                            username={profile.userName}
                                            location={profile.location}
                                            instrument={profile.instrument}
                                            key={i}
                                        />
                                    )
                                })
                            }
                            </div>
                            <div className="col-sm-3">

                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

    export default ActiveUsers;