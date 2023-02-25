import React from "react";
import { Button, Card } from "react-bootstrap";

import { IProd } from "../../models";

interface ProdProps {
  prod: IProd;
}

export default function Products({ prod }: ProdProps) {
  return (
    <Card className="col-3">
      <Card.Img variant="top" src={prod.images[0]} className="thumbnail" />
      <Card.Body>
        <Card.Title>{prod.title}</Card.Title>
        <Card.Title>{prod.rating}</Card.Title>
        <Card.Text>{prod.description}</Card.Text>
        <Card.Title>{prod.price}$</Card.Title>
        <Button variant="primary">add to cart</Button>
      </Card.Body>
    </Card>
  );
}
