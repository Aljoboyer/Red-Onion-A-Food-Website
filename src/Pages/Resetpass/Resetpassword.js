import React, { useState } from 'react';
import {Container, FormControl, InputGroup, Row,Button} from 'react-bootstrap'
import useAuth from '../../Context/useAuth';
const Resetpassword = () => {
    const {PasswordReset} = useAuth();
    const [email,setEmail] = useState('')
    const [success, setSuccess] = useState('')
    const HandlePassword = () => {

            PasswordReset(email)
            setSuccess('Email is sent Please Check to Reset Your Password')
    }
    const inputTextHandle = (e) => {
        setEmail(e.target.value)
    }
    return (
        <Container className="d-flex bg-dark justify-content-centerds mb-4 mt-4 rounded">
            <Row>
                 <h2 className="text-warning mb-2 mt-2 text-center" >Please Enter Your Email to Reset Your Password</h2>
                 <h4 className="text-success fw-bold" >{success}</h4>
                 <InputGroup className="mb-3 mt-3 mx-auto w-75">
                        <Button onClick={HandlePassword} className="text-dark fs-bold bg-warning"  id="inputGroup-sizing-default">Submit</Button>
                        <FormControl onBlur={inputTextHandle}
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                        />
                    </InputGroup>
                 </Row>
             
        </Container>
    );
};

export default Resetpassword;