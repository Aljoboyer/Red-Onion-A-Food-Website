import React from 'react';
import { Col } from 'react-bootstrap';
import './Food.css';
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';

const Lunchfood = (props) => {
    const {id,name,img,price,details,served} = props.food
    return (
        <Col className="food" lg={4} md={6} sm={12} >
            <img className="img-fluid w-50" src={img} alt="" />
            <div className="div mt-4">
            <h4>{name}</h4>
            <h5>$ {price}</h5>
            <p>{served}</p>
            </div>
            
            <Link to= {`/orderfood/${id}`} ><Button className="order-btn" >Order Food <i className="fas fa-arrow-right"></i></Button>
            </Link>      
    </Col>
    );
};

export default Lunchfood;