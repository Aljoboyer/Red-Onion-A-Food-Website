import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import useFood from '../FoodHook/FoodHook';
import { ClearLocalStorage } from '../Localstorage/Localstorage';
import useCart from '../Usecart/useCart';
import Finalcart from './Finalcart';
const Yourcart = () => {
    const  [foods,setFoods] = useFood()
    const [cart,setCart] = useCart(foods);
    const [success, setSuccess] = useState('');
    const [isadd , setIsadd] = useState(true);
    const [icon,setIcon] =  useState('')
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        setCart({})
        ClearLocalStorage()
        setSuccess('Order Successfull')
        setIcon('fas fa-check-circle fa-4x')
        setIsadd(false)
    }
    let total = 0;
    let Quantity = 0;
    if(cart.length)
    {
        for(const item of cart)
    {
        if(!item.quantity)
        {
            item.quantity = 1;
        }
        Quantity = item.quantity + Quantity;
        total =total + item.price * item.quantity
    }
    }
    return (
    <div className="container-fluid">
       {
           cart.length ?  <Row className="mt-4">
           <Col lg={7} >
               
           <form onSubmit={handleSubmit(onSubmit)}>
                  <h2 className="title">Please Fill-Up This Form To Confirm Your Order</h2>
                            
                                <label htmlFor="">Name</label>
                                <input className="w-100" type ="text" {...register("name", { required: true })} />
                               {errors.name && <p className="text-danger">This field is required</p>}
                               <label htmlFor="">Street name And Building no</label>
                               <input className="w-100" type ="text" {...register("url", { required: true })} />
                               {errors.url && <p className="text-danger">This field is required</p>} 
                              <label htmlFor="">Email</label>
                              <input className="w-100" type="email" {...register("email", { required: true })} />
                              {errors.email && <p className="text-danger">This field is required</p>}
      
                              <label htmlFor="">Phone Number</label>
                              <input className="w-100" type ="number" {...register("number", { required: true  })} />
                              {errors.number && <p className="text-danger">This field is required</p>}
                             
                          <input  className="mb-3" type="submit" value="Place Order" />
                        
                  </form>
           </Col>
           <Col lg={5} className="">
               {
                   cart.map(food => <Finalcart key={food.id} food={food} ></Finalcart>)
               }
               <h3 className="fw-bold mt-3">Total: $ {total}</h3>
           </Col>
       </Row>  : <div className="you d-flex justify-content-center align-items-center"><h1 className="title" >{ isadd ? <span>Not Items Added Yet</span>  : <span className="text-success">{success} <i className={icon}></i></span>}</h1></div>
       }
  </div>
    );
};

export default Yourcart;