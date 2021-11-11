import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';


const Header = () => {

    const { user, logOut} = useAuth();
    console.log(user);

    return (
        <div className="header" >
            <Navbar collapseOnSelect expand="lg" variant="light" sticky="top">
            <Container>
                <Navbar.Brand className="nav-logo" as={Link} to="/home">Car Shop</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link className="nav-link" as={Link}  to="/home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                    <Nav.Link as={Link} to="/cars">All Cars</Nav.Link>
                    
                    <Nav.Link as={Link} to="/contact">Contact</Nav.Link>

                    {user.email && <Nav.Link as={Link} to="/basboard">Dasboard</Nav.Link>}

                     {
                        !user.email && <Nav.Link as={Link} to="/login">Login</Nav.Link>
                     }
                     {
                         user.email && <button onClick={logOut}  className="log-out-btn">Log out</button>
                     }
                
                    <Navbar.Text>
                        <img className="userImg" src={user.photoURL} alt="" />
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>  
        </div>
    );
};

export default Header;