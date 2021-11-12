import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Spinner, Alert } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Register = () => {

    const {registerUser, loading, user, error, setError} = useAuth();
    const [userData, setUserData] = useState({});
    const history = useHistory();

    const handleOnBlur = e => {
         const field = e.target.name;
         const value = e.target.value;
         const newData = {...userData};
         newData[field] = value;
         setUserData(newData);
        
    }

    const handleLoginSubmit = e => {
       
        if(userData.password !== userData.password2) {
            setError('password did not match. Please enter similar password');
            return;
        }else if(userData.password.length < 6) {
            setError('password should be at least 6 character');
            return;
        }

        registerUser(userData?.email, userData?.password, userData.name, history);
        e.preventDefault();
    }


    return (
        <Container className='my-5'>
        <h3 className='text-primary text-center'>Register</h3>
        <Row>
            <Col xs='12' md='6' className='mx-auto'>
               {!loading && <Form onSubmit={handleLoginSubmit}>

                
                <Form.Control 
                onBlur={handleOnBlur}
                name="name"
                type="text" 
                placeholder="Your Name" /><br/>

                <Form.Control 
                onBlur={handleOnBlur}
                name="email"
                type="email" 
                placeholder="Enter email" /><br/>
                
                <Form.Control 
                onBlur={handleOnBlur}
                name="password"
                type="password" 
                placeholder="Your Password" /><br/>

                <Form.Control 
                onBlur={handleOnBlur}
                name="password2"
                type="password" 
                placeholder="Re-type Password" /><br/>

                <Button className='w-100' type="submit">Register</Button>
                <br/><br/>

                <Link style={{
                    textDecoration:'none',
                    fontWeight : '500',
                    fontSize : '20px',
                    textTransform : 'uppercase',
                }}
                    to='/login'>
                    Already Registered ??</Link>
                <br/><br/>
              
                </Form>  }

                {loading && <Spinner animation="border" />}

                {user?.email && <Alert variant='success'>
                    Yoo.. successfully registered !!</Alert>}

                {error && <Alert variant='danger'>{error}</Alert>}
            </Col>
        </Row>
    </Container>
    );
};

export default Register;