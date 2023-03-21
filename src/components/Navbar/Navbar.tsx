import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

export default function NavBar() {
  return (
    <Navbar bg="light" expand="lg" className="sticky-top">
      <Container>
        <Navbar.Brand href="#home">Shop in style</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
          </Nav>

          <Button variant="outline-secondary">cart</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
