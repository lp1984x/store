import React from "react";
import { Container, Nav, NavDropdown, NavItem, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartIcon from "../Cart/CartIcon";
import { addCat } from "../../store/features/catSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { useFetchData } from "../../api/fetch";

export default function NavBar() {
  const { cat } = useFetchData();
  const catF = useAppSelector((state) => state.cat.catValue);
  const dispatch = useAppDispatch();
  return (
    <Navbar bg="light" expand="lg" className="sticky-top">
      <Container>
        <Navbar.Brand href="/">Shop in style</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" href="#home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="about">
              About
            </Nav.Link>
            <NavDropdown
              as={NavItem}
              title="Categories"
              activekey={catF}
              className="d-lg-none"
            >
              <NavDropdown.Item
                eventKey=""
                onClick={() => dispatch(addCat({ category: "" }))}
              >
                All
              </NavDropdown.Item>
              {cat.map((categorie, i) => (
                <NavDropdown.Item
                  key={i}
                  className="link-secondary"
                  onClick={() => dispatch(addCat({ category: categorie }))}
                  eventKey={categorie}
                >
                  {categorie}
                </NavDropdown.Item>
              ))}
              <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav.Item>
            <CartIcon />
          </Nav.Item>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
