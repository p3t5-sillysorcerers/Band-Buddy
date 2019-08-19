import React, { Component } from "react";
// import './style.css';
import { ListGroup, ListGroupItem, Button } from 'react-bootstrap';


function JamList(props) {
    const musicians = props.musicians;
    const listItems = musicians.map((musicians) =>
      <ListGroupItem>{musicians}</ListGroupItem>
    );
    return (
      <ul>{listItems}</ul>
    );
    
  }

export default  JamList;