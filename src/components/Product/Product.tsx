import { Rating } from "@mui/material";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IProd } from "../../models";
import { addToCart } from "../../store/features/cartSlice";
import { singleData } from "../../store/features/singleSlice";
import { useAppDispatch } from "../../store/store";

interface ProdProps {
  prd: IProd;
}

export default function Product({ prd }: ProdProps) {
  const dispatch = useAppDispatch();

  return (
    <Card className="shadow col-3 m-3 border-0 float-start">
      <Link to="single">
        <Card.Img
          variant="top"
          src={prd.images[0]}
          className="thumbnail"
          onClick={() => dispatch(singleData(prd))}
        />
      </Link>
      <Card.Body>
        <Link to="single" className="text-decoration-none">
          <Card.Title onClick={() => dispatch(singleData(prd))}>
            {prd.title}
          </Card.Title>
        </Link>
        <Rating name="read-only" value={prd.rating} precision={0.1} readOnly />
        <Card.Text>{prd.description}</Card.Text>
      </Card.Body>
      <Card.Title className="m-3">Price: {prd.price}$</Card.Title>
      <Button
        className="w-50 m-3"
        variant="primary"
        onClick={() => {
          dispatch(addToCart(prd));
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
