import React from 'react';
import { Col, Row ,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFood from '../../FoodHook/FoodHook';

const Food = (props) => {
    const {_id,name,img,price,details,served} = props.food
    const {pageno,setPageno} = useFood();
    return (
        <Col className="food" lg={4} md={6} sm={12} >
          
            <img className="img-fluid w-50" src={img} alt="" />
            <div className="div mt-4">
            <h4>{name}</h4>
            <h5>$ {price}</h5>
            <p>{served}</p>
            </div>
            <Link to= {`/orderfood/${_id}`} ><Button className="order-btn" >Order Food <i className="fas fa-arrow-right"></i></Button>
            </Link>
        </Col>
    );
};

export default Food;