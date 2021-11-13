import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import OneCar from '../OneCar/OneCar';
import './AllCars.css';

const AllCars = () => {

    const [cars, setCars] = useState([]);
    useEffect( ()=>{

        fetch('https://still-reaches-61574.herokuapp.com/cars')
        .then(res => res.json())
        .then(data => setCars(data))

    },[]);
    
    return (
        <div className="cars-wraps">
            <div className="cars-container">
                <h1 className="title">Our Car Collection</h1>
            <Row xs={1} md={3} lg={3} className="g-4">
                {
                    cars.map(car => <OneCar
                        key={car._id} 
                        car={car}
                        ></OneCar>)
                }
            </Row>
            </div>
        </div>
    );
};

export default AllCars;