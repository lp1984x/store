import React from "react";
import { Container, Table } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import { handleHide } from "../../store/features/cartSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";
import CartItem from "./CartItem";

export default function Cart() {
  const dispatch = useAppDispatch();
  const show = useAppSelector((state) => state.cart.value);
  const filling = useAppSelector((state) => state.cart.cartFilling);
  const totalPrice = useAppSelector((state) => state.cart.totalPrice);

  return (
    <Offcanvas
      placement="end"
      show={show}
      onHide={() => {
        dispatch(handleHide());
      }}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title className="text-center">Cart</Offcanvas.Title>
      </Offcanvas.Header>
      {filling.length > 0 ? (
        <>
          <Offcanvas.Body>
            <Table>
              <thead>
                <tr className="text-center">
                  <th>Product</th>
                  <th>quantity</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {filling.map((item) => (
                  <CartItem key={item.id} prd={item} />
                ))}
              </tbody>
            </Table>
          </Offcanvas.Body>

          <Container className="mb-5">
            <Offcanvas.Title className="text-center">
              Total Price: {totalPrice}$
            </Offcanvas.Title>
          </Container>
        </>
      ) : null}
    </Offcanvas>
  );
}
