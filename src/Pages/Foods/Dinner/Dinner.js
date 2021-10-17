import React from 'react';
import { Row } from 'react-bootstrap';
import useFood from '../../FoodHook/FoodHook';
import Dinnerfood from './Dinnerfood';

const Dinner = () => {
    const [foods,setFoods] = useFood();
    const Dinner = foods.slice(12,18)
    return (
        <Row className="gap-4 justify-content-center mb-4">
            {
                Dinner.map(food => <Dinnerfood key={food.id} food={food} ></Dinnerfood>)
            }
        </Row>
    );
};

export default Dinner;