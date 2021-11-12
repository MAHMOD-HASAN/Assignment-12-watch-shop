import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <Container className='bg-dark text-white fw-light p-4'>
        <Row xs={1} md={2} lg={3} className='text-center'>

            <Col className='mb-4'>
                <h4>Brand we supply</h4>
                <small>Casio Watch</small><br/>
                <small>Edifice Watch.</small><br/>
                <small>Fossil Watch</small><br/>
                <small>Huawei Watch</small>
            </Col>

            <Col className='mb-4'>
                <h4>Contact  us</h4>
                <small>
                    <i className="fas fa-phone-volume"></i>
                    &nbsp;&nbsp;+00813123 
                </small>
                <br/>

                <small>
                    <i className="fas fa-envelope"></i>
                     &nbsp;&nbsp;gmail
                    </small>
                    <br/>

                <small>
                    <i className="fas fa-map-marker-alt"></i>
                    &nbsp;&nbsp;B-baria tontor 
                    </small>
            </Col>

            <Col>
                <h4>Social</h4>
                <small><i className="fab fa-facebook-square"></i> facebook</small>
                <br />
                <small><i className="fab fa-youtube"></i> youtube</small>
                <br/>
                <small><i className="fab fa-instagram-square"></i> instragram</small>
                <br/>
                <small><i className="fab fa-twitter"></i> twitter</small>
            </Col>
        </Row>
        <small className='text-center d-block text-secondary'>Trusted Company &copy; from 2011</small>
    </Container>
    );
};

export default Footer;