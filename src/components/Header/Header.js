import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './header.css'

const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">HASAN ALI</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">About Me</Nav.Link>
                            <Nav.Link href="#pricing">Contact Me</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;