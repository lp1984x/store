import React from "react";
import { ListGroup } from "react-bootstrap";
import { addCat } from "../../store/features/catSlice";
import { useAppDispatch } from "../../store/store";

interface catProps {
  cat: [string];
}

export default function Catefories({ cat }: catProps) {
  const dispatch = useAppDispatch();
  return (
    <ListGroup variant="flush" defaultActiveKey="#link1" className="">
      <h5 className="text-center">Categories</h5>
      <ListGroup.Item action onClick={() => dispatch(addCat({ category: "" }))}>
        All
      </ListGroup.Item>
      {cat.map((categorie, i) => (
        <ListGroup.Item
          action
          key={i}
          onClick={() => dispatch(addCat({ category: categorie }))}
        >
          {categorie}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
