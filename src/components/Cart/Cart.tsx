import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { handleHide } from "../../store/features/cartSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";
import CartItem from "./CartItem";

export default function Cart() {
  const dispatch = useAppDispatch();
  const show = useAppSelector((state) => state.cart.value);
  const filling = useAppSelector((state) => state.cart.cartFilling);

  return (
    <Offcanvas
      placement="end"
      show={show}
      onHide={() => {
        dispatch(handleHide());
      }}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {filling.map((item) => (
          <CartItem key={item.id} prd={item} />
        ))}
      </Offcanvas.Body>
    </Offcanvas>
  );
}
