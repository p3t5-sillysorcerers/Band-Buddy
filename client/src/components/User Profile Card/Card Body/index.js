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
                        <h4> {this.props.username}</h4>
                    </li>
                    <li>
                    {this.props.name}
                    </li>
                
                    <li>
                      {this.props.location}
                    </li>
                    <li>
                       {this.props.instrument}
                    </li>
                </ul>
            </div>
            <div className="buttonDiv">

                <button id= {this.props.name} type="button" className="btn btn-success cardJamButton" onClick={()=>this.props.onClick({musician: this.props.name, instrument: this.props.instrument, username: this.props.username, location: this.props.location})}>Jam with me</button>
            </div>
    </div>

    );
}
}
export default CardBody;