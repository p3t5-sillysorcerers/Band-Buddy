import React, { Component } from "react";
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ProfileCreateForm from '../components/Profile Create Form';
import ProfileUploadImage from "../components/Profile Upload Image";

class Create extends Component{

    render(){

        
        
        return(


            <div className="createPage">
                <NavBar />
                <div className="row">
                    <div className="col-sm-4">
                   
                    </div>
                    <div className="col-sm-8">
                    <ProfileUploadImage />
                    <ProfileCreateForm/>
                    </div>
                </div>
                <Footer />
            </div>



        )
    }
}

export default Create;