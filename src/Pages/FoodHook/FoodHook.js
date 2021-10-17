import { useEffect, useState } from "react";

const useFood = () => {
    const [foods,setFoods] = useState([]);
    useEffect(() => {
      fetch('https://aljoboyer.github.io/food.JSON')
      .then(res =>  res.json())
      .then(data => setFoods(data))
    },[])

    return [foods,setFoods]
}

export default useFood;