import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartIcon from "../Cart/CartIcon";

export default function NavBar() {
  return (
    <Navbar bg="light" expand="lg" className="sticky-top">
      <Container>
        <Navbar.Brand href="#home">Shop in style</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" href="#home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="about">
              About
            </Nav.Link>
          </Nav>

          <CartIcon />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
