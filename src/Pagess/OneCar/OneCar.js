import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const OneCar = (props) => {
    const {_id,image, price, name} = props.car;
    const history = useHistory();

    const handleBooking = () =>{
        history.push(`/purchase/${_id}`)
    }
    return (
        <div>
            <Col>
                <Card>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>$ {price}</Card.Text>
                </Card.Body>
                <Card.Footer>
                <button onClick={handleBooking} className="btn-style">purchase </button>
                </Card.Footer>
                </Card>
            </Col>
        </div>
    );
};

export default OneCar;