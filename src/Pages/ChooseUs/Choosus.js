import React from 'react';
import {Col, Row} from 'react-bootstrap';
import FastDelivary from '../../asset/Image/adult-blur-blurred-background-687824.png';
import Responser from '../../asset/Image/chef-cook-food-33614.png';
import HomeDelivary from '../../asset/Image/architecture-building-city-2047397.png';
import './choos.css'

const Choosus = () => {
    return (
     <Row>
         <h1 className="title fw-bold fs-1 text-center mt-4 mb-4" >Why You Choose us</h1>
        <Col className="mt-4 p-3" lg={4} md={6} sm={12}>
            <img className="w-75" src={FastDelivary} alt="" />
           <div  className="mt-4">
           <span><i className="fas fa-tachometer-alt fa-2x"></i></span> <h3>Fast Delivery</h3>
            <p>We always keep concern for our customer, That's why we always try to serve our food as fast as Possible.Our Bcause our Every Customer is our guest</p>
        <p className="p"><b>Show more</b> <i className="fas fa-arrow-circle-right"></i></p>
           </div>
        </Col>
        <Col className="mt-4 p-3" lg={4} md={6} sm={12}>
            <img className="w-75" src={Responser} alt="" />
            <div className="mt-4">
            <span><i className="fas fa-concierge-bell fa-2x"></i></span>
            <h3>A Good Auto Responder</h3>
            <p>We Care of our customer, thats why we always say our chef to  cook from heart and keep food test consistence</p>
        <p className="p"><b>Show more</b> <i className="fas fa-arrow-circle-right"></i></p>
            </div>
        </Col>
        <Col className="mt-4 p-3" lg={4} md={6} sm={12}>
            <img className="w-75" src={HomeDelivary} alt="" />
            <div className="mt-4">
            <span><i className="fas fa-shipping-fast fa-2x"></i></span><h3>Home Delivery</h3>
            <p>We have a great food delivery reputation of fast delivery home and Good food.If you can't home just order us we will be in your door.its our honor</p>
        <p className="p"><b>Show more</b> <i className="fas fa-arrow-circle-right"></i></p>
            </div>
        </Col>
     </Row>
    );
};

export default Choosus;