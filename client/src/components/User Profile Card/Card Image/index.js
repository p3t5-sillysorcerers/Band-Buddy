import React from "react";
import './style.css'

const user = {
    userInfo: {
        image: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    }
}

class ProfImage extends React.Component {


render() {
    return (
            <div className=" profile-img-container">
                <img src={user.userInfo.image} className="card-image" alt="..."></img>
            </div>
            )}
}

export default ProfImage;

