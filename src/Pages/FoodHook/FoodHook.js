import { useEffect, useState } from "react";

const useFood = () => {
    const [foods,setFoods] = useState([]);
    const [foodpages, setFoodpages] = useState(0);
    const [pageno, setPageno] = useState(0)
    const size = 6;
    useEffect(() => {
      fetch(`https://frozen-everglades-12066.herokuapp.com/foods?page=${pageno}&&size=${size}`)
      .then(res =>  res.json())
      .then(data => {
        setFoods(data.foods)
        const count = data.count;
        const newpage = Math.ceil(count / size);
        setFoodpages(newpage)
      })
    },[pageno])

    return {
      foods,
      setFoods,
    pageno,
    setPageno,
    foodpages,
    setFoodpages
  }
}

export default useFood;