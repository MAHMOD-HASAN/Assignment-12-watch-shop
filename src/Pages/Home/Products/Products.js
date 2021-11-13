import React, {useState, useEffect} from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Products = () => {

    const [products, setProducts] = useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/product')
        .then(res => res.json())
        .then(data => {
            setProducts(data.slice(0, 6));
        })
    }, [])

    

    return (
        <Container className='my-5'>
            <h2 className='text-primary text-center'>Our Products</h2>
            <Row xs='1' md='3' className='g-3'>

                {
                    products.map(product => <div key={product._id}>

                       <Col className='text-center p-3 bg-dark'
                       style={{
                           borderRadius : '10px',
                           color : 'rgb(185, 145, 145)',
                         }}
                       >

                       <img 
                       width = '200px'
                       height= '200px'
                       src={product.img} alt="" />

                       <h3>{product.name}</h3>

                       <span className='fs-4'>price : $ {product.price}</span>
                       &nbsp;&nbsp;&nbsp;
                       <span className='fs-4'>stock : {product.stock}</span>

                       <p>{product.description}</p>

                       <Link to={`/orders/${product._id}`} style={{textDecoration : 'none'}}>

                       <Button variant='danger'
                        size='sm' className='w-50'
                        >Purchase</Button>

                       </Link>

                       </Col>

                    </div>)
                }
                
            </Row>
            <Link to='/explore' style={{textDecoration : 'none'}}>
                <Button variant='warning' style={{width : '300px'}}
                className='d-block mx-auto mt-2'>Explore More
                </Button>
            </Link>

        </Container>
    );
};

export default Products;