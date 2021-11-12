import React, { useEffect, useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const Order = () => {

    const {user} = useAuth();

    const {Id} = useParams();

    const [product, setProduct] = useState({});

    // fetch single product with uniqe id
    useEffect( () => {
        const url = `http://localhost:5000/product/${Id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setProduct(data);
        })
    }, [])

    const defaultOrder = { displayName : user.displayName, email : user.email};
    const [order, setOrder] = useState(defaultOrder);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newOrder = {...order};
        newOrder[field] = value;
        setOrder(newOrder);
       
   }

   const handleOrderSubmit = e => {

    const allInfo = {
        ...order,
        ProductName : product.name,
    }
       e.preventDefault();
       fetch('http://localhost:5000/user', {
           method : 'POST',
           headers : {
               'content-type' : 'application/json'
           },
           body : JSON.stringify(allInfo)
       })
       .then(res => res.json())
       .then(data => {
           if(data.insertedId) {
               alert('order successfull')
           }
       })
       e.target.reset();
   }



    return (
        <Container className='my-5'>
                <h2 className='text-center text-primary'>Order Please</h2>
            <Row>

                   <Col xs='12' md='6' className='mx-auto'>

                        <Form onSubmit={handleOrderSubmit}>

                            <Form.Control 
                            onBlur={handleOnBlur}
                            name="productName"
                            type="text" 
                            defaultValue={product.name}/><br/>

                            <Form.Control 
                            onBlur={handleOnBlur}
                            name="displayName"
                            type="text" 
                            defaultValue={user.displayName}/><br/>
                            
                            <Form.Control 
                            onBlur={handleOnBlur}
                            name="email"
                            type="email" 
                            defaultValue={user.email} /><br/>

                            <Form.Control 
                            onBlur={handleOnBlur}
                            name="phone"
                            type="number" 
                            placeholder="Phone Number" /><br/>

                            <Form.Control 
                            onBlur={handleOnBlur}
                            name="date"
                            type="date" 
                            placeholder="Date" /><br/>

                            <Button type='submit' className='w-100'>Replace Order</Button>

                        </Form>

                  </Col>

            </Row>

        </Container>
    );
};

export default Order;