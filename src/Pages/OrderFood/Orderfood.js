import React, { useState } from 'react';
import { useParams } from 'react-router';
import useFood from '../FoodHook/FoodHook';
import {Col, Row} from 'react-bootstrap';
import './Orderfood.css'
import Cart from '../Cart/Cart';
import { AddingLocalStorage, RemoveFoodLocalstorage } from '../Localstorage/Localstorage';
import useCart from '../Usecart/useCart';

const Orderfood = () => {
    const [foods,setFoods] = useFood();
    const [cart,setCart] = useCart(foods);
   const {foodID} = useParams();
   const ID = parseInt(foodID);
   let OrderedFood = foods.find(food => food.id === ID)
    
    const AddHandler = (food) => {
        setCart([...cart,food])

        //adding localstorage
        AddingLocalStorage(food.id)
    }
    const MinusHandler = (food) => {
        cart.pop()
        const newCart = [...cart]
        setCart(newCart)
        RemoveFoodLocalstorage(food.id)
    }
    return ( 
        <div className="container-fluid " >
                    {
                        OrderedFood ?             <Row>
                             <Col className="mt-4 "  lg={3} md={4} sm={12}>
                            <Cart cart={cart}></Cart>
                        </Col> 
                        <Col lg={9} md={8} sm={12}>
                            <Row className="align-items-center" >
                                 <Col lg={7} md={12} sm={12}>
                                    <h1 className="title fw-bold" >{OrderedFood.name}</h1>
                                    <p><b>{OrderedFood.details}</b></p>
                                    <h3>$ {OrderedFood.price}</h3>
                                    <i onClick={() => AddHandler(OrderedFood)} className="fas fa-plus-square fa-3x"></i>
                                    <i onClick={() => MinusHandler(OrderedFood)} className="fas fa-minus-square fa-3x ms-3"></i>
                                </Col>
                                <Col lg={5} md={12} sm={12}>
                                    <img className="w-100 mt-2" src={OrderedFood.img} alt="" />
                                </Col>
                            </Row>
                        </Col>
                    </Row> : ''
                    }

        </div>
    );
};

export default Orderfood;