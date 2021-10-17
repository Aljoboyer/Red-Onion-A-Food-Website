import {Button} from 'react-bootstrap';
import React, { useState } from 'react';
import {Col, Nav, Row, Tab, Tabs} from 'react-bootstrap';
import Breakfast from '../Breakfast/Breakfast';
import Dinner from '../Dinner/Dinner';
import Lunch from '../Lunch/Lunch';
import './Allfood.css'
import { Link } from 'react-router-dom';
const Allfoodsection = () => {
    return (
        <div className="container-fluid text-center">
            <Tab.Container  defaultActiveKey="first">
                <Row >
                    <Nav className="justify-content-center">
                        <Nav.Item   className=" navitem  ms-3 mt-3">
                        <Nav.Link  className="itemone" eventKey="first">BreakFast</Nav.Link>
                        </Nav.Item>
                        <Nav.Item  className="  navitem  ms-3 mt-3">
                        <Nav.Link className="itemone"  eventKey="second">Lunch</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className=" navitem  ms-3 mt-3">
                        <Nav.Link className="itemone"  eventKey="third">Dinner</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Row>
                <Row>
                    <Tab.Content className="" >
                        <Tab.Pane eventKey="first">
                            <h1 className="titletwo text-center mt-4 mb-4">BreakFast Manu</h1>
                            <Breakfast></Breakfast>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                        <h1 className="titletwo text-center mt-4 mb-4">Lunch Manu</h1>
                        <Lunch></Lunch>
                        </Tab.Pane>
                        <Tab.Pane  eventKey="third">
                        <h1 className="titletwo text-center  mt-4 mb-4">Dinner Manu</h1>
                        <Dinner></Dinner>
                        </Tab.Pane>
                    </Tab.Content>
                </Row>
        </Tab.Container>
        <Link to="/yourcart"><Button className="order-btn text-center" >Checkout Your Food</Button></Link>
    </div>
    );
};

export default Allfoodsection;