import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Logo from '../../asset/logo2.png';
import './Header.css'
import {Link,useHistory} from 'react-router-dom';
import useAuth from '../../Context/useAuth';

const Header = () => {
    const {setUser,user,Logout} = useAuth();
    const history = useHistory()
    const LogOutHandler = () => {
        Logout()
        .then(() => {
            setUser({})
            history.push('/')
          }).catch((error) => {
            // An error happened.
          })
    } 
    return (
<Navbar sticky="top"  collapseOnSelect expand="lg" className="navs">
        <Container>
            <Navbar.Brand href="#home"><img width="150px" src={Logo} alt="" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link className="fw-bold navss" as={Link} to="/" >Home</Nav.Link>
                {
                    user.email ? <><Nav.Link className="fw-bold navss" as={Link} to="/yourcart">Your Cart <i className="fas fa-cart-plus"></i></Nav.Link>
                    <Nav.Link className="fw-bold navss" as={Link} to="/yourorder">Your Ordered Food</Nav.Link></> : ''
                }
                {
                    user.email === 'admin@gmail.com'  ? <Nav.Link  className="fw-bold navss" as={Link} to="/manageorder">Manageorder</Nav.Link> : ''
                }
                </Nav>
                <Nav>
                    {
                        user.email ? <Nav> <small className="mt-2"><b>{user.displayName}</b></small> <img width="50px"  src={user.photoURL} alt="" /> <Nav.Link className="fw-bold logout text-light" onClick={LogOutHandler}>Log Out</Nav.Link></Nav> : <Nav><Nav.Link className="fw-bold login me-2 text-light" as={Link} to="/login">Log in</Nav.Link>
                        <Nav.Link className="fw-bold register text-light" as={Link} to="/register">Sign Up</Nav.Link></Nav>
                    }
                </Nav>
            </Navbar.Collapse>
    </Container>
</Navbar>
    );
};

export default Header;