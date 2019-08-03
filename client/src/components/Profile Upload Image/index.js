import React  from "react";
import './style.css'

const user = {
    userInfo: {
        image: "http://semantic-ui.com/images/wireframe/image.png",
    }
}

function ProfileUploadImage() {
    return (
        <div className="profileCard">
            <div className="img-container">
                <img src={user.userInfo.image} className="card-image" alt="..."></img>
            </div>
            <div className="card-body">
                <h5>Click Upload to Upload an Image</h5>
                <a href="#" className="btn btn-primary">Upload</a>
            </div>
        </div>
    );
}

export default ProfileUploadImage;