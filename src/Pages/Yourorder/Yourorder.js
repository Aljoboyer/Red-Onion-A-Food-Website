import React, { useEffect, useState } from 'react';
import { Col, Row, Spinner } from 'react-bootstrap';
import Finalorder from './Finalorder';
import useAuth from '../../Context/useAuth';
const Yourorder = () => {
    const {user} = useAuth()
    const [yourorders, setYourorders] = useState([]);
    console.log('from',yourorders)
    useEffect(() => {
        fetch(`http://localhost:5000/orderfoods?email=${user.email}`,{
            headers:{
                'authorization':`Bearer ${localStorage.getItem('idtoken')}`
            }
        })
        .then(res => res.json())
        .then(data => setYourorders(data))
    },[user])
    const DeleteHanlder = (id) => {
        fetch(`http://localhost:5000/orderfoods/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0)
            {
                alert('deleted')
            }
        })
    }
    return (
        <div className="container-fluid">
            
            {
                yourorders.message === 'User Not Authorised' ? <Spinner animation="border" variant="dark" /> : <Row>
                {
                    yourorders.map(order => <Finalorder DeleteHanlder={DeleteHanlder} order={order}></Finalorder>)
                }
             </Row>
            }
        </div>
    );
};

export default Yourorder;