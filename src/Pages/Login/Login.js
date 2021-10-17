import React from 'react';
import { useForm } from "react-hook-form";
import { Link ,useLocation,useHistory} from 'react-router-dom';
import './login.css';
import useAuth from '../../Context/useAuth';
import Logo from '../../asset/logo2.png';
import { Col, Row } from 'react-bootstrap';
const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const {setError,setIsloading,setUser,error,SigninWithGoogle,LoginWithEmailandPassword} = useAuth();
    const History = useHistory();
    const location = useLocation();
    const Redirectui = location.state?.from  || '/';

    const onSubmit = data => {

        const {email,password} = data;
        setIsloading(true)
        LoginWithEmailandPassword(email,password)
        .then((result) => {
            const user = result.user;
            setUser(user)
           History.push(Redirectui)
        })
        .catch((error) => {
            setError('Your Email or Password is wrong')
        }).finally(() => setIsloading(false))
    }
    const GooglesingInHandler = () => {
        setIsloading(true)
        SigninWithGoogle()
        .then((result) => {
            const user = result.user;
            setUser(user)
            History.push(Redirectui)
        }).finally(() => setIsloading(false))
    }
    return (
    <div className="container-fluid">
        <Row className="justify-content-center" >
            <Col lg={8} md={10} sm={12} >
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2 className="title">Log-in</h2>
                <img className="w-25 mb-4" src={Logo} alt="" />
                <p className="text-danger"><b>{error}</b></p>
                        <label htmlFor="">Email</label>
                        <input className="w-100" type="email" {...register("email", { required: true })} />
                        <label htmlFor="">Password</label>
                        <input className="w-100" type ="password" {...register("password", { required: true })} />
                        <p><i className=""></i></p>

                        {errors.exampleRequired && <span>This field is required</span>}
        
                        <input type="submit" value="Login" />
                </form>
                <Link to="/reset" className="fs-bold" ><b>Forgot Password ?</b></Link>
                <p><i className="mt-3 mb-2 text-center far fa-circle fa-2x">R</i></p>
                    <h5 className="mb-3 text-dark fw-bold">Sign in with</h5>
                    <i  className=" fab fa-facebook fa-3x"></i>
                    <i onClick={GooglesingInHandler}  className="ms-2 fab fa-google fa-3x"></i>
                <p className="mt-3" ><small>New to RedOnion?</small></p>
               <p className="fs-5 fw-bold" > <Link to="/register" >Create  Account</Link></p>

            </Col>
        </Row>
    </div>
    );
};

export default Login;