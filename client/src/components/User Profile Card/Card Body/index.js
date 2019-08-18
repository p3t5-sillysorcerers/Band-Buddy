import React from "react";
import { Button} from "react-bootstrap"
import './style.css'

const user = {
    userInfo: {
        image: "https://randomuser.me/api/portraits/women/31.jpg",
    }
}

class CardBody extends React.Component {

render() {
    return (
        <div className="card">
            <div className="img-container">
                <img src={user.userInfo.image} className="card-image" alt="..."></img>
            </div>
            <div className="contentDiv">
                <ul>
                    <li>
                        <strong>Name:</strong> {this.props.name}
                    </li>
                    <li>
                        <strong>User Name:</strong> {this.props.username}
                    </li>
                    <li>
                        <strong>From:</strong> {this.props.location}
                    </li>
                    <li>
                        <strong>Plays:</strong> {this.props.instrument}
                    </li>
                </ul>
            </div>
            <div className="buttonDiv">
                {/* <a href="#" className="btn btn-primary mr-1">Contact Me</a> */}
                <button id= {this.props.name} type="button" class="btn btn-success" onClick={()=>this.props.onClick(this.props.name)}>Jam with me</button>
            </div>
    </div>

    );
}
}
export default CardBody;