import React, { useEffect, useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';
import { Alert } from '@mui/material';

// this is order component

const Order = () => {

    const {user} = useAuth();

    const {Id} = useParams();

    const [product, setProduct] = useState({});
    const [success, setSuccess] = useState(false);

    // fetch single product with uniqe id
    useEffect( () => {
        const url = `http://localhost:5000/product/${Id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setProduct(data);
        })
    }, [Id])

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
        productName : product.name,
        price : product.price,
        img   : product.img,
    }
       
       fetch('http://localhost:5000/order', {
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
               setSuccess(true);
           }
       })
       e.preventDefault();
       e.target.reset();
   }



    return (
        <div>

            <Header></Header>

            
        <Container className='my-5'>
                <h2 className='text-center text-primary'>Order Please</h2>
            <Row>

                   <Col xs='12' md='6' className='mx-auto'>

                        <Form onSubmit={handleOrderSubmit}>

                            <Form.Control 
                            onBlur={handleOnBlur}
                            name="img"
                            type="text" 
                            defaultValue={product.img}/><br/>

                            <Form.Control 
                            onBlur={handleOnBlur}
                            name="product"
                            type="text" 
                            defaultValue={product.name}/><br/>
                            
                            <Form.Control 
                            onBlur={handleOnBlur}
                            name="price"
                            type="number" 
                            defaultValue={product.price} /><br/>

                            <Form.Control 
                            onBlur={handleOnBlur}
                            name="email"
                            type="email" 
                            defaultValue={user.email} /><br/>

                            <Form.Control 
                            onBlur={handleOnBlur}
                            name="date"
                            type="date" 
                            required
                            placeholder="Date" /><br/>

                            <Button type='submit' className='w-100 mb-2'>Replace Order</Button>

                            {success && <Alert severity='success'>Your order successfull</Alert>}
                        </Form>

                  </Col>

            </Row>

        </Container>

        

        <Footer></Footer>

        </div>
    );
};

export default Order;