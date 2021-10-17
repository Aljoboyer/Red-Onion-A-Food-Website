import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import useAuth from '../../Context/useAuth';
import logo from '../../asset/logo2.png';
import {Row, Col} from 'react-bootstrap';
const Register = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const {user,Registeruser,SigninWithGoogle} = useAuth();
    const [error,setError] = useState('');
    const GooglesingInHandler = () => {
        SigninWithGoogle()
    }
    const onSubmit = data => {
        console.log(data)
        const {name,url,email,password,ReEnterPassword} = data;
        if(password === ReEnterPassword)
        {
            Registeruser(email,password,name,url)
        
        }
        else{
            setError('Password Doesnt Match')
        }
    }
    return (
    <div className="container-fluid">
        <Row className="justify-content-center mt-4">
            <Col lg={6} md={12} sm={12}>
               {
                   user.email ? <h2>Successfully Registered <i class="far fa-check-circle fa-4x"></i></h2> :  <form onSubmit={handleSubmit(onSubmit)}>
                   <h2 className="title">Create <img className="w-25  mb-4" src={logo} alt="" /> Account</h2>
                               <label htmlFor="">Name</label>
                               <input className="w-100" type ="text" {...register("name", { required: true })} />
                           {errors.name && <p className="text-danger">This field is required</p>}
                           <label htmlFor="">Set Your Photo Url</label>
                           <input className="w-100" type ="text" {...register("url", { required: true })} />
                           {errors.url && <p className="text-danger">This field is required</p>} 
                           <label htmlFor="">Email</label>
                           <input className="w-100" type="email" {...register("email", { required: true })} />
                           {errors.email && <p className="text-danger">This field is required</p>}

                           <label htmlFor="">Password</label>
                           <input className="w-100" type ="password" {...register("password", { required: true,pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/, min: 6,  })} />
                           {errors.password && <p className="text-danger">should contain at least one digit,one lower case,one upper case,8 from the mentioned characters</p>}

                           <label htmlFor="">Re-Enter Password</label>
                           <input className="w-100" type ="password" {...register("ReEnterPassword", { required: true, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/, min: 6 })} />
                           {errors.ReEnterPassword && <p className="text-danger">should contain at least one digit,one lower case,one upper case,8 from the mentioned characters</p>}
                           <p className="text-danger" >{error}</p>
                           
                       <input className="mb-3" type="submit" value="Sign Up" />
                       <h5 className="mb-3 text-dark fw-bold">Register in with</h5>
                       <i  className=" fab fa-facebook fa-3x"></i>
                       <i onClick={GooglesingInHandler}  className="ms-2 mb-2 fab fa-google fa-3x"></i>
                       <p className="mb-3 mt-3">Already Have an Account ?</p>
                       <p className="fs-5 fw-bold" ><Link to="/login" >Log in</Link></p>
               </form>
               }
            </Col>
        </Row>
   </div>
    );
};

export default Register;

