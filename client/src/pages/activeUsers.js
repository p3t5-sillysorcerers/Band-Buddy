import React, { Component } from "react";
import UserCard from '../components/User Profile Card/'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';



class ActiveUsers extends Component {
    render() {

       

        return (
            <div className="activeUsers">
                <div className="users">
                    <h2>This is going to be the active users page!</h2>
                    <div className="row">
                        <div className="col-sm-3">

                        </div>
                        <div className="col-sm-6">
                            <UserCard />
                            <UserCard />
                            <UserCard />
                            <UserCard />
                        </div>
                        <div className="col-sm-3">

                        </div>
                    </div>
                </div>
            </div>
        );
    }



}

export default ActiveUsers;