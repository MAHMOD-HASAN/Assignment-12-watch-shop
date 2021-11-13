import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import {  Navbar,  Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {

    const {user, logOut, admin} = useAuth();

    const link_Modify = {
        marginRight : '20px',
        color : 'white',
        textDecoration : 'none',
    }

    return (
        <Navbar bg='dark' collapseOnSelect sticky='top' expand='lg' className='nav-container'>
           <Container>
                <Navbar.Brand className='fw-bold fs-2'>
                   <span className='text-danger me-2'>Watch</span>
                    <span className='text-warning'>Shop</span>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse 
                
                id="responsive-navbar-nav" 
                className="justify-content-end">

                    <Link style={link_Modify} to="/home">Home</Link>

                    {admin && 
                    <Link style={link_Modify} to="/addproduct">Add Product</Link>
                    }
                    
                    {
                        user?.email ?

                        <>
                        <Link style={link_Modify} to="/dashboard">Dashboard</Link>
                        <span style={{color:'white'}}>{user.email}</span>
                        <Button onClick={logOut} variant='danger' size='sm'>Logout</Button>
                        </>

                          :

                        <Link to='/login'>
                            <Button variant='primary' size='sm'>Login</Button>
                        </Link>
                        

                    }
                    
                    

                </Navbar.Collapse>
           </Container>
        </Navbar>
    );
};

export default Header;