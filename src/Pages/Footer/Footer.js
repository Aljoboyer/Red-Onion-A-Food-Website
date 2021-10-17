import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Logo from '../../asset/logo2.png';
import './footer.css'
const Footer = () => {
    return (
        <div className="container-fluid footers" >
            <Row className="mt-4 mb-2 p-3">
                <Col lg={6} md={6} sm={12}>
                    <img className="w-75" src={Logo} alt="" />
                </Col>
                <Col lg={3} md={3} sm={12}>
                    <p>About Online Food</p>
                    <p>Read Our Blog</p>
                    <p>Add Your Restaurant</p>
                </Col>
                <Col lg={3} md={3} sm={12}>
                    <p>Get Help</p>
                    <p>Read FAQS</p>
                    <p>View all Clients</p>
                </Col>
            </Row>
            <Row className="mt-4 mb-2 justify-content-center  p-3">
                <Col lg={5} md={6} sm={12}>
                    <h3>Follow Us</h3>
                    <i className="fab fa-facebook fa-3x"></i>
                    <i className="fab fa-twitter fa-3x"></i>
                    <i className="fab fa-youtube fa-3x"></i>
                </Col>
               <Col lg={5} md={6} sm={12}>
               <h5>Privacy Policy</h5>
                <h5>Terms And Use</h5>
                <h5>Pricing</h5>
               </Col>
            </Row>
        </div>
    );
};

export default Footer;