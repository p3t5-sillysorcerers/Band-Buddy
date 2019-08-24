import React from 'react';
import {ListGroup, Card, Col} from 'react-bootstrap';


function JamSession(props){

return (
  
        <Card>
            <Card.Header>Upcoming Jam Session</Card.Header>
                <ListGroup variant="flush">
                {props.name.map((names, i)=>
                    <ListGroup.Item names={names} key={props.name.id}>{names}</ListGroup.Item>
                )}
                </ListGroup>
        </Card>
  
)
}
export default JamSession;