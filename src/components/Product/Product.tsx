import { Rating } from "@mui/material";
import { Button, Card } from "react-bootstrap";

import { IProd } from "../../models";
import { addToCart } from "../../store/features/cartSlice";
import { useAppDispatch } from "../../store/store";

interface ProdProps {
  prd: IProd;
}

export default function Product({ prd }: ProdProps) {
  const dispatch = useAppDispatch();
  return (
    <Card className="col-3 m-3">
      <Card.Img variant="top" src={prd.images[0]} className="thumbnail" />
      <Card.Body>
        <Card.Title>{prd.title}</Card.Title>
        <Rating name="read-only" value={prd.rating} precision={0.1} readOnly />
        <Card.Text>{prd.description}</Card.Text>
      </Card.Body>
      <Card.Title className="m-3">Price: {prd.price}$</Card.Title>
      <Button
        className="w-50 m-3"
        variant="primary"
        onClick={() => {
          dispatch(addToCart(prd));

          //console.log(filling);
        }}
      >
        add to cart
      </Button>
      <Card.Footer>
        <small className="text-muted">{prd.category}</small>
      </Card.Footer>
    </Card>
  );
}
