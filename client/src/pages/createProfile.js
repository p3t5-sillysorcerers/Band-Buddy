import React, { Component } from "react";
import ProfileCreateForm from '../components/Profile Create Form';
import ProfileUploadImage from "../components/Profile Upload Image";

class Create extends Component{

    render(){

        return(


            <div className="createPage">
                <div className="row">
                    <div className="col-sm-4">
                    <ProfileUploadImage />
                    </div>
                    <div className="col-sm-4">
                    <ProfileCreateForm/>
                    </div>
                    <div className="col-sm-4"></div>
                </div>
            </div>



        )
    }
}

export default Create;