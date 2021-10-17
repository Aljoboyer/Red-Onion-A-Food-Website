import React from 'react';
import { Row } from 'react-bootstrap';
import useFood from '../../FoodHook/FoodHook';
import Lunchfood from './Lunchfood';

const Lunch = () => {
    const [foods,setFoods] = useFood();
    const Lunch = foods.slice(6,12)
    return (
        <Row className="gap-4 justify-content-center mb-4" >
            {
                Lunch?.map(food => <Lunchfood key={food.id} food={food} ></Lunchfood>)
            }
        </Row>
    );
};

export default Lunch;