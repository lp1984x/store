import React from "react";
import { Container } from "react-bootstrap";

export default function About() {
  return (
    <Container>
      <p className="text-center h1">About</p>
      <Container className="d-flex justify-content-center">
        <div>
          This App is made by Lp84 with:
          <ul>
            <li>dummyJSON</li>
            <li>react</li>
            <li>typescript</li>
            <li>redux-toolkit</li>
            <li>react-bootstrap</li>
            <li>material-ui</li>
            <li>scss</li>
          </ul>
        </div>
      </Container>
    </Container>
  );
}
