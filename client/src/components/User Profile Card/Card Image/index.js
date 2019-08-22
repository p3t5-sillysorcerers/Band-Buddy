import React from "react";
import './style.css'

const user = {
    userInfo: {
        image: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    }
}

const imageStyle={
    margin: '20px'
}

class ProfImage extends React.Component {


render() {
    return (
            <div className=" profile-img-container" style={imageStyle}>
                <img src={user.userInfo.image} className="card-image" alt="..."></img>
            </div>
            )}
}

export default ProfImage;

