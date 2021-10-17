import React from 'react';
import { Row } from 'react-bootstrap';
import useFood from '../../FoodHook/FoodHook';
import BreakfastFood from './BreakfastFood';

const Breakfast = () => {
    const [foods,setFoods] = useFood();
    const Breakfast = foods.slice(0,6)
    return (
        <Row  className="gap-4 mb-4 justify-content-center">
            {
                Breakfast?.map(food => <BreakfastFood key={food.id}
                    food={food}
                    ></BreakfastFood>)
            }
        </Row>
    );
};

export default Breakfast;