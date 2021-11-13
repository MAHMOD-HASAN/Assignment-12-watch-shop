import { Rating } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/review')
        .then(res => res.json())
        .then(data => {
            setReviews(data);
        })
    }, [])
    return (
        <Container className='text-center my-3'>
            <h3 className='text-danger'>Customer Review</h3>
            <Row xs={1} md={2} lg={3}>
                {
                    reviews.map(review => <div key={review.img}>
                         <Col className='border border p-3'>
                            <img 
                            width = '150px'
                            height = '150px'
                            style={{borderRadius : '50%'}}
                            src={review.img} alt="" />
                            <h3>{review.displayName}</h3>
                            <Rating name="read-only" value={review.star} readOnly />
                            <p align='left'>{review.description}</p>
                         </Col>
                    </div>)
                }
            </Row>
        </Container>
    );
};

export default Reviews;