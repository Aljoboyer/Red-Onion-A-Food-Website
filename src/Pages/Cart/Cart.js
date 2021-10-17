import React from 'react';
import {Row} from 'react-bootstrap';
import createUtilityClassName from 'react-bootstrap/esm/createUtilityClasses';
import { Link } from 'react-router-dom';
import useFood from '../FoodHook/FoodHook';
import useCart from '../YourCart/Yourcart';
const Cart = (props) => {
    const {cart} = props;
    let Quantity = 0;
    let amount2 = 0;

        for(const food of cart)
        {
            if(!food.quantity)
            {
                food.quantity = 1;
            }
            Quantity = food.quantity + Quantity;
            amount2 =amount2 + food.price * food.quantity
        }
   
   
    return (
        <Row>
             {
                cart.length ? <div><h1 className="title"><b>Your Food Cart</b></h1>
                <h3><b>Item Orderd : { Quantity }</b></h3>
                <h4><b>Amount : $ {amount2}</b></h4>
                <Link to="/yourcart"><input  type="submit" value="Place Order" /></Link>
                </div> : <h2 className="title">No Item Added</h2>
             }
        </Row>
    );
};

export default Cart;