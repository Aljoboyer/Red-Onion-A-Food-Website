import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../Context/useAuth';
import {Spinner} from 'react-bootstrap';

const Privateroute = ({children, ...rest}) => {
    const {user,isloading} = useAuth();

    if(isloading)
    {
        return  <Spinner animation="border" variant="dark" />
    }
    return (
        <Route
        {...rest}
        render = {({location}) => user.email ? children : 
    <Redirect
    to={{pathname:'/login',
    state : {from:location}
}}
    ></Redirect>
    }
        >

        </Route>
    );
};

export default Privateroute;