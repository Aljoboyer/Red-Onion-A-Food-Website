const AddingLocalStorage = (key) => {
    let exists = localStorage.getItem('food-cart')
    let foodCart = {};
    if(exists)
    {
        foodCart = JSON.parse(exists)
        if(foodCart[key])
        {
            let newkey = foodCart[key] + 1;
            foodCart[key] = newkey;
        }
        else{
            foodCart[key] = 1
        }
    }
    else{
        foodCart[key] = 1
    }
    const newFoodCart = JSON.stringify(foodCart)
    localStorage.setItem('food-cart',newFoodCart)
}
const RemoveFoodLocalstorage = (key) => {
    let exists = localStorage.getItem('food-cart')
    let foodCart = {};
    if(!exists)
    {
        foodCart[key] = 1
    }
    else{
        foodCart = JSON.parse(exists)
        if(foodCart[key])
        {
            delete foodCart[key]
        }
        else{
            foodCart[key] = 1
        }
       
    }
    const newFoodCart = JSON.stringify(foodCart)
    localStorage.setItem('food-cart',newFoodCart)
}
const LocalstorageData = () => {
    const exists = localStorage.getItem('food-cart');
    return exists ? JSON.parse(exists) : '';
}
const ClearLocalStorage = () => {
    localStorage.removeItem('food-cart');
}
export {AddingLocalStorage,RemoveFoodLocalstorage,LocalstorageData,ClearLocalStorage}