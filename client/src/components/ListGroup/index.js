import React, { Component } from "react";
// import './style.css';
import { ListGroup, ListGroupItem } from 'react-bootstrap';


class list extends Component{

    render(){
        return(

            <ListGroup>
                <ListGroup.Item>Band Buddy 1</ListGroup.Item>
                <ListGroup.Item>Band Buddy 2</ListGroup.Item>
                <ListGroup.Item>Band Buddy 3</ListGroup.Item>
                <ListGroup.Item>Band Buddy 4</ListGroup.Item>
            </ListGroup>
        )
    }

}

export default ListGroup;