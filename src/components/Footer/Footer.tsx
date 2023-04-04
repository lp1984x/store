import React from "react";
import { Container, Navbar } from "react-bootstrap";

export default function Footer() {
  return (
    <Navbar className="py-5 bg-dark">
      <Container className="text-center text-white d-flex justify-content-center">
        Copyright &copy; lp84 2022
      </Container>
    </Navbar>
  );
}
