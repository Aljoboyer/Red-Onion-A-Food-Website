import { useEffect, useState } from "react"
import { LocalstorageData } from "../Localstorage/Localstorage";

const useCart = (foods) => {
    const [cart,setCart] = useState([]);

    useEffect(() => {
        if(foods.length)
        {
            let SavedCart = LocalstorageData();
            const NewCart = []
        
            for(const key in SavedCart)
            {
                let newkey = parseInt(key)
                
                const NewFood = foods.find(food => food.id === newkey)
                
                if(NewFood)
                {
                    let Quantity = SavedCart[key];
                    NewFood.quantity = Quantity;
                    NewCart.push(NewFood)
                }
            }
            setCart(NewCart)
            
        }
    },[foods])

    return [cart,setCart];
}

export default useCart;