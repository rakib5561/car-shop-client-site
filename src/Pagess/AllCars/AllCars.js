import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './AllCars.css';

const AllCars = () => {

    const [cars, setCars] = useState([]);

    useEffect(()=>{

        fetch('./fackdb.JSON')
            .then(res => res.json())
            .then(data => setCars(data))
    },[]);

    return (
        <div className="cars-wraps">
            <div className="cars-container">
                <h1 className="title">Our Car Collection</h1>
            <Row xs={1} md={3} lg={3} className="g-4">
                {
                    cars.map(car => <div>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={car.image} />
                            <Card.Body>
                            <Card.Title>{car.name}</Card.Title>
                            <Card.Text>$ {car.price}</Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <button className="btn-style">purchase </button>
                            </Card.Footer>
                        </Card>
                        </Col>
                    </div>)
                }
            </Row>
            </div>
        </div>
    );
};

export default AllCars;