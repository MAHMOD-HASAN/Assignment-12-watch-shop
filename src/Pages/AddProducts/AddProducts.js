import React, { useState } from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import Footer from '../Home/Shared/Footer';
import Header from '../Home/Shared/Header';


const AddProducts = () => {
    const [product, setProduct] = useState({});
    
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newProduct = {...product};
        newProduct[field] = value;
        setProduct(newProduct);
    }

    const handleAddProduct = e => {

        e.preventDefault();
        fetch('http://localhost:5000/product', {
             method : 'POST',
             headers : {
                 'content-type' : 'application/json'
             },
             body : JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId) {
                alert('successfully added product');
            }
         
        })

        e.target.reset();
    }

    return (
        <div>

          <Header></Header>

           <Container className='my-5'>
            
                   <h3 className='text-primary text-center'>Add Product</h3>

                    <Row>

                         <Col xs='12' md='6' className='mx-auto'>

                                <Form onSubmit={handleAddProduct}>

                                <Form.Control 
                                onBlur={handleOnBlur}
                                name="name"
                                type="text" 
                                placeholder="Watch Name" /><br/>
                                
                                <Form.Control 
                                onBlur={handleOnBlur}
                                name="price"
                                type="number" 
                                placeholder="Watch Price" /><br/>

                                <Form.Control 
                                onBlur={handleOnBlur}
                                name="stock"
                                type="number" 
                                placeholder="Stock" /><br/>

                                <Form.Control 
                                onBlur={handleOnBlur}
                                name="img"
                                type="text" 
                                placeholder="img-url" /><br/>

                                <Form.Control 
                                onBlur={handleOnBlur}
                                name="description"
                                as='textarea'
                                placeholder="description" /><br/>
                                
                                <Button type='submit' className='w-100'>Submit</Button>

                                </Form>

                         </Col>

                   </Row>

               </Container>

            <Footer></Footer>

        </div>
    );
};

export default AddProducts;