import React from "react";
import { IProd } from "../../models";
import "./cartItem.scss";
import { useAppDispatch } from "../../store/store";
import {
  decrementQuantity,
  delFromCart,
  incrementQuantity,
} from "../../store/features/cartSlice";
import { Button, ButtonGroup, CloseButton } from "react-bootstrap";

interface CartProps {
  prd: IProd;
}

export default function CartItem({ prd }: CartProps) {
  const dispatch = useAppDispatch();

  return (
    <tr className="text-center align-middle">
      <td className="d-flex align-items-center">
        <CloseButton
          className="m-1 float-start align-middle"
          onClick={() => dispatch(delFromCart(prd))}
        />
        <img src={prd.images[0]} className="float-start w-25 px-2" alt="card" />
        <div>{prd.title}</div>
      </td>
      <td>
        <ButtonGroup aria-label="Basic example" size="sm">
          <Button
            variant="outline-light"
            className="text-secondary"
            onClick={() => dispatch(decrementQuantity(prd))}
          >
            -
          </Button>
          <div className="d-flex align-items-center m-1">
            {prd.cartQuantity}
          </div>

          <Button
            variant="outline-light"
            className="text-secondary"
            onClick={() => dispatch(incrementQuantity(prd))}
          >
            +
          </Button>
        </ButtonGroup>
      </td>
      <td>{prd.tempPrice}$</td>
    </tr>
  );
}
