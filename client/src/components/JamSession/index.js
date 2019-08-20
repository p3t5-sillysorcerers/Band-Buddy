import React from 'react';
import {ListGroup, Card, Col} from 'react-bootstrap';



function JamSession(){

return (
    <Col sm={2}>
        <Card>
            <Card.Header>Upcoming Jam Session</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
        </Card>
    </Col>
)
}

export default JamSession;