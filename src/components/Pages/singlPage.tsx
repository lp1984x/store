import { Rating } from "@mui/material";
import React from "react";
import { Button, Card, Carousel, Col, Row } from "react-bootstrap";
import { IProd } from "../../models";
import { addToCart } from "../../store/features/cartSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";

export default function SinglPage() {
  const single = useAppSelector<IProd>((state) => state.single.single);
  const dispatch = useAppDispatch();

  return (
    <Card className="border-0">
      <Row className="d-flex justify-content-center">
        <Col className="col-5">
          <Carousel>
            <Carousel.Item>
              <img
                className="img-fluid"
                src={single.images[0]}
                alt="First slide"
              />
            </Carousel.Item>
            {single.images[1] && (
              <Carousel.Item>
                <img
                  className="img-fluid"
                  src={single.images[1]}
                  alt="Second slide"
                />
              </Carousel.Item>
            )}

            {single.images[2] && (
              <Carousel.Item>
                <img
                  className="img-fluid"
                  src={single.images[2]}
                  alt="Third slide"
                />
              </Carousel.Item>
            )}
          </Carousel>
        </Col>
        <Col className="col-5">
          <Card.Body>
            <Card.Title>
              {single.brand}: {single.title}
            </Card.Title>
            <Card.Text>{single.description}</Card.Text>
            <Rating
              name="read-only"
              value={single.rating}
              precision={0.1}
              readOnly
            />
            <Card.Text>Stock: {single.stock}</Card.Text>
            <Card.Title>Price: {single.price}$</Card.Title>
          </Card.Body>
          <Button
            className="w-50 m-3"
            variant="primary"
            onClick={() => {
              dispatch(addToCart(single));
            }}
          >
            add to cart
          </Button>
        </Col>
      </Row>
    </Card>
  );
}
