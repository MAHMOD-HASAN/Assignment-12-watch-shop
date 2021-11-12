import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import { Form, Button, Container, Row, Col, Alert, Spinner } from 'react-bootstrap';

const Login = () => {
    // when user login first time 
    // his or her data will be store this state
    const [userData, setUserData] = useState({});

    const {loginUser, user, loading, error, signInWithGoogle} = useAuth();

    const history = useHistory();
    const location = useLocation();

    const handleOnBlur = e => {
         const field = e.target.name;
         const value = e.target.value;
         const newData = {...userData};
         newData[field] = value;
         setUserData(newData);
    }

    const handleLoginSubmit = e => {
         e.preventDefault();
         loginUser(userData?.email, userData?.password, location, history);
         console.log(userData);
    }


    return (
        <Container className='my-5'>

            <h3 className='text-primary text-center'>Login</h3>

            <Row>

                <Col xs='12' md='6' className='mx-auto'>

                {!loading && <Form onSubmit={handleLoginSubmit}>

                    <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                    onBlur={handleOnBlur}
                    name="email"
                    type="email" 
                    placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                    onBlur={handleOnBlur}
                    name="password"
                    type="password"
                    placeholder="Password" />
                    </Form.Group>

                    <Button type='submit' className='w-100'>Login</Button>
                    <br/><br/>

                    {user?.email && <Alert variant='success'>Login success .</Alert>}

                    <Link style={{
                        textDecoration:'none',
                        fontWeight : '500',
                        fontSize : '20px',
                        textTransform : 'uppercase',
                      }}
                        to='/register'>
                        New User ?? Please Register</Link>
                    <br/><br/>


                    <Button onClick={() => signInWithGoogle(location, history)} className='w-100' variant='danger'>Google Sign In</Button>

                 </Form>}
                  
                   

                    {loading && <Spinner animation="border" />}
                    
                    {error && <Alert>{error}</Alert>}
                </Col>
            </Row>
        </Container>
       
    );
};

export default Login;