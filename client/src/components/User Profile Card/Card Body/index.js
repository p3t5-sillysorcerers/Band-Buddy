import React from "react";
import './style.css'



class CardBody extends React.Component {

render() {
    return (
        <div className="card">
            <div className="img-container">
                <img src={this.props.image} className="card-image" alt="..."></img>
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

                <button id= {this.props.name} type="button" className="btn btn-success" onClick={()=>this.props.onClick({musician: this.props.name + ": " + this.props.instrument, username: this.props.username})}>Jam with me</button>
            </div>
    </div>

    );
}
}
export default CardBody;