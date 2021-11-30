import React, { useEffect, useState } from 'react';
import {Row, Table} from 'react-bootstrap'
import Allorder from './Allorder';
const Manageorder = () => {
    const [allorder, setAllorder] = useState([]);
    const [neworder, setNeworder] = useState([])
    useEffect(() => {
        fetch('https://frozen-everglades-12066.herokuapp.com/allorder')
        .then(res => res.json())
        .then(data => setAllorder(data))
    },[neworder])

    const OrderAcceptHandler = (id) => {
        const newstatus = {status: 'Approved'} 
        fetch(`https://frozen-everglades-12066.herokuapp.com/allorders/${id}`,{
            method: 'PUT',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(newstatus)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount)
            {
                const foods =[...allorder]
                setNeworder(foods)
            }
        })
    }
    return (
        <div className="container-fluid">
            <Table responsive striped bordered hover size="sm">
            <thead>
                <tr>
                <th>Food Name</th>
                <th>User Name/Number/Location</th>
                <th>Order Date</th>
                <th>Status</th>
                <th>Delivered Food</th>
                <th>Reject Order</th>
                </tr>
            </thead>
            <tbody>
                {
                    allorder.map(order => <Allorder OrderAcceptHandler={OrderAcceptHandler} key={order._id} order={order} ></Allorder>)
                }
            </tbody>
      </Table>
        </div>
    );
};

export default Manageorder;