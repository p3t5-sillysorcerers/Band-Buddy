import React, { Component } from "react";
// import './style.css';
import { ListGroup } from 'react-bootstrap';


function JamList(props) {
    const musicians = props.musicians;
    const listItems = musicians.map((musicians) =>
      <ListGroup.Item>{musicians}</ListGroup.Item>
    );
    return (
      <ul>{listItems}</ul>
    );
    
  }

export default  JamList;