import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, FormControl, InputGroup, Row } from 'react-bootstrap';
import Choosus from '../ChooseUs/Choosus';
import Allfoodsection from '../Foods/AllFoodSection/Allfoodsection';
import './home.css'
const Home = () => {
    return (
        <div className="container-fluid" >
             <div className="homerow d-flex justify-content-center ">
                <Row className="rowtow ">
                    <Col  lg={12} >
                        <h1 className="home-title">
                            Food shared is happiness multiplied</h1>
                        <h1 className="home-titletwo text-center">So,Count memories, not calorie</h1>
                        <h5 className="text-center">We provide Healthy and Fresh Food</h5>
                        <InputGroup className="mb-3 w-100 ">
                     <FormControl className="forms"
                    placeholder="Search Your Favorite item"
                        aria-label="Recipient's username"
                     aria-describedby="basic-addon2"
                />
                <Button className="search-btn">
                Button
                </Button>
             </InputGroup>
                    </Col>
                </Row>
            </div>
            <Allfoodsection></Allfoodsection>
            <Choosus></Choosus>
        </div>
    );
};

export default Home;