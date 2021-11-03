import React from 'react';
import { Col, Row,Button } from 'react-bootstrap';

const Finalorder = ({order,DeleteHanlder}) => {
    return (
        <Row className="g-3">
            <Col className="text-center" lg={3} sm={12} md={3}>
                <h3 className="text-center fw-bold">Food</h3>
                {
                    order.food?.map(item =>
                         <Row className="text-center">
                             <img className="w-25 mx-auto" src={item.img} alt="" />
                             <h5>{item.name}</h5>
                             <p>Quantity{item.quantity}</p>
                         </Row>)
                }
            </Col>
            <Col className="text-center" lg={3} sm={12} md={3}>
                 <h3 className="text-center fw-bold">Order Date</h3>
                 {order.OrderedAt}
            </Col>
            <Col  className="text-center" lg={3} sm={12} md={3}>
                <h3 className="fw-bold">Status</h3>
                <h5>{order.status}</h5>
            </Col>
            <Col className="text-center" lg={3} sm={12} md={3}>
                <Button onClick={() => DeleteHanlder(order._id)} className="btn btn-danger">Cancel Order</Button>
            </Col>
        </Row>
    );
};

export default Finalorder;