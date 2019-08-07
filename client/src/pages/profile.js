import React, { Component } from "react";
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ProfileInfo from '../components/Profile Info';
import ProfileImage from "../components/Profile Image";

class Profile extends Component{

    render(){
        
        return(
            <div className="userProfile">
                <NavBar />
                <div className="row">
                    <div className="col-sm-4">
                    </div>
                    <div className="col-sm-8">
                    <ProfileImage />
                    <ProfileInfo />
                    </div>
                </div>
                <Footer />
            </div>

        )
    }
}

export default Profile;
 
 