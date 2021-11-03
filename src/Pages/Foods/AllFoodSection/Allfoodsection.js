import {Button} from 'react-bootstrap';
import React, { useState } from 'react';
import {Col, Nav, Row, Tab, Tabs} from 'react-bootstrap';
import './Allfood.css'
import { Link } from 'react-router-dom';
import Food from '../Food/Food';
import useFood from '../../FoodHook/FoodHook';
const Allfoodsection = () => {
    const {foods,setFoods,pageno,setPageno,foodpages,setFoodpages} = useFood();
    return (
        <div className="container-fluid text-center">
                <Row >
                    <div className="justify-content-center">
                        <div  className=" navitem  ms-3 mt-3">
                            {
                                [...Array(foodpages).keys()].map(number =>
                                <Button key={number} onClick={() => setPageno(number)}  className={number === pageno ? 'selected' : 'itemone'}>
                                {
                                    <div><p>{number === 0 ? 'BreakFast' : ''}</p>
                                    <p>{number === 1 ? 'Lunch' : ''}</p>
                                    <p>{number === 2 ? 'Dinner' : ''}</p>
                                    </div>
                                    
                                }
                                </Button>)
                            }
                        </div>
                    </div>
                </Row>
                <Row>
                {
                <div>
                    <h1 className="home-title">{pageno === 0 ? 'BreakFast' : ''}</h1>
                    <h1 className="home-title">{pageno === 1 ? 'Lunch' : ''}</h1>
                    <h1 className="home-title">{pageno === 2 ? 'Dinner' : ''}</h1>
                </div>
            }
                    {
                        foods.map(fod => <Food key={fod.id} food={fod}></Food>)
                    }
                </Row>
        <Link to="/yourcart"><Button className="order-btn text-center mt-4" >Checkout Your Food</Button></Link>
    </div>
    );
};

export default Allfoodsection;