import React from 'react';
import { Row } from 'react-bootstrap';

const Finalcart = (props) => {
    const {price,name,img,quantity} = props.food
    
    return (
        <Row>
            <img className="w-25" src={img} alt="" />
            <h5>{name}</h5>
            <h6>Quantity : {quantity}</h6>
            <p>{price}</p>
        </Row>
    );
};

export default Finalcart;