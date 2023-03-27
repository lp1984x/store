import React from "react";
import { IProd } from "../../models";
import * as icon from "react-bootstrap-icons";
import "./cartItem.scss";
import { useAppDispatch } from "../../store/store";
import { delFromCart } from "../../store/features/cartSlice";

interface CartProps {
  prd: IProd;
}

export default function CartItem({ prd }: CartProps) {
  const dispatch = useAppDispatch();
  return (
    <div className="card mb-2 border-0">
      <div className="row g-0">
        <div className="col-2">
          <img
            src={prd.images[0]}
            className="img-fluid w-100 h-100"
            alt="card-horizontal"
          />
        </div>
        <div className="col-9">
          <div className="card-body">
            <h5 className="card-title text-center">{prd.title}</h5>
          </div>
        </div>
        <div className="col-1 d-flex justify-content-center align-items-center">
          <icon.FileExcel
            className="x"
            onClick={() => dispatch(delFromCart(prd))}
          />
        </div>
      </div>
    </div>
  );
}
