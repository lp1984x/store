import { Rating } from "@mui/material";
import { Button, Card } from "react-bootstrap";

import { IProd } from "../../models";

interface ProdProps {
  prd: IProd;
}

export default function Product({ prd }: ProdProps) {
  return (
    <Card className="col-3 m-3">
      <Card.Img variant="top" src={prd.images[0]} className="thumbnail" />
      <Card.Body>
        <Card.Title>{prd.title}</Card.Title>
        <Rating name="read-only" value={prd.rating} precision={0.1} readOnly />
        <Card.Text>{prd.description}</Card.Text>
        <Card.Title>{prd.price}$</Card.Title>
        <Button variant="primary">add to cart</Button>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">{prd.category}</small>
      </Card.Footer>
    </Card>
  );
}
