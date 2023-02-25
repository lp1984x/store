import React from "react";
import { Container } from "react-bootstrap";

export default function Header() {
  return (
    <header className="bg-dark py-5 mb-5">
      <Container>
        <div className="text-center text-white">
          <h1 className="display-4 fw-bolder">Shop in style</h1>
          <p className="lead fw-normal text-white-50 mb-0">
            With this shop hompeage template
          </p>
        </div>
      </Container>
    </header>
  );
}
