import React from 'react';
import { Col, Table } from 'react-bootstrap';

const Allorder = (props) => {
    const {_id,status,OrderedAt,name,url,food,number} = props.order
    return (
                <tr>
                    {
                    food.map(f => <td>{f.name}</td>)
                    }
                <td>{name}/ {url} / {number}</td>
            
                <td>{OrderedAt}</td>
                <td>{status}</td>
                <td><button onClick={() => props.OrderAcceptHandler(_id)} className="btn btn-success text-white" >Order Accept</button></td>
                <td><button className="btn btn-danger text-white" >X</button></td>
                </tr>
    );
};

export default Allorder;