import React, { Component } from "react";
import { ListGroup } from 'react-bootstrap';


function JamList(props) {
    const musicians = props.musicians;
    const listItems = musicians.map((musicians,i) =>
      <ListGroup.Item key={i} >{musicians}</ListGroup.Item>
    );
    return (
      <ul>{listItems}</ul>
    );
  }

export default  JamList;
