import { useEffect, useState } from "react"
import { LocalstorageData } from "../Localstorage/Localstorage";

const useCart = () => {
    const [cart,setCart] = useState([]);
    let SavedCart = LocalstorageData();
    const keys = Object.keys(SavedCart)
    console.log('this is', keys)
    useEffect(() => {
        fetch('http://localhost:5000/foods/keys', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(keys)
        })
        .then(res => res.json())
        .then(foods => {
            
            if(foods.length)
        {
            
            const NewCart = []
        
            for(const key in SavedCart)
            {
                
                
                const NewFood = foods.find(food => food.key === key)
                
                if(NewFood)
                {
                    let Quantity = SavedCart[key];
                    NewFood.quantity = Quantity;
                    NewCart.push(NewFood)
                }
            }
            setCart(NewCart)
            
        }
        })
    },[])

    return [cart,setCart];
}

export default useCart;

