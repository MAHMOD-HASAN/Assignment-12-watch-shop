import { Alert } from '@mui/material';
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';


const Review = () => {


    const [review, setReview] = useState({});
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newReview = {...review};
        newReview[field] = value;
        setReview(newReview);
    }

    const handleOrderSubmit = e => {

           fetch('https://safe-crag-74905.herokuapp.com/review', {
               method : 'POST',
               headers : {
                   'content-type' : 'application/json'
               },
               body : JSON.stringify(review)
           })
           .then(res => res.json())
           .then(data => {
               if(data.insertedId) {
                   setSuccess(true);
               }
           })
           e.preventDefault();
           e.target.reset();
    }


    return (

        <Container className='my-5'>

            <h2 className='text-center text-primary'>Give Feedback</h2>

            <Row>

                <Col xs='12' md='6' className='mx-auto'>

                <Form onSubmit={handleOrderSubmit}>

                    <Form.Control 
                    onBlur={handleOnBlur}
                    name="img"
                    type="text" 
                    placeholder='img-url'/><br/>

                    <Form.Control 
                    onBlur={handleOnBlur}
                    name="displayName"
                    type="text" 
                    placeholder='Your Name'/><br/>
                    
                    <Form.Control 
                    onBlur={handleOnBlur}
                    name="star"
                    type="number" 
                    placeholder='Rating' /><br/>

                    <Form.Control 
                    onBlur={handleOnBlur}
                    name="description"
                    as='textarea'
                    required
                    placeholder="description" /><br/>

                    <Button type='submit' className='w-100 mb-2'>SUBMIT</Button>

                    {success && <Alert severity="success">Thank you for Feedback</Alert>}

                 </Form>
                
              </Col>

           </Row>

        </Container>
    );
};

export default Review;
