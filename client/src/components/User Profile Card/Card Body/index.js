import React  from "react";
import './style.css'

const user = {
    userInfo: {
        image: "https://randomuser.me/api/portraits/women/31.jpg",
        name: "Jamie Winehouse",
        info: "I'm a guitarist and vocalist looking for a band.",
        location: "Wicker Park"
    }
}

function CardBody() {
    return (
        <div className="card">
            <div className="img-container">
                <img src={user.userInfo.image} className="card-image" alt="..."></img>
            </div>
            <div className="card-body">
                <h3 className="name">{user.userInfo.name}</h3>
                <p className="title">{user.userInfo.info}</p>
                <p className="card-text">{user.userInfo.location}</p>
                <a href="#" className="btn btn-primary">Contact Me</a>
                <button type="button" class="btn btn-success">Available</button>
            </div>
        </div>
    );
}

export default CardBody;