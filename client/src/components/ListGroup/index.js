import React, { Component } from "react";
import { ListGroup } from 'react-bootstrap';
import DeleteBtn from "../DeleteBtn"


function JamList(props) {
    const musicians = props.musicians;
    const listItems = musicians.map((musicians,i) =>
      <ListGroup.Item 
      key={i} >{musicians}
       <DeleteBtn onClick={()=>props.onClick({musicians})}/>
      </ListGroup.Item>
    );
    return (
      <ul>{listItems}</ul>
    );
  }

export default  JamList;
