import React from "react";
import { Modal } from "react-bootstrap";
import { handlClose } from "../../store/features/mdlSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";

export default function Mdl() {
  const dispatch = useAppDispatch();
  const show = useAppSelector((state) => state.mdl.show);
  return (
    <Modal centered show={show} onHide={() => dispatch(handlClose())}>
      <Modal.Header closeButton />
      <Modal.Body className="text-center">
        <span className="text-danger">not enough money!</span>
        <br />
        Get a job!
      </Modal.Body>
    </Modal>
  );
}
