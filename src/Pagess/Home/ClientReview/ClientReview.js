import './ClientReview.css';
import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';


const ClientReview = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data=> setReviews(data))
    },[])
    return (
    <div className="review-part">
    <h1>Client Reviews</h1>
    <Row xs={1} md={3} className="g-4">
        {
            reviews.map(review => <div>
                <Col>
                <Card>
                    <Card.Body>
                    <Card.Title>{review.name}</Card.Title>
                    <Card.Text>{review.feedback}</Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            </div>)
        }
    </Row>

    </div>
    );
};

export default ClientReview;